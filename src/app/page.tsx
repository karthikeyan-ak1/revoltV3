import Image from 'next/image'
import homeBg from '@/assets/homeBg.webp'
import Hero from '@/components/Hero'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={homeBg} alt="" fill priority className={styles.bg} />
      <Hero />
    </main>
  )
}
