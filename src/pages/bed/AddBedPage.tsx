import { Field, FieldProps, Formik, FormikHelpers } from 'formik';
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import { MyContext } from '../../App';
import MyForm from '../../components/MyForm';
import fetchAPI from '../../utils/fetchAPI';

const AddBedPage = () => {
  const { showAlert } = useContext(MyContext);
  const [rooms, setRooms] = useState<{ id: string; roomNo: string }[]>([]);

  useEffect(() => {
    fetchAPI('/rooms').then((resJson) => {
      if (resJson.status === 'success') setRooms(resJson.data.rooms);
      else showAlert(resJson.message);
    });
  }, []);

  const initialValues = {
    bedNo: '',
    roomNo: '',
    description: '',
  };

  const handleSubmit = async (values: typeof initialValues, helpers: FormikHelpers<typeof initialValues>) => {
    if (!values.roomNo) return showAlert('Please select the room number');

    const resJson = await fetchAPI('/beds', 'POST', values);

    if (resJson.status === 'success') {
      showAlert('Bed is added to the list');
      helpers.resetForm();
    } else showAlert(resJson.message);
  };

  return (
    <Container>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ isSubmitting }) => (
          <MyForm style={{ maxWidth: '25rem' }}>
            <h3 className='mb-4'>Bed</h3> <hr />
            <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
              <Col as={Form.Group}>
                <Form.Label>Bed No.</Form.Label>
                <Field as={Form.Control} name='bedNo' type='text' required />
              </Col>
              <Col as={Form.Group}>
                <Form.Label>Room No.</Form.Label>
                <Field as={Form.Select} name='roomNo' required>
                  <option>--- Select ---</option>
                  {rooms.map(({ id, roomNo }) => (
                    <option key={id} value={roomNo}>
                      {roomNo}
                    </option>
                  ))}
                </Field>
              </Col>
              <Col as={Form.Group}>
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

export default AddBedPage;
