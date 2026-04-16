import Image from 'next/image'
import LogoMarquee from '@/shared/components/LogoMarquee'
import { LOGOS, SOCIAL_PROOF_HEADING, SOCIAL_PROOF_HEADING_EM, STATS } from './constants'
import styles from './SocialProof.module.scss'

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <LogoMarquee logos={LOGOS} />

      <div className={styles.grid}>
        <div className={styles.heroCard}>
          <Image src="/assets/images/revolteGirl.webp" alt="" fill className={styles.devImg} />
          <div className={styles.heroCardContent}>
            <p className={styles.heroCardText}>
              {SOCIAL_PROOF_HEADING} <em>{SOCIAL_PROOF_HEADING_EM}</em>
            </p>
          </div>
        </div>

        <div className={styles.statsColumn}>
          {STATS.map(({ value, label, variant, bg, className }) => (
            <div
              key={value}
              className={[
                styles.statCard,
                styles[variant],
                className ? styles[className] : '',
              ].join(' ')}
              style={bg ? ({ '--stat-bg': `url(${bg})` } as React.CSSProperties) : undefined}
            >
              <span
                className={[styles.statValue, className ? styles[`${className}Value`] : ''].join(
                  ' ',
                )}
              >
                {value}
              </span>
              <span
                className={[styles.statLabel, className ? styles[`${className}Label`] : ''].join(
                  ' ',
                )}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
