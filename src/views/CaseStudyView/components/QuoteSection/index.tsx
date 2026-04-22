import React from 'react'
import Image from 'next/image'
import LogoMarquee from '@/shared/components/LogoMarquee'
import { LOGOS } from '@/shared/constants/logos'
import type { CaseStudyQuoteData } from '@/constants/case-studies'

import styles from './QuoteSection.module.scss'

const QuoteSection: React.FC<CaseStudyQuoteData> = ({
  quote,
  authorName,
  authorRole,
  authorImage,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.marqueeWrapper}>
        <LogoMarquee logos={LOGOS} />
      </div>
      <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <Image
            src={authorImage}
            alt={authorName}
            fill
            sizes="6.4rem"
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{authorName}</span>
          <span className={styles.authorRole}>{authorRole}</span>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
