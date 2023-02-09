import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Alert, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Header from "../components/Header";

export default function Index() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [token, setToken] = React.useState("");

  const router = useRouter();
  const login = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/");
      setToken(token);
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
