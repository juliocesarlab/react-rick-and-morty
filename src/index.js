import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { AllCharacters } from './Pages/AllCharacters/AllCharacters'




ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route path="allCharacters" element={<AllCharacters/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);