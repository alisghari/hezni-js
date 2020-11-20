import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert , Image} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import logo from "../hezni.svg"
import {Link, useHistory} from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Veuillez vérifier votre mot de passe")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")

    } catch {
      setError("Erreur de création de compte")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <center>
          <Image src={logo}/>
          </center>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="phone">
              <Form.Label>E_mail</Form.Label>
              <Form.Control type="phone" placeholder="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="●●●●●●●" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="●●●●●●●" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100"  type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      Vous avez déjà un compte?   <Link to = "/login">Se connecter</Link>  
       </div>
    </>
  )
}
