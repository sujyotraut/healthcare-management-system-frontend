import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAuth from '../../hooks/useAuth';
import { FieldType } from '../../types/MyCustomForm.types';

const LoginPage = () => {
  const { login } = useAuth();

  const fields: Array<FieldType> = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <Container>
      <MyCustomForm
        formTitle='Login'
        fields={fields}
        onSubmit={login}
        submitBtnLabel='Login'
        numOfColumns={1}
        style={{ maxWidth: '25rem' }}
      />
    </Container>
  );
};

export default LoginPage;
