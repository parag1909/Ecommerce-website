import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Routers from "./components/Routers";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Router>
        <Navbar cart={cart} />
        <Routers cart={cart} setCart={setCart} />
      </Router>
    </div>
  );
}
