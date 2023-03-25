import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Products';
import Checkout from './Checkout';
import Review from './Review'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
