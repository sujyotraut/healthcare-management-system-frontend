import Breadcrumb from 'react-bootstrap/esm/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import { useLocation, useNavigate } from 'react-router-dom';

const pathTitles = new Map([
  ['/login', 'Login'],
  ['/register', 'Register'],
  ['/add-doctor', 'Doctor'],
  ['/list-doctors', 'Doctors List'],
  ['/add-staff', 'Staff'],
  ['/list-staff', 'Staff List'],
  ['/add-ward', 'Ward'],
  ['/list-wards', 'Wards List'],
  ['/add-room', 'Room'],
  ['/list-rooms', 'Rooms List'],
  ['/add-bed', 'Bed'],
  ['/list-beds', 'Beds List'],
  ['/add-medicine', 'Medicine'],
  ['/list-medicines', 'Medicines List'],
  ['/add-doctor-schedule', 'Schedule'],
  ['/list-doctor-schedules', 'Schedules List'],
  ['/list-prescriptions', 'Prescriptions List'],
]);

const useBreadcrumb = () => {
  const loc = useLocation();
  const navigate = useNavigate();

  if (loc.pathname === '/') return;

  return (
    <Container className='border-bottom'>
      <Breadcrumb className='pt-3'>
        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{pathTitles.get(loc.pathname)}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default useBreadcrumb;
