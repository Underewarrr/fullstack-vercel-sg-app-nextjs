import React, { useState, useEffect, useContext } from 'react';
import type { User } from '../interfaces'
import useSwr from 'swr'
import Link from 'next/link'
import { Alert, Button, Card, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSwr<User[]>('/api/users', fetcher)

  // if (error) return <div>Failed to load users</div>
  if (isLoading) return <div>Loading...</div>
  // if (!data) return null

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
