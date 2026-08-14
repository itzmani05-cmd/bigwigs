import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Industries from "@/pages/Industries";
import Services from "@/pages/Services";
import HealthcareLifeSciences from "@/pages/HealthcareLifeSciences";
import AutomotiveMobility from "@/pages/AutomotiveMobility";
import RetailEcommerce from "@/pages/RetailEcommerce";
import BfsiSolutions from "@/pages/BfsiSolutions";
import ManufacturingIndustrialSolutions from "@/pages/ManufacturingIndustrialSolutions";
import EducationElearningSolutions from "@/pages/EducationElearningSolutions";
import GovernmentPublicSectorSolutions from "@/pages/GovernmentPublicSectorSolutions";
import PublishingMediaSolutions from "@/pages/PublishingMediaSolutions";
import Careers from "@/pages/Careers";
import Apply from "@/pages/Apply";
import Demo from "@/pages/Demo";
import Certifications from "@/pages/Certifications";
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
import GenerativeAI from "@/pages/GenerativeAi";
import AIAgentsAutomation from "@/pages/AiAgentsAutomation";
import CookieConsent from "@/components/CookieConsent";
import ScrollToHash from "@/components/ScrollToHash";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBot from "@/components/chatbot/ChatBot";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToHash />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/industries" element={<Industries />} />
          
          {/* Industries */}
          <Route path="/industries/healthcare-life-sciences" element={<HealthcareLifeSciences />} />
          <Route path="/industries/automotive-mobility" element={<AutomotiveMobility />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/industries/bfsi-solutions" element={<BfsiSolutions />} />
          <Route path="/industries/manufacturing-industrial-solutions" element={<ManufacturingIndustrialSolutions />} />
          <Route path="/industries/education-elearning-solutions" element={<EducationElearningSolutions />} />
          <Route path="/industries/government-public-sector-solutions" element={<GovernmentPublicSectorSolutions />} />
          <Route path="/industries/publishing-media-solutions" element={<PublishingMediaSolutions />} />
          
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/demo" element={<Demo />} />

          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/service/software-development" element={<SoftwareDevelopment />} />
          <Route path="/service/healthcare-ai" element={<HealthcareAI />} />
          <Route path="/service/translation-localization" element={<TranslationLocalization />} />
          <Route path="/service/transcription-services" element={<TranscriptionServices />} />
          <Route path="/service/voice-data-collection" element={<VoiceDataCollection />} />
          <Route path="/service/data-collection" element={<DataCollection />} />
          <Route path="/service/data-quality-assurance" element={<DataQualityAssurance />} />
          <Route path="/service/digital-publishing" element={<DigitalPublishing />} />
          <Route path="/service/ai-data-annotation" element={<AiDataAnnotation />} />
          <Route path="/service/generative-ai" element={<GenerativeAI />} />
          <Route path="/service/ai-agents-automation" element={<AIAgentsAutomation />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
      <ChatBot />
    </MotionConfig>
  );
}
