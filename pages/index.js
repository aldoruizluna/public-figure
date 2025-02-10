import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
