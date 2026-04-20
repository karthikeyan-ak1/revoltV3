import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { FOOTER_DATA } from '@/constants/footer'
import Button from '../Button'
import { ButtonTheme, ButtonVariant } from '@/shared/enums/button'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  const {
    ctaHeadline,
    ctaButtonLabel,
    ctaButtonHref,
    ctaBackgroundImage,
    logoSrc,
    logoAlt,
    tagline,
    bookDemoLabel,
    bookDemoHref,
    navGroups,
    socialLinks,
    legalLinks,
  } = FOOTER_DATA

  return (
    <footer className={styles.footer}>
      <div className={styles.ctaCard}>
        <div className={styles.ctaBg} aria-hidden="true">
          <Image src={ctaBackgroundImage} alt="" fill sizes="100vw" />
        </div>

        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeadline}>{ctaHeadline}</h2>
          <Button href={ctaButtonHref} variant={ButtonVariant.Primary} theme={ButtonTheme.Black}>
            {ctaButtonLabel}
          </Button>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <Image src={logoSrc} alt={logoAlt} width={220} height={39} />
          </div>
          <p className={styles.tagline}>{tagline}</p>
          <Button href={bookDemoHref} variant={ButtonVariant.Primary} className={styles.bookDemo}>
            {bookDemoLabel}
          </Button>

          <div className={styles.legalDesktop}>
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.legalLink}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.nav}>
          {navGroups.map((group) => (
            <div
              key={group.label}
              className={clsx(styles.navGroup, group.label === 'Contact' && styles.navGroupContact)}
            >
              <span className={styles.navGroupLabel}>{group.label}</span>
              <ul className={styles.navList}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                {group.label === 'Contact' && (
                  <li className={styles.socialRow}>
                    {socialLinks.map((s) => (
                      <a
                        key={s.icon}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={styles.socialIcon}
                      >
                        <Image src={s.icon} alt={s.label} height={20} width={20} />
                      </a>
                    ))}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mobileLegal}>
        <div className={styles.legalMobile}>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.legalLink}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className={styles.socialRowMobile}>
          {socialLinks.map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={styles.socialIcon}
            >
              <Image src={s.icon} alt={s.label} height={19} width={19} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
