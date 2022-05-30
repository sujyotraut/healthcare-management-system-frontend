import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ListDoctorsPage = () => {
  return (
    <Container>
      <Table striped bordered hover responsive className='mt-5'>
        <thead>
          <tr>
            <th>Select All</th>
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
          <tr>
            <td></td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>markotto@mdo.com</td>
            <td>9534825647</td>
            <td>05/03/1995</td>
            <td>MBBS</td>
            <td>null</td>
            <td>null</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ListDoctorsPage;
