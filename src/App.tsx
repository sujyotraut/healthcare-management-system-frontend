import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import AddBedPage from './pages/AddBedPage';
import AddDoctorPage from './pages/AddDoctorPage';
import AddMedicinePage from './pages/AddMedicinePage';
import AddRoomPage from './pages/AddRoomPage';
import AddStaffPage from './pages/AddStaffPage';
import AddWardPage from './pages/AddWardPage';
import HomePage from './pages/HomePage';
import ListDoctorsPage from './pages/ListDoctorsPage';
import ListBedsPage from './pages/ListBedsPage';
import ListStaffPage from './pages/ListStaffPage';
import ListWardsPage from './pages/ListWardsPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import ListRoomsPage from './pages/ListRoomsPage';
import ListMediciensPage from './pages/ListMediciensPage';
import useBreadcrumb from './hooks/useBreadcrumb';
import AddDoctorSchedulePage from './pages/AddDoctorSchedulePage';
import ListDoctorSchedulesPage from './pages/ListDoctorSchedulesPage';

import { createContext } from 'react';
import { API_BASE_URL } from './config/config';
import fetchAPI from './utls/fetchAPI';
import Alert from 'react-bootstrap/esm/Alert';
import { Container } from 'react-bootstrap';
import ListInsurancePage from './pages/ListInsurancePage';
import AddPrescriptionPage from './pages/AddPrescriptionPage';
import ListPrescriptionPage from './pages/LIstPrescriptionPage';
import AddInsurancePage from './pages/AddInsurancePage';
import AddStaffSchedulePage from './pages/AddStaffSchdulePage';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface ContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  showAlert: (message: string) => void;
}

export const MyContext = createContext<ContextType>({
  user: null,
  setUser: (user) => {},
  showAlert: (message) => {},
});

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const breadcrumb = useBreadcrumb();

  useEffect(() => {
    const getUser = async () => {
      const resJson = await fetchAPI('/me');
      if (resJson.status === 'success') {
        setUser(resJson.data);
      } else {
        setUser(null);
      }
    };

    getUser();
  }, []);

  const onCloseHandler = () => {
    setShowAlert(false);
    setMessage('');
  };

  const showAlertWithMsg = (message: string) => {
    setShowAlert(true);
    setMessage(message);
  };

  return (
    <MyContext.Provider value={{ user, setUser, showAlert: showAlertWithMsg }}>
      <MainNavbar />
      {showAlert && (
        <Alert variant='primary' onClose={onCloseHandler} dismissible>
          <Container>
            <span>{message}</span>
          </Container>
        </Alert>
      )}
      {breadcrumb}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

        <Route path='add-doctor' element={<AddDoctorPage />} />
        <Route path='list-doctors' element={<ListDoctorsPage />} />

        <Route path='add-staff' element={<AddStaffPage />} />
        <Route path='list-staff' element={<ListStaffPage />} />

        <Route path='add-ward' element={<AddWardPage />} />
        <Route path='list-wards' element={<ListWardsPage />} />

        <Route path='add-room' element={<AddRoomPage />} />
        <Route path='list-rooms' element={<ListRoomsPage />} />

        <Route path='add-bed' element={<AddBedPage />} />
        <Route path='list-beds' element={<ListBedsPage />} />

        <Route path='add-medicine' element={<AddMedicinePage />} />
        <Route path='list-medicines' element={<ListMediciensPage />} />

        <Route path='add-insurance' element={<AddInsurancePage />} />
        <Route path='list-insurance' element={<ListInsurancePage />} />

        <Route path='add-prescription' element={<AddPrescriptionPage />} />
        <Route path='list-prescriptions' element={<ListPrescriptionPage />} />

        <Route path='add-doctor-schedule' element={<AddDoctorSchedulePage />} />
        <Route path='list-doctor-schedules' element={<ListDoctorSchedulesPage />} />

        <Route path='add-staff-schedule' element={<AddStaffSchedulePage />} />
        <Route path='list-staff-schedules' element={<ListDoctorSchedulesPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
