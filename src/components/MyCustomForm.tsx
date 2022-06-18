import { FieldInputProps, FormikHelpers, useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import { FieldType, SelectFieldType, TextFieldType } from '../types/MyCustomForm.types';

const MyCustomForm = ({ numOfColumns: n = 2, spanLastFieldToFullWidth: s = false, ...otherProps }: PropType) => {
  const { fields, formTitle, onSubmit, submitBtnLabel, style } = otherProps;

  const { spanFullWidth, ...styles } = {
    className: 'mx-auto my-5 p-4',
    spanFullWidth: { xxs: 12, xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 },
    style: Object.assign({ boxShadow: '1px 1px 16px 2px rgba(0, 0, 0, 0.1)', borderRadius: '1rem' }, style || {}),
  };

  const initialValues = fields.reduce(
    (prev, curr) =>
      Object.defineProperty(prev, curr.name, {
        value: curr.initialValue || '',
        writable: true,
        enumerable: true,
        configurable: true,
      }),
    {}
  );

  const { getFieldProps, handleSubmit, isSubmitting } = useFormik({ initialValues, onSubmit });

  return (
    <Form onSubmit={handleSubmit} {...styles}>
      <h3 className='mb-4'>{formTitle}</h3> <hr />
      <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={n} xl={n} xxl={n}>
        {fields.map((field, i) => (
          <Col
            key={field.name}
            as={Form.Group}
            controlId={field.name}
            {...(s && fields.length === i + 1 && spanFullWidth)}
          >
            <Form.Label>{field.label}</Form.Label>
            {field.type === 'select' ? (
              <SelectField field={field} fieldInputProps={getFieldProps(field.name)} />
            ) : (
              <TextField field={field} fieldInputProps={getFieldProps(field.name)} />
            )}
          </Col>
        ))}
      </Row>
      <Button className='mt-4' type='submit' disabled={isSubmitting}>
        {submitBtnLabel}
      </Button>
    </Form>
  );
};

const SelectField = ({ field, fieldInputProps }: { field: SelectFieldType; fieldInputProps: FieldInputProps<any> }) => (
  <Form.Select required {...fieldInputProps}>
    <option>--- Select ---</option>
    {field.options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </Form.Select>
);

const TextField = ({ field, fieldInputProps }: { field: TextFieldType; fieldInputProps: FieldInputProps<any> }) => (
  <Form.Control
    required
    {...(field.type === 'textarea' ? { as: field.type } : { type: field.type })}
    {...fieldInputProps}
  />
);

interface PropType {
  style?: object;
  formTitle: string;
  fields: Array<FieldType>;
  submitBtnLabel: string;
  numOfColumns?: 1 | 2;
  spanLastFieldToFullWidth?: boolean;
  onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
}

export default MyCustomForm;
