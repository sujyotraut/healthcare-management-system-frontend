import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

const HomePage = () => {
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
      <Image fluid width='100%' src={process.env.PUBLIC_URL + '/img/homepage-background.jpg'} />
    </>
  );
};

export default HomePage;
