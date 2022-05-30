import React from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';

const AddMedicinePage = () => {
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
        <Form
          className='mt-5 mx-auto p-4'
          style={{ border: 'solid #f7f7f7', borderRadius: '1rem' }}
        >
          <h3 className='mb-4'>Medicine</h3>
          <hr />
          <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
            <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select>
                  <option>-----select-----</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control required type='text' />
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

export default AddMedicinePage;
