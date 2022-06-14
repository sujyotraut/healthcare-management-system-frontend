import { Field, Formik, FormikHelpers } from 'formik';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import { MyContext } from '../../App';
import MyForm from '../../components/MyForm';
import fetchAPI from '../../utils/fetchAPI';

const fields = [
  { label: 'First Name', name: 'firstName', type: 'text' },
  { label: 'Last Name', name: 'lastName', type: 'text' },
  { label: 'Username', name: 'username', type: 'text' },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'DOB', name: 'dateOfBirth', type: 'date' },
  { label: 'Contact', name: 'contact', type: 'text' },
  { label: 'Experience', name: 'experience', type: 'text' },
  { label: 'Qualifications', name: 'qualifications', type: 'text' },
  { label: 'Specialization', name: 'specialization', type: 'text' },
];

const AddDoctorPage = () => {
  const { showAlert } = useContext(MyContext);

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    contact: '',
    dateOfBirth: '',
    experience: '',
    qualifications: '',
    specialization: '',
  };

  const handleSubmit = async (values: typeof initialValues, helpers: FormikHelpers<typeof initialValues>) => {
    const resJson = await fetchAPI('/doctors', 'POST', values);

    if (resJson.status === 'success') {
      showAlert('Doctor is added to the list');
      helpers.resetForm();
    } else showAlert(resJson.message);
  };

  return (
    <Container>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ isSubmitting }) => (
          <MyForm>
            <h3 className='mb-4'>Doctor</h3> <hr />
            <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
              {fields.map(({ label, ...other }) => (
                <Col key={other.name} as={Form.Group}>
                  <Form.Label>{label}</Form.Label>
                  <Field as={Form.Control} {...other} required />
                </Col>
              ))}
            </Row>
            <Button className='mt-4' variant='primary' type='submit' disabled={isSubmitting}>
              Save
            </Button>
          </MyForm>
        )}
      </Formik>
    </Container>
  );
};

export default AddDoctorPage;
