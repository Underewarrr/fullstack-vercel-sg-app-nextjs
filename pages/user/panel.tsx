import React from "react";
import { Button, Card } from "react-bootstrap";
import Header from "../components/Header";
import Link from "next/link";
import ProtectedRoute from "./ProtectedRoute";

const panel = () => {


  return (
  <>
  <ProtectedRoute />
  <Header />
  <div className="d-flex justify-content-around">
  <Card
  bg="dark"
  text="white"
  style={{ width: '18rem', marginTop: '1rem', marginLeft: '1rem' }}
  >
      <Card.Header>Realizar Ações</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Realize ações e ganhe instantaneamente, siga, curta e
            ganhe.{' '}
          </p>
          <footer>
            <div className="d-grid gap-2 mt-2">
              <Link
              href="/user/instagram/list"
              >
            <Button
            variant="light"
            >
Realizar ações
            </Button>
            </Link>
            </div>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card
    style={{ width: '18rem', marginTop: '1rem', marginLeft: '1rem' }}
    >
      <Card.Header>Outro Serviço</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  </>)
};

export default panel;
