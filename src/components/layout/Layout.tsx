import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

export default function Layout() {
  return (
    <div className="bg-primary-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
