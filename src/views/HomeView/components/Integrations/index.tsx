import Image from 'next/image'
import {
  INTEGRATION_ICONS,
  INTEGRATIONS_HEADING_EM,
  INTEGRATIONS_HEADING_PREFIX,
} from './constants'
import styles from './Integrations.module.scss'

export default function Integrations() {
  return (
    <section className={styles.section}>
      {INTEGRATION_ICONS.map(({ file, top, left }) => (
        <div key={file} className={styles.icon} style={{ top, left }}>
          <Image
            src={`/images/${encodeURIComponent(file)}.svg`}
            alt=""
            fill
            className={styles.iconImage}
          />
        </div>
      ))}

      <div className={styles.textCenter}>
        <h2 className={styles.heading}>
          {INTEGRATIONS_HEADING_PREFIX} <em>{INTEGRATIONS_HEADING_EM}</em> Your
          <br />
          Existing Stack
        </h2>
      </div>
    </section>
  )
}
