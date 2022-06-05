import React, { EventHandler, FormEventHandler, useContext, useRef, useState } from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';
import { API_BASE_URL } from '../config/config';
import fetchAPI from '../utls/fetchAPI';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const { setUser, showAlert } = useContext(MyContext);

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    const resJson = await fetchAPI('/register', 'POST', {
      firstName,
      lastName,
      username,
      password,
      email,
      contact,
      dateOfBirth,
      city,
      address,
    });

    if (resJson.status === 'success') {
      const accessToken = resJson.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      const userJson = await fetchAPI('/me');
      setUser(userJson.data.me);
      navigate('/');
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
        <h3 className='mb-4'>Patient Registration</h3>
        <hr />
        <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          <Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
                required
                type='text'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
                required
                type='text'
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                required
                type='text'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
                type='password'
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control value={contact} onChange={(e) => setContact(e.currentTarget.value)} required type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.currentTarget.value)}
                required
                type='date'
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control value={email} onChange={(e) => setEmail(e.currentTarget.value)} required type='email' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control value={city} onChange={(e) => setCity(e.currentTarget.value)} required type='text' />
            </Form.Group>
          </Col>

          <Col xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control value={address} onChange={(e) => setAddress(e.currentTarget.value)} required type='text' />
            </Form.Group>
          </Col>
        </Row>
        <Button className='mt-4' variant='primary' type='submit'>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
