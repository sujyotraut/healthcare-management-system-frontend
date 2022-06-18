import { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import MyCustomForm from '../../components/MyCustomForm';
import { UserContext } from '../../contexts/user.context';
import useAlert from '../../hooks/useAlert';
import { FieldType } from '../../types/MyCustomForm.types';
import fetchAPI from '../../utils/fetchAPI';

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const showAlert = useAlert();
  const navigate = useNavigate();

  const fields: Array<FieldType> = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  const handleSubmit = async (values: any) => {
    const resJson = await fetchAPI('/users/login', 'POST', values);
    if (resJson.status !== 'success') return showAlert(resJson.message);
    const accessToken = resJson.data.accessToken;
    localStorage.setItem('accessToken', accessToken);

    const userJson = await fetchAPI('/users/me');
    if (userJson.status !== 'success') {
      localStorage.removeItem('accessToken');
      return setUser(null);
    }
    setUser(userJson.data.me);
    navigate('/');
  };

  return (
    <Container>
      <MyCustomForm
        formTitle='Login'
        fields={fields}
        onSubmit={handleSubmit}
        submitBtnLabel='Login'
        numOfColumns={1}
        style={{ maxWidth: '25rem' }}
      />
    </Container>
  );
};

export default LoginPage;
