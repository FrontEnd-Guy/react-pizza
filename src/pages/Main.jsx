import React, { useState, useEffect, useContext } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import { SearchContext } from '../App';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);

  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'Rating',
    sortProperty: 'rating',
  });

  const { searchInput } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

    fetch(
      `https://651230b9b8c6ce52b39562a3.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort activeSort={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas
              .filter((obj) => obj.title.toLowerCase().includes(searchInput))
              .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Main;
