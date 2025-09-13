import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import logo from "../assets/logo1.png";
import { Card } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <Card className="login-card shadow">
          <Card.Body>
            <div className="text-center mb-4">
              <img
                src={logo}
                alt="Logo"
                className="login-logo"
              />
              <h5 className="mt-2 sign-in text-center">Sign In</h5>
            </div>

            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className='label-form'>Email</Form.Label>
                <Form.Control className="bg-secondary bg-opacity-10 border-0" type="email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className='label-form'>Password</Form.Label>
                <Form.Control className="bg-secondary bg-opacity-10 border-0" type="password"/>
              </Form.Group>

              <div className="d-grid justify-content-center">
                <button class="btn-purple" type="submit">
                  Sign In
                </button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Login