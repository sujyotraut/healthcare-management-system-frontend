import React from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';

const AddSchedulePage = () => {
  return (
    <Container>
      <Form className='mx-auto my-5 p-4' style={{ border: 'solid #f7f7f7', borderRadius: '1rem' }}>
        <h3 className='mb-4'>Schedule</h3>
        <hr />
        <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          <Col>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control required type='date' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Timing</Form.Label>
              <Form.Control required type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control required type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control required type='text' />
            </Form.Group>
          </Col>
        </Row>
        <Button className='mt-4' variant='primary' type='submit'>
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default AddSchedulePage;
