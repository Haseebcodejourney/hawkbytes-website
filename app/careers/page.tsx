import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersPage from "@/components/CareersPage";

export const metadata: Metadata = {
  title: "Careers — HawkBytes",
  description:
    "Join HawkBytes — build quantum research, AI products, and software with a research-led team.",
};

export default function CareersRoute() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Header />
      <main>
        <CareersPage />
      </main>
      <Footer />
    </div>
  );
}
