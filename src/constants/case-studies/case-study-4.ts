import type { CaseStudyData } from './types'

export const caseStudy4: CaseStudyData = {
  slug: 'case-study-4',

  hero: {
    eyebrow: 'AI SECURITY & COMPLIANCE',
    headline: 'Compliant AI delivery at scale, without the overhead.',
    description:
      'A healthcare technology company adopted Revolte to enforce SOC 2 controls across every deployment pipeline while accelerating their release cadence.',
    ctaLabel: 'Start building',
    ctaHref: '/get-started',
    image: '/images/homeB.webp',
    stats: [
      {
        value: '100%',
        label: 'SOC 2 controls enforced automatically',
      },
      {
        value: '40%',
        label: 'Faster audit preparation cycles',
      },
      {
        value: '0',
        label: 'Compliance violations in production',
      },
    ],
  },

  quote: {
    quote:
      'Compliance used to be a quarterly scramble. With Revolte enforcing SOC 2 controls at every pipeline stage, our audits are continuous\u2014and our engineers can focus on shipping',
    authorName: 'Marcus Webb',
    authorRole: 'CISO, MedTech Solutions',
    authorImage: '/images/persona-person-4.png',
  },

  body: {
    sections: [
      {
        heading: 'What this proves',
        blocks: [
          {
            type: 'paragraph',
            text: 'Compliance does not have to slow delivery. Revolte enforces controls continuously without adding friction to engineering workflows.',
          },
          {
            type: 'bullets',
            items: [
              'SOC 2 controls checked at every pipeline stage automatically',
              'Audit logs generated without manual documentation effort',
              'No compliance violations reached production in 12 months',
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
          'A healthcare technology company operating under HIPAA, SOC 2, and GDPR obligations.',
      },
      {
        icon: '/icons/document-duplicator.svg',
        title: 'The Problem',
        description:
          'Manual compliance checks slowed release cycles and required dedicated audit preparation time.',
        bulletGroups: [['Manual audit prep', 'Delayed releases', 'Inconsistent controls']],
      },
    ],
  },
}
