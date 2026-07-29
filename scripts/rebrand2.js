const fs = require("fs");

// ── Footer.tsx ─────────────────────────────────────────────────────────────
let f = fs.readFileSync("components/Footer.tsx", "utf8");

// Nav columns
f = f.replace(
  /const COMPLIANCE_COL1 = \[[\s\S]*?\];/,
  `const COMPLIANCE_COL1 = [
  { label: "AI Products", href: "/services/ai-products" },
  { label: "Machine Learning", href: "/services/machine-learning" },
  { label: "Natural Language Processing", href: "/services/nlp" },
  { label: "Computer Vision", href: "/services/computer-vision" },
  { label: "Generative AI", href: "/services/generative-ai" },
  { label: "AI Research", href: "/services/ai-research" },
  { label: "Data Engineering", href: "/services/data-engineering" },
];`
);

f = f.replace(
  /const COMPLIANCE_COL2 = \[[\s\S]*?\];/,
  `const COMPLIANCE_COL2 = [
  { label: "Software Products", href: "/services/software" },
  { label: "SaaS Platforms", href: "/services/saas" },
  { label: "Enterprise Systems", href: "/services/enterprise" },
  { label: "Cloud Architecture", href: "/services/cloud" },
  { label: "Quantum Computing", href: "/services/quantum" },
  { label: "Quantum Algorithms", href: "/services/quantum-algorithms" },
];`
);

f = f.replace(
  /const TECHNICAL = \[[\s\S]*?\];/,
  `const TECHNICAL = [
  { label: "WEB DEVELOPMENT", href: "/services/web-development" },
  { label: "MOBILE APPS (iOS & Android)", href: "/services/mobile-apps" },
  { label: "QA & AUTOMATED TESTING", href: "/services/qa-testing" },
  { label: "UI/UX DESIGN", href: "/services/design" },
  { label: "DEVOPS & CI/CD", href: "/services/devops" },
];`
);

f = f.replace(
  `const COMPANY = [
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT", href: "/contact-us" },
  { label: "BLOG", href: "https://www.cybercrestcompliance.com/blog" },
];`,
  `const COMPANY = [
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT", href: "/contact-us" },
  { label: "BLOG", href: "/blog" },
  { label: "CAREERS", href: "/careers" },
];`
);

// Footer section titles
f = f.replace('"Compliance and Data Privacy"', '"AI Products & Research"');
f = f.replace('"Technical Services"', '"Digital Services"');

// Footer CTA
f = f.replace("Move forward with confidence", "Build Something Extraordinary");
f = f.replace(
  "Don&apos;t let compliance delays hold you back from growing your\n                            business. Get in touch to talk it over with a CyberCrest expert.",
  "From AI to quantum — let&apos;s build the technology that gives your business an unfair advantage. Get in touch with the HawkBytes team."
);
f = f.replace(">Talk to an expert<", ">Start a Project<");

// Contact info
f = f.replace("Encinitas, CA 92024", "Lahore, Pakistan");
f = f.replace("sales@cybercrestcompliance.com", "hello@hawkbytes.io");
f = f.replace("+1 (800) 587-1250", "+92 300 000 0000");
f = f.replace(
  `href="https://www.linkedin.com/company/cybercrest-compliance/?trk=ppro_cprof"`,
  `href="https://www.linkedin.com/company/hawkbytes/"`
);
f = f.replace('aria-label="CyberCrest on LinkedIn"', 'aria-label="HawkBytes on LinkedIn"');

// Copyright & logo alt
f = f.replace("© <span className=\"year\">{year}</span> Cybercrest Compliance Services.\n                    All rights reserved", "© <span className=\"year\">{year}</span> HawkBytes Technologies. All rights reserved");
f = f.replace('alt="CyberCrest"', 'alt="HawkBytes"');

// "Made by" — remove Foursets reference, replace with HawkBytes
f = f.replace("Website made by:", "HawkBytes Technologies");

fs.writeFileSync("components/Footer.tsx", f);
console.log("Footer done");

// ── page metadata ──────────────────────────────────────────────────────────
// app/page.tsx
let p = fs.readFileSync("app/page.tsx", "utf8");
p = p.replace(/title:.*CyberCrest.*/, 'title: "HawkBytes — AI, Software & Quantum Innovation",');
p = p.replace(/description:.*\n.*CyberCrest.*compliance.*"/, 'description: "HawkBytes is a technology company building AI products, software solutions, and quantum computing research — delivering world-class web, mobile, and QA services worldwide.",');
fs.writeFileSync("app/page.tsx", p);
console.log("page.tsx done");

// app/contact-us/page.tsx
let cu = fs.readFileSync("app/contact-us/page.tsx", "utf8");
cu = cu.replace("Contact Us - CyberCrest", "Contact Us — HawkBytes");
cu = cu.replace(/description:.*\n.*CyberCrest.*/, 'description: "Get in touch with HawkBytes. Tell us about your project and we will get back to you within 24 hours.",');
fs.writeFileSync("app/contact-us/page.tsx", cu);
console.log("contact-us done");

// app/about-us/page.tsx
let au = fs.readFileSync("app/about-us/page.tsx", "utf8");
au = au.replace("About Us - CyberCrest", "About Us — HawkBytes");
au = au.replace(/description:.*\n.*CyberCrest.*/, 'description: "Learn about HawkBytes — our mission, our team, our AI and quantum research, and how we deliver transformative technology solutions globally.",');
fs.writeFileSync("app/about-us/page.tsx", au);
console.log("about-us done");

// app/privacy-policy/page.tsx
let pp = fs.readFileSync("app/privacy-policy/page.tsx", "utf8");
pp = pp.replace("Privacy Policy - CyberCrest", "Privacy Policy — HawkBytes");
pp = pp.replace(/description:.*\n.*CyberCrest.*/, 'description: "Read HawkBytes Privacy Policy to learn how we collect, use, and protect your personal information.",');
fs.writeFileSync("app/privacy-policy/page.tsx", pp);
console.log("privacy-policy done");

console.log("All done.");
