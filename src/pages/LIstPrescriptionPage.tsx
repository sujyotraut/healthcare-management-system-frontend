import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { MyContext } from '../App';
import fetchAPI from '../utls/fetchAPI';

interface Prescription {
  id: string;
  name: string;
  date: string;
  prescription: number;
}

const ListPrescriptionPage = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

  useEffect(() => {
    fetchAPI('/prescriptions').then((resJson) => setPrescriptions(resJson.data.prescriptions));
  }, []);

  return (
    <Container>
      <Table striped bordered hover responsive className='mx-auto my-5'>
        <thead>
          <tr>
            <th>
              <Form.Check label='Select All' />
            </th>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Prescription</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{prescription.date}</td>
              <td>{prescription.name}</td>
              <td>{prescription.prescription}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListPrescriptionPage;
