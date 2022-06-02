import React from 'react';
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

function App() {
  return (
    <>
      <MainNavbar />
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
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
