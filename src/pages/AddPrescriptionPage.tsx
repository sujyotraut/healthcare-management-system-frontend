import React, { FormEventHandler, useContext, useState } from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { MyContext } from '../App';
import fetchAPI from '../utls/fetchAPI';

const AddPrescriptionPage = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [prescription, setPrescription] = useState('');
  const { showAlert } = useContext(MyContext);

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    const resJson = await fetchAPI('/prescription', 'PUT', {
      name,
      date,
      prescription,
    });

    if (resJson.status === 'success') {
      showAlert('Prescription Added To the List');
    } else {
      showAlert(resJson.message);
    }
  };

  return (
    <Container>
      <Form
        onSubmit={submitHandler}
        className='mx-auto my-5 p-4'
        style={{ border: 'solid #f7f7f7', borderRadius: '1rem' }}
      >
        <h3 className='mb-4'>Prescription</h3>
        <hr />
        <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          <Col>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control value={date} onChange={(e) => setDate(e.currentTarget.value)} required type='date' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control value={name} onChange={(e) => setName(e.currentTarget.value)} required type='date' />
            </Form.Group>
          </Col>
          <Col xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Form.Group>
              <Form.Label>Prescription</Form.Label>
              <Form.Control
                value={prescription}
                onChange={(e) => setPrescription(e.currentTarget.value)}
                required
                type='text'
                as='textarea'
              />
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
