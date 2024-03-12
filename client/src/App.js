import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import useDocumentTitle from './useDocumentTitle'

import './App.css';

import Pages from './pages/index';
import LoginPage from './pages/login';

function App() {
  return (
      <Routes>
        <Route exact path="/login" element={<LoginPage url='login' title='Masuk | Duid Management' />} />
        <Route exact path="/register" element={<Pages url='register' title='Daftar | Duid Management' />} />
        <Route exact path="/" element={<Pages url='dashboard' title='Dashboard | Duid Management' />} />
      </Routes>
  );
}

export default App;
