import { useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import MyCustomBreadcrumb from './components/MyCustomBreadcrumb';
import ExperimentalComponent from './components/_ExperimentalComponent';
import useAuth from './hooks/useAuth';
import useNotifications from './hooks/useNotifications';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AddBedPage from './pages/bed/AddBedPage';
import ListBedsPage from './pages/bed/ListBedsPage';
import AddDoctorPage from './pages/doctor/AddDoctorPage';
import ListDoctorsPage from './pages/doctor/ListDoctorsPage';
import HomePage from './pages/HomePage';
import ListInsurancePage from './pages/insurance/ListInsurancePage';
import AddMedicinePage from './pages/medicine/AddMedicinePage';
import ListMedicinesPage from './pages/medicine/ListMedicinesPage';
import NotFoundPage from './pages/NotFoundPage';
import AddRoomPage from './pages/room/AddRoomPage';
import ListRoomsPage from './pages/room/ListRoomsPage';
import AddStaffPage from './pages/staff/AddStaffPage';
import ListStaffPage from './pages/staff/ListStaffPage';
import AddWardPage from './pages/ward/AddWardPage';
import ListWardsPage from './pages/ward/ListWardsPage';

function App() {
  const { fetchUser } = useAuth();
  const { getNotifications } = useNotifications();

  useEffect(fetchUser, []);

  return (
    <>
      <MainNavbar />
      <MyCustomBreadcrumb />
      <ToastContainer className='p-3' position='top-end'>
        {getNotifications().map(({ id, title, message, type, removeSelf }) => (
          <Toast key={id} onClose={removeSelf} delay={3 * 1000} autohide>
            <Toast.Header>
              <img
                src={`${process.env.PUBLIC_URL}/icons/${type}.svg`}
                alt={message}
                width='24px'
                height='24px'
                className='me-2'
              />
              <strong className='me-auto'>{title}</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
      <Routes>
        <Route path='/experiment' element={<ExperimentalComponent />} />

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/add-doctor' element={<AddDoctorPage />} />
        <Route path='/list-doctors' element={<ListDoctorsPage />} />

        <Route path='/add-staff' element={<AddStaffPage />} />
        <Route path='/list-staff' element={<ListStaffPage />} />

        <Route path='/add-ward' element={<AddWardPage />} />
        <Route path='/list-wards' element={<ListWardsPage />} />

        <Route path='/add-room' element={<AddRoomPage />} />
        <Route path='/list-rooms' element={<ListRoomsPage />} />

        <Route path='/add-bed' element={<AddBedPage />} />
        <Route path='/list-beds' element={<ListBedsPage />} />

        <Route path='/add-medicine' element={<AddMedicinePage />} />
        <Route path='/list-medicines' element={<ListMedicinesPage />} />

        {/* <Route path='/add-insurance' element={<AddInsurancePage />} /> */}
        <Route path='/list-insurance' element={<ListInsurancePage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
