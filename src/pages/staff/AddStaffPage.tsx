import { FormikHelpers } from 'formik';
import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAlert from '../../hooks/useAlert';
import { FieldType } from '../../types/MyCustomForm.types';
import fetchAPI from '../../utils/fetchAPI';

const AddStaffPage = () => {
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
  ];

  const handleSubmit = async (values: any, helpers: FormikHelpers<any>) => {
    const resJson = await fetchAPI('/staff', 'POST', values);
    showAlert('Staff is added to the list', resJson, helpers.resetForm);
  };

  return (
    <Container>
      <MyCustomForm formTitle='Staff' fields={fields} onSubmit={handleSubmit} submitBtnLabel='Add' />
    </Container>
  );
};

export default AddStaffPage;
