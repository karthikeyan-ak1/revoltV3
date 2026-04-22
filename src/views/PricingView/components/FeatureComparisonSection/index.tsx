import React from 'react'
import Image from 'next/image'
import { FEATURE_COMPARISON_DATA, type ComparisonCellValue } from '@/constants/pricing'

import styles from './FeatureComparisonSection.module.scss'

const renderCell = (value: ComparisonCellValue) => {
  if (value === null) return null
  if (value === true) return <Image src="/icons/tick.svg" alt="included" height={8} width={12} />
  if (value === 'Basic') return <strong className={styles.basic}>{value}</strong>
  return <span>{value}</span>
}

interface FeatureComparisonSectionProps {
  onViewLess: () => void
}

const FeatureComparisonSection = ({ onViewLess }: FeatureComparisonSectionProps) => {
  const { headline, description, tiers, tierColors, categories } = FEATURE_COMPARISON_DATA

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thFeature}>Feature</th>
              {tiers.map((tier, i) => (
                <th key={tier} className={styles.th} style={{ backgroundColor: tierColors[i] }}>
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <React.Fragment key={cat.name}>
                <tr className={styles.categoryRow}>
                  <td colSpan={4} className={styles.categoryCell}>
                    {cat.name}
                  </td>
                </tr>
                {cat.rows.map((row) => (
                  <tr key={row.feature} className={styles.row}>
                    <td className={styles.featureCell}>{row.feature}</td>
                    <td className={styles.valueCell}>{renderCell(row.free)}</td>
                    <td className={styles.valueCell}>{renderCell(row.pro)}</td>
                    <td className={styles.valueCell}>{renderCell(row.enterprise)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <button className={styles.viewLessBtn} onClick={onViewLess}>
        <p>View Less</p>
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow"
          height={12}
          width={12}
          className={styles.arrow}
        />
      </button>
    </section>
  )
}

export default FeatureComparisonSection
