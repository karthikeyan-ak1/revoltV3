import type { CaseStudyData } from './types'

export const caseStudy2: CaseStudyData = {
  slug: 'case-study-2',

  hero: {
    eyebrow: 'PLATFORM MODERNISATION',
    headline: 'Legacy infrastructure replaced in weeks, not quarters.',
    description:
      "A logistics platform migrated its monolithic stack to cloud-native microservices using Revolte's agentic IaC and CI/CD workflows.",
    ctaLabel: 'Start building',
    ctaHref: '/get-started',
    image: '/images/homeB.webp',
    stats: [
      {
        value: '8x',
        label: 'Faster infrastructure provisioning',
      },
      {
        value: '60%',
        label: 'Reduction in deployment failures',
      },
      {
        value: '100%',
        label: 'Audit trail from intent to production',
      },
    ],
  },

  quote: {
    quote:
      'We replaced a fragile deployment process with a governed, repeatable pipeline\u2014Revolte handled everything from IaC provisioning to rollout without us stitching together separate tools',
    authorName: 'Sarah Chen',
    authorRole: 'VP Engineering, LogiFlow',
    authorImage: '/images/persona-person-2.png',
  },

  body: {
    sections: [
      {
        heading: 'What this proves',
        blocks: [
          {
            type: 'paragraph',
            text: 'Revolte can modernise complex infrastructure without manual coordination across teams and tooling.',
          },
          {
            type: 'bullets',
            items: [
              'IaC and CI/CD unified under a single governed workflow',
              'Provisioning actions tracked end-to-end with full audit trail',
              'Migrations executed without downtime or rollback incidents',
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
          'A high-volume logistics platform operating across 12 regions with complex multi-cloud infrastructure.',
      },
      {
        icon: '/icons/document-duplicator.svg',
        title: 'The Problem',
        description:
          'Manual infrastructure provisioning caused delays and inconsistency across environments.',
        bulletGroups: [['Slow provisioning cycles', 'Environment drift', 'Failed deployments']],
      },
    ],
  },
}
