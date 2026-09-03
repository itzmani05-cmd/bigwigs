import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/scroll/ScrollProgress";
import Home from "@/pages/Home";
import CookieConsent from "@/components/CookieConsent";
import ScrollToHash from "@/components/ScrollToHash";
import ScrollToTop from "@/components/ScrollToTop";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import WebSiteJsonLd from "@/components/seo/WebSiteJsonLd";
import LaunchGate from "@/components/LaunchGate";

const About = lazy(() => import("@/pages/About"));
const Industries = lazy(() => import("@/pages/Industries"));
const Services = lazy(() => import("@/pages/Services"));
const HealthcareLifeSciences = lazy(() => import("@/pages/HealthcareLifeSciences"));
const AutomotiveMobility = lazy(() => import("@/pages/AutomotiveMobility"));
const RetailEcommerce = lazy(() => import("@/pages/RetailEcommerce"));
const BfsiSolutions = lazy(() => import("@/pages/BfsiSolutions"));
const ManufacturingIndustrialSolutions = lazy(() => import("@/pages/ManufacturingIndustrialSolutions"));
const EducationElearningSolutions = lazy(() => import("@/pages/EducationElearningSolutions"));
const GovernmentPublicSectorSolutions = lazy(() => import("@/pages/GovernmentPublicSectorSolutions"));
const PublishingMediaSolutions = lazy(() => import("@/pages/PublishingMediaSolutions"));
const Careers = lazy(() => import("@/pages/Careers"));
const Apply = lazy(() => import("@/pages/Apply"));
const Demo = lazy(() => import("@/pages/Demo"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("@/pages/CaseStudyDetail"));
const SoftwareDevelopment = lazy(() => import("@/pages/SoftwareDevelopment"));
const HealthcareAI = lazy(() => import("@/pages/HealthcareAI"));
const TranslationLocalization = lazy(() => import("@/pages/TranslationLocalization"));
const TranscriptionServices = lazy(() => import("@/pages/TranscriptionServices"));
const VoiceDataCollection = lazy(() => import("@/pages/VoiceDataCollection"));
const DataCollection = lazy(() => import("@/pages/DataCollection"));
const DataQualityAssurance = lazy(() => import("@/pages/DataQualityAssurance"));
const Quality = lazy(() => import("@/pages/Quality"));
const DigitalPublishing = lazy(() => import("@/pages/DigitalPublishing"));
const AiDataAnnotation = lazy(() => import("@/pages/AiDataAnnotation"));
const GenerativeAI = lazy(() => import("@/pages/GenerativeAi"));
const AIAgentsAutomation = lazy(() => import("@/pages/AiAgentsAutomation"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LaunchGate>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <ScrollToHash />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={null}>
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
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

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
          <Route path="/quality" element={<Quality />} />
          <Route path="/service/digital-publishing" element={<DigitalPublishing />} />
          <Route path="/service/ai-data-annotation" element={<AiDataAnnotation />} />
          <Route path="/service/generative-ai" element={<GenerativeAI />} />
          <Route path="/service/ai-agents-automation" element={<AIAgentsAutomation />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
      </LaunchGate>
    </MotionConfig>
  );
}
