import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert , Image} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import logo from "../hezni.svg"

export default function ForgotPassword() {
  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()


    try {
        setMessage('')
      setError("")
      setLoading(true)
  await resetPassword(emailRef.current.value)
  setMessage("vérifiez votre boîte de réception")
    } catch {
      setError("Erreur de Modification de mot de passe ")
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
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E_mail</Form.Label>
              <Form.Control type="email" placeholder="email" ref={emailRef} required />
            </Form.Group>      
            <Button disabled={loading} className="w-100"  type="submit">
            Réinitialiser votre mot de passe
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
              <Link to="/login"></Link>
              </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      Vous n'avez pas de compte?  <Link to = "/signup">Créer un compte.</Link>
            </div>
    </>
  )
}
