'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { MONTHLY_PLANS, ANNUAL_PLANS } from '@/constants/pricing'
import PricingToggle from './PricingToggle'
import PricingCard from './PricingCard'

import styles from './PlansSection.module.scss'

interface PlansSectionProps {
  onViewMore: () => void
  showViewMore: boolean
}

const PlansSection = ({ onViewMore, showViewMore }: PlansSectionProps) => {
  const [isAnnual, setIsAnnual] = useState(false)
  const plans = isAnnual ? ANNUAL_PLANS : MONTHLY_PLANS

  const maxSpecCount = Math.max(
    ...plans.map((p) => p.specRows?.length ?? p.specBullets?.length ?? 0),
  )

  return (
    <section className={styles.section}>
      <div className={styles.toggleWrapper}>
        <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
      </div>

      <div className={styles.grid}>
        {plans.map((plan) => (
          <PricingCard key={plan.id} data={plan} totalSpecCount={maxSpecCount} />
        ))}
      </div>

      {showViewMore && (
        <button className={styles.viewMoreBtn} onClick={onViewMore}>
          <p className={styles.btnTextDesktop}>View More</p>
          <p className={styles.btnTextMobile}>View Full Feature Comparison</p>
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow"
            height={12}
            width={12}
            className={styles.arrow}
          />
        </button>
      )}
    </section>
  )
}

export default PlansSection
