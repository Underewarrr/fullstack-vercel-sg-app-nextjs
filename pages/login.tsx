import React, { useState, useEffect, useContext } from 'react';
import type { User } from '../interfaces'
import useSwr from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Alert, Button, Card, Form } from 'react-bootstrap';
import requestLogin from '../services/request';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  //const { data, error, isLoading } = useSwr<User[]>('/api/users/login', fetcher)
  const [email, setEmail] = React.useState('teste');
  const [password, setPassword] = React.useState('1234');


  const login = async (event) => {

    event.preventDefault()
    event.stopPropagation()

    const { data } = await axios.post('http://localhost:3000/api/user/login', {email, password})
    console.log(data)
    return data
}


  return (
    <Card className="flex container p-2">
      <Form.Group>
        <Form.Label>Email : </Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Example@email.com"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password : </Form.Label>
        <Form.Control
          placeholder="Password"
        />
      </Form.Group>
      <div className="d-grid gap-2 mt-2">
        <Button
          onClick={login}
          className="LoginButton"
          variant="success"
          type="submit"
        >
          Login
        </Button>
        <Button
          className="RegisterButton"
          variant="success"
          type="submit"
          data-testid="common_login__button-register"
        >
          <Link
            href="/register"
            className="text-light"
          >
            Ainda não tenho conta
          </Link>
        </Button>
        {/* {(failedTryLogin)
          ? (
            <Alert
              variant="danger"
              onClose={ () => setFailedTryLogin(false) }
              dismissible
              data-testid="common_login__element-invalid-email"
            >
              {`O endereço de e-mail ou a senha não estão corretos.
                Por favor, tente novamente.`}
            </Alert>
          )
          : null} */}
      </div>
    </Card>
  )
}
