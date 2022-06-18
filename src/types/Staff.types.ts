import User from './User.types';

export default interface Staff extends User {
  experience: string;
  qualifications: string;
}
