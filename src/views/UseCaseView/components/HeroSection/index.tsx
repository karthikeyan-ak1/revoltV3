import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Button from '@/shared/components/Button'
import { ButtonVariant, ButtonTheme } from '@/shared/enums/button'

import styles from './HeroSection.module.scss'

interface HeroSectionProps {
  headline: string
  description: string
  ctaLabel: string
  ctaHref?: string
  backgroundImage: string
  backgroundImageMobile?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  description,
  ctaLabel,
  ctaHref = '#',
  backgroundImage,
  backgroundImageMobile,
}) => {
  return (
    <section className={styles.hero}>
      <div className={clsx(styles.bgImage, styles.bgImageDesktop)} aria-hidden="true">
        <Image src={backgroundImage} alt="background image" fill priority sizes="100vw" />
      </div>

      {backgroundImageMobile && (
        <div className={clsx(styles.bgImage, styles.bgImageMobile)} aria-hidden="true">
          <Image src={backgroundImageMobile} alt="background image" fill priority sizes="100vw" />
        </div>
      )}

      <div className={styles.content}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.description}>{description}</p>
        <Button variant={ButtonVariant.Primary} theme={ButtonTheme.White} href={ctaHref}>
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
