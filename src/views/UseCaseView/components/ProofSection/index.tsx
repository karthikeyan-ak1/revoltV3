import React from 'react'
import Image from 'next/image'
import type { ProofSectionData } from '@/constants/use-cases/types'
import SectionLabel from '@/shared/components/SectionLabel'
import { Color } from '@/shared/constants/colors'
import Button from '@/shared/components/Button'
import { ButtonVariant } from '@/shared/enums/button'

import styles from './ProofSection.module.scss'

interface ProofSectionProps {
  data: ProofSectionData
}

const ProofSection: React.FC<ProofSectionProps> = ({ data }) => {
  const {
    eyebrow,
    headline,
    headlineItalic,
    headlineEnd,
    cardImage,
    cardAlt,
    cardText,
    cardHref = '#',
  } = data

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionLabel label={eyebrow} dotColor={Color.VIOLET} labelColor={Color.BLACK} />

        <h2 className={styles.headline}>
          {headline} <em className={styles.headlineItalic}>{headlineItalic}</em> {headlineEnd}
        </h2>

        <div className={styles.card}>
          <Image src={cardImage} alt={cardAlt} fill />
          <div className={styles.cardContainer}>
            <p className={styles.cardText}>
              <Image
                src="/icons/swfi.svg"
                alt="swfi"
                height={32}
                width={94}
                className={styles.swfiMobile}
              />{' '}
              {cardText}
            </p>
            <div className={styles.cardCta}>
              <Button variant={ButtonVariant.Primary} href={cardHref}>
                View Case Study
              </Button>
              <Image
                src="/icons/swfi.svg"
                alt="swfi"
                height={52}
                width={150}
                className={styles.swfiDesktop}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProofSection
