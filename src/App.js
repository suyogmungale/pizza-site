import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Navigations from './components/navigations.js';
import Product from './pages/Product.jsx';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigations/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/product/:_id"  element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;