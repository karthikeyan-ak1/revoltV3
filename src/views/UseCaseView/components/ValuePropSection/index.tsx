import React from 'react'
import type { ValuePropSectionData } from '@/constants/use-cases/types'
import SectionLabel from '@/shared/components/SectionLabel'
import { Color } from '@/shared/constants/colors'

import styles from './ValuePropSection.module.scss'

interface ValuePropSectionProps {
  data: ValuePropSectionData
}

const ValuePropSection: React.FC<ValuePropSectionProps> = ({ data }) => {
  const { eyebrow, headline, headlineItalic, items } = data

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <SectionLabel label={eyebrow} dotColor={Color.CORAL_RED} labelColor={Color.BLACK} />
        <h2 className={styles.headline}>
          {headline} <em className={styles.headlineItalic}>{headlineItalic}</em>
        </h2>
      </div>

      <div className={styles.right}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.itemBody}>
              <span className={styles.itemNumber}>{item.number}</span>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
            {i < items.length - 1 && <div className={styles.itemDivider} />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValuePropSection
