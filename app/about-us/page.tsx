import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";
import HomeMotion from "@/components/HomeMotion";

export const metadata: Metadata = {
  title: "About Us - CyberCrest",
  description:
    "CyberCrest — your information security compliance partner. Learn who we are, our key facts, global reach, team, and accreditations.",
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
