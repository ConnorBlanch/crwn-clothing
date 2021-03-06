import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <div> 
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
