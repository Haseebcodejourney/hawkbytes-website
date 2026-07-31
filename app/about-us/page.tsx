import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";
import HomeMotion from "@/components/HomeMotion";

export const metadata: Metadata = {
  title: "About Us — HawkBytes",
  description:
    "Learn about HawkBytes — quantum computing research, AI products, software, and the digital services that help partners ship.",
};

export default function AboutUsRoute() {
  return (
    <div className="relative min-h-screen overflow-x-hidden about-page">
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
      <HomeMotion />
    </div>
  );
}
