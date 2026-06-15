import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import OtpVerification from "../pages/OtpVerification";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Admin from "../pages/Admin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;