import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert , Image} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link , useHistory} from "react-router-dom"
import logo from "../hezni.svg"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()


    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Erreur de Connexion")
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
            <Form.Group id="email">
              <Form.Label>E_mail</Form.Label>
              <Form.Control type="email" placeholder="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="●●●●●●●" ref={passwordRef} required />
            </Form.Group>
          
            <Button disabled={loading} className="w-100"  type="submit">
             Se Connecter
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Mot de passe oubliée?</Link>
              </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      Vous n'avez pas de compte?  <Link to = "/signup">Créer un compte.</Link>
            </div>
    </>
  )
}
