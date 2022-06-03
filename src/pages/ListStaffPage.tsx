import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

const STAFF = [
  {
    id: '1',
    firstName: 'alex1',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
  {
    id: '2',
    firstName: 'alex2',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
  {
    id: '3',
    firstName: 'alex3',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
  {
    id: '4',
    firstName: 'alex4',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
  {
    id: '5',
    firstName: 'alex5',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
];

const ListStaffPage = () => {
  return (
    <Container>
      <Table striped bordered hover responsive className='mx-auto my-5'>
        <thead>
          <tr>
            <th>
              <Form.Check label='Select All' />
            </th>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>DOB</th>
            <th>Qualification</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {STAFF.map((staff, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{staff.firstName}</td>
              <td>{staff.lastName}</td>
              <td>{staff.email}</td>
              <td>{staff.contact}</td>
              <td>{staff.DOB}</td>
              <td>{staff.qualification}</td>
              <td>{staff.specilization}</td>
              <td>{staff.experience}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListStaffPage;
