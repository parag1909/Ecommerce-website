import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("all");
  const [selectedSortByPrice, setSelectedSortByPrice] = useState("asc");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let getApiUrl = "https://fakestoreapi.com/products/";
    if (category) {
      getApiUrl = `https://fakestoreapi.com/products/category/${category}`;
      setSelectedCategory(category);
    }
    axios.get(getApiUrl).then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }, [category]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(["All category", ...response.data]);
      });
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All category") {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        setProducts(response.data);
      });
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
          setProducts(response.data);
        });
    }
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const filterProductsByPrice = () => {
    if (selectedPriceFilter === "all") {
      return products;
    }

    return products.filter((product) => {
      return product.price < selectedPriceFilter;
    });
  };

  const sortProductsByPrice = () => {
    const sortedProducts = [...filterProductsByPrice()];

    if (selectedSortByPrice === "asc") {
      sortedProducts.sort((productA, productB) => {
        return productA.price - productB.price;
      });
    } else {
      sortedProducts.sort((productA, productB) => {
        return productB.price - productA.price;
      });
    }

    return sortedProducts;
  };

  return (
    <div className="products">
      <div className="head">
        <h2>Products</h2>
        <div className="filters d-flex justify-content-center p-2">
          <div className="category-filter">
            <Form.Select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
      </div>

      {!isLoading && (
        <Row xs={1} md={4} className="g-4 m-4">
          {sortProductsByPrice().map((product) => (
            <Col key={product.id}>
              <Card className="h-100 text-center">
                <Card.Img
                  className="card_img_top"
                  variant="top"
                  src={product.image}
                  alt={product.title}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <p>${product.price}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    variant="success"
                  >
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Products;
