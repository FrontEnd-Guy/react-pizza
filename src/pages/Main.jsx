import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import SortOrder from '../components/SortOrder';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);

  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://651230b9b8c6ce52b39562a3.mockapi.io/pizzas?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=${isAscending ? 'asc' : 'desc'}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, isAscending]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort activeSort={sortType} onChangeSort={(i) => setSortType(i)} />
        <SortOrder isAscending={isAscending} toggleSortOrder={() => setIsAscending(!isAscending)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Main;
