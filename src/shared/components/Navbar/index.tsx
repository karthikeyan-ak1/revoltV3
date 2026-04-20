'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Routes } from '@/constants/routes'
import { BOOK_DEMO_LABEL, GET_STARTED_LABEL, LOGO_ALT, NAV_LINKS } from './constants'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
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

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Link href={Routes.Home} className={styles.logo} onClick={() => setMenuOpen(false)}>
              <Image src="/images/navbarLogo.webp" alt={LOGO_ALT} height={20} width={120} />
            </Link>
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <ul className={styles.mobileLinks}>
            {NAV_LINKS.map(({ label, mobileLabel, href }) => (
              <li key={href} className={styles.mobileLinkItem}>
                <Link href={href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  {mobileLabel ?? label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <Link
              href={Routes.Demo}
              className={styles.mobileDemoBtn}
              onClick={() => setMenuOpen(false)}
            >
              {BOOK_DEMO_LABEL}
            </Link>
            <Link
              href={Routes.Signup}
              className={styles.mobileCtaBtn}
              onClick={() => setMenuOpen(false)}
            >
              {GET_STARTED_LABEL}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
