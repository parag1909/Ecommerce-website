import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="categories">
      <div className="head">
        <h2>Categories</h2>
      </div>
      {!isLoading && (
        <Container className="py-4">
          <Row xs={1} md={5} className="g-1">
            <Col key="all">
              <Card onClick={() => handleCategoryClick("")}>
                <Card.Body>
                  <Card.Title>All Categories</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            {categories.map((category) => (
              <Col key={category}>
                <Card onClick={() => handleCategoryClick(category)}>
                  <Card.Body>
                    <Card.Title>{category}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Categories;
