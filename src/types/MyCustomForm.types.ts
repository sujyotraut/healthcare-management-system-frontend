interface BaseFieldType {
  name: string;
  label: string;
  initialValue?: string;
}

export interface TextFieldType extends BaseFieldType {
  type: 'text' | 'textarea' | 'email' | 'password' | 'number' | 'tel' | 'date';
}

export interface SelectFieldType extends BaseFieldType {
  type: 'select';
  options: Array<string>;
}

export type FieldType = TextFieldType | SelectFieldType;
