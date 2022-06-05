import React, { FormEventHandler, useContext, useState } from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';
import fetchAPI from '../utls/fetchAPI';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser, showAlert } = useContext(MyContext);
  const navigate = useNavigate();

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    const resJson = await fetchAPI('/login', 'POST', {
      username,
      password,
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
        <h3 className='mb-4'>Login</h3>
        <hr />
        <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          <Col>
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                required
                type='text'
                id='username'
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
                id='password'
              />
            </Form.Group>
          </Col>
        </Row>
        <Button className='mt-4' variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
