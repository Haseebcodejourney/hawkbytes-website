export type LabeledItem = {
  title: string;
  text: string;
};

export type StickyNavLinkText = {
  num: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  text: string;
  bgAlt: string;
  bgMobAlt: string;
  decorAlt?: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type MethodologyStep = {
  number: string;
  title: string;
  text: string;
};

export type SolutionItem = {
  title: string;
  text: string;
};

export type FeatureItem = {
  title: string;
  text: string;
};

export type KeyFact = {
  value: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogPostCopy = {
  title: string;
  description: string;
  date: string;
};

export type AttestationItem = {
  name: string;
  text: string;
  logoAlt: string;
};

export type AccreditationItem = {
  text: string;
};

export type TeamMember = {
  name: string;
  role: string;
};

export type PrivacySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ContactFormCopy = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  hearAbout: string;
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    hearSelect: string;
  };
  hearOptions: string[];
  recaptcha: string;
  consentBefore: string;
  privacyLink: string;
  consentAfter: string;
  submit: string;
  submitting: string;
  error: string;
};

export type Dictionary = {
  common: {
    talkToExpert: string;
    contactUs: string;
    readMore: string;
    learnMore: string;
    talkToExpertCaps: string;
  };

  language: {
    label: string;
    changeLanguage: string;
  };

  header: {
    products: string;
    productsHeading: string;
    research: string;
    researchHeading: string;
    services: string;
    servicesHeading: string;
    aboutUs: string;
    blog: string;
    ariaHome: string;
    ariaMain: string;
    openMenu: string;
    closeMenu: string;
    productsCol1: string[];
    productsCol2: string[];
    researchItems: string[];
    servicesItems: string[];
  };

  footer: {
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    productsSection: string;
    servicesSection: string;
    companySection: string;
    contactSection: string;
    productsCol1: string[];
    productsCol2: string[];
    servicesItems: string[];
    companyItems: string[];
    location: string;
    email: string;
    phone: string;
    linkedinAria: string;
    copyright: string;
    privacy: string;
    brandLine: string;
  };

  hero: {
    tagline: string;
    title: string;
    body: string;
    cta: string;
    logosAria: string;
    logoAlts: string[];
  };

  mission: {
    tagline: string;
    title: string;
    col1: string;
    col2: string;
  };

  stickyNav: {
    aria: string;
    cta: string;
    links: StickyNavLinkText[];
  };

  services: {
    tagline: string;
    title: string;
    intro: string;
    items: ServiceItem[];
  };

  testimonials: {
    tagline: string;
    title: string;
    prev: string;
    next: string;
    items: TestimonialItem[];
  };

  methodology: {
    tagline: string;
    title: string;
    description: string;
    steps: MethodologyStep[];
  };

  solutions: {
    tagline: string;
    title: string;
    intro: string;
    learnMore: string;
    items: SolutionItem[];
  };

  cta: {
    title: string;
    body: string;
    button: string;
  };

  whyUs: {
    tagline: string;
    title: string;
    intro: string;
    features: FeatureItem[];
  };

  quote: {
    text: string;
    authorName: string;
    authorRole: string;
    iconAlt: string;
    authorImgAlt: string;
  };

  keyFacts: {
    tagline: string;
    title: string;
    body: string;
    cta: string;
    facts: KeyFact[];
  };

  faq: {
    title: string;
    items: FaqItem[];
  };

  blog: {
    tagline: string;
    title: string;
    cta: string;
    page: {
      breadcrumbHome: string;
      breadcrumbBlog: string;
      heroTitle: string;
      heroSubtitle: string;
      heroLinkedIn: string;
      latestNews: string;
      articlesCount: string;
      more: string;
      searchPlaceholder: string;
      searchAria: string;
      noItems: string;
      authorTeam: string;
      categories: {
        All: string;
        QUANTUM: string;
        AI: string;
        SOFTWARE: string;
        RESEARCH: string;
        WEB: string;
      };
      posts: Record<string, BlogPostCopy>;
    };
  };

  attestations: {
    tagline: string;
    title: string;
    learnMore: string;
    items: AttestationItem[];
  };

  accreditations: {
    tagline: string;
    title: string;
    items: AccreditationItem[];
  };

  about: {
    nav: StickyNavLinkText[];
    tagline: string;
    title: string;
    body: string;
    cta: string;
    readMore: string;
    mission: {
      title: string;
      col1: string;
      col2: string;
      logosAria: string;
    };
    location: {
      title: string;
      body: string;
    };
    offer: {
      title: string;
      intro: string;
      features: FeatureItem[];
    };
    team: {
      title: string;
      intro: string;
      members: TeamMember[];
    };
  };

  contact: {
    tagline: string;
    title: string;
    body: string;
    callLabel: string;
    emailLabel: string;
    quote: {
      text: string;
      name: string;
      role: string;
    };
    form: ContactFormCopy;
    success: {
      title: string;
      body: string;
      close: string;
    };
  };

  careers: {
    tagline: string;
    title: string;
    body: string;
    cta: string;
    openingsTitle: string;
    apply: string;
    roles: FeatureItem[];
  };

  research: {
    nav: StickyNavLinkText[];
    hero: {
      title: string;
      body: string;
      cta: string;
      readMore: string;
    };
    methodology: {
      tagline: string;
      title: string;
      description: string;
    };
    services: {
      title: string;
      intro: string;
      cards: FeatureItem[];
    };
    help: {
      title: string;
      items: FeatureItem[];
    };
    midCta: {
      title: string;
      body: string;
      button: string;
    };
    why: {
      title: string;
      intro: string;
      items: FeatureItem[];
    };
    about: {
      title: string;
      intro: string;
      focusHeading: string;
      focusList: string[];
      outcomesHeading: string;
      outcomesList: string[];
    };
    related: {
      tagline: string;
      title: string;
      intro: string;
      learnMore: string;
      items: FeatureItem[];
    };
    faq: {
      title: string;
      items: FaqItem[];
    };
  };

  privacy: {
    title: string;
    sections: PrivacySection[];
  };

  blogPost: {
    breadcrumbHome: string;
    breadcrumbBlog: string;
    breadcrumbArticle: string;
    bodyP1: string;
    bodyP2Before: string;
    bodyP2After: string;
    bodyP2Template: string;
    bodyP3: string;
    cta: string;
  };
};
