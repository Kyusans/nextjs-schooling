"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, useRef } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row, Table } from "react-bootstrap";

const Home = () => {
  const [quantity, setQuantity] = useState(1);
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cashTendered, setCashTendered] = useState();
  const [change, setChange] = useState();
  const [userName, setUserName] = useState("");

  const quantityRef = useRef(null);

  const getAllItems = async () => {
    const url = "http://localhost/test/products.php";
    const res = await axios.get(url);
    console.log("res nako: ", res.data);
    setProduct(res.data);
  };
  


  const addItem = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("product: ", product);
    // const url = "http://localhost/test/products.php";
    // const res = await axios.get(url, { params: { barcode, quantity } });
    // const newData = Array.isArray(res.data) ? res.data : [res.data];
    // setItems([...items, ...newData]);
    // console.log("res ni page.js: ", [res.data])
    // // setItems(...items, [res.data]);
    // console.log("items ni page.js: ", items.toString())
    const productItem = product.find((item) => item.barcode === barcode);
    if (productItem !== undefined) {
      setItems([...items, { product: productItem.product, quantity: quantity, price: productItem.price }]);
      setQuantity("");
      setBarcode("");
      if (quantityRef.current) {
        quantityRef.current.focus();
      }
    } else {
      alert("Invalid Barcode");
    }
  };

  const getTotalPrice = useCallback(() => {
    setTotalPrice(items.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [items]);

  const computeAmount = (e) => {
    e.preventDefault();
    if (cashTendered < totalPrice) {
      alert("Insufficient Cash");
      return;
    }
    setChange(cashTendered - totalPrice);
    setQuantity("");
    setProduct("");
    setPrice("");
    if (quantityRef.current) {
      quantityRef.current.focus();
    }
  };

  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);

  useEffect(() => {
    setUserName(localStorage.getItem("user"));
    getAllItems();
  }, []);

  return (
    <Card bg="success">
      <Card.Body>
        <Container>
          <Row className="text-center">
            <h1>Hello {userName}</h1>
          </Row>
          <Row className="text-end">
            <h3>Amount Due: <span className="text-5xl">{totalPrice}</span> </h3>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={addItem}>
                <b>Quantity:</b>
                <Form.Control
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  ref={quantityRef}
                />
                <b>Barcode</b>
                <Form.Control
                  type="text"
                  placeholder="Barcode"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}

                />
                <Button type="submit" className="mt-3"> Add Item</Button>
              </Form>
            </Col>
            <Col>
              <Table bordered variant="light">
                <thead>
                  <tr>
                    <th>Quantity</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.quantity}</td>
                      <td>{item.product}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity * item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs={12} sm={6} md={4} className="mt-3">
              <Form onSubmit={computeAmount}>
                <b>Cash Tendered</b>
                <Form.Control
                  type="text"
                  value={cashTendered}
                  onChange={(e) => setCashTendered(e.target.value)}
                  placeholder="Cash Tendered"
                />
                <h4>Change: {change}</h4>
                <Button type="submit" size="lg" className="mt-3"> Compute </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Home;
