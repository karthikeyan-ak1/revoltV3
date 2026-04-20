'use client'

import React, { useState } from 'react'
import type { FaqSectionData } from '@/constants/use-cases/types'
import FaqAccordionItem from './FaqAccordionItem'
import Button from '@/shared/components/Button'
import { ButtonVariant, ButtonTheme } from '@/shared/enums/button'

import styles from './FaqSection.module.scss'

interface FaqSectionProps {
  data: FaqSectionData
}

const FaqSection: React.FC<FaqSectionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const {
    headline,
    headlineItalic,
    headlineEnd,
    contactLabel,
    contactSubtext,
    contactCtaLabel,
    contactCtaHref = '/contact',
    viewMoreLabel,
    viewMoreHref = '/faq',
    items,
  } = data

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.headline}>
          {headline} <em className={styles.headlineItalic}>{headlineItalic}</em>
          <br />
          {headlineEnd}
        </h2>

        <div className={styles.desktopContactCard}>
          <div className={styles.contactText}>
            <span className={styles.contactLabel}>{contactLabel}</span>
            <span className={styles.contactSubtext}>{contactSubtext}</span>
          </div>
          <Button variant={ButtonVariant.Primary} theme={ButtonTheme.Black} href={contactCtaHref}>
            {contactCtaLabel}
          </Button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.topDivider} />

        {items.map((item, i) => (
          <FaqAccordionItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={i === openIndex}
            onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
          />
        ))}

        {viewMoreLabel && (
          <Button
            variant={ButtonVariant.Secondary}
            theme={ButtonTheme.White}
            href={viewMoreHref}
            className={styles.viewMore}
          >
            {viewMoreLabel}
          </Button>
        )}
      </div>
      <div className={styles.mobileContactCard}>
        <div className={styles.contactText}>
          <span className={styles.contactLabel}>{contactLabel}</span>
          <span className={styles.contactSubtext}>{contactSubtext}</span>
        </div>
        <Button variant={ButtonVariant.Primary} theme={ButtonTheme.Black} href={contactCtaHref}>
          {contactCtaLabel}
        </Button>
      </div>
    </section>
  )
}

export default FaqSection
