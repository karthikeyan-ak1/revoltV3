import type { FaqSectionData } from '@/constants/use-cases/types'

export interface PricingHeroData {
  eyebrow: string
  headline: string
  description: string
}

export interface PricingSpecRow {
  label: string
  value: string
}

export interface PricingTierData {
  id: string
  name: string
  headerColor: string
  price: string
  badges: string[]
  description: string
  billingNote: string
  ctaLabel: string
  ctaHref: string
  specRows?: PricingSpecRow[]
  specBullets?: string[]
  productsHeading: string
  productItems: string[]
  paygRates: string
}

export interface PricingData {
  hero: PricingHeroData
  plans: {
    monthly: PricingTierData[]
    annual: PricingTierData[]
  }
}

export const BILLING_LABELS = {
  monthly: 'Monthly',
  annual: 'Annual',
} as const

export const FREE_TIER_MONTHLY: PricingTierData = {
  id: 'free',
  name: 'Free',
  headerColor: '#EDDDC0',
  price: '0',
  badges: ['Free base', 'Pay-as-you-go credits'],
  description: 'For hobbyists & solo builders exploring AI-native DevOps',
  billingNote: 'Cloud & token usage billed at consumption',
  ctaLabel: 'Get Started',
  ctaHref: '#',
  specRows: [
    { label: 'Services / Apps', value: 'Up to 3' },
    { label: 'CI/CD Runs', value: '500 runs' },
    { label: 'IaC Provisions', value: '50 actions' },
    { label: 'Log Ingestion', value: '5 GB' },
    { label: 'AI Tokens (Harness)', value: '100K tokens' },
    { label: 'Cloud', value: 'Revolte Cloud' },
  ],
  productsHeading: 'Products Included',
  productItems: [
    'Harness Engineering (limited agents)',
    'Platform — CI/CD, IaC, Observability',
    'Delivery Intelligence — DORA & Flow dashboards',
    'Community support & docs',
    'BYOC (Bring Your Own Cloud)',
    'Priority support',
    'AI Security & Efficiency dashboards',
  ],
  paygRates: '$0.20 / 1K tokens · $0.01 / CI run · $0.50 / GB logs',
}

const PRO_TIER_MONTHLY: PricingTierData = {
  id: 'pro',
  name: 'Pro',
  headerColor: '#DBD5FB',
  price: '149',
  badges: ['Free base', 'Pay-as-you-go credits'],
  description: 'For hobbyists & solo builders exploring AI-native DevOps',
  billingNote: 'Cloud & token usage billed at consumption',
  ctaLabel: 'Get Started',
  ctaHref: '#',
  specRows: [
    { label: 'Services / Apps', value: 'Up to 25' },
    { label: 'CI/CD Runs', value: '10,000 runs' },
    { label: 'IaC Provisions', value: 'Unlimited' },
    { label: 'Log Ingestion', value: '100 GB' },
    { label: 'AI Tokens (Harness)', value: '5M tokens' },
    { label: 'Cloud', value: 'BYOC' },
  ],
  productsHeading: 'Products Included',
  productItems: [
    'Full Harness Engineering — all agents & workflows',
    'Platform — Advanced CI/CD pipelines, full IaC, Observability',
    'Delivery Intelligence — DORA, Flow, AI Security & Efficiency',
    'BYOC — Bring Your Own Cloud (AWS, GCP, Azure)',
    'Pay-as-you-go overages for all dimensions',
    'SSO & Role-Based Access Control',
    'Email + Slack support (4th SLA)',
    'Dedicated success manager',
    'Module-level à la carte pricing',
  ],
  paygRates: '$0.20 / 1K tokens · $0.01 / CI run · $0.50 / GB logs',
}

export const ENTERPRISE_TIER_MONTHLY: PricingTierData = {
  id: 'enterprise',
  name: 'Enterprise',
  headerColor: '#D7F1D9',
  price: 'Custom',
  badges: ['Volume pricing', 'Annual contract'],
  description: 'For larger orgs with custom infrastructure, compliance & scale requirements',
  billingNote: 'Starts from $5,000 / mo · talk to sales for a quote',
  ctaLabel: 'Get Started',
  ctaHref: '#',
  specBullets: [
    'AI-only: Harness Engineering standalone',
    'Platform-only: CI/CD + IaC + Observability',
    'Intelligence-only: DORA + AI metrics dashboards',
    'Any combination of the three modules',
    'All three products bundled at maximum discount',
  ],
  productsHeading: 'Enterprise Capabilities',
  productItems: [
    'Unlimited services & usage (custom caps)',
    'BYOC + Private cloud / on-prem deployment',
    'Custom SLAs & uptime guarantees',
    'Dedicated Customer Success Manager',
    'SOC 2, GDPR, custom compliance support',
    'White-glove onboarding & migration',
    'Custom AI model fine-tuning & BYO LLM',
    '4h priority support SLA',
  ],
  paygRates: '$0.20 / 1K tokens · $0.01 / CI run · $0.50 / GB logs',
}

export const MONTHLY_PLANS: PricingTierData[] = [
  FREE_TIER_MONTHLY,
  PRO_TIER_MONTHLY,
  ENTERPRISE_TIER_MONTHLY,
]

const FREE_TIER_ANNUAL: PricingTierData = {
  id: 'free',
  name: 'Free',
  headerColor: '#EDDDC0',
  price: '0',
  badges: ['Free base', 'Pay-as-you-go credits'],
  description: 'For hobbyists & solo builders exploring AI-native DevOps',
  billingNote: 'Cloud & token usage billed at consumption',
  ctaLabel: 'Get Started',
  ctaHref: '#',
  specRows: [
    { label: 'Services / Apps', value: 'Up to 3' },
    { label: 'CI/CD Runs', value: '500 runs' },
    { label: 'IaC Provisions', value: '50 actions' },
    { label: 'Log Ingestion', value: '5 GB' },
    { label: 'AI Tokens (Harness)', value: '100K tokens' },
    { label: 'Cloud', value: 'Revolte Cloud' },
  ],
  productsHeading: 'Products Included',
  productItems: [
    'Harness Engineering (limited agents)',
    'Platform — CI/CD, IaC, Observability',
    'Delivery Intelligence — DORA & Flow dashboards',
    'Community support & docs',
    'BYOC (Bring Your Own Cloud)',
    'Priority support',
    'AI Security & Efficiency dashboards',
  ],
  paygRates: '$0.20 / 1K tokens · $0.01 / CI run · $0.50 / GB logs',
}

const PRO_TIER_ANNUAL: PricingTierData = {
  id: 'pro',
  name: 'Pro',
  headerColor: '#DBD5FB',
  price: '119',
  badges: ['20% savings', 'Billed annually'],
  description: 'For hobbyists & solo builders exploring AI-native DevOps',
  billingNote: 'Billed as $1,428 / year · Cloud & token usage extra',
  ctaLabel: 'Get Started',
  ctaHref: '#',
  specRows: [
    { label: 'Services / Apps', value: 'Up to 25' },
    { label: 'CI/CD Runs', value: '10,000 runs' },
    { label: 'IaC Provisions', value: 'Unlimited' },
    { label: 'Log Ingestion', value: '100 GB' },
    { label: 'AI Tokens (Harness)', value: '5M tokens' },
    { label: 'Cloud', value: 'BYOC' },
  ],
  productsHeading: 'Products Included',
  productItems: [
    'Full Harness Engineering — all agents & workflows',
    'Platform — Advanced CI/CD pipelines, full IaC, Observability',
    'Delivery Intelligence — DORA, Flow, AI Security & Efficiency',
    'BYOC — Bring Your Own Cloud (AWS, GCP, Azure)',
    'Pay-as-you-go overages for all dimensions',
    'SSO & Role-Based Access Control',
    'Email + Slack support (4th SLA)',
    'Dedicated success manager',
    'Module-level à la carte pricing',
  ],
  paygRates: '$0.20 / 1K tokens · $0.01 / CI run · $0.50 / GB logs',
}

const ENTERPRISE_TIER_ANNUAL: PricingTierData = {
  id: 'enterprise',
  name: 'Enterprise',
  headerColor: '#D7F1D9',
  price: 'Custom',
  badges: ['Volume pricing', 'Annual contract'],
  description: 'For larger orgs with custom infrastructure, compliance & scale requirements',
  billingNote: 'Starts from $5,000 / mo · talk to sales for a quote',
  ctaLabel: 'Get Started',
  ctaHref: '#',
  specBullets: [
    'AI-only: Harness Engineering standalone',
    'Platform-only: CI/CD + IaC + Observability',
    'Intelligence-only: DORA + AI metrics dashboards',
    'Any combination of the three modules',
    'All three products bundled at maximum discount',
  ],
  productsHeading: 'Enterprise Capabilities',
  productItems: [
    'Unlimited services & usage (custom caps)',
    'BYOC + Private cloud / on-prem deployment',
    'Custom SLAs & uptime guarantees',
    'Dedicated Customer Success Manager',
    'SOC 2, GDPR, custom compliance support',
    'White-glove onboarding & migration',
    'Custom AI model fine-tuning & BYO LLM',
    '4h priority support SLA',
  ],
  paygRates: '$0.20 / 1K tokens · $0.01 / CI run · $0.50 / GB logs',
}

export const ANNUAL_PLANS: PricingTierData[] = [
  FREE_TIER_ANNUAL,
  PRO_TIER_ANNUAL,
  ENTERPRISE_TIER_ANNUAL,
]

export type ComparisonCellValue = string | true | null

export interface ComparisonRow {
  feature: string
  free: ComparisonCellValue
  pro: ComparisonCellValue
  enterprise: ComparisonCellValue
}

export interface ComparisonCategory {
  name: string
  rows: ComparisonRow[]
}

export interface FeatureComparisonData {
  headline: string
  description: string
  tiers: [string, string, string]
  tierColors: [string, string, string]
  categories: ComparisonCategory[]
}

export const FEATURE_COMPARISON_DATA: FeatureComparisonData = {
  headline: 'Full Feature Comparison',
  description: "See exactly what's included in every tier across all three products",
  tiers: ['Free', 'Pro', 'Enterprise'],
  tierColors: ['#EDDDC0', '#DBD5FB', '#D7F1D9'],
  categories: [
    {
      name: 'Harness Engineering — Agentic AI',
      rows: [
        {
          feature: 'AI code generation & review agents',
          free: 'Basic',
          pro: true,
          enterprise: true,
        },
        { feature: 'Agentic SDLC orchestration (CLI)', free: 'Basic', pro: true, enterprise: true },
        { feature: 'AI token quota / month', free: 'Basic', pro: true, enterprise: true },
        { feature: 'BYO LLM / custom model', free: 'Basic', pro: true, enterprise: true },
        { feature: 'Multi-agent workflows', free: 'Basic', pro: true, enterprise: true },
      ],
    },
    {
      name: 'Platform — CI/CD',
      rows: [
        { feature: 'CI/CD pipelines', free: true, pro: true, enterprise: true },
        { feature: 'CI/CD runs / month', free: '500', pro: '10,000', enterprise: 'Unlimited' },
        { feature: 'Parallel pipeline execution', free: 'Basic', pro: true, enterprise: true },
        { feature: 'Custom pipeline templates', free: 'Basic', pro: true, enterprise: true },
      ],
    },
    {
      name: 'Platform — IaC & Provisioning',
      rows: [
        {
          feature: 'Infrastructure as Code (Terraform / Pulumi)',
          free: 'Basic',
          pro: true,
          enterprise: true,
        },
        {
          feature: 'IaC provisioning actions / month',
          free: '50',
          pro: '1,000',
          enterprise: 'Unlimited',
        },
        {
          feature: 'Drift detection & auto-remediation',
          free: 'Basic',
          pro: true,
          enterprise: true,
        },
        { feature: 'BYOC (AWS · GCP · Azure)', free: 'Basic', pro: true, enterprise: true },
      ],
    },
    {
      name: 'Platform — Observability',
      rows: [
        { feature: 'Log ingestion / month', free: '5 GB', pro: '100 GB', enterprise: 'Custom' },
        { feature: 'Metrics & traces', free: 'Basic', pro: true, enterprise: true },
        { feature: 'Custom alerting rules', free: 'Basic', pro: true, enterprise: true },
        { feature: 'On-prem / private cloud logs', free: 'Basic', pro: true, enterprise: true },
      ],
    },
    {
      name: 'Delivery Intelligence',
      rows: [
        { feature: 'DORA metrics dashboard', free: true, pro: true, enterprise: true },
        {
          feature: 'Flow metrics (WIP, cycle time, throughput)',
          free: null,
          pro: true,
          enterprise: true,
        },
        { feature: 'AI security posture dashboard', free: null, pro: true, enterprise: true },
        { feature: 'AI efficiency & ROI metrics', free: null, pro: true, enterprise: true },
        { feature: 'Custom reports & data export', free: null, pro: true, enterprise: true },
        { feature: 'Executive-level dashboards', free: null, pro: true, enterprise: true },
      ],
    },
    {
      name: 'Security & Compliance',
      rows: [
        { feature: 'SSO / SAML', free: null, pro: true, enterprise: true },
        { feature: 'Role-Based Access Control (RBAC)', free: null, pro: true, enterprise: true },
        { feature: 'SOC 2 / GDPR compliance', free: null, pro: null, enterprise: true },
        { feature: 'Audit logs', free: null, pro: null, enterprise: true },
      ],
    },
    {
      name: 'Support',
      rows: [
        { feature: 'Community & docs', free: 'Basic', pro: true, enterprise: true },
        { feature: 'Email & Slack support', free: 'Basic', pro: true, enterprise: true },
        { feature: 'SLA response time', free: 'Basic', pro: '48h', enterprise: '4h' },
        { feature: 'Dedicated success manager', free: 'Basic', pro: true, enterprise: true },
        { feature: 'White-glove onboarding', free: null, pro: null, enterprise: true },
      ],
    },
  ],
}

export const PRICING_FAQ_DATA: FaqSectionData = {
  headline: 'Frequently',
  headlineItalic: 'Asked',
  headlineEnd: 'Questions',
  contactLabel: 'Still have questions?',
  contactSubtext: 'Our team can help you!',
  contactCtaLabel: 'Contact us',
  contactCtaHref: '/contact',
  items: [
    {
      question: 'Why is pricing per service rather than per seat?',
      answer:
        "Most engineering tools penalize team growth — the more engineers you hire, the more you pay, even if your actual output stays the same. Revolte prices on what you deliver, not who delivers it. A service is a discrete unit of software (microservice, app, function) that maps directly to business value. As you grow your team's efficiency through AI, you shouldn't pay more. As you deploy more services, you're genuinely expanding scope.",
    },
    {
      question: 'What counts as a "service" or "application"?',
      answer:
        'A service is any independently deployable unit — a microservice, a serverless function, a containerised app, or a standalone pipeline. Shared infrastructure components (databases, API gateways) count only if Revolte actively manages their delivery lifecycle.',
    },
    {
      question: 'How does the pay-as-you-go overage work on Pro?',
      answer:
        'Once you exceed your plan limits, usage is billed at PAYG rates: $0.20 per 1K AI tokens, $0.01 per CI run, and $0.50 per GB of logs. Overages are calculated at the end of each billing cycle and charged to your card on file.',
    },
    {
      question: 'Can I start on Free and upgrade later without losing data?',
      answer:
        'Yes. All your pipelines, configurations, and historical data carry over automatically when you upgrade. There is no migration step — the plan change takes effect immediately.',
    },
    {
      question: 'Is there an annual discount on Pro?',
      answer:
        'Yes. Paying annually brings the Pro plan to $119 / mo (billed as $1,428 / year), saving roughly 20% compared to monthly billing.',
    },
  ],
}

export const PRICING_DATA: PricingData = {
  hero: {
    eyebrow: 'Outcome-Based Pricing',
    headline: 'Unlimited users. No per-seat pricing',
    description: 'Pricing is based on the number of services managed by Revolte.',
  },
  plans: {
    monthly: MONTHLY_PLANS,
    annual: ANNUAL_PLANS,
  },
}
