import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

const APPOINTMENTS = [
  {
    id: '343',
    name: 'eufef',
    doctorName: 'ef',
    date: 'eifie',
    allergy: 'eufso',
  },
  {
    id: '66',
    name: 'eufef',
    doctorName: 'ef',
    date: 'eifie',
    allergy: 'eufso',
  },
];

const ListAppointmentsPage = () => {
  return (
    <Container>
      <Table striped bordered hover responsive className='mx-auto my-5'>
        <thead>
          <tr>
            <th>
              <Form.Check label='Select All' />
            </th>
            <th>#</th>
            <th>Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Allergy</th>
            <th>Prescription</th>
          </tr>
        </thead>
        <tbody>
          {APPOINTMENTS.map((appointment, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{appointment.name}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.allergy}</td>
              <td>Add Prescription</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListAppointmentsPage;
