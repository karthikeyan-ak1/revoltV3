import type { UseCaseData } from './types'

export const useCase1: UseCaseData = {
  slug: 'use-case-1',

  hero: {
    headline: 'Build apps from intent to production.',
    description:
      'Revolte runs coding, testing, deployment, and runtime workflows with governed AI, letting your team focus on what to build.',
    ctaLabel: 'Start building',
    ctaHref: '/get-started',
    backgroundImage: '/images/homeB.webp',
    backgroundImageMobile: '/images/homeB.webp',
  },

  persona: {
    eyebrow: 'PERSONA',
    headline: "When you're starting something new,",
    headlineItalic: 'delivery',
    headlineEnd: "shouldn't slow you down",
    description:
      "Most new applications don't fail at ideas—they slow down when delivery fragments across tools, handoffs, and coordination overhead.",
    ctaLabel: 'Learn more',
    ctaHref: '#',
    autoPlayInterval: 3000,
    personas: [
      {
        image: '/images/persona-person-1.png',
        role: 'CTO / VP Engineering',
        problemStatement:
          'You want to move from concept to production fast—without creating a new system of processes to manage.',
        profileBgColor: '#e2d9c8',
        roleBgColor: '#FFFFFF',
        problemBgColor: '#000000',
      },
      {
        image: '/images/persona-person-2.png',
        role: 'Lead Developer',
        problemStatement:
          'You need to ship features consistently without getting buried in infra, config, or context-switching.',
        profileBgColor: '#C7CED9',
        roleBgColor: '#F5F5F5',
        problemBgColor: '#1A1A2E',
      },
      {
        image: '/images/persona-person-3.png',
        role: 'Product Manager',
        problemStatement:
          'You want engineering velocity to match product ambition—without adding headcount to close the gap.',
        profileBgColor: '#D9C7C7',
        roleBgColor: '#FFF8F8',
        problemBgColor: '#2E1A1A',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'HOW IT WORKS',
    headline: 'How Revolte Executes',
    headlineItalic: 'Software',
    headlineEnd: 'Delivery.',
    description:
      'Engineers define requirements and approve outcomes. Revolte executes development, testing, deployment, and runtime operations across the software delivery lifecycle.',
    diagramImage: '/images/homeBg.webp',
    diagramImageMobile: '/images/use-cases/app-development/how-it-works-mobile.png',
    diagramAlt:
      'Revolte software delivery workflow diagram showing Zero-Touch Development, Command Line Interface, Quality assurance & release, and Production Deployment stages',
  },
  solution: {
    eyebrow: 'SOLUTION',
    headline: 'What',
    headlineItalic: 'Revolte',
    headlineEnd: 'executes for new builds',
    ctaLabel: 'Get Started',
    ctaHref: '/get-started',
    tabs: [
      {
        icon: '/icons/code.svg',
        tabLabel: 'Code generation',
        subHeadline: 'Build from intent',
        subDescription: 'Turn product inputs into structured engineering execution',
        features: [
          {
            icon: '/icons/solution/feature.svg',
            title: 'Code generation',
            description: 'Turn product inputs into structured engineering execution',
          },
          {
            icon: '/icons/solution/feature.svg',
            title: 'Context mapping',
            description: 'Uses designs, specs, and existing inputs to guide execution',
          },
          {
            icon: '/icons/solution/feature.svg',
            title: 'Structured workflows',
            description: 'Executes development through sequenced tasks',
          },
        ],
        previewImage: '/images/homeBg.webp',
        previewAlt: 'Code generation preview showing GitHub connection setup',
      },
      {
        icon: '/icons/code.svg',
        tabLabel: 'Context mapping',
        subHeadline: 'Stay in context',
        subDescription: 'Uses designs, specs, and existing inputs to guide execution',
        features: [
          {
            icon: '/icons/solution/feature.svg',
            title: 'Spec ingestion',
            description: 'Reads product specs and design files directly',
          },
          {
            icon: '/icons/solution/feature.svg',
            title: 'Codebase awareness',
            description: 'Maps existing code to avoid regressions and duplication',
          },
          {
            icon: '/icons/solution/feature.svg',
            title: 'Decision tracing',
            description: 'Every output traces back to a requirement',
          },
        ],
        previewImage: '/images/use-cases/app-development/solution-context-mapping.png',
        previewAlt: 'Context mapping preview showing spec-to-code linkage',
      },
      {
        icon: '/icons/code.svg',
        tabLabel: 'Structured workflows',
        subHeadline: 'Ship in sequence',
        subDescription: 'Executes development through sequenced, auditable tasks',
        features: [
          {
            icon: '/icons/solution/feature.svg',
            title: 'Task sequencing',
            description: 'Breaks down delivery into ordered, trackable steps',
          },
          {
            icon: '/icons/solution/feature.svg',
            title: 'Approval gates',
            description: 'Engineers review and approve before progression',
          },
          {
            icon: '/icons/solution/feature.svg',
            title: 'Audit trail',
            description: 'Full log of every action taken across the workflow',
          },
        ],
        previewImage: '/images/use-cases/app-development/solution-structured-workflows.png',
        previewAlt: 'Structured workflows preview showing task sequencing',
      },
    ],
  },
  proof: {
    eyebrow: 'PROOF',
    headline: 'From concept to production without',
    headlineItalic: 'delivery',
    headlineEnd: 'overheat',
    cardImageMobile: '/images/use-cases/app-development/proof-card-mobile.png',
    cardAlt:
      'SWFI case study — moved from requirement to live system faster without building separate workflows for coding, testing, and deployment',
    cardImage: '/images/homeBg.webp',
    cardText:
      "Most new applications don't fail at ideas—they slow down when delivery fragments across tools, handoffs, and coordination overhead.",
  },
  valueProp: {
    eyebrow: 'CORE VALUE PROPOSITION',
    eyebrowColor: '#E63A2E',
    headline: 'A different way to build',
    headlineItalic: 'software',
    mobileHeadline: "When you're starting something new, delivery shouldn't slow you down",
    mobileDescription:
      "Most new applications don't fail at ideas—they slow down when delivery fragments across tools, handoffs, and coordination overhead.",
    items: [
      {
        number: '01',
        title: 'Intent becomes execution',
        description:
          'Revolte turns requirements into code, tests, and deployable systems through AI-driven workflows.',
      },
      {
        number: '02',
        title: 'One system, not stitched workflows',
        description:
          'Coding, validation, deployment, and operations run in a single governed flow.',
      },
      {
        number: '03',
        title: 'Engineers stay in control',
        description:
          'Your team defines intent, reviews output, and governs decisions. Revolte handles execution.',
      },
      {
        number: '04',
        title: 'Production readiness from the start',
        description:
          'Every change moves toward a deployable state—no late-stage assembly or surprises.',
      },
    ],
  },
  features: {
    headline: 'Fits into how your team already works',
    cards: [
      {
        illustration: '/icons/layers-manager.svg',
        illustrationAlt: 'Layered stack illustration',
        illustrationHeight: 142,
        illustrationWidth: 240,
        title: 'Works with your stack',
        description: 'Integrates with repositories, Jira, cloud platforms, and existing workflows',
        cardBgColor: '#DBD5FB',
      },
      {
        illustration: '/icons/document-duplicator.svg',
        illustrationAlt: 'Documents illustration',
        illustrationHeight: 86,
        illustrationWidth: 160,
        title: 'Start fresh or connect existing work',
        description: 'Supports both new applications and existing codebases',
        cardBgColor: '#D7F1D9',
      },
      {
        illustration: '/icons/task-complete.svg',
        illustrationAlt: 'Sun/execution illustration',
        illustrationHeight: 149.5,
        illustrationWidth: 149.5,
        title: 'Execution with control',
        description: 'AI runs the workflow. Engineers approve and govern outcomes',
        cardBgColor: '#EDDDC0',
      },
      {
        illustration: '/icons/queue-list.svg',
        illustrationAlt: 'Traceable workflow illustration',
        illustrationHeight: 147,
        illustrationWidth: 213,
        title: 'Traceable from intent to production',
        description: 'Every change is visible, reviewable, and linked back to its origin',
        cardBgColor: '#F6D6F0',
      },
    ],
  },

  ctaBanner: {
    headline: 'Start building without managing delivery complexity',
    ctaLabel: 'Start Building',
    ctaHref: '/get-started',
    backgroundImage: '/images/start-building-bg.png',
  },
  faq: {
    headline: 'Frequently',
    headlineItalic: 'Asked',
    headlineEnd: 'Questions',
    contactLabel: 'Still have questions?',
    contactSubtext: 'Our team can help you!',
    contactCtaLabel: 'Contact us',
    contactCtaHref: '/contact',
    viewMoreLabel: 'View more',
    viewMoreHref: '/faq',
    items: [
      {
        question: 'Is Revolte only for new applications?',
        answer: 'No. It works for both new builds and existing systems.',
      },
      {
        question: 'Does Revolte replace developers?',
        answer:
          'No. Revolte handles execution while engineers define intent, review output, and govern decisions. Your team stays in control.',
      },
      {
        question: 'Is this just a coding tool?',
        answer:
          'No. Revolte covers the full delivery lifecycle—coding, testing, deployment, and runtime operations—in a single governed system.',
      },
      {
        question: 'Do we need to change our stack?',
        answer:
          'No. Revolte integrates with your existing repositories, CI/CD tools, cloud platforms, and workflows.',
      },
    ],
  },
}
