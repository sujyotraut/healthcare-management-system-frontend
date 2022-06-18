import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import Doctor from '../../types/Doctor.types';
import fetchAPI from '../../utils/fetchAPI';

const ListDoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetchAPI('/doctors').then((resJson) => {
      if(resJson.status !== 'success') return setDoctors([]);
      setDoctors(resJson.data.doctors);
    });
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
            <th>Qualifications</th>
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
              <td>{doctor.qualifications}</td>
              <td>{doctor.specialization}</td>
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
