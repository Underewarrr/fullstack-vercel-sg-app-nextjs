import React, { useState } from "react";
import { Button, Card, Form, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
import Script from "next/script";

const useAddBalance = () => {
  const [show, setShow] = useState(false);
  const [userPay, setUserPay] = useState("");
  const [userMethodPay, setUserMethodPay] = useState("PIX");

  
  // Turn this offcanvas in a component
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />
      <Card className="flex">
        <Form.Group>
          <Form.Label>Valor para ser adicionado</Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setUserPay(value)}
            name="addValue"
            type="number"
            placeholder="10,00"
          />
        </Form.Group>
       
      </Card>
    </>
  );
};

export default useAddBalance;
