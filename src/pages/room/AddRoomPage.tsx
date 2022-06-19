import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAddResource from '../../hooks/useAddResource';
import useFetchAPI from '../../hooks/useFetchAPI';
import useNotifications from '../../hooks/useNotifications';
import { FieldType } from '../../types/MyCustomForm.types';

const AddWardPage = () => {
  const [wards, setWards] = useState<{ id: string; name: string }[]>([]);
  const { addResource } = useAddResource('/rooms', 'Room');
  const { pushNotification } = useNotifications();
  const { fetchAPI } = useFetchAPI();

  const fields: Array<FieldType> = [
    { name: 'roomNo', label: 'Room No', type: 'text' },
    { name: 'wardName', label: 'Ward Name', type: 'select', options: wards.map((ward) => ward.name) },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  useEffect(() => {
    fetchAPI('/wards').then((resJson) => {
      if (resJson.status === 'success') setWards(resJson.data.wards);
      else pushNotification({ title: 'Room', message: resJson.message, type: 'fail' });
    });
  }, []);

  return (
    <Container>
      <MyCustomForm
        formTitle='Room'
        fields={fields}
        onSubmit={addResource}
        submitBtnLabel='Add'
        numOfColumns={1}
        style={{ maxWidth: '25rem' }}
        spanLastFieldToFullWidth={true}
      />
    </Container>
  );
};

export default AddWardPage;
