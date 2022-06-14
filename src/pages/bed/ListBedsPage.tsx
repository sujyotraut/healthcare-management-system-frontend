import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import fetchAPI from '../../utils/fetchAPI';

const ListBedsPage = () => {
  const [beds, setBeds] = useState<{ id: string; roomNo: string; bedNo: string; description: string }[]>([]);

  useEffect(() => {
    fetchAPI('/beds').then((resJson) => setBeds(resJson.data.beds));
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
            <th>Room No</th>
            <th>Bed No</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {beds.map((bed, i) => (
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
