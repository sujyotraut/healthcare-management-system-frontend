import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { MyContext } from '../App';
import fetchAPI from '../utls/fetchAPI';

interface Insurance {
  id: string;
  name: string;
  companyName: string;
  amount: number;
  patientName: string;
  endDate: string;
}

const ListInsurancePage = () => {
  const [insurances, setInsurances] = useState<Insurance[]>([]);

  useEffect(() => {
    fetchAPI('/insurances').then((resJson) => setInsurances(resJson.data.insurances));
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
            <th>Patient Name</th>
            <th>Amount</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {insurances.map((insurance, i) => (
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>{i + 1}</td>
              <td>{insurance.name}</td>
              <td>{insurance.companyName}</td>
              <td>{insurance.patientName}</td>
              <td>{insurance.amount}</td>
              <td>{insurance.endDate}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListInsurancePage;
