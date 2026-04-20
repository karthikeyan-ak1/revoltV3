'use client'

import React, { useState } from 'react'
import type { SolutionSectionData } from '@/constants/use-cases/types'
import SolutionTabBar from './SolutionTabBar'
import SolutionPanel from './SolutionPanel'
import SectionLabel from '@/shared/components/SectionLabel'
import { Color } from '@/shared/constants/colors'

import styles from './SolutionSection.module.scss'

interface SolutionSectionProps {
  data: SolutionSectionData
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ data }) => {
  const {
    eyebrow,
    headline,
    headlineItalic,
    headlineEnd,
    ctaLabel,
    ctaHref = '/get-started',
    tabs,
  } = data

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionLabel label={eyebrow} dotColor={Color.WARM_LIGHT} />

        <h2 className={styles.headline}>
          {headline} <em className={styles.headlineItalic}>{headlineItalic}</em> {headlineEnd}
        </h2>
      </div>

      <SolutionTabBar tabs={tabs} activeIndex={activeIndex} onTabClick={setActiveIndex} />

      <div className={styles.panels}>
        {tabs.map((tab, i) => (
          <SolutionPanel
            key={tab.tabLabel}
            tab={tab}
            isActive={i === activeIndex}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
          />
        ))}
      </div>
    </section>
  )
}

export default SolutionSection
