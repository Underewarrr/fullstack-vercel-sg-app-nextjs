import React, { useState } from "react";
import "dotenv/config";

import { useRouter } from "next/router";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";

export default function Index() {
  //const { data, error, isLoading } = useSwr<User[]>('/api/users/login', fetcher)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [failedTryRegister, setFailedTryRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const register = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true)

    try {
      const { data } = await axios.post(
        "fullstack-vercel-sg-app-nextjs.vercel.app/api/user/register",
        { username, email, password }
      );
      router.push("/");
      return data;
    } catch (error) {
      setFailedTryRegister(true);
    }
  };

  return (
    <>
      <Header />
      <Card className="flex container p-2">
        <Form.Group>
          <Form.Label>Email : </Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setEmail(value)}
            name="email"
            type="email"
            placeholder="Example@email.com"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username : </Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setUsername(value)}
            name="username"
            type="username"
            placeholder="Example"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password : </Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setPassword(value)}
            placeholder="Password"
            name="password"
            type="password"
          />
        </Form.Group>
        {
          loading ? (
        <div 
        style={{marginTop: '1rem', marginLeft: '1rem' }}
        className="d-flex justify-content-around">
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="dark" />
        </div>
          ) : null
        }
        <div className="d-grid gap-2 mt-2">
          <Button
            onClick={register}
            className="LoginButton"
            variant="dark"
            type="submit"
          >
            Registrar
          </Button>
          {failedTryRegister ? (
            <Alert
              variant="danger"
              onClose={() => setFailedTryRegister(false)}
              dismissible
            >
              {`O endereço de e-mail, já está sendo usado.
                Por favor, tente outro email.`}
            </Alert>
          ) : null}
        </div>
      </Card>
    </>
  );
}
