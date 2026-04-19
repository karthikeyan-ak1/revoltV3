import Image from 'next/image'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import CardStack from './components/CardStack'
import Integrations from './components/Integrations'
import PowerFeatures from './components/PowerFeatures'
import SocialProof from './components/SocialProof'
import UseCases from './components/UseCases'
import styles from './HomeView.module.scss'

export default function HomeView() {
  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <Image src="/images/homeBg.webp" alt="" fill priority className={styles.bg} />
        <Hero />
      </div>
      <SocialProof />
      <HowItWorks />
      <CardStack />
      <UseCases />
      <PowerFeatures />
      <Integrations />
    </main>
  )
}
