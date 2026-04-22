import type { CaseStudyData } from './types'

export const caseStudy3: CaseStudyData = {
  slug: 'case-study-3',

  hero: {
    eyebrow: 'DELIVERY INTELLIGENCE',
    headline: 'From reactive firefighting to proactive delivery.',
    description:
      "An enterprise SaaS team used Revolte's DORA and flow metrics to identify bottlenecks and cut mean time to recovery by more than half.",
    ctaLabel: 'Start building',
    ctaHref: '/get-started',
    image: '/images/homeB.webp',
    stats: [
      {
        value: '55%',
        label: 'Reduction in mean time to recovery',
      },
      {
        value: '3x',
        label: 'Improvement in deployment frequency',
      },
      {
        value: '<1h',
        label: 'Average lead time for changes',
      },
    ],
  },

  quote: {
    quote:
      'For the first time we had a single view of where delivery was slowing down\u2014Revolte\u2019s DORA dashboards made the bottlenecks obvious and gave us the data to fix them fast',
    authorName: 'Priya Nair',
    authorRole: 'Head of Platform, NovaSaaS',
    authorImage: '/images/persona-person-3.png',
  },

  body: {
    sections: [
      {
        heading: 'What this proves',
        blocks: [
          {
            type: 'paragraph',
            text: 'Delivery intelligence is only useful when it drives action. Revolte connects metrics directly to the workflows causing them.',
          },
          {
            type: 'bullets',
            items: [
              'DORA metrics surfaced lead time and change failure in real time',
              'Flow metrics highlighted WIP accumulation before it caused delays',
              'AI efficiency dashboards showed where agentic workflows saved time',
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        icon: '/icons/document-duplicator.svg',
        title: 'About the Company',
        description:
          'An enterprise SaaS provider with 200+ engineers shipping across 6 product lines.',
      },
      {
        icon: '/icons/document-duplicator.svg',
        title: 'The Problem',
        description:
          'No single view of delivery health meant reactive fixes instead of systemic improvements.',
        bulletGroups: [['Slow incident response', 'Opaque pipeline state', 'No flow visibility']],
      },
    ],
  },
}
