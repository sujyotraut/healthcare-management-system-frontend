import { FormikHelpers } from 'formik';
import { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import MyCustomForm from '../../components/MyCustomForm';
import { UserContext } from '../../contexts/user.context';
import useAlert from '../../hooks/useAlert';
import { FieldType } from '../../types/MyCustomForm.types';
import fetchAPI from '../../utils/fetchAPI';

const fields = [
  { label: 'First Name', name: 'firstName', type: 'text' },
  { label: 'Last Name', name: 'lastName', type: 'text' },
  { label: 'Username', name: 'username', type: 'text' },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'DOB', name: 'dateOfBirth', type: 'date' },
  { label: 'Contact', name: 'contact', type: 'text' },
  { label: 'City', name: 'city', type: 'text' },
];

const RegisterPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const showAlert = useAlert();

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

  const handleSubmit = async (values: any, helpers: FormikHelpers<any>) => {
    const resJson = await fetchAPI('/users/register-patient', 'POST', values);
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
        fields={fields}
        formTitle='Register'
        onSubmit={handleSubmit}
        submitBtnLabel='Register'
        spanLastFieldToFullWidth={true}
      />
    </Container>
  );
};

export default RegisterPage;
