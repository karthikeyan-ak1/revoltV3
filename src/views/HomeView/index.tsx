import Image from 'next/image'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import styles from './HomeView.module.scss'

export default function HomeView() {
  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <Image src="/assets/images/homeBg.webp" alt="" fill priority className={styles.bg} />
        <Hero />
      </div>
      <SocialProof />
      <HowItWorks />
    </main>
  )
}
