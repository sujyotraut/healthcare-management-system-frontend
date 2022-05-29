import React from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Healthcare Management System</Navbar.Brand>
          <Nav className=''>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#login'>Login</Nav.Link>
            <Nav.Link href='#signup'>Signup</Nav.Link>
            <Nav.Link href='#about'>About Us</Nav.Link>
            <Nav.Link href='#contact'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Form className='mt-5 p-4' style={{ border: 'solid #f7f7f7', borderRadius: '1rem' }}>
          <h3 className='mb-4'>Login</h3>
          <hr />
          <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
            <Col>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control required type='text' id='username' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control required type='password' id='password' />
              </Form.Group>
            </Col>
          </Row>
          <Button className='mt-4' variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
