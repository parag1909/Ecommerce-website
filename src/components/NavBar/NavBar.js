import React from "react";
import { Link } from "react-router-dom";
import { Badge, Nav } from "react-bootstrap";
import { logo } from "../../assets/brand_logo.png";
// console.log({ logo });
function Navbar({ cart }) {
  return (
    <div className="sticky-top">
      <Nav className="main-nav ">
        <Nav.Item>
          <Link className="nav-link" to="/">
            <img src="https://img.logoipsum.com/221.svg" alt="Logo" />
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/categories">
            Categories
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/cart">
            Cart{" "}
            <Badge pill bg="secondary">
              {cart.length}
            </Badge>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
