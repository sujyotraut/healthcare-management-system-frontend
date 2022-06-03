import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

const BEDS = [
  {
    id: '1',
    roomNo: '101',
    bedNo: '2',
    description: '',
  },
  {
    id: '2',
    roomNo: '101',
    bedNo: '2',
    description: '',
  },
];

const ListBedsPage = () => {
  return (
    <Container>
      <Table striped bordered hover responsive className='mx-auto my-5'>
        <thead>
          <tr>
            <th>
              <Form.Check label='Select All' />
            </th>
            <th>#</th>
            <th>Room No</th>
            <th>Bed No</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {BEDS.map((bed, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{bed.roomNo}</td>
              <td>{bed.bedNo}</td>
              <td>{bed.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListBedsPage;
