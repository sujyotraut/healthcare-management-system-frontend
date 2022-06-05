import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import fetchAPI from '../utls/fetchAPI';

interface Staff {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  dateOfBirth: string;
  experience: string;
  qualification: string;
}

const ListStaffPage = () => {
  const [staffs, setStaffs] = useState<Staff[]>([]);

  useEffect(() => {
    fetchAPI('/staffs').then((resJson) => setStaffs(resJson.data.staffs));
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>DOB</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{staff.firstName}</td>
              <td>{staff.lastName}</td>
              <td>{staff.email}</td>
              <td>{staff.contact}</td>
              <td>{staff.dateOfBirth}</td>
              <td>{staff.qualification}</td>
              <td>{staff.experience}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListStaffPage;
