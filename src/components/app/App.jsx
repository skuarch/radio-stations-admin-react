import React from 'react';
import Login from '../login/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
// import { ProtectedRoute } from '../protectedRoute/ProtectedRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
