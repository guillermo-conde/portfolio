import Navigation from "@/features/navigation/Navigation";
import HeroSection from "@/features/hero/HeroSection";
import AboutSection from "@/features/about/AboutSection";
import ProjectsSection from "@/features/projects/ProjectsSection";
import ContactSection from "@/features/contact/ContactSection";
import Footer from "@/shared/layout/Footer/Footer";

export default async function PortfolioPage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
