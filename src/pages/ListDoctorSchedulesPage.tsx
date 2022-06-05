import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import fetchAPI from '../utls/fetchAPI';

const ListDoctorSchedulesPage = () => {
  const [schedules, setSchedules] = useState<
    { doctorName: string; date: string; timing: string; city: string; address: string }[]
  >([]);

  useEffect(() => {
    fetchAPI('/doctor-schedules').then((resJson) => setSchedules(resJson.data.doctorSchedules));
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
            <th>Doctor Name</th>
            <th>Timing</th>
            <th>Date</th>
            <th>City</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{schedule.doctorName}</td>
              <td>{schedule.timing}</td>
              <td>{schedule.date}</td>
              <td>{schedule.city}</td>
              <td>{schedule.address}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListDoctorSchedulesPage;
