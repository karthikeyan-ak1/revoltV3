'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import LogoMarquee from '@/shared/components/LogoMarquee'
import { LOGOS } from '@/shared/constants/logos'
import PersonaCard from './PersonaCard'
import PersonaDots from './PersonaDots'
import { PersonaSectionData } from '@/constants/use-cases'
import SectionLabel from '@/shared/components/SectionLabel'
import { Color } from '@/shared/constants/colors'

import styles from './PersonaSection.module.scss'

interface PersonaSectionProps {
  data: PersonaSectionData
}

const PersonaSection: React.FC<PersonaSectionProps> = ({ data }) => {
  const {
    eyebrow,
    headline,
    headlineItalic,
    headlineEnd,
    description,
    ctaLabel,
    ctaHref = '#',
    personas,
    autoPlayInterval = 3000,
  } = data

  const [activeIndex, setActiveIndex] = useState(0)

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % personas.length)
  }, [personas.length])

  useEffect(() => {
    const timer = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(timer)
  }, [goToNext, autoPlayInterval])

  return (
    <section className={styles.persona}>
      <LogoMarquee logos={LOGOS} />

      <div className={styles.content}>
        <div className={styles.textCol}>
          <SectionLabel label={eyebrow} dotColor={Color.VIOLET} labelColor={Color.BLACK_60} />
          <h2 className={styles.headline}>
            {headline} <em className={styles.headlineItalic}>{headlineItalic}</em> {headlineEnd}
          </h2>

          <p className={styles.description}>{description}</p>

          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel} &gt;
          </Link>
        </div>
        <div className={styles.carouselCol}>
          <div className={styles.carouselTrack}>
            {personas.map((persona, i) => (
              <PersonaCard
                key={persona.role}
                persona={persona}
                isActive={i === activeIndex}
                index={i}
              />
            ))}
          </div>

          <div className={styles.dotsRow}>
            <PersonaDots
              count={personas.length}
              activeIndex={activeIndex}
              onDotClick={setActiveIndex}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonaSection
