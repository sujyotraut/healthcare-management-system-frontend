import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

const SCHEDULES = [
  {
    id: '343',
    doctorName: 'ef',
    timing: 'ekfie',
    date: 'eifie',
    city: 'eufso',
    address: 'iuegrih',
  },
  {
    id: '64',
    doctorName: 'ef',
    timing: 'ekfie',
    date: 'eifie',
    city: 'eufso',
    address: 'iuegrih',
  },
];

const ListSchedulesPage = () => {
  return (
    <Container>
      <Table striped bordered hover responsive className='mx-auto my-5'>
        <thead>
          <tr>
            <th>
              <Form.Check label='Select All' />
            </th>
            <th>#</th>
            <th>Doctor Name</th>
            <th>Timing</th>
            <th>Date</th>
            <th>City</th>
            <th>Address</th>
            <th>Action</th>
            <th>Appointment</th>
          </tr>
        </thead>
        <tbody>
          {SCHEDULES.map((schedule, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{schedule.doctorName}</td>
              <td>{schedule.timing}</td>
              <td>{schedule.date}</td>
              <td>{schedule.city}</td>
              <td>{schedule.address}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListSchedulesPage;
