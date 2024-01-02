import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const [itemCount, setItemCount] = useState(cart.length);
  const navigate = useNavigate();

  const handleDelete = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
    setItemCount(itemCount - 1);
  };
  const handleCategoryClick = () => {
    navigate(`/products`);
  };

  if (cart.length > 0) {
    return (
      <div className="cart">
        <div className="head">
          <h2>Cart</h2>
        </div>
        <Container className="py-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button
                      onClick={() => handleDelete(product)}
                      variant="danger"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="cart empty">
        <div className="head">
          <h2>Cart</h2>
        </div>
        <Container className="py-5 text-center">
          <h2 className="mb-4">You have 0 items in cart..!</h2>
          <Button onClick={() => handleCategoryClick("")} variant="success">
            Go to Shop
          </Button>
        </Container>
      </div>
    );
  }
};

export default Cart;
