import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./bookingPageStyle.css";
import "./App.css";
import ParcelBookings from "./pages/BookedParcel";
import sidebar_menu from "./constants/sidebar-menu";
import SideBar from "./components/Sidebar";

import HomePage from "./components/Web/Home/homePage";
import LoginForm from "./components/Web/Home/loginForm";
const App = () => {
  return (
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AnimatePresence>
  );
};

export default App;
