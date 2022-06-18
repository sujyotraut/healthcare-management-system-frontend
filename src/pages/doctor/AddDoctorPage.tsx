import { FormikHelpers } from 'formik';
import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAlert from '../../hooks/useAlert';
import Doctor from '../../types/Doctor.types';
import { FieldType } from '../../types/MyCustomForm.types';
import fetchAPI from '../../utils/fetchAPI';

const AddDoctorPage = (props: { doctor?: Doctor }) => {
  const showAlert = useAlert();

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
    { name: 'specialization', label: 'Specialization', type: 'text' },
  ];

  const handleSubmit = async (values: any, helpers: FormikHelpers<any>) => {
    const resJson = await fetchAPI('/doctors', 'POST', values);
    showAlert('Doctor is added to the list', resJson, helpers.resetForm);
  };

  return (
    <Container>
      <MyCustomForm formTitle='Doctor' fields={fields} onSubmit={handleSubmit} submitBtnLabel='Add' />
    </Container>
  );
};

export default AddDoctorPage;
