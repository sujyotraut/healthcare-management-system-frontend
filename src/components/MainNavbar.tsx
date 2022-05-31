import React from 'react';
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const user: string = 'admin';
  switch (user) {
    case 'admin':
      return (
        <Navbar bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>Healthcare Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
                <NavDropdown title='Doctor'>
                  <NavDropdown.Item as={Link} to='add-doctor'>
                    Add Doctor
                  </NavDropdown.Item>
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
    case 'doctor':
      return (
        <Navbar bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='#home'>Healthcare Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <NavDropdown title='Schedule Time'>
                  <NavDropdown.Item href='#'>Add Schedule</NavDropdown.Item>
                  <NavDropdown.Item href='#'>List Schedule</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#home'>Prescription</Nav.Link>
                <Nav.Link href='#home'>Test Report</Nav.Link>
                <NavDropdown title='Profile'>
                  <NavDropdown.Item href='#'>Add</NavDropdown.Item>
                  <NavDropdown.Item href='#'>List</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    case 'staff':
      return (
        <Navbar bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='#home'>Healthcare Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#home'>Doctor</Nav.Link>
                <NavDropdown title='Patient'>
                  <NavDropdown.Item href='#'>Admit Patient</NavDropdown.Item>
                  <NavDropdown.Item href='#'>Patient List</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Schedule Time'>
                  <NavDropdown.Item href='#'>Add Schedule</NavDropdown.Item>
                  <NavDropdown.Item href='#'>List Schedule</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Bill'>
                  <NavDropdown.Item href='#'>Add Bill</NavDropdown.Item>
                  <NavDropdown.Item href='#'>List Bill</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Test Report'>
                  <NavDropdown.Item href='#'>Add Test Report</NavDropdown.Item>
                  <NavDropdown.Item href='#'>List Test Report</NavDropdown.Item>
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
    default:
      return (
        <Navbar bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='#home'>Healthcare Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#'>Doctor</Nav.Link>
                <Nav.Link href='#'>Doctor Timing</Nav.Link>
                <Nav.Link href='#'>Appointments</Nav.Link>
                <Nav.Link href='#'>Prescription</Nav.Link>
                <Nav.Link href='#'>Medicine</Nav.Link>
                <Nav.Link href='#'>Bills</Nav.Link>
                <NavDropdown title='Insurance'>
                  <NavDropdown.Item href='#'>Add Insurance</NavDropdown.Item>
                  <NavDropdown.Item href='#'>List Insurance</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#'>Test Report</Nav.Link>
                <NavDropdown title='Profile'>
                  <NavDropdown.Item href='#'>Add</NavDropdown.Item>
                  <NavDropdown.Item href='#'>List</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  }
};

export default MainNavbar;
