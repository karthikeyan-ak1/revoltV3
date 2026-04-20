import React, { memo } from 'react'
import Image from 'next/image'
import type { FeaturesSectionData } from '@/constants/use-cases/types'

import styles from './FeaturesSection.module.scss'

interface FeaturesSectionProps {
  data: FeaturesSectionData
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ data }) => {
  const { headline, cards } = data

  return (
    <section className={styles.section}>
      <h2 className={styles.headline}>{headline}</h2>

      <div className={styles.grid}>
        {cards.map((card) => (
          <React.Fragment key={card.title}>
            <div className={styles.card} style={{ backgroundColor: card.cardBgColor }}>
              <div className={styles.cardIllustration}>
                <Image
                  src={card.illustration}
                  alt={card.illustrationAlt}
                  height={card.illustrationHeight}
                  width={card.illustrationWidth}
                />
              </div>
              <div className={styles.desktopCardText}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
            <div className={styles.mobileCardText}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default memo(FeaturesSection)
