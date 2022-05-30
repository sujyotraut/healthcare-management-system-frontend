import React from 'react';
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';

const MainNavbar = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Healthcare Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <NavDropdown title='Doctor'>
              <NavDropdown.Item href='#'>Add Doctor</NavDropdown.Item>
              <NavDropdown.Item href='#'>List Doctor</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Staff'>
              <NavDropdown.Item href='#'>Add Staff</NavDropdown.Item>
              <NavDropdown.Item href='#'>List Staff</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Ward'>
              <NavDropdown.Item href='#'>Add Ward</NavDropdown.Item>
              <NavDropdown.Item href='#'>List Ward</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Room'>
              <NavDropdown.Item href='#'>Add Room</NavDropdown.Item>
              <NavDropdown.Item href='#'>List Room</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Bed'>
              <NavDropdown.Item href='#'>Add Bed</NavDropdown.Item>
              <NavDropdown.Item href='#'>List Bed</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Medicine'>
              <NavDropdown.Item href='#'>Add Medicine</NavDropdown.Item>
              <NavDropdown.Item href='#'>List Medicine</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'>Insurance</Nav.Link>
            <NavDropdown title='Profile'>
              <NavDropdown.Item href='#'>Add</NavDropdown.Item>
              <NavDropdown.Item href='#'>List</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
