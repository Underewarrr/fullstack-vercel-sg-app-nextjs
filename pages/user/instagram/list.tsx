import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import Header from "../../components/Header";

export default function Index() {
  return (
    <>
    <Header/>
    <Card
    bg="dark"
    text="white"
  style={{ marginRight: '1rem', marginTop: '1rem', marginLeft: '1rem'  }}

    >
    <Card.Header>
        Ganhar realizando ações
    </Card.Header>
    <Card.Body>
        <p>Selecione a rede social</p>
    <Form.Select aria-label="Default select example">
      <option value="instagram">Instagram</option>
    </Form.Select>
    <p>Selecione o tipo de ação</p>
    <Form.Select aria-label="Default select example">
      <option value="likes">Curtir</option>
      <option value="follows">Seguir</option>
    </Form.Select>
    <div className="d-grid gap-2 mt-2">
    <Button
    variant="light"
    >
        Carregas Perfils
    </Button>
    </div>
    </Card.Body>
    </Card>
    </>
  )
}
