import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAddResource from '../../hooks/useAddResource';
import useFetchAPI from '../../hooks/useFetchAPI';
import useNotifications from '../../hooks/useNotifications';
import { FieldType } from '../../types/MyCustomForm.types';

const AddBedPage = () => {
  const [rooms, setRooms] = useState<{ id: string; roomNo: string }[]>([]);
  const { addResource } = useAddResource('/beds', 'Bed');
  const { pushNotification } = useNotifications();
  const { fetchAPI } = useFetchAPI();

  const fields: Array<FieldType> = [
    { name: 'bedNo', label: 'Bed No', type: 'text' },
    { name: 'roomNo', label: 'Room No', type: 'select', options: rooms.map((room) => room.roomNo) },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  useEffect(() => {
    fetchAPI('/rooms').then((resJson) => {
      if (resJson.status === 'success') setRooms(resJson.data.rooms);
      else pushNotification({ title: 'Bed', message: resJson.message, type: 'fail' });
    });
  }, []);

  return (
    <Container>
      <MyCustomForm
        formTitle='Bed'
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

export default AddBedPage;
