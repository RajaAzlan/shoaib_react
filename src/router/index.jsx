import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/login';
import Users from '@/pages/users';

const createRoutes = [
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </Router>,
];

export default createRoutes;
