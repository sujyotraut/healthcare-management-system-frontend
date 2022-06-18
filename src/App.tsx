import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/esm/Alert';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import ExperimentalComponent from './components/_ExperimentalComponent';
import { AlertContext } from './contexts/alert.context';
import { UserContext } from './contexts/user.context';
import useBreadcrumb from './hooks/useBreadcrumb';
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
import User from './types/User.types';
import fetchAPI from './utils/fetchAPI';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const breadcrumb = useBreadcrumb();

  useEffect(() => {
    fetchAPI('/users/me')
      .then((resJson) => {
        if (resJson.status === 'success') setUser(resJson.data.me);
        else {
          setUser(null);
          localStorage.removeItem('accessToken');
        }
      })
      .catch(() => setUser(null));
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
    <AlertContext.Provider value={{ showAlert: showAlertWithMsg }}>
      <UserContext.Provider value={{ user, setUser }}>
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
          <Route
            path='/experiment'
            element={
              <Container>
                <ExperimentalComponent />
              </Container>
            }
          />

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
      </UserContext.Provider>
    </AlertContext.Provider>
  );
}

export default App;
