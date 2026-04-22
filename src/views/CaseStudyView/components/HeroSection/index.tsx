import React from 'react'
import Image from 'next/image'
import Button from '@/shared/components/Button'
import SectionLabel from '@/shared/components/SectionLabel'
import { ButtonVariant, ButtonTheme } from '@/shared/enums/button'
import { Color } from '@/shared/constants/colors'
import type { CaseStudyHeroData } from '@/constants/case-studies'

import styles from './HeroSection.module.scss'

const HeroSection: React.FC<CaseStudyHeroData> = ({
  eyebrow,
  headline,
  description,
  ctaLabel,
  ctaHref = '#',
  image,
  stats,
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.leftCol}>
        <SectionLabel label={eyebrow} dotColor={Color.VIOLET} labelColor={Color.BLACK} />
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.description}>{description}</p>
        <Button
          variant={ButtonVariant.Primary}
          theme={ButtonTheme.Black}
          href={ctaHref}
          className={styles.desktopCta}
        >
          {ctaLabel}
        </Button>
      </div>

      <div className={styles.imageCol}>
        <Image src={image} alt={headline} fill priority className={styles.image} />

        <div className={styles.mobileContent}>
          <SectionLabel label={eyebrow} dotColor={Color.VIOLET} labelColor={Color.WHITE_60} />
          <h1 className={styles.mobileHeadline}>{headline}</h1>
          <p className={styles.mobileDescription}>{description}</p>
          <Button
            variant={ButtonVariant.Primary}
            theme={ButtonTheme.White}
            href={ctaHref}
            className={styles.mobileCta}
          >
            {ctaLabel}
          </Button>
        </div>

        <div className={styles.statsBar}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
