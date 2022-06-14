import { createContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/esm/Alert';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import useBreadcrumb from './hooks/useBreadcrumb';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AddBedPage from './pages/bed/AddBedPage';
import ListBedsPage from './pages/bed/ListBedsPage';
import AddDoctorPage from './pages/doctor/AddDoctorPage';
import ListDoctorsPage from './pages/doctor/ListDoctorsPage';
import HomePage from './pages/HomePage';
import AddInsurancePage from './pages/insurance/AddInsurancePage';
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
import fetchAPI from './utils/fetchAPI';

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
      const resJson = await fetchAPI('/users/me');
      if (resJson.status === 'success') setUser(resJson.data.me);
      else setUser(null);
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

        <Route path='/add-insurance' element={<AddInsurancePage />} />
        <Route path='/list-insurance' element={<ListInsurancePage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
