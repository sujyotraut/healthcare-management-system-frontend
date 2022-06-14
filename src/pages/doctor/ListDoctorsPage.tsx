import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import fetchAPI from '../../utils/fetchAPI';

interface Doctor {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  dateOfBirth: string;
  experience: string;
  specilization: string;
  qualification: string;
}

const ListDoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetchAPI('/doctors').then((resJson) => setDoctors(resJson.data.doctors));
  }, []);

  return (
    <Container>
      <Table striped bordered hover responsive className='mt-5'>
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
            <th>Specialization</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{doctor.firstName}</td>
              <td>{doctor.lastName}</td>
              <td>{doctor.email}</td>
              <td>{doctor.contact}</td>
              <td>{doctor.dateOfBirth}</td>
              <td>{doctor.qualification}</td>
              <td>{doctor.specilization}</td>
              <td>{doctor.experience}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListDoctorsPage;
