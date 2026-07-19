import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
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
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
