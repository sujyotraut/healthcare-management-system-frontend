import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAddResource from '../../hooks/useAddResource';
import { FieldType } from '../../types/MyCustomForm.types';

const AddMedicinePage = () => {
  const { addResource } = useAddResource('/medicines', 'Medicine');

  const fields: Array<FieldType> = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'companyName', label: 'Company Name', type: 'text' },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'status', label: 'Status', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  return (
    <Container>
      <MyCustomForm
        formTitle='Medicine'
        fields={fields}
        onSubmit={addResource}
        submitBtnLabel='Add'
        spanLastFieldToFullWidth={true}
      />
    </Container>
  );
};

export default AddMedicinePage;
