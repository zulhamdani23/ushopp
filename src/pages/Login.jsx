import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import logo from "../assets/logo1.png";

const Login = () => {
  return (
    <div className='body-login'>
      <div className='card-form-login'>
        <Form className="custom-form shadow">
        <div className='logo-form'>
          <img src={logo} alt="logo" className="logo-img mb-2"/>
          <h6 className="sign-in text-center">Sign in</h6>
        </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="bg-secondary bg-opacity-10 border-0" type="email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label >Password</Form.Label>
            <Form.Control className="bg-secondary bg-opacity-10 border-0" type="password"/>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <button type="button" class="btn-purple">Sign In</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login