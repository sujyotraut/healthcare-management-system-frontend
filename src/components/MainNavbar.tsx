import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

const MainNavbar = () => {
  return (
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
  );
};

export default MainNavbar;
