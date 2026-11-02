import { BLOG_POSTS } from "@/lib/blog-posts";
import type { Dictionary } from "@/lib/i18n/types";

export type KnowledgeChunk = {
  title: string;
  text: string;
  href: string;
};

export const SITE_PAGES = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us (mission, key facts, location, executive team)" },
  { href: "/services/research", label: "Quantum Computing Research services" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact Us (contact form, phone, email)" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

/** Product logos shown in the homepage hero (`components/Hero.tsx`). */
const FEATURED_PRODUCTS = ["Evefrine", "HawkLens", "AtondaFleet", "LeadHunter", "Pixenect"];

/** Social profiles linked from the footer (`components/Footer.tsx`). */
const SOCIAL_LINKS = [
  "LinkedIn https://www.linkedin.com/company/hawkbytes/",
  "Facebook https://www.facebook.com/hawkbytes",
  "X https://x.com/hawkbytes",
  "GitHub https://github.com/hawkbytes",
];

function chunk(title: string, href: string, ...parts: string[]): KnowledgeChunk {
  return { title, href, text: parts.filter(Boolean).join(" ") };
}

function list(items: string[]) {
  return items.join(", ");
}

/** Facts every answer may need, regardless of what the question matched. */
export function buildCompanySummary(t: Dictionary): string {
  return [
    t.hero.body,
    `Executive team: ${t.about.team.members.map((m) => `${m.name} (${m.role})`).join("; ")}.`,
    `Products featured on the site: ${list(FEATURED_PRODUCTS)}.`,
    `Contact: email ${t.footer.email}, phone ${t.footer.phone}, location ${t.footer.location}. The team replies to contact-form messages within 24 hours.`,
  ].join("\n");
}

/** Every piece of visible site copy, split into searchable chunks that link to where it appears. */
export function buildSiteKnowledge(t: Dictionary): KnowledgeChunk[] {
  const research = t.research;

  return [
    chunk(t.hero.title, "/", t.hero.body, t.mission.title, t.mission.col1, t.mission.col2),
    chunk(
      t.header.productsHeading,
      "/",
      `${t.header.productsHeading}: ${list([...t.header.productsCol1, ...t.header.productsCol2])}.`,
      `${t.header.researchHeading}: ${list(t.header.researchItems)}.`,
      `${t.header.servicesHeading}: ${list(t.header.servicesItems)}.`,
    ),
    chunk("HawkBytes products", "/", `Products and brands featured on the HawkBytes homepage: ${list(FEATURED_PRODUCTS)}.`),

    chunk(t.services.title, "/#services", t.services.intro),
    ...t.services.items.map((item) => chunk(item.title, "/#services", item.text)),
    chunk(
      t.methodology.title,
      "/#methodology",
      t.methodology.description,
      ...t.methodology.steps.map((step) => `${step.number}. ${step.title}: ${step.text}`),
    ),
    chunk(t.solutions.title, "/#solutions", t.solutions.intro),
    ...t.solutions.items.map((item) => chunk(item.title, "/#solutions", item.text)),
    chunk(t.cta.title, "/contact-us", t.cta.body),
    chunk(t.whyUs.title, "/#why-us", t.whyUs.intro),
    ...t.whyUs.features.map((feature) => chunk(feature.title, "/#why-us", feature.text)),
    chunk(`${t.quote.authorName}, ${t.quote.authorRole}`, "/", `"${t.quote.text}"`),
    chunk(
      t.keyFacts.title,
      "/about-us#facts",
      t.keyFacts.body,
      ...t.keyFacts.facts.map((fact) => `${fact.value} ${fact.text}.`),
    ),
    ...t.faq.items.map((item) => chunk(item.question, "/", item.answer)),

    chunk(t.about.title, "/about-us", t.about.body, t.about.mission.col1, t.about.mission.col2),
    chunk(t.about.location.title, "/about-us#location", t.about.location.body, `${t.footer.location}.`),
    chunk(
      t.about.offer.title,
      "/about-us#offer",
      t.about.offer.intro,
      ...t.about.offer.features.map((feature) => `${feature.title}: ${feature.text}`),
    ),
    chunk(
      t.about.team.title,
      "/about-us#team",
      t.about.team.intro,
      ...t.about.team.members.map((member) => `${member.name}: ${member.role}.`),
    ),

    chunk(
      t.contact.title,
      "/contact-us",
      t.contact.body,
      `Email: ${t.footer.email}.`,
      `Phone: ${t.footer.phone}.`,
      `Location: ${t.footer.location}.`,
      `Social media: ${list(SOCIAL_LINKS)}.`,
    ),
    chunk(
      t.careers.title,
      "/careers",
      t.careers.body,
      `${t.careers.openingsTitle}: ${t.careers.roles.map((role) => `${role.title} (${role.text})`).join("; ")}.`,
    ),

    chunk(research.hero.title, "/services/research", research.hero.body),
    chunk(research.methodology.title, "/services/research#methodology", research.methodology.description),
    chunk(research.services.title, "/services/research#services", research.services.intro),
    ...research.services.cards.map((card) => chunk(card.title, "/services/research#services", card.text)),
    chunk(
      research.help.title,
      "/services/research#how-we-help",
      ...research.help.items.map((item) => `${item.title}: ${item.text}`),
    ),
    chunk(research.midCta.title, "/contact-us", research.midCta.body),
    chunk(
      research.why.title,
      "/services/research#why-us",
      research.why.intro,
      ...research.why.items.map((item) => `${item.title}: ${item.text}`),
    ),
    chunk(
      research.about.title,
      "/services/research#about",
      research.about.intro,
      `${research.about.focusHeading}: ${research.about.focusList.join("; ")}.`,
      `${research.about.outcomesHeading}: ${research.about.outcomesList.join("; ")}.`,
    ),
    chunk(
      research.related.title,
      "/services/research#related",
      research.related.intro,
      ...research.related.items.map((item) => `${item.title}: ${item.text}`),
    ),
    ...research.faq.items.map((item) => chunk(item.question, "/services/research", item.answer)),

    chunk(
      t.blog.page.heroTitle,
      "/blog",
      t.blog.page.heroSubtitle,
      `Articles: ${BLOG_POSTS.map((post) => t.blog.page.posts[post.slug]?.title ?? post.title).join("; ")}.`,
    ),
    ...BLOG_POSTS.map((post) => {
      const copy = t.blog.page.posts[post.slug] ?? post;
      return chunk(
        `${t.blog.tagline}: ${copy.title}`,
        post.href,
        `${copy.description} (${post.category}, ${copy.date}, ${post.author})`,
      );
    }),

    ...t.privacy.sections.map((section) =>
      chunk(`${t.privacy.title}: ${section.heading}`, "/privacy-policy", ...section.paragraphs, ...(section.bullets ?? [])),
    ),
  ];
}
