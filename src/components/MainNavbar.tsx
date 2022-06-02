import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const user: string = 'admin';
  switch (user) {
    case 'admin':
      return (
        <Navbar bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              Healthcare Management System
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                {/* <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link> */}
                <NavDropdown title='Doctor'>
                  <NavDropdown.Item as={Link} to='add-doctor'>
                    Add Doctor
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-doctors'>
                    List Doctor
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Staff'>
                  <NavDropdown.Item as={Link} to='add-staff'>
                    Add Staff
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-staff'>
                    List Staff
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Ward'>
                  <NavDropdown.Item as={Link} to='add-ward'>
                    Add Ward
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-wards'>
                    List Ward
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Room'>
                  <NavDropdown.Item as={Link} to='add-room'>
                    Add Room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-rooms'>
                    List Room
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Bed'>
                  <NavDropdown.Item as={Link} to='add-bed'>
                    Add Bed
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-beds'>
                    List Bed
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Medicine'>
                  <NavDropdown.Item as={Link} to='add-medicine'>
                    Add Medicine
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-medicines'>
                    List Medicine
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to='list-insurance'>
                  Insurance
                </Nav.Link>
                <NavDropdown title='Profile'>
                  <NavDropdown.Item as={Link} to=''>
                    Add
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='login'>
                    logout
                  </NavDropdown.Item>
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
            <Navbar.Brand as={Link} to='/'>
              Healthcare Management System
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                {/* <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link> */}
                <NavDropdown title='Schedule Time'>
                  <NavDropdown.Item as={Link} to='add-schedule'>
                    Add Schedule
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-schedules'>
                    List Schedule
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to='list-prescriptions'>
                  Prescription
                </Nav.Link>
                <Nav.Link as={Link} to='list-test-reports'>
                  Test Report
                </Nav.Link>
                <NavDropdown title='Profile'>
                  <NavDropdown.Item as={Link} to=''>
                    eif
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='login'>
                    logout
                  </NavDropdown.Item>
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
            <Navbar.Brand as={Link} to='/'>
              Healthcare Management System
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                {/* <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link> */}
                <Nav.Link as={Link} to='list-doctors'>
                  Doctor
                </Nav.Link>
                <NavDropdown title='Patient'>
                  <NavDropdown.Item as={Link} to='admit-patient'>
                    Admit Patient
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-patients'>
                    Patient List
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Schedule Time'>
                  <NavDropdown.Item as={Link} to='add-schedule'>
                    Add Schedule
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-schedules'>
                    List Schedule
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Bill'>
                  <NavDropdown.Item as={Link} to='add-bill'>
                    Add Bill
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-bills'>
                    List Bill
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Test Report'>
                  <NavDropdown.Item as={Link} to='add-test-report'>
                    Add Test Report
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-test-reports'>
                    List Test Report
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to='list-isurance'>
                  Insurance
                </Nav.Link>
                <NavDropdown title='Profile'>
                  <NavDropdown.Item as={Link} to=''>
                    Add
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='login'>
                    logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    case 'patient':
      return (
        <Navbar bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              Healthcare Management System
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                {/* <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link> */}
                <Nav.Link as={Link} to='list-doctors'>
                  Doctor
                </Nav.Link>
                <Nav.Link as={Link} to='list-schedules'>
                  Doctor Timing
                </Nav.Link>
                <Nav.Link as={Link} to='list-appointments'>
                  Appointments
                </Nav.Link>
                <Nav.Link as={Link} to='list-prescriptions'>
                  Prescription
                </Nav.Link>
                <Nav.Link as={Link} to='list-medicines'>
                  Medicine
                </Nav.Link>
                <Nav.Link as={Link} to='list-bills'>
                  Bills
                </Nav.Link>
                <NavDropdown title='Insurance'>
                  <NavDropdown.Item as={Link} to='add-insurance'>
                    Add Insurance
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='list-insurance'>
                    List Insurance
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to='list-test-reports'>
                  Test Report
                </Nav.Link>
                <NavDropdown title='Profile'>
                  <NavDropdown.Item as={Link} to=''>
                    Add
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='logout'>
                    logout
                  </NavDropdown.Item>
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
            <Navbar.Brand as={Link} to='/'>
              Healthcare Management System
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                {/* <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link> */}
                <Nav.Link as={Link} to='login'>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to='register'>
                  Signup
                </Nav.Link>
                <Nav.Link as={Link} to='about-us'>
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to='contact-us'>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  }
};

export default MainNavbar;
