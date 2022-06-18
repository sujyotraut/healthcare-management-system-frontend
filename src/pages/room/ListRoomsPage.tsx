import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import fetchAPI from '../../utils/fetchAPI';

const ListRoomsPage = () => {
  const [rooms, setRooms] = useState<{ id: string; wardName: string; roomNo: string; description: string }[]>([]);

  useEffect(() => {
    fetchAPI('/rooms').then((resJson) => {
      if(resJson.status !== 'success') return setRooms([]);
      setRooms(resJson.data.rooms);
    });
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
            <th>Ward Name</th>
            <th>Room No</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{room.wardName}</td>
              <td>{room.roomNo}</td>
              <td>{room.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListRoomsPage;
