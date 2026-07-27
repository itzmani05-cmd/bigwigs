import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Industries from "@/pages/Industries";
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
import GenerativeAI from "@/pages/GenerativeAi";
import AIAgentsAutomation from "@/pages/AiAgentsAutomation";
import CookieConsent from "@/components/CookieConsent";
import ScrollToHash from "@/components/ScrollToHash";
import ChatBot from "@/components/chatbot/ChatBot";

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
          <Route path="/blog" element={<Blog />} />

          {/* Case Studies */}
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
          <Route path="/generative-ai" element={<GenerativeAI />} />
          <Route path="/ai-agents-automation" element={<AIAgentsAutomation />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
      <ChatBot />
    </>
  );
}
