import React, { FormEventHandler, useContext, useState } from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../App';
import fetchAPI from '../../utils/fetchAPI';

const AddInsurancePage = () => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [amount, setAmount] = useState(0);
  const [endDate, setEndDate] = useState('');
  const { showAlert } = useContext(MyContext);

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    const resJson = await fetchAPI('/insurance', 'PUT', {
      name,
      companyName,
      patientName,
      amount,
      endDate,
    });

    if (resJson.status === 'success') {
      showAlert('Insurance Added To the List');
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
        <h3 className='mb-4'>Insurance</h3>
        <hr />
        <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          <Col>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control value={name} onChange={(e) => setName(e.currentTarget.value)} required type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                value={companyName}
                onChange={(e) => setCompanyName(e.currentTarget.value)}
                required
                type='text'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Patinet Name</Form.Label>
              <Form.Control
                value={patientName}
                onChange={(e) => setPatientName(e.currentTarget.value)}
                required
                type='text'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                value={endDate}
                onChange={(e) => setEndDate(e.currentTarget.value)}
                required
                type='date'
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

export default AddInsurancePage;
