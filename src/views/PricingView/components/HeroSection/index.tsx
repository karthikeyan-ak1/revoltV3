import React from 'react'
import SectionLabel from '@/shared/components/SectionLabel'
import { Color } from '@/shared/constants/colors'

import styles from './HeroSection.module.scss'

interface HeroSectionProps {
  eyebrow: string
  headline: string
  description: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ eyebrow, headline, description }) => {
  return (
    <section className={styles.section}>
      <SectionLabel label={eyebrow} hasDot={false} labelColor={Color.BLACK} />
      <h1 className={styles.headline}>{headline}</h1>
      <p className={styles.description}>{description}</p>
    </section>
  )
}

export default HeroSection
