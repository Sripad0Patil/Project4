import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Home from './pages/Home';
import OpenAccount from './pages/OpenAccount';
import TrackStatus from './pages/TrackStatus';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import About from './pages/About';
import EmployeeAuth from './pages/EmployeeAuth';
import EmployeeDashboard from './pages/EmployeeDashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/open-account" element={<OpenAccount />} />
      <Route path="/track-status" element={<TrackStatus />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="/employee-auth" element={<EmployeeAuth />} />
      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
    </Routes>
  );
}

export default AppRoutes; 