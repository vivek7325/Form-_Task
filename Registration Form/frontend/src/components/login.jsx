import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
  const [User, setUser] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...User,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', User);
    
    const {email, password} = User;

    axios.post('http://localhost:1111/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data.message === "Success"){
                console.log("Login Success");
                localStorage.setItem('token', result.data.token);
                alert('Login successful!')
                navigate('/UserTable');
            }
            else{
                alert('Incorrect User or Password');
            }
        })
        .catch(err => console.log(err));
    
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={User.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={User.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ marginTop: '20px' }} >
              Submit
            </Button>
          </Form>
          <p className='container my-2'>Don't have an account?</p>
        <Link to='/register' className="btn btn-secondary">Register</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login
