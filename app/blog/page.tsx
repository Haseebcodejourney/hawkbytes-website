import type { Metadata } from "next";
import Header from "@/components/Header";
import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — HawkBytes Insights",
  description:
    "Explore HawkBytes guidance on quantum computing research, AI products, and software engineering.",
};

export default function BlogRoute() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <BlogPage />
      </main>
      <Footer />
    </div>
  );
}
