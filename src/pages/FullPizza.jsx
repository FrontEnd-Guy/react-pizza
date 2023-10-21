import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState();
  React.useEffect(() => {
    console.log('useEffect called');
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://651230b9b8c6ce52b39562a3.mockapi.io/pizzas/` + id,
        );
        setPizza(data);
      } catch (error) {
        console.log(error);
        alert('failed to fetch!');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Loading...';
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <p>Price: {pizza.price} RUB.</p>
    </div>
  );
};

export default FullPizza;
