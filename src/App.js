import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import './App.css';
import Main from './pages/Main';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='' element={<Main/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='pizzas/:id' element={<FullPizza />} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
  );
}

export default App;
