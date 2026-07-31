import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — HawkBytes",
  description: "Get in touch with HawkBytes. Tell us about your project and we will get back to you within 24 hours.",
};

export default function ContactUsRoute() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer hideCta />
    </div>
  );
}
