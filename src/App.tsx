import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Industries from "@/pages/Industries";
import Careers from "@/pages/Careers";
import Apply from "@/pages/Apply";
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
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
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
