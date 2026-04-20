export interface HeroData {
  headline: string
  description: string
  ctaLabel: string
  ctaHref?: string
  backgroundImage: string
  backgroundImageMobile?: string
}

export interface PersonaCard {
  image: string
  role: string
  problemStatement: string
  profileBgColor: string
  roleBgColor: string
  problemBgColor: string
}

export interface PersonaSectionData {
  eyebrow: string
  headline: string
  headlineItalic: string
  headlineEnd: string
  description: string
  ctaLabel: string
  ctaHref?: string
  autoPlayInterval?: number
  personas: PersonaCard[]
}

export interface HowItWorksSectionData {
  eyebrow: string
  headline: string
  headlineItalic: string
  headlineEnd: string
  description: string
  diagramImage: string
  diagramImageMobile?: string
  diagramAlt: string
}

export interface SolutionFeature {
  icon: string
  tabLabel: string
  subHeadline: string
  subDescription: string
  features: SolutionFeatureItem[]
  previewImage: string
  previewImageMobile?: string
  previewAlt: string
}

export interface SolutionFeatureItem {
  icon: string
  title: string
  description: string
}

export interface SolutionSectionData {
  eyebrow: string
  headline: string
  headlineItalic: string
  headlineEnd: string
  ctaLabel: string
  ctaHref?: string
  tabs: SolutionFeature[]
}

export interface ProofSectionData {
  eyebrow: string
  headline: string
  headlineItalic: string
  headlineEnd: string
  cardImage: string
  cardImageMobile?: string
  cardAlt: string
  cardText: string
  cardHref?: string
}

export interface ValuePropItem {
  number: string
  title: string
  description: string
}

export interface ValuePropSectionData {
  eyebrow: string
  eyebrowColor: string
  headline: string
  headlineItalic: string
  mobileHeadline?: string
  mobileDescription?: string
  items: ValuePropItem[]
}

export interface FeatureCard {
  illustration: string
  illustrationAlt: string
  illustrationHeight: number
  illustrationWidth: number
  title: string
  description: string
  cardBgColor: string
}

export interface FeaturesSectionData {
  headline: string
  cards: FeatureCard[]
}

export interface CtaBannerData {
  headline: string
  ctaLabel: string
  ctaHref?: string
  backgroundImage: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSectionData {
  headline: string
  headlineItalic: string
  headlineEnd: string
  contactLabel: string
  contactSubtext: string
  contactCtaLabel: string
  contactCtaHref?: string
  viewMoreLabel?: string
  viewMoreHref?: string
  items: FaqItem[]
}

export interface UseCaseData {
  slug: string
  hero: HeroData
  persona: PersonaSectionData
  howItWorks: HowItWorksSectionData
  solution: SolutionSectionData
  proof: ProofSectionData
  valueProp: ValuePropSectionData
  features: FeaturesSectionData
  ctaBanner: CtaBannerData
  faq: FaqSectionData
}
