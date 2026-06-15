import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import OtpVerification from "../pages/OtpVerification";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Admin from "../pages/Admin";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route
            path="/dashboard"
            element={
            <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
            }
        />
        <Route
            path="/upload"
            element={
            <ProtectedRoute>
            <Upload />
            </ProtectedRoute>
            }
        />
        <Route
            path="/search"
            element={
            <ProtectedRoute>
            {<Search />}
            </ProtectedRoute>
            }
        />

        <Route
            path="/admin"
            element={
            <ProtectedRoute>
            {<Admin />}
            </ProtectedRoute>
            }
        />


        {/* <Route path="/upload" element={<Upload />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;