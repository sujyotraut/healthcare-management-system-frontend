import { stringify } from 'querystring';
import React, { FormEventHandler, useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { MyContext } from '../App';
import fetchAPI from '../utls/fetchAPI';
import LoadingPage from './LoadingPage';

const AddRoomPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [roomNo, setRoomNo] = useState('');
  const [wardName, setWardName] = useState('');
  const [description, setDescription] = useState('');
  const [wards, setWards] = useState<{ id: string; name: string }[]>([]);
  const { showAlert } = useContext(MyContext);

  useEffect(() => {
    fetchAPI('/wards')
      .then((resJson) => setWards(resJson.data.wards))

      .finally(() => setIsLoading(false));
  }, []);

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!wardName) return showAlert('Select the ward name');
    const resJson = await fetchAPI('/room', 'PUT', {
      roomNo,
      wardName,
      description,
    });

    if (resJson.status === 'success') {
      showAlert('Ward Added To the List');
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
        <h3 className='mb-4'>Room</h3>
        <hr />
        <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          <Col>
            <Form.Group>
              <Form.Label>Room No.</Form.Label>
              <Form.Control value={roomNo} onChange={(e) => setRoomNo(e.currentTarget.value)} required type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Ward</Form.Label>
              <Form.Select value={wardName} onChange={(e) => setWardName(e.currentTarget.value)}>
                <option>----- Select -----</option>
                {wards.map((ward) => (
                  <option key={ward.id} value={ward.name}>
                    {ward.name}
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

export default AddRoomPage;
