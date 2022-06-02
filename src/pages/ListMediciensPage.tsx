import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

const Medicines = [
  {
    id: '1',
    name: '101',
    companyName: '2',
    price: '2',
    status: '2',
    description: '',
  },
  {
    id: '2',
    name: '101',
    companyName: '2',
    price: '2',
    status: '2',
    description: '',
  },
];

const ListMediciensPage = () => {
  return (
    <Container>
      <Table striped bordered hover responsive className='mt-5'>
        <thead>
          <tr>
            <th>
              <Form.Check label='Select All' />
            </th>
            <th>#</th>
            <th>Name</th>
            <th>Company Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Medicines.map((medicine, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{medicine.name}</td>
              <td>{medicine.companyName}</td>
              <td>{medicine.price}</td>
              <td>{medicine.status}</td>
              <td>{medicine.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListMediciensPage;
