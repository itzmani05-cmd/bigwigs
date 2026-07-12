import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Careers from "@/pages/Careers";
import Team from "@/pages/Team";
import Blog from "@/pages/Blog";
import Events from "@/pages/Events";
import Locations from "@/pages/Locations";
import Certifications from "@/pages/Certifications";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Account from "@/pages/Account";
import Admin from "@/pages/Admin";
import Employee from "@/pages/Employee";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import CookieConsent from "@/components/CookieConsent";
import ScrollToHash from "@/components/ScrollToHash";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/certifications" element={<Certifications />} />
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
