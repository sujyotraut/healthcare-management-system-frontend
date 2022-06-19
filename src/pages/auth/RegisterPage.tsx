import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAuth from '../../hooks/useAuth';
import { FieldType } from '../../types/MyCustomForm.types';

const RegisterPage = () => {
  const { register } = useAuth();

  const fields: Array<FieldType> = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'dateOfBirth', label: 'DOB', type: 'date' },
    { name: 'contact', label: 'Contact', type: 'text' },
    { name: 'city', label: 'City', type: 'text' },
    { name: 'address', label: 'Address', type: 'textarea' },
  ];

  return (
    <Container>
      <MyCustomForm
        fields={fields}
        formTitle='Register'
        onSubmit={register}
        submitBtnLabel='Register'
        spanLastFieldToFullWidth={true}
      />
    </Container>
  );
};

export default RegisterPage;
