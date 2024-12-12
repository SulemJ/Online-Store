import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product';
import Header from './Header.jsx';
import Footer from "./Footer";
import View from './View';
import Layout from './Layout';
import Cart from './Cart';



function App(params) {
 
    return (
        <>
         
          <BrowserRouter>
           {/* <Header /> */}
      <Routes>
        <Route  element={< Header />}>
        <Route path="/" index element={<Product />} />
        <Route path="/blogs/:id" element={<View />} />
        <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
            <Footer /> 
    </BrowserRouter>
              
          
        </>
      )
}

export default App
