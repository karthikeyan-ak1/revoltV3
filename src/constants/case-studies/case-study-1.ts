import type { CaseStudyData } from './types'

export const caseStudy1: CaseStudyData = {
  slug: 'case-study-1',

  hero: {
    eyebrow: 'BUILD NEW APPLICATIONS',
    headline: 'A financial system built using AI-driven SDLC.',
    description:
      'SWFI moved from manual engineering handoffs to a fully governed AI delivery pipeline — cutting time-to-production while eliminating fragmented tooling.',
    ctaLabel: 'Start building',
    ctaHref: '/get-started',
    image: '/images/homeBg.webp',
    stats: [
      {
        value: '>70%',
        label: 'SDLC automated via agentic workflows',
      },
      {
        value: '0',
        label: 'Fragmented build, test, release pipelines',
      },
      {
        value: '0',
        label: 'Production-ready from first release',
      },
    ],
  },

  quote: {
    quote:
      'A mid-sized bank\u2019s engineering team used Revolte to execute their next core system from intent to production\u2014where AI agents orchestrated code generation, validation, deployment, and runtime readiness as one continuous, governed flow',
    authorName: 'James Mitchell',
    authorRole: 'CTO, Velocity Labs',
    authorImage: '/images/persona-person-1.png',
  },

  body: {
    sections: [
      {
        heading: 'What this proves',
        blocks: [
          {
            type: 'paragraph',
            text: 'Revolte can execute high-complexity financial systems from scratch - not as isolated development tasks, but as a fully orchestrated AI-native SDLC system.',
          },
          {
            type: 'bullets',
            items: [
              'AI agents operate across the entire lifecycle - not just code',
              'Context is preserved across code \u2192 test \u2192 deploy \u2192 runtime',
              'Execution stays governed, traceable, and production-aligned',
            ],
          },
          {
            type: 'paragraph',
            text: 'This is not faster coding. This is structural execution shift.',
          },
        ],
      },
      {
        heading: 'The situation',
        blocks: [
          {
            type: 'paragraph',
            text: 'The team wasn\u2019t blocked by architecture.\nThey were blocked by execution fragmentation.',
          },
          {
            type: 'label',
            text: 'As system complexity increased:',
          },
          {
            type: 'bullets',
            items: [
              'Code, CI/CD, testing, and infra workflows operated in silos',
              'Platform teams spent time maintaining pipelines, not enabling delivery',
              'Release cycles required coordination across multiple systems and checkpoints',
            ],
          },
          {
            type: 'label',
            text: 'Even before production, the system had already accumulated:',
          },
          {
            type: 'bullets',
            items: ['Delivery overhead', 'Coordination dependencies', 'Release risk'],
          },
          {
            type: 'image',
            imageSrc: '/images/homeBg.webp',
            imageSrcMobile: '/images/homeBg.webp',
            imageAlt: 'image',
          },
        ],
      },
      {
        heading: 'How Revolte was used',
        blocks: [
          {
            type: 'feature-list',
            featureItems: [
              {
                title: 'Agent-driven execution across the SDLC',
                description:
                  'Revolte can execute high-complexity financial systems from scratch - not as isolated development tasks, but as a fully orchestrated AI-native SDLC system.',
              },
              {
                title: 'Context-aware validation in flow',
                description:
                  'Test generation, regression validation, and release checks operated with full system context\u2014eliminating disconnected QA stages.',
              },
              {
                title: 'Governed deployment and release orchestration',
                description:
                  'Production workflows were executed through policy-aware agents with traceability across changes, approvals, and outcomes.',
              },
              {
                title: 'Continuous context accumulation',
                description:
                  'Every execution cycle strengthened system-level context\u2014improving decisioning across subsequent changes, releases, and operations.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Outcome',
        blocks: [
          { type: 'subheading', text: 'Execution moved from fragmented SDLC to unified system' },
          { type: 'label', text: 'No separate layers for:' },
          {
            type: 'bullets',
            items: ['CI/CD orchestration', 'Test management', 'Release coordination'],
          },
          { type: 'paragraph', text: 'Everything executed within one AI-native system.' },
          { type: 'subheading', text: 'Platform overhead reduced structurally' },
          { type: 'label', text: 'Engineering teams did not need to:' },
          {
            type: 'bullets',
            items: [
              'Maintain pipelines',
              'Manage tooling glue',
              'Coordinate across delivery stages',
            ],
          },
          { type: 'subheading', text: 'Production readiness built into execution' },
          {
            type: 'label',
            text: 'The system did not go through a \u201chardening phase.\u201d It evolved with:',
          },
          { type: 'bullets', items: ['Validation', 'Governance', 'Operational readiness'] },
          { type: 'paragraph', text: 'From the start.' },
          { type: 'subheading', text: 'Enterprise-grade execution under FinTech constraints' },
          {
            type: 'bullets',
            items: [
              'Traceable workflows across every change',
              'Controlled execution paths aligned with governance expectations',
              'Scalable to high transaction volumes and real-world usage',
            ],
          },
        ],
      },
      {
        heading: 'Why this matters',
        blocks: [
          { type: 'label', text: 'Most engineering teams are still operating with:' },
          {
            type: 'bullets',
            items: [
              'Copilots for code',
              'Separate CI/CD pipelines',
              'Disconnected testing systems',
              'Manual release coordination',
            ],
          },
          { type: 'paragraph', text: 'Revolte replaces this with:' },
          { type: 'blockquote', text: 'A single AI-native execution layer across the SDLC' },
          { type: 'paragraph', text: 'This means:' },
          {
            type: 'bullets',
            items: [
              'Faster time from intent \u2192 production',
              'Lower coordination overhead across teams',
              'Higher confidence in every release',
            ],
          },
          { type: 'paragraph', text: 'And most importantly' },
          {
            type: 'blockquote',
            text: 'You can build complex, regulated systems without inheriting delivery complexity',
          },
        ],
      },
    ],
    sidebar: [
      {
        icon: '/icons/document-duplicator.svg',
        title: 'About the Company',
        description:
          'Revolte can execute high-complexity financial systems from scratch - not as isolated development tasks, but as a fully orchestrated AI-native SDLC system.',
      },
      {
        icon: '/icons/document-duplicator.svg',
        title: 'Situation',
        description:
          'Revolte can execute high-complexity financial systems from scratch\u2014not as isolated development tasks, but as a fully orchestrated AI-native SDLC system.',
      },
      {
        icon: '/icons/document-duplicator.svg',
        title: 'The Problem',
        description: 'Revolte can execute high-complexity financial systems from scratch',
        bulletGroups: [
          ['CI/CD orchestration', 'Test management', 'Release coordination'],
          ['CI/CD orchestration', 'Test management', 'Release coordination'],
        ],
      },
    ],
  },
}
