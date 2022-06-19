import { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import useFetchAPI from '../hooks/useFetchAPI';
import Doctor from '../types/Doctor.types';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length: number) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const MyCustomTable = () => {
  const [doctors, setDoctors] = useState<Array<Doctor>>([]);
  const [selected, setSelected] = useState<Array<string>>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [refetch, setRefetch] = useState('');
  const { fetchAPI } = useFetchAPI();

  useEffect(() => {
    fetchAPI('/doctors').then((resJson) => {
      if (resJson.status !== 'success') return setDoctors([]);
      setDoctors(resJson.data.doctors.sort((a: Doctor, b: Doctor) => a.id.localeCompare(b.id)));
    });
  }, [refetch]);

  useEffect(() => {
    if (selected.length === 0) return setSelectAll(false);
    if (selected.length === doctors.length) return setSelectAll(true);
  }, [selected]);

  const handleDelete = () => {
    if (selected.length === 0) return;
    setIsDeleting(true);
    fetchAPI(`/doctors?ids=${selected}`, 'DELETE')
      .then(() => {
        setSelected([]);
        setRefetch(generateString(5));
      })
      .finally(() => setIsDeleting(false));
  };

  const handleDeleteAll = () => {
    setIsDeleting(true);
    fetchAPI(`/doctors`, 'DELETE')
      .then(() => {
        setSelected([]);
        setRefetch(generateString(5));
      })
      .finally(() => setIsDeleting(false));
  };

  const selectAllDeselectAll: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.currentTarget.checked;
    setSelected(checked ? [...doctors.map((doc) => doc.id)] : []);
  };

  const selectDeselect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const id = e.currentTarget.id;
    const checked = e.currentTarget.checked;
    setSelected((prevSelected) => {
      if (checked) return [...prevSelected, id];
      return [...prevSelected.filter((value) => value !== id)];
    });
  };

  return (
    <Container>
      <Table hover striped bordered>
        <thead>
          <tr>
            <th>
              <Form.Check checked={selectAll} onChange={selectAllDeselectAll} label='Select All' />
            </th>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, i) => (
            <tr key={doctor.id}>
              <td>
                <Form.Check id={doctor.id} checked={selected.includes(doctor.id)} onChange={selectDeselect} />
              </td>
              <td>{i}</td>
              <td>{doctor.firstName}</td>
              <td>{doctor.lastName}</td>
              <td>{doctor.email}</td>
              <td>
                <Button>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleDelete} disabled={isDeleting}>
        Delete
      </Button>
      <Button onClick={handleDeleteAll} disabled={isDeleting}>
        Delete All
      </Button>
      <div>{JSON.stringify(selected)}</div>
    </Container>
  );
};

export default MyCustomTable;
