import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAddResource from '../../hooks/useAddResource';
import { FieldType } from '../../types/MyCustomForm.types';

const AddStaffPage = () => {
  const { addResource } = useAddResource('/staff', 'Staff');

  const fields: Array<FieldType> = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'dateOfBirth', label: 'DOB', type: 'date' },
    { name: 'contact', label: 'Contact', type: 'text' },
    { name: 'experience', label: 'Experience', type: 'text' },
    { name: 'qualifications', label: 'Qualifications', type: 'text' },
  ];

  return (
    <Container>
      <MyCustomForm formTitle='Staff' fields={fields} onSubmit={addResource} submitBtnLabel='Add' />
    </Container>
  );
};

export default AddStaffPage;
