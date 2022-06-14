import { useField } from 'formik';
import FormControl, { FormControlProps } from 'react-bootstrap/esm/FormControl';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';

interface PropTypes {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email' | 'date';
}

const MyTextInput = ({ label, name, type = 'text' }: PropTypes) => {
  const [field, meta] = useField<string>(name);
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <FormControl required type={type} {...field} />
    </FormGroup>
  );
};

export default MyTextInput;
