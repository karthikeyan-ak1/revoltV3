import React from 'react'
import Image from 'next/image'
import type {
  CaseStudyBodyData,
  CaseStudyBodySection,
  CaseStudySidebarCard,
} from '@/constants/case-studies'

import styles from './BodySection.module.scss'

const ContentSection: React.FC<{ section: CaseStudyBodySection }> = ({ section }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionHeading}>{section.heading}</h2>
    <div className={styles.blocks}>
      {section.blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i} className={styles.paragraph}>
              {block.text}
            </p>
          )
        }
        if (block.type === 'label') {
          return (
            <p key={i} className={styles.label}>
              {block.text}
            </p>
          )
        }
        if (block.type === 'subheading') {
          return (
            <h3 key={i} className={styles.subheading}>
              {block.text}
            </h3>
          )
        }
        if (block.type === 'blockquote') {
          return (
            <blockquote key={i} className={styles.blockquote}>
              {block.text}
            </blockquote>
          )
        }
        if (block.type === 'bullets') {
          return (
            <ul key={i} className={styles.bulletList}>
              {block.items?.map((item, j) => (
                <li key={j} className={styles.bulletItem}>
                  <Image
                    src="/icons/diamond.svg"
                    alt=""
                    width={12}
                    height={12}
                    className={styles.bulletIcon}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }
        if (block.type === 'feature-list') {
          return (
            <div key={i} className={styles.featureList}>
              {block.featureItems?.map((item, j) => (
                <div key={j} className={styles.featureItem}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          )
        }
        if (block.type === 'image') {
          return (
            <div key={i} className={styles.imageBlock}>
              {block.imageSrc && (
                <Image
                  src={block.imageSrc}
                  alt={block.imageAlt ?? ''}
                  width={831}
                  height={708}
                  className={styles.contentImageDesktop}
                />
              )}
              {block.imageSrcMobile && (
                <Image
                  src={block.imageSrcMobile}
                  alt={block.imageAlt ?? ''}
                  width={342}
                  height={298}
                  className={styles.contentImageMobile}
                />
              )}
            </div>
          )
        }
        return null
      })}
    </div>
  </div>
)

const SidebarCard: React.FC<{ card: CaseStudySidebarCard; isLast: boolean }> = ({
  card,
  isLast,
}) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <Image src={card.icon} alt="" width={20} height={20} className={styles.cardIcon} />
      <span className={styles.cardTitle}>{card.title}</span>
    </div>
    {card.description && <p className={styles.cardDescription}>{card.description}</p>}
    {card.bulletGroups?.map((group, i) => (
      <ul key={i} className={styles.cardBulletList}>
        {group.map((item, j) => (
          <li key={j} className={styles.cardBulletItem}>
            <span className={styles.cardBulletDot} />
            {item}
          </li>
        ))}
      </ul>
    ))}
    {!isLast && <hr className={styles.cardDivider} />}
  </div>
)

const BodySection: React.FC<CaseStudyBodyData> = ({ sections, sidebar }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftCol}>
        {sections.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </div>

      <aside className={styles.rightCol}>
        {sidebar.map((card, i) => (
          <SidebarCard key={i} card={card} isLast={i === sidebar.length - 1} />
        ))}
      </aside>
    </div>
  )
}

export default BodySection
