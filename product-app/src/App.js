import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from './Product/Products.jsx';
import Cart from './Cart/Cart';
import Review from './Review'
import MenuC from './MenuC';
import { useSelector } from 'react-redux';
function App() {
  const cartTotal = useSelector(state => state.cartTotal);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MenuC />} >
          <Route index element={<Products />} />
          <Route path="checkout" element={<Cart />} />
          <Route path="review" element={cartTotal > 0 ?  <Review />:<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
