import { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import useFetchAPI from '../../hooks/useFetchAPI';

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
  const { fetchAPI } = useFetchAPI();

  useEffect(() => {
    fetchAPI('/insurance').then((resJson) => {
      if (resJson.status !== 'success') return setInsurances([]);
      setInsurances(resJson.data.insurances);
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
