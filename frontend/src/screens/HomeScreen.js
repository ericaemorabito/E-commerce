import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from '../components/Message';
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions.js";

const HomeScreen = () => {
  const dispatch = useDispatch();

  // useSelector allows us to get part of the state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // on page load --> dispatch our listProducts actions & passes fetched data into the payload --> in reducer this data in payload is put into products
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
      <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
