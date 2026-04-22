import type { CaseStudyData } from './types'
import { caseStudy1 } from './case-study-1'
import { caseStudy2 } from './case-study-2'
import { caseStudy3 } from './case-study-3'
import { caseStudy4 } from './case-study-4'

export type {
  CaseStudyData,
  CaseStudyHeroData,
  CaseStudyStat,
  CaseStudyQuoteData,
  CaseStudyBodyData,
  CaseStudyBodySection,
  CaseStudySidebarCard,
  CaseStudyContentBlock,
  CaseStudyFeatureItem,
} from './types'

export const CASE_STUDIES: CaseStudyData[] = [caseStudy1, caseStudy2, caseStudy3, caseStudy4]

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined =>
  CASE_STUDIES.find((cs) => cs.slug === slug)
