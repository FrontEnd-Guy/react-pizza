import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setPageCount } from '../redux/slices/filterSlice';

const Main = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, pageCount } = useSelector((state) => state.filter);

  const [isLoading, setIsLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);

  const { searchInput } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchInput ? `&search=${searchInput}` : '';

    axios
      .get(
        `https://651230b9b8c6ce52b39562a3.mockapi.io/pizzas?${category}${search}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchInput]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={categoryId}
          onChangeCategory={(i) => dispatch(setCategoryId(i))}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination currentPage={pageCount} onChangePage={(i) => dispatch(setPageCount(i))} />
    </div>
  );
};

export default Main;
