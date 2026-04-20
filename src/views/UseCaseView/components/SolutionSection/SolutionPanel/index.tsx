import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import type { SolutionFeature } from '@/constants/use-cases/types'
import Button from '@/shared/components/Button'
import { ButtonVariant } from '@/shared/enums/button'

import styles from './SolutionPanel.module.scss'

interface SolutionPanelProps {
  tab: SolutionFeature
  isActive: boolean
  ctaLabel: string
  ctaHref: string
}

const SolutionPanel: React.FC<SolutionPanelProps> = ({ tab, isActive, ctaLabel, ctaHref }) => {
  return (
    <div
      className={clsx(styles.panel, isActive && styles.panelActive)}
      role="tabpanel"
      aria-hidden={!isActive}
    >
      <div className={styles.preview}>
        <Image src={tab.previewImage} alt={tab.previewAlt} fill />
      </div>

      <div className={styles.content}>
        <h3 className={styles.subHeadline}>{tab.subHeadline}</h3>
        <p className={styles.subDescription}>{tab.subDescription}</p>

        <ul className={styles.featureList}>
          {tab.features.map((feature, i) => (
            <li key={feature.title} className={styles.featureItem}>
              <div className={styles.featureBody}>
                <div className={styles.featureTitleRow}>
                  <Image
                    src={'/icons/diamond.svg'}
                    alt={'icon'}
                    height={16}
                    width={16}
                    className={styles.featureBullet}
                  />
                  <span className={styles.featureTitle}>{feature.title}</span>
                </div>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
              {i < tab.features.length - 1 && <div className={styles.featureDivider} />}
            </li>
          ))}
        </ul>

        <Button variant={ButtonVariant.Primary} href={ctaHref} className={styles.cta}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  )
}

export default SolutionPanel
