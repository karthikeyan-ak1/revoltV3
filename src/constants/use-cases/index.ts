import type { UseCaseData } from './types'
import { useCase1 } from './use-case-1'
import { useCase2 } from './use-case-2'
import { useCase3 } from './use-case-3'
import { useCase4 } from './use-case-4'

export type { UseCaseData, HeroData, PersonaSectionData, PersonaCard } from './types'

export const USE_CASES: UseCaseData[] = [useCase1, useCase2, useCase3, useCase4]

export const getUseCaseBySlug = (slug: string): UseCaseData | undefined =>
  USE_CASES.find((uc) => uc.slug === slug)
