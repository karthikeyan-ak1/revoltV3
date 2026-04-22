export interface CaseStudyStat {
  value: string
  label: string
}

export interface CaseStudyHeroData {
  eyebrow: string
  headline: string
  description: string
  ctaLabel: string
  ctaHref?: string
  image: string
  stats: CaseStudyStat[]
}

export interface CaseStudyQuoteData {
  quote: string
  authorName: string
  authorRole: string
  authorImage: string
}

export type ContentBlockType =
  | 'paragraph'
  | 'label'
  | 'bullets'
  | 'subheading'
  | 'feature-list'
  | 'blockquote'
  | 'image'

export interface CaseStudyFeatureItem {
  title: string
  description: string
}

export interface CaseStudyContentBlock {
  type: ContentBlockType
  text?: string
  items?: string[]
  featureItems?: CaseStudyFeatureItem[]
  imageSrc?: string
  imageSrcMobile?: string
  imageAlt?: string
}

export interface CaseStudyBodySection {
  heading: string
  blocks: CaseStudyContentBlock[]
}

export interface CaseStudySidebarCard {
  icon: string
  title: string
  description?: string
  bulletGroups?: string[][]
}

export interface CaseStudyBodyData {
  sections: CaseStudyBodySection[]
  sidebar: CaseStudySidebarCard[]
}

export interface CaseStudyData {
  slug: string
  hero: CaseStudyHeroData
  quote: CaseStudyQuoteData
  body: CaseStudyBodyData
}
