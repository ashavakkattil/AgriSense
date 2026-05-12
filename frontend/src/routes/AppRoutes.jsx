import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Campaigns from '../pages/Campaigns';
import UploadPage from '../pages/UploadPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/disease" element={<UploadPage />} />
    </Routes>
  );
}
