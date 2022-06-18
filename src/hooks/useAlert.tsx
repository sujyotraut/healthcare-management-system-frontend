import { useContext } from 'react';
import { AlertContext } from '../contexts/alert.context';

const useAlert = () => {
  const { showAlert } = useContext(AlertContext);

  return (message: string, resJson?: any, resetForm?: Function) => {
    if (!resJson) return showAlert(message);
    if (resJson.status === 'success') {
      showAlert(message);
      if (resetForm) resetForm();
    } else showAlert(resJson.message);
  };
};

export default useAlert;
