import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import ProductsList from "./Products/Products";
import Cart from "./Cart/Cart";
import Categories from "./Categories/Categories";

export default function Routers({ cart, setCart }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/categories" element={<Categories />} />
      <Route
        path="/products/:category?"
        element={<ProductsList cart={cart} setCart={setCart} />}
      />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
  );
}
