import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Navigations from './components/navigations.js';
import Product from './pages/Product.jsx';
/* app.use(cors({
  origin: 'http://localhost:3000'
})); */


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigations/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;