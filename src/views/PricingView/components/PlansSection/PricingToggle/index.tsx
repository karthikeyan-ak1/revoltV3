import type React from 'react'
import { BILLING_LABELS } from '@/constants/pricing'

import styles from './PricingToggle.module.scss'

interface PricingToggleProps {
  isAnnual: boolean
  onChange: (isAnnual: boolean) => void
}

const PricingToggle = ({ isAnnual, onChange }: PricingToggleProps) => {
  const selectMonthly = () => onChange(false)
  const selectAnnual = () => onChange(true)

  return (
    <div
      className={styles.toggle}
      style={{ '--active-index': isAnnual ? 1 : 0 } as React.CSSProperties}
    >
      <span className={styles.slider} aria-hidden="true" />
      <button className={styles.pill} onClick={selectMonthly}>
        {BILLING_LABELS.monthly}
      </button>
      <button className={styles.pill} onClick={selectAnnual}>
        {BILLING_LABELS.annual}
      </button>
    </div>
  )
}

export default PricingToggle
