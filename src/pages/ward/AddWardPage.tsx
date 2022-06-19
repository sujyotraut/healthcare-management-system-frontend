import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAddResource from '../../hooks/useAddResource';
import { FieldType } from '../../types/MyCustomForm.types';

const AddWardPage = () => {
  const { addResource } = useAddResource('/wards', 'Ward');

  const fields: Array<FieldType> = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  return (
    <Container>
      <MyCustomForm
        formTitle='Ward'
        fields={fields}
        onSubmit={addResource}
        submitBtnLabel='Add'
        numOfColumns={1}
        style={{ maxWidth: '25rem' }}
      />
    </Container>
  );
};

export default AddWardPage;
