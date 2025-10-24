import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
//import LoginPage from "../pages/LoginPage";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      {/* <Route path="/" element={<LoginPage />} /> */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  </Router>
);

export default AppRoutes;
