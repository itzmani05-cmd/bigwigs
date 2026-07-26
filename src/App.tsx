import { Routes, Route, useLocation, matchPath } from "react-router-dom";
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
import SoftwareDevelopment from "@/pages/SoftwareDevelopment";
import HealthcareAI from "@/pages/HealthcareAI";
import TranslationLocalization from "@/pages/TranslationLocalization";
import TranscriptionServices from "@/pages/TranscriptionServices";
import VoiceDataCollection from "@/pages/VoiceDataCollection";
import DataCollection from "@/pages/DataCollection";
import DataQualityAssurance from "@/pages/DataQualityAssurance";
import DigitalPublishing from "@/pages/DigitalPublishing";
import AiDataAnnotation from "@/pages/AiDataAnnotation";
import GenerativeAi from "@/pages/GenerativeAi";
import AiAgentsAutomation from "@/pages/AiAgentsAutomation";
import NotFound from "@/pages/NotFound";
import CookieConsent from "@/components/CookieConsent";
import ScrollToHash from "@/components/ScrollToHash";
import ChatBot from "@/components/chatbot/ChatBot";

const KNOWN_ROUTE_PATHS = [
  "/",
  "/about",
  "/industries",
  "/careers",
  "/apply",
  "/blog",
  "/case-studies",
  "/case-studies/:slug",
  "/software-development",
  "/healthcare-ai",
  "/translation-localization",
  "/transcription-services",
  "/voice-data-collection",
  "/data-collection",
  "/data-quality-assurance",
  "/digital-publishing",
  "/ai-data-annotation",
  "/generative-ai",
  "/ai-agents-automation",
];

export default function App() {
  const location = useLocation();
  const isKnownRoute = KNOWN_ROUTE_PATHS.some((path) => matchPath(path, location.pathname));

  return (
    <>
      <ScrollToHash />
      {isKnownRoute && <Navbar />}
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
          {/* Services */}
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/healthcare-ai" element={<HealthcareAI />} />
          <Route path="/translation-localization" element={<TranslationLocalization />} />
          <Route path="/transcription-services" element={<TranscriptionServices />} />
          <Route path="/voice-data-collection" element={<VoiceDataCollection />} />
          <Route path="/data-collection" element={<DataCollection />} />
          <Route path="/data-quality-assurance" element={<DataQualityAssurance />} />
          <Route path="/digital-publishing" element={<DigitalPublishing />} />
          <Route path="/ai-data-annotation" element={<AiDataAnnotation />} />
          <Route path="/generative-ai" element={<GenerativeAi />} />
          <Route path="/ai-agents-automation" element={<AiAgentsAutomation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {isKnownRoute && <Footer />}
      <CookieConsent />
      <ChatBot />
    </>
  );
}
