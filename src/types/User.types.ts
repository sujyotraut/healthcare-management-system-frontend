export default interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  contact: string;
  dateOfBirth: string;
  role: 'admin' | 'doctor' | 'staff' | 'patient';
}
