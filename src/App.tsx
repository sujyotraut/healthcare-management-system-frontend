import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import AddDoctorPage from './pages/AddDoctorPage';
import HomePage from './pages/HomePage';
import ListDoctorsPage from './pages/ListDoctorsPage';

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='add-doctor' element={<AddDoctorPage />} />
        <Route path='add-staff' element={<AddDoctorPage />} />
      </Routes>
    </>
  );
}

export default App;
