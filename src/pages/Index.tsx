import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyPartnerSection from "@/components/sections/WhyPartnerSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FAMEHOUSE | Premium Influencer Marketing Agency</title>
        <meta
          name="description"
          content="FAMEHOUSE bridges the gap between brand vision and creator reality. We deliver authentic, performance-driven influencer marketing campaigns with vetted creators."
        />
        <meta
          name="keywords"
          content="influencer marketing, brand partnerships, creator economy, social media marketing, influencer agency India"
        />
        <meta property="og:title" content="FAMEHOUSE | Premium Influencer Marketing Agency" />
        <meta
          property="og:description"
          content="Your Fame. Our Strategy. The future of influencer partnerships starts here."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://famehouse.in" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <WhyPartnerSection />
          <ServicesSection />
          <PricingSection />
          <RoadmapSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
