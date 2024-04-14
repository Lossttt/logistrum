import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './bookingPageStyle.css';
import BookingPage from './Components/Booking/BookingPage';

import './App.css';
import ParcelBookings from './pages/BookedParcel';

import sidebar_menu from './constants/sidebar-menu';
import SideBar from './Components/Sidebar';

function App () {
  return(
    <div className='dashboard-container'>
      <SideBar menu={sidebar_menu} />
        
      <div className='dashboard-body'>
        <Routes>
          <Route path="*" element={<div></div>} />
          <Route exact path="/" element={<div></div>} />
          <Route exact path="//booked-parcels" element={<ParcelBookings />} />
          <Route exact path="/locations" element={<div></div>} />
          <Route exact path="/profile" element={<div></div>} />
          <Route exact path="/bookings" element={<BookingPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
