import React, { FormEventHandler, useContext, useState } from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { MyContext } from '../App';
import fetchAPI from '../utls/fetchAPI';

const AddStaffSchedulePage = () => {
  const [date, setDate] = useState('');
  const [timing, setTiming] = useState('');
  const [ward, setWard] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const { showAlert } = useContext(MyContext);

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    const resJson = await fetchAPI('/staff-schedule', 'PUT', {
      date,
      timing,
      ward,
      roomNo,
    });

    if (resJson.status === 'success') {
      showAlert('Schedule Added To the List');
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
        <h3 className='mb-4'>Schedule</h3>
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
              <Form.Label>Timing</Form.Label>
              <Form.Control value={timing} onChange={(e) => setTiming(e.currentTarget.value)} required type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Ward</Form.Label>
              <Form.Control value={ward} onChange={(e) => setWard(e.currentTarget.value)} required type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Room No</Form.Label>
              <Form.Control value={roomNo} onChange={(e) => setRoomNo(e.currentTarget.value)} required type='text' />
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

export default AddStaffSchedulePage;
