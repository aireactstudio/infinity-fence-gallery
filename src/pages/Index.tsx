
import { motion } from "framer-motion";
import { NavMenu } from "@/components/ui/nav-menu";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FenceIcon, CheckCircle, ThumbsUp, Award, Star, MapPin, Calendar, Hammer, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FeaturedProject } from "@/components/sections/FeaturedProject";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavMenu />
      
      <HeroSection />
      
      <CompanyStats />
      
      <ServicesSection />
      
      <FeaturedProject />
      
      <ProcessSection />
      
      <WhyChooseUs />
      
      <PortfolioPreview />
      
      <TestimonialsSection />
      
      <ServiceAreas />
      
      <FaqSection />
      
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Index;
