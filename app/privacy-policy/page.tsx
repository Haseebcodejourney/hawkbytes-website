import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPage from "@/components/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — HawkBytes",
  description: "Read HawkBytes Privacy Policy to learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyRoute() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Header />
      <main>
        <PrivacyPage />
      </main>
      <Footer />
    </div>
  );
}
