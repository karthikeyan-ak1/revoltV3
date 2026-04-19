'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Routes } from '@/constants/routes'
import { BOOK_DEMO_LABEL, GET_STARTED_LABEL, LOGO_ALT, NAV_LINKS } from './constants'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link href={Routes.Home} className={styles.logo}>
          <Image src="/images/navbarLogo.webp" alt={LOGO_ALT} height={20} width={120} />
        </Link>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href={Routes.Demo} className={styles.demo}>
            {BOOK_DEMO_LABEL}
          </Link>
          <Link href={Routes.Signup} className={styles.cta}>
            {GET_STARTED_LABEL}
          </Link>
        </div>
      </nav>
    </header>
  )
}
