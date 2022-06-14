import { Form } from 'formik';

const MyForm = (props?: { style?: object; children: any }) => {
  const formStyle = { boxShadow: '1px 1px 16px 2px rgba(0, 0, 0, 0.1)', borderRadius: '1rem' };
  return (
    <Form className='mx-auto my-5 p-4' style={Object.assign(formStyle, props?.style || {})}>
      {props?.children}
    </Form>
  );
};

export default MyForm;
