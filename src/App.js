import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Navigations from './components/navigations.js';
import Product from './pages/Product.jsx';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart.jsx';
import  CartContext  from './pages/CartContext.js';
import { useState, useEffect } from 'react';
import { useContext } from 'react';


function App() {

  const [cart, setCart] = useState(() => {
    const cartData = window.localStorage.getItem('cart');
    return JSON.parse(cartData) ;
  });
  

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  


  return (
    <div>
      <BrowserRouter>

      <CartContext.Provider value={{ cart , setCart}}>
        <Navigations/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/product/:_id"  element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
 
        </CartContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;