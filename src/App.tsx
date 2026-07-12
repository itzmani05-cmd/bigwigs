import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Careers from "@/pages/Careers";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Account from "@/pages/Account";
import Admin from "@/pages/Admin";
import Employee from "@/pages/Employee";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import CookieConsent from "@/components/CookieConsent";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee"
            element={
              <ProtectedRoute allowedRoles={["employee", "admin"]}>
                <Employee />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
