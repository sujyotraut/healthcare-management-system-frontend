import { Field, FieldProps, Formik, FormikHelpers } from 'formik';
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

const fields = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Company Name', name: 'companyName', type: 'text' },
  { label: 'Price', name: 'price', type: 'number' },
  { label: 'Status', name: 'status', type: 'text' },
];

const AddMedicinePage = () => {
  const navigate = useNavigate();
  const { setUser, showAlert } = useContext(MyContext);

  const initialValues = {
    name: '',
    companyName: '',
    price: 0,
    status: '',
    description: '',
  };

  const handleSubmit = async (values: typeof initialValues, helpers: FormikHelpers<typeof initialValues>) => {
    const resJson = await fetchAPI('/medicines', 'POST', values);

    if (resJson.status === 'success') {
      showAlert('Medicine is added to the list');
      helpers.resetForm();
    } else showAlert(resJson.message);
  };

  return (
    <Container>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ isSubmitting }) => (
          <MyForm>
            <h3 className='mb-4'>Medicine</h3> <hr />
            <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
              {fields.map(({ label, ...other }) => (
                <Col key={other.name} as={Form.Group}>
                  <Form.Label>{label}</Form.Label>
                  <Field as={Form.Control} {...other} required />
                </Col>
              ))}
              <Col as={Form.Group} xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Form.Label>Description</Form.Label>
                <Field name='description'>
                  {({ field }: FieldProps) => <Form.Control as='textarea' required {...field} />}
                </Field>
              </Col>
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

export default AddMedicinePage;
