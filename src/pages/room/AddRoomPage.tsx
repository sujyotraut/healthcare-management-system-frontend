import { FormikHelpers } from 'formik';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import MyCustomForm from '../../components/MyCustomForm';
import useAlert from '../../hooks/useAlert';
import { FieldType } from '../../types/MyCustomForm.types';
import fetchAPI from '../../utils/fetchAPI';

const AddWardPage = () => {
  const showAlert = useAlert();
  const [wards, setWards] = useState<{ id: string; name: string }[]>([]);

  const fields: Array<FieldType> = [
    { name: 'roomNo', label: 'Room No', type: 'text' },
    { name: 'wardName', label: 'Ward Name', type: 'select', options: wards.map((ward) => ward.name) },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  useEffect(() => {
    fetchAPI('/wards').then((resJson) => {
      if (resJson.status === 'success') setWards(resJson.data.wards);
      else showAlert(resJson.message);
    });
  }, []);

  const handleSubmit = async (values: any, helpers: FormikHelpers<any>) => {
    if (!values.wardName) return showAlert('Please select the ward name');
    const resJson = await fetchAPI('/rooms', 'POST', values);
    showAlert('Room is added to the list', resJson, helpers.resetForm);
  };

  return (
    <Container>
      <MyCustomForm
        formTitle='Room'
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

export default AddWardPage;
