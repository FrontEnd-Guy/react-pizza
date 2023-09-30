import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

export const SearchContext = React.createContext();

function App() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchInput, setSearchInput}}>
        <Header/>
        <div className="content">
            <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
