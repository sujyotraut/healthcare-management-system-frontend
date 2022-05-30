import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar';
import AddDoctorPage from './pages/AddDoctorPage';
import AddMedicinePage from './pages/AddMedicinePage';
import AddStaffPage from './pages/AddStaffPage';
import AddWardPage from './pages/AddWardPage';
import HomePage from './pages/HomePage';
import ListDoctorsPage from './pages/ListDoctorsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <MainNavbar />
      <ListDoctorsPage />
    </>
  );
}

export default App;
