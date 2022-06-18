import { FormikHelpers } from 'formik';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAlert from '../../hooks/useAlert';
import { FieldType } from '../../types/MyCustomForm.types';
import fetchAPI from '../../utils/fetchAPI';

const AddBedPage = () => {
  const showAlert = useAlert();
  const [rooms, setRooms] = useState<{ id: string; roomNo: string }[]>([]);

  const fields: Array<FieldType> = [
    { name: 'bedNo', label: 'Bed No', type: 'text' },
    { name: 'roomNo', label: 'Room No', type: 'select', options: rooms.map((room) => room.roomNo) },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  useEffect(() => {
    fetchAPI('/rooms').then((resJson) => {
      if (resJson.status === 'success') setRooms(resJson.data.rooms);
      else showAlert(resJson.message);
    });
  }, []);

  const handleSubmit = async (values: any, helpers: FormikHelpers<any>) => {
    if (!values.roomNo) return showAlert('Please select the room number');
    const resJson = await fetchAPI('/beds', 'POST', values);
    showAlert('Bed is added to the list', resJson, helpers.resetForm);
  };

  return (
    <Container>
      <MyCustomForm
        formTitle='Bed'
        fields={fields}
        onSubmit={handleSubmit}
        submitBtnLabel='Add'
        numOfColumns={1}
        style={{ maxWidth: '25rem' }}
        spanLastFieldToFullWidth={true}
      />
    </Container>
  );
};

export default AddBedPage;
