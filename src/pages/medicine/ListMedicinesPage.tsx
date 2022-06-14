import { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import fetchAPI from '../../utils/fetchAPI';

interface Medicine {
  id: string;
  name: string;
  companyName: string;
  price: number;
  status: string;
  description: string;
}

const ListMedicinesPage = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    fetchAPI('/medicines').then((resJson) => setMedicines(resJson.data.medicines));
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
            <th>Name</th>
            <th>Company Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, i) => (
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

export default ListMedicinesPage;
