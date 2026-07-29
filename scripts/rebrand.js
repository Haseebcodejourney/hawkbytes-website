const fs = require("fs");

// ── WhyUs.tsx ──────────────────────────────────────────────────────────────
let w = fs.readFileSync("components/WhyUs.tsx", "utf8");
w = w.replace(/const FEATURES = \[[\s\S]*?\];/, `const FEATURES = [
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04d9dc22d47a4a569f9d0_Feature%20Icon-1.svg",
    title: "Research-Driven",
    text: "Every product we build starts with deep research. HawkBytes invests in understanding the cutting edge of AI, quantum computing, and software engineering before a single line of code is written — ensuring your solution is future-proof from day one.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04e9cc9cabf34590aba5a_Feature%20Icon-2.svg",
    title: "End-to-End Delivery",
    text: "We handle everything — from discovery and architecture to development, testing, deployment, and maintenance. One team owns your product from idea to production, ensuring accountability and seamless execution.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac6b739fc452077b3b_Feature%20Icon-3.svg",
    title: "AI & Quantum Expertise",
    text: "HawkBytes has dedicated engineers and researchers specializing in machine learning, large language models, computer vision, and quantum algorithms — letting us tackle the most advanced technology challenges businesses face today.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac714c789fba13eaf7_Feature%20Icon-4.svg",
    title: "Fast, Agile Execution",
    text: "We move quickly without sacrificing quality. Our agile delivery model means you see working software in weeks, not months. We iterate based on your feedback, keeping every sprint focused on delivering real value.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eacfc9e84f29571a53c_Feature%20Icon-5.svg",
    title: "Senior Engineering Talent",
    text: "Every project at HawkBytes is led by senior engineers and researchers. We maintain rigorous hiring standards to ensure the people building your product have the expertise and passion to deliver exceptional results.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac300bf43216b50d33_Feature%20Icon-6.svg",
    title: "Client-Centric Culture",
    text: "Your goals are our goals. HawkBytes builds long-term partnerships based on transparency, honest communication, and genuine investment in your success. Our clients stay because the results speak for themselves.",
  },
];`);
w = w.replace("Why CyberCrest for Your Compliance Success", "Why HawkBytes is Your Innovation Partner");
w = w.replace(
  /Our cybersecurity compliance company[\s\S]*?partner of choice:/,
  "HawkBytes was built for ambitious companies that want to lead — not follow. We combine deep research, elite engineering, and a relentless focus on delivering technology that creates real competitive advantage. Here is why leading teams choose HawkBytes:"
);
fs.writeFileSync("components/WhyUs.tsx", w);
console.log("WhyUs done");

// ── KeyFacts.tsx ───────────────────────────────────────────────────────────
let k = fs.readFileSync("components/KeyFacts.tsx", "utf8");
k = k.replace(/const FACTS = \[[\s\S]*?\];/, `const FACTS = [
  {
    value: "50+",
    text: "AI and software products shipped across diverse industries worldwide",
  },
  {
    value: "3+",
    text: "years of active quantum computing research and applied experimentation",
  },
  {
    value: "120+",
    text: "successful web, mobile, and QA projects delivered for global clients",
  },
  {
    value: "100%",
    text: "client satisfaction — we don't close a project until you are delighted",
  },
];`);
k = k.replace("Key Facts about CyberCrest", "Key Facts about HawkBytes");
k = k.replace(
  /With a focused[\s\S]*?operate globally[\s\S]*?and APAC\./,
  "HawkBytes is a product-focused technology company with a global footprint. From our engineering hubs, we build AI systems, enterprise software, and quantum prototypes while serving clients across North America, Europe, the Middle East, and Asia."
);
fs.writeFileSync("components/KeyFacts.tsx", k);
console.log("KeyFacts done");

// ── Quote.tsx ──────────────────────────────────────────────────────────────
let q = fs.readFileSync("components/Quote.tsx", "utf8");
q = q.replace(
  /CyberCrest was founded[\s\S]*?in the industry\./,
  "HawkBytes was founded on a simple belief: the most transformative technology should be accessible to every ambitious business. By combining AI research, software craftsmanship, and quantum thinking, we build products that don't just solve today's problems — they unlock tomorrow's opportunities."
);
q = q.replace("John Huckeby", "Haseeb Ahmed");
q = q.replace("Founder and Managing Director", "Founder & CEO, HawkBytes");
q = q.replace(
  "Smiling middle-aged man in a dark blazer and light blue shirt against a gray background.",
  "HawkBytes founder and CEO."
);
fs.writeFileSync("components/Quote.tsx", q);
console.log("Quote done");

// ── Cta.tsx ────────────────────────────────────────────────────────────────
let c = fs.readFileSync("components/Cta.tsx", "utf8");
c = c.replace("Get expert compliance support", "Ready to Build Something Extraordinary?");
c = c.replace(
  /Achieve compliance with confidence[\s\S]*?CyberCrest team\./,
  "Whether it's an AI product, a software platform, a quantum prototype, or a digital service — let's talk about turning your vision into reality with the HawkBytes team."
);
c = c.replace("Talk to an expert", "Start a Project");
fs.writeFileSync("components/Cta.tsx", c);
console.log("Cta done");

console.log("All rebranding complete.");
