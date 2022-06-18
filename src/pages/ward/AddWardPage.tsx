import { FormikHelpers } from 'formik';
import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAlert from '../../hooks/useAlert';
import { FieldType } from '../../types/MyCustomForm.types';
import fetchAPI from '../../utils/fetchAPI';

const AddWardPage = () => {
  const showAlert = useAlert();

  const fields: Array<FieldType> = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  const handleSubmit = async (values: any, helpers: FormikHelpers<any>) => {
    const resJson = await fetchAPI('/wards', 'POST', values);
    showAlert('Ward is added to the list', resJson, helpers.resetForm);
  };

  return (
    <Container>
      <MyCustomForm
        formTitle='Ward'
        fields={fields}
        onSubmit={handleSubmit}
        submitBtnLabel='Add'
        numOfColumns={1}
        style={{ maxWidth: '25rem' }}
      />
    </Container>
  );
};

export default AddWardPage;
