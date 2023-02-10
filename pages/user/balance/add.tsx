import React, { useState } from "react";
import { Button, Card, Form, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";

const useAddBalance = () => {
  const [show, setShow] = useState(false);
  const [userPay, setUserPay] = useState("");
  const [userMethodPay, setUserMethodPay] = useState("PIX");
  // MP SDK
  React.useEffect(() => {
    // window is accessible here.
      function verifyKeyOnLoad() { 
        window.Mercadopago.setPublishableKey('TEST-2724ac84-5ce2-45d6-8de4-df9d8378ac77')
        window.Mercadopago.getIdentificationTypes()
      }
      verifyKeyOnLoad();
      console.log('Key verified')
     // Reconectar
     /* setTimeout(() => {
      if (!window.Mercadopago.initialized) {
        verifyKeyOnLoad();
        console.log('Reconectando...')
      }
    }, 1000) */
  }, []);
  // Turn this offcanvas in a component
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(userPay);
  console.log(userMethodPay);

  return (
    <>
      <Header />
      <Card className="flex container p-2">
        <Form.Group>
          <Form.Label>Valor para ser adicionado</Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setUserPay(value)}
            name="urlProfile"
            type="number"
            placeholder="10,00"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Método de pagamento</Form.Label>
          <Form.Select
            onChange={({ target: { value } }) => setUserMethodPay(value)}
          >
            <option value="PIX">PIX</option>
            <option value="CC">Cartão de crédito</option>
          </Form.Select>
          <div className="d-grid gap-2 mt-2">
            <Button onClick={handleShow} variant="dark" type="submit">
              Efetuar pagamento
            </Button>
            <Offcanvas placement="top" show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Efetuar Pagamento {userMethodPay}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Form.Group>
      </Card>
    </>
  );
};

export default useAddBalance;
