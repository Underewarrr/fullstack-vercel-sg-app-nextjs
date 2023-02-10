import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";

export default function Index() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [token, setToken] = React.useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const login = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true)
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
     router.push("/user/panel");
      setToken(data.message);
      window.localStorage.setItem('key', data.message);
      window.localStorage.setItem('email', email);

      console.log(data.message)
      return data;
    } catch (error) {
      setFailedTryLogin(true);
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
            onClick={login}
            className="LoginButton"
            variant="dark"
            type="submit"
          >
            Login
          </Button>
          <Button className="RegisterButton" variant="dark" type="submit">
            <Link href="/user/register" className="text-light">
              Ainda não tenho conta
            </Link>
          </Button>
          {failedTryLogin ? (
            <Alert
              variant="danger"
              onClose={() => setFailedTryLogin(false)}
              dismissible
            >
              {`O endereço de e-mail ou a senha não estão corretos.
                Por favor, tente novamente.`}
            </Alert>
          ) : null}
        </div>
      </Card>
    </>
  );
}
