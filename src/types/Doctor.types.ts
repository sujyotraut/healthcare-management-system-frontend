import User from './User.types';

export default interface Doctor extends User {
  experience: string;
  qualifications: string;
  specialization: string;
}
