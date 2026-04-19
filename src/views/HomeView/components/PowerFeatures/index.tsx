import Image from 'next/image'
import {
  POWER_DESCRIPTION,
  POWER_FEATURES,
  POWER_HEADING_EM,
  POWER_HEADING_PREFIX,
  POWER_HEADING_SUFFIX,
} from './constants'
import styles from './PowerFeatures.module.scss'

export default function PowerFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          {POWER_HEADING_PREFIX} <em>{POWER_HEADING_EM}</em>
          <br />
          {POWER_HEADING_SUFFIX}
        </h2>
        <p className={styles.description}>{POWER_DESCRIPTION}</p>
      </div>

      <div className={styles.grid}>
        {POWER_FEATURES.map(({ id, title, titleLink, description, bg, image }) => (
          <div key={id} className={styles.card}>
            <div className={styles.cardIllustration} style={{ backgroundColor: bg }}>
              <Image src={image} alt={title} fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                {title}
                {titleLink && <span className={styles.arrow}> →</span>}
              </h3>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
