import React, { FormEventHandler, useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { MyContext } from '../App';
import fetchAPI from '../utls/fetchAPI';
import LoadingPage from './LoadingPage';

const AddBedPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bedNo, setBedNo] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [description, setDescription] = useState('');
  const [rooms, setRooms] = useState<{ id: string; roomNo: string }[]>([]);
  const { showAlert } = useContext(MyContext);

  useEffect(() => {
    fetchAPI('/rooms')
      .then((resJson) => setRooms(resJson.data.rooms))
      .finally(() => setIsLoading(false));
  }, []);

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!roomNo) return showAlert('Select the ward name');
    const resJson = await fetchAPI('/bed', 'PUT', {
      bedNo,
      roomNo,
      description,
    });

    if (resJson.status === 'success') {
      showAlert('Room Added To the List');
    } else {
      showAlert(resJson.message);
    }
  };

  // if (isLoading) return <LoadingPage />;

  return (
    <Container>
      <Form
        onSubmit={submitHandler}
        className='mx-auto my-5 p-4'
        style={{ border: 'solid #f7f7f7', borderRadius: '1rem' }}
      >
        <h3 className='mb-4'>Bed</h3>
        <hr />
        <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          <Col>
            <Form.Group>
              <Form.Label>Bed No.</Form.Label>
              <Form.Control value={bedNo} onChange={(e) => setBedNo(e.currentTarget.value)} required type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Room No.</Form.Label>
              <Form.Select value={roomNo} onChange={(e) => setRoomNo(e.currentTarget.value)}>
                <option>----- Select -----</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.roomNo}>
                    {room.roomNo}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
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

export default AddBedPage;
