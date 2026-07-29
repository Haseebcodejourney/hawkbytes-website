const fs = require("fs");

// ── Header.tsx ─────────────────────────────────────────────────────────────
let h = fs.readFileSync("components/Header.tsx", "utf8");

h = h.replace(
  /const COMPLIANCE_LINKS = \[[\s\S]*?\];/,
  `const COMPLIANCE_LINKS = [
  { label: "AI Products", href: "/services/ai-products" },
  { label: "Machine Learning", href: "/services/machine-learning" },
  { label: "NLP & LLMs", href: "/services/nlp" },
  { label: "Computer Vision", href: "/services/computer-vision" },
  { label: "Generative AI", href: "/services/generative-ai" },
  { label: "AI Research", href: "/services/ai-research" },
];`
);

h = h.replace(
  /const COMPLIANCE_LINKS_COL2 = \[[\s\S]*?\];/,
  `const COMPLIANCE_LINKS_COL2 = [
  { label: "Software Products", href: "/services/software" },
  { label: "SaaS Platforms", href: "/services/saas" },
  { label: "Cloud Architecture", href: "/services/cloud" },
  { label: "Quantum Computing", href: "/services/quantum" },
  { label: "Data Engineering", href: "/services/data-engineering" },
];`
);

h = h.replace(
  /const DATA_PRIVACY_LINKS = \[[\s\S]*?\];/,
  `const DATA_PRIVACY_LINKS = [
  { label: "Quantum Algorithms", href: "/services/quantum-algorithms" },
  { label: "Enterprise Systems", href: "/services/enterprise" },
];`
);

h = h.replace(
  /const TECHNICAL_LINKS = \[[\s\S]*?\];/,
  `const TECHNICAL_LINKS = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "QA & Automated Testing", href: "/services/qa-testing" },
  { label: "UI/UX Design", href: "/services/design" },
  { label: "DevOps & CI/CD", href: "/services/devops" },
];`
);

// Nav dropdown labels
h = h.replace(">OUR SERVICES<", ">OUR SERVICES<");
h = h.replace(">Compliance & Data Privacy<", ">AI & Software<");
h = h.replace(">Technical Services<", ">Digital Services<");

// Contact button text
h = h.replace(">GET IN TOUCH<", ">GET IN TOUCH<");

// aria-labels
h = h.replace('aria-label="CyberCrest home"', 'aria-label="HawkBytes home"');

fs.writeFileSync("components/Header.tsx", h);
console.log("Header done");

// ── AboutPage.tsx ──────────────────────────────────────────────────────────
let a = fs.readFileSync("components/AboutPage.tsx", "utf8");

// Hero heading
a = a.replace(
  /Your Trusted[\s\S]*?Partner[\s\S]*?(?=<\/h1>)/,
  "The Technology Company Building the Future"
);
a = a.replace(
  "Trusted information security compliance partner",
  "AI · Software · Quantum · Digital Services"
);

// Hero tagline description
a = a.replace(
  /CyberCrest is.*?compliant[\s\S]*?move forward\./s,
  "HawkBytes pioneers AI products, software engineering, and quantum computing research — delivering end-to-end digital services that help ambitious businesses scale faster, build smarter, and stay ahead."
);

// Mission section
a = a.replace(
  /Simplify Complex[\s\S]*?(?=<\/h2>)/s,
  "Pioneering Intelligent Technology Through Research, Engineering, and Innovation"
);
a = a.replace(
  /CyberCrest's mission[\s\S]*?(?=<\/p>)/s,
  "HawkBytes exists to make advanced technology accessible to every ambitious business. We research, build, and deploy AI systems, software products, and quantum solutions that create real competitive advantage."
);

// Location / map section description
a = a.replace("Our global compliance practice", "Our global technology practice");
a = a.replace(/cybercrest compliance offices|encinitas|california/gi, "Lahore, Pakistan");

// Team section heading
a = a.replace("Meet the Leadership Team", "Meet the Leadership Team");

// CTA button in hero
a = a.replace(">TALK TO AN EXPERT<", ">START A PROJECT<");
a = a.replace(">VIEW OUR SERVICES<", ">VIEW OUR SERVICES<");

// Any remaining CyberCrest references
a = a.replace(/CyberCrest/g, "HawkBytes");
a = a.replace(/cybercrest/g, "hawkbytes");
a = a.replace(/cybercrestcompliance\.com/g, "hawkbytes.io");

fs.writeFileSync("components/AboutPage.tsx", a);
console.log("AboutPage done");

// ── ContactPage.tsx ────────────────────────────────────────────────────────
let c = fs.readFileSync("components/ContactPage.tsx", "utf8");
c = c.replace(/CyberCrest/g, "HawkBytes");
c = c.replace(/cybercrest/g, "hawkbytes");
c = c.replace(/cybercrestcompliance\.com/g, "hawkbytes.io");
c = c.replace("sales@hawkbytes.io", "hello@hawkbytes.io");
c = c.replace(/\+1 \(800\) 587-1250/g, "+92 300 000 0000");
c = c.replace("Encinitas, CA 92024", "Lahore, Pakistan");
c = c.replace("Talk to an expert", "Start a Project");
c = c.replace("Get in Touch", "Get in Touch");
c = c.replace(
  /Let.s talk about how[\s\S]*?for you\./s,
  "Tell us about your project — whether it is an AI product, a software platform, a quantum prototype, or a digital service. We will get back to you within 24 hours."
);
fs.writeFileSync("components/ContactPage.tsx", c);
console.log("ContactPage done");

// ── Privacy Policy page ────────────────────────────────────────────────────
let pp = fs.readFileSync("app/privacy-policy/page.tsx", "utf8");
pp = pp.replace(/CyberCrest, Inc/g, "HawkBytes Technologies, Inc");
pp = pp.replace(/CyberCrest,/g, "HawkBytes,");
pp = pp.replace(/CyberCrest\b/g, "HawkBytes");
pp = pp.replace(/cybercrestcompliance\.com/g, "hawkbytes.io");
pp = pp.replace(/www\.CyberCrestCompliance\.com/g, "www.hawkbytes.io");
pp = pp.replace(/info@cybercrestcompliance\.com/g, "privacy@hawkbytes.io");
fs.writeFileSync("app/privacy-policy/page.tsx", pp);
console.log("Privacy Policy done");

// ── layout metadata ────────────────────────────────────────────────────────
const layoutPath = "app/layout.tsx";
if (fs.existsSync(layoutPath)) {
  let l = fs.readFileSync(layoutPath, "utf8");
  l = l.replace(/CyberCrest/g, "HawkBytes");
  fs.writeFileSync(layoutPath, l);
  console.log("layout.tsx done");
}

console.log("All rebrand3 complete.");
