import {
  HOW_IT_WORKS_DESCRIPTION,
  HOW_IT_WORKS_HEADING,
  HOW_IT_WORKS_HEADING_EM,
  HOW_IT_WORKS_HEADING_SUFFIX,
  HOW_IT_WORKS_LABEL,
} from './constants'
import styles from './HowItWorks.module.scss'

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>
          <span className={styles.dot}>■</span>
          <span className={styles.labelText}>{HOW_IT_WORKS_LABEL}</span>
        </p>
        <h2 className={styles.heading}>
          {HOW_IT_WORKS_HEADING} <em>{HOW_IT_WORKS_HEADING_EM}</em> {HOW_IT_WORKS_HEADING_SUFFIX}
        </h2>
        <p className={styles.description}>{HOW_IT_WORKS_DESCRIPTION}</p>
      </div>
    </section>
  )
}
