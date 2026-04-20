import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import type { HowItWorksSectionData } from '@/constants/use-cases/types'
import SectionLabel from '@/shared/components/SectionLabel'
import { Color } from '@/shared/constants/colors'

import styles from './HowItWorksSection.module.scss'

interface HowItWorksSectionProps {
  data: HowItWorksSectionData
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ data }) => {
  const {
    eyebrow,
    headline,
    headlineItalic,
    headlineEnd,
    description,
    diagramImage,
    diagramImageMobile,
    diagramAlt,
  } = data

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionLabel label={eyebrow} dotColor={Color.WARM_LIGHT} />
        <h2 className={styles.headline}>
          {headline} <em className={styles.headlineItalic}>{headlineItalic}</em> {headlineEnd}
        </h2>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={clsx(styles.diagramWrap, styles.diagramDesktop)}>
        <Image src={diagramImage} alt={diagramAlt} fill />
      </div>

      {diagramImageMobile && (
        <div className={clsx(styles.diagramWrap, styles.diagramMobile)}>
          <Image src={diagramImageMobile} alt={diagramAlt} fill />
        </div>
      )}
    </section>
  )
}

export default HowItWorksSection
