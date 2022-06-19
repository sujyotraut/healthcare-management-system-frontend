import { FormikHelpers } from 'formik';
import { useContext } from 'react';
import NotificationsContext from '../contexts/notifications.context';
import useFetchAPI from './useFetchAPI';

const useAddResource = (path: string, title: string, successMsg?: string) => {
  const { pushNotification, updateNotification } = useContext(NotificationsContext);
  const { fetchAPI } = useFetchAPI();

  const addResource = async (values: any, helpers: FormikHelpers<any>) => {
    const id = pushNotification({ title, message: 'Adding', type: 'loading' });
    const resJson = await fetchAPI(path, 'POST', values);
    if (resJson.status === 'success') {
      helpers.resetForm();
      updateNotification({ id, title, message: successMsg || `${title} is added to the list`, type: 'success' });
    } else updateNotification({ id, title, message: resJson.message, type: 'fail' });
  };

  return { addResource };
};

export default useAddResource;
