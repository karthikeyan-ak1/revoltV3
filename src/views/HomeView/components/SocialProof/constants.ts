export const SOCIAL_PROOF_HEADING = 'Real outcomes from engineering teams using'
export const SOCIAL_PROOF_HEADING_EM = 'Revolte.'

export enum StatVariant {
  Warm = 'warm',
  Lavender = 'lavender',
  Dark = 'dark',
}

export { LOGOS } from '@/shared/constants/logos'

export const STATS = [
  {
    value: '10X',
    label: 'Faster Release Cycles',
    variant: StatVariant.Warm,
    bg: '/assets/images/releaseBg.webp',
  },
  {
    value: '85%',
    label: 'Faster Testing and Deployment Workflows',
    variant: StatVariant.Lavender,
    className: 'fasterTesting',
  },
  {
    value: '40%',
    label: 'Reduction in Production Incidents',
    variant: StatVariant.Dark,
    className: 'reductionIncidents',
  },
]
