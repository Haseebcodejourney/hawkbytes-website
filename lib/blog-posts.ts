export type BlogPost = {
  slug: string;
  href: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  author: string;
};

export const BLOG_CATEGORIES = [
  "All",
  "QUANTUM",
  "AI",
  "SOFTWARE",
  "RESEARCH",
  "WEB",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "quantum-vs-classical-computing",
    href: "/blog/quantum-vs-classical-computing",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/69a7079786ad185ffadb2d8d_standard-quality-control-collage-concept.webp",
    category: "QUANTUM",
    date: "March 27, 2026",
    title: "Quantum vs Classical Computing: What Actually Matters",
    description:
      "A clear guide to where quantum computing helps today, hybrid classical-quantum systems, and how research teams should think about the roadmap.",
    author: "HawkBytes Team",
  },
  {
    slug: "building-production-ai-products",
    href: "/blog/building-production-ai-products",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/69a705551a77124e96042f86_digital-security-shield-laptop.webp",
    category: "AI",
    date: "March 24, 2026",
    title: "Building Production AI Products That Survive Contact With Users",
    description:
      "How HawkBytes turns machine learning and generative AI research into reliable product features — evaluation, ops, and ownership included.",
    author: "HawkBytes Team",
  },
  {
    slug: "from-research-prototype-to-software",
    href: "/blog/from-research-prototype-to-software",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/69a70457b179ef8bb4635507_cybersecurity-action-protecting-data-with-encryption-network-security.webp",
    category: "SOFTWARE",
    date: "March 21, 2026",
    title: "From Research Prototype to Software Platform",
    description:
      "A practical path from experiment to production software — architecture, UX, QA, and the decisions that keep product quality high.",
    author: "HawkBytes Team",
  },
  {
    slug: "applied-quantum-research-playbook",
    href: "/blog/applied-quantum-research-playbook",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/69a7079786ad185ffadb2d8d_standard-quality-control-collage-concept.webp",
    category: "RESEARCH",
    date: "March 17, 2026",
    title: "An Applied Quantum Research Playbook",
    description:
      "How we structure discovery, experiments, and validation so quantum research moves toward usable capability — not just papers.",
    author: "HawkBytes Team",
  },
  {
    slug: "ai-product-evaluation-basics",
    href: "/blog/ai-product-evaluation-basics",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/69a705551a77124e96042f86_digital-security-shield-laptop.webp",
    category: "AI",
    date: "March 13, 2026",
    title: "AI Product Evaluation Basics",
    description:
      "Clear breakdown of offline metrics, online checks, and human review loops that keep AI products trustworthy after launch.",
    author: "HawkBytes Team",
  },
  {
    slug: "modern-website-performance-checklist",
    href: "/blog/modern-website-performance-checklist",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/69a70457b179ef8bb4635507_cybersecurity-action-protecting-data-with-encryption-network-security.webp",
    category: "WEB",
    date: "March 10, 2026",
    title: "Modern Website Performance Checklist",
    description:
      "A practical checklist for fast, accessible product and marketing sites — Core Web Vitals, images, fonts, and delivery.",
    author: "HawkBytes Team",
  },
  {
    slug: "hybrid-quantum-systems-explained",
    href: "/blog/hybrid-quantum-systems-explained",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/69a7079786ad185ffadb2d8d_standard-quality-control-collage-concept.webp",
    category: "QUANTUM",
    date: "March 7, 2026",
    title: "Hybrid Quantum Systems Explained",
    description:
      "Why most near-term value comes from hybrid classical-quantum workflows — and how teams should design around them.",
    author: "HawkBytes Team",
  },
  {
    slug: "qa-for-ai-powered-products",
    href: "/blog/qa-for-ai-powered-products",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/69a705551a77124e96042f86_digital-security-shield-laptop.webp",
    category: "SOFTWARE",
    date: "March 4, 2026",
    title: "QA for AI-Powered Products",
    description:
      "How quality engineering changes when models are in the loop — regression, eval suites, and release gates that actually help.",
    author: "HawkBytes Team",
  },
];
