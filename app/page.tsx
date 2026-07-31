import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import StickyNav from "@/components/StickyNav";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Attestations from "@/components/Attestations";
import Methodology from "@/components/Methodology";
import Solutions from "@/components/Solutions";
import Cta from "@/components/Cta";
import WhyUs from "@/components/WhyUs";
import Quote from "@/components/Quote";
import KeyFacts from "@/components/KeyFacts";
import Accreditations from "@/components/Accreditations";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import HomeMotion from "@/components/HomeMotion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Header />
      <main className="home-page">
        <Hero />
        <Mission />

        <div className="home_sticky-box">
          <StickyNav />
          <div className="home_sections-wr">
            <Services />
            <Testimonials />
            <Attestations />
            <Methodology />
            <Solutions />
            <Cta />
            <WhyUs />
            <Quote />
            <KeyFacts />
            <Accreditations />
          </div>
        </div>

        <Faq />
        <Blog />
      </main>
      <Footer />
      <HomeMotion />
    </div>
  );
}
