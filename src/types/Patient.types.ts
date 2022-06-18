import User from './User.types';

export default interface Patient extends User {
  city: string;
  address: string;
}
