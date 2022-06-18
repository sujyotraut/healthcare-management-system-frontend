import { FormikHelpers } from 'formik';
import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAlert from '../../hooks/useAlert';
import { FieldType } from '../../types/MyCustomForm.types';
import fetchAPI from '../../utils/fetchAPI';

const AddMedicinePage = () => {
  const showAlert = useAlert();

  const fields: Array<FieldType> = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'companyName', label: 'Company Name', type: 'text' },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'status', label: 'Status', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  const handleSubmit = async (values: any, helpers: FormikHelpers<any>) => {
    const resJson = await fetchAPI('/medicines', 'POST', values);
    showAlert('Medicine is added to the list', resJson, helpers.resetForm);
  };

  return (
    <Container>
      <MyCustomForm
        formTitle='Medicine'
        fields={fields}
        onSubmit={handleSubmit}
        submitBtnLabel='Add'
        spanLastFieldToFullWidth={true}
      />
    </Container>
  );
};

export default AddMedicinePage;
