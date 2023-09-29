import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
          <Header />
          <div className="content">
              <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='*' element={<NotFound/>} />
              </Routes>
          </div>
    </div>
  );
}

export default App;
