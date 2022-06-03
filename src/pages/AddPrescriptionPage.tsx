import React from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';

const AddPrescriptionPage = () => {
  return (
    <Container>
      <Form className='mx-auto my-5 p-4' style={{ border: 'solid #f7f7f7', borderRadius: '1rem' }}>
        <h3 className='mb-4'>Prescription</h3>
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
              <Form.Label>Name</Form.Label>
              <Form.Control required type='date' />
            </Form.Group>
          </Col>
          <Col xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Form.Group>
              <Form.Label>Prescription</Form.Label>
              <Form.Control required type='text' as='textarea' />
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

export default AddPrescriptionPage;
