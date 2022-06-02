import Breadcrumb from 'react-bootstrap/esm/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import { useLocation, useNavigate } from 'react-router-dom';

const pathTitles = new Map([
  ['/add-doctor', 'Doctor'],
  ['/list-doctors', 'Doctors List'],
  ['/add-staff', 'Staff'],
  ['/list-staff', 'Staff List'],
  ['/add-ward', 'Ward'],
  ['/list-wards', 'List Wards'],
  ['/add-room', 'Room'],
  ['/list-rooms', 'List Rooms'],
  ['/add-bed', 'Bed'],
  ['/list-beds', 'List Beds'],
  ['/add-medicine', 'Medicine'],
  ['/list-medicines', 'List Medicines'],
]);

export const useBreadcrumb = () => {
  const loc = useLocation();
  const navigate = useNavigate()

  if(loc.pathname === '/') return;

  return (
    <Container className='border-bottom'>
      <Breadcrumb className='pt-3'>
        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{pathTitles.get(loc.pathname)}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};
