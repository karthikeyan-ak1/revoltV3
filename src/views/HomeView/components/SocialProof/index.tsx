// import Image from 'next/image'
import { LOGOS, SOCIAL_PROOF_HEADING, SOCIAL_PROOF_HEADING_EM, STATS } from './constants'

// import devImg from '@/assets/socialProofDev.webp'
// import microsoftLogo from '@/assets/logos/microsoft.svg'
// import infosysLogo from '@/assets/logos/infosys.svg'
// import cloudflareLogo from '@/assets/logos/cloudflare.svg'
// import ciscoLogo from '@/assets/logos/cisco.svg'
// import citiLogo from '@/assets/logos/citi.svg'
// import cognizantLogo from '@/assets/logos/cognizant.svg'
import styles from './SocialProof.module.scss'

// const logoMap = {
//   microsoft: microsoftLogo,
//   infosys: infosysLogo,
//   cloudflare: cloudflareLogo,
//   cisco: ciscoLogo,
//   citi: citiLogo,
//   cognizant: cognizantLogo,
// }

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <div className={styles.logoStrip}>
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div key={i} className={styles.logo} aria-label={logo.name} />
          // <Image key={i} src={logoMap[logo.file as keyof typeof logoMap]} alt={logo.name} height={28} className={styles.logo} />
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.heroCard}>
          {/* Uncomment once asset is added: */}
          {/* <Image src={devImg} alt="Developer using Revolte" fill className={styles.devImg} /> */}
          <div className={styles.heroCardContent}>
            <p className={styles.heroCardText}>
              {SOCIAL_PROOF_HEADING} <em>{SOCIAL_PROOF_HEADING_EM}</em>
            </p>
          </div>
        </div>

        <div className={styles.statsColumn}>
          {STATS.map((stat) => (
            <div key={stat.value} className={`${styles.statCard} ${styles[stat.variant]}`}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
