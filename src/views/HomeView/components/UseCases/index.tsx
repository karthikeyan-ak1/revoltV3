'use client'

import React, { useEffect, useState } from 'react'
import LogoMarquee from '@/shared/components/LogoMarquee'
import SectionLabel from '@/shared/components/SectionLabel'
import { Color } from '@/shared/constants/colors'
import { LOGOS } from '@/shared/constants/logos'
import {
  USE_CASES,
  USE_CASES_DESCRIPTION,
  USE_CASES_HEADING,
  USE_CASES_HEADING_EM,
  USE_CASES_HEADING_SUFFIX,
  USE_CASES_LABEL,
} from './constants'
import styles from './UseCases.module.scss'

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % USE_CASES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionLabel label={USE_CASES_LABEL} dotColor={Color.LAVENDER} />
        <h2 className={styles.heading}>
          {USE_CASES_HEADING} <span>{USE_CASES_HEADING_EM}</span> {USE_CASES_HEADING_SUFFIX}
        </h2>
        <p className={styles.description}>{USE_CASES_DESCRIPTION}</p>
      </div>

      <div className={styles.grid}>
        {USE_CASES.map(({ titlePrefix, titleEm, titleSuffix, description, bg }) => (
          <div
            key={titleEm}
            className={styles.card}
            style={bg ? ({ '--card-bg': `url(${bg})` } as React.CSSProperties) : undefined}
          >
            <h3 className={styles.cardTitle}>
              {titlePrefix} <span>{titleEm}</span>
              <br />
              {titleSuffix}
            </h3>
            <div className={styles.cardOverlay}>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.carousel}>
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {USE_CASES.map(({ titlePrefix, titleEm, titleSuffix, description, bg }) => (
            <div key={titleEm} className={styles.carouselSlide}>
              <div
                className={styles.carouselCard}
                style={bg ? ({ '--card-bg': `url(${bg})` } as React.CSSProperties) : undefined}
              >
                <h3 className={styles.carouselCardTitle}>
                  {titlePrefix} <span>{titleEm}</span>
                  <br />
                  {titleSuffix}
                </h3>
                <div className={styles.carouselCardOverlay}>
                  <p className={styles.cardDescription}>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {USE_CASES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
