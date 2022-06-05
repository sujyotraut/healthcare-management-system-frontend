import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import fetchAPI from '../utls/fetchAPI';

const ListWardsPage = () => {
  const [wards, setWards] = useState<{ id: string; name: string; description: string }[]>([]);

  useEffect(() => {
    fetchAPI('/wards').then((resJson) => setWards(resJson.data.wards));
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
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wards.map((ward, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{ward.name}</td>
              <td>{ward.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListWardsPage;
