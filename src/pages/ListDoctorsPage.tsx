import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

const DOCTORS = [
  {
    id: '1',
    firstName: 'alex1',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
  {
    id: '2',
    firstName: 'alex2',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
  {
    id: '3',
    firstName: 'alex3',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
  {
    id: '4',
    firstName: 'alex4',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
  {
    id: '5',
    firstName: 'alex5',
    lastName: 'adams',
    email: 'alexadams@gmail.com',
    contact: 9542364568,
    DOB: '05/10/2000',
    qualification: 'MBBS',
    specilization: null,
    experience: null,
  },
];

const ListDoctorsPage = () => {
  const [doctors, setDoctors] = useState(
    DOCTORS.map((doctor) => ({ ...doctor, isChecked: false })).sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    )
  );

  const selectAll = (select: boolean) =>
    setDoctors((prevDoctors) =>
      prevDoctors
        .map((doctor) => ({ ...doctor, isChecked: select }))
        .sort((a, b) => a.firstName.localeCompare(b.firstName))
    );

  const select = (id: string, checked: boolean) =>
    setDoctors((prevDoctors) => {
      const doctor = prevDoctors.find((d) => d.id === id)!;
      doctor.isChecked = checked;
      const newDoctors = prevDoctors.filter((d) => d.id !== id);
      return [...newDoctors, doctor].sort((a, b) => a.firstName.localeCompare(b.firstName));
    });

  return (
    <Container>
      <Table striped bordered hover responsive className='mt-5'>
        <thead>
          <tr>
            <th>
              <Form.Check
                label='Select All'
                onClick={(e) => (e.currentTarget.checked ? selectAll(true) : selectAll(false))}
              />
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
                <Form.Check
                  onClick={(e) => select(doctor.id, e.currentTarget.checked)}
                  checked={doctor.isChecked}
                />
              </td>
              <td>{i + 1}</td>
              <td>{doctor.firstName}</td>
              <td>{doctor.lastName}</td>
              <td>{doctor.email}</td>
              <td>{doctor.contact}</td>
              <td>{doctor.DOB}</td>
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
