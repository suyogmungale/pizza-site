import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;