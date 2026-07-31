import type { Metadata } from "next";
import Header from "@/components/Header";
import ResearchPage from "@/components/ResearchPage";
import Footer from "@/components/Footer";
import HomeMotion from "@/components/HomeMotion";

export const metadata: Metadata = {
  title: "Quantum Computing Research Services — HawkBytes",
  description:
    "HawkBytes quantum computing research services — algorithms, hybrid classical–quantum systems, applied prototypes, and a clear path from research to product.",
};

export default function ResearchServiceRoute() {
  return (
    <div className="relative min-h-screen overflow-x-clip research-page">
      <Header />
      <main>
        <ResearchPage />
      </main>
      <Footer />
      <HomeMotion />
    </div>
  );
}
