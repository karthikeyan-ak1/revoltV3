import Link from 'next/link'
import { HERO_CTA_HREF, HERO_CTA_LABEL, HERO_HEADING, HERO_SUBHEADING } from './constants'
import heroImg from '@/assets/homeHero.webp'
import styles from './Hero.module.scss'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{HERO_HEADING}</h1>
        <p className={styles.subheading}>{HERO_SUBHEADING}</p>
        <Link href={HERO_CTA_HREF} className={styles.cta}>
          {HERO_CTA_LABEL}
        </Link>
      </div>
      <Image width={1100} height={650} src={heroImg} alt="" className={styles.img} />
    </section>
  )
}
