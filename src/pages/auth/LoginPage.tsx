import { Field, Formik, FormikHelpers } from 'formik';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import MyForm from '../../components/MyForm';
import fetchAPI from '../../utils/fetchAPI';

const LoginPage = () => {
  const { setUser, showAlert } = useContext(MyContext);
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = async (values: typeof initialValues, helpers: FormikHelpers<typeof initialValues>) => {
    const resJson = await fetchAPI('/users/login', 'POST', values);

    if (resJson.status === 'success') {
      const accessToken = resJson.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      const userJson = await fetchAPI('/users/me');
      setUser(userJson.data.me);
      navigate('/');
    } else {
      showAlert(resJson.message);
    }
  };

  return (
    <Container>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ isSubmitting }) => (
          <MyForm style={{ maxWidth: '25rem' }}>
            <h3 className='mb-4'>Login</h3> <hr />
            <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
              <Col as={Form.Group}>
                <Form.Label>Username</Form.Label>
                <Field as={Form.Control} name='username' type='text' required />
              </Col>
              <Col as={Form.Group}>
                <Form.Label>Password</Form.Label>
                <Field as={Form.Control} name='password' type='password' required />
              </Col>
            </Row>
            <Button className='mt-4' variant='primary' type='submit' disabled={isSubmitting}>
              Login
            </Button>
          </MyForm>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
