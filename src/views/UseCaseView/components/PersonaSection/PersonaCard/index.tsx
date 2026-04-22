import React, { memo, useState, useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import type { PersonaCard as PersonaCardType } from '@/constants/use-cases'

import styles from './PersonaCard.module.scss'

interface PersonaCardProps {
  persona: PersonaCardType
  isActive: boolean
  index?: number
  sectionLoaded?: boolean
}

const PersonaCard: React.FC<PersonaCardProps> = ({ persona, isActive, index, sectionLoaded }) => {
  const willAnimate = index === 0
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    if (willAnimate && sectionLoaded && isActive && !animateIn) {
      setAnimateIn(true)
    }
  }, [sectionLoaded])

  return (
    <div
      className={clsx(
        styles.card,
        isActive && styles.active,
        willAnimate && animateIn && styles.animateIn,
        !willAnimate && styles.noAnimate,
      )}
      aria-hidden={!isActive}
    >
      <span className={styles.photoBg} style={{ backgroundColor: persona.profileBgColor }} />
      <Image
        src="/icons/smiley.svg"
        alt="smiley"
        height={64}
        width={64}
        className={styles.smiley}
      />

      <div className={clsx(styles.photo, index === 1 && styles.photoShiftRight)}>
        <Image src={persona.image} alt={persona.role} fill />
      </div>

      <div className={styles.rolePill} style={{ backgroundColor: persona.roleBgColor }}>
        <span>- {persona.role}</span>
      </div>

      <div className={styles.problemCard} style={{ backgroundColor: persona.problemBgColor }}>
        <p className={styles.problemText}>{persona.problemStatement}</p>
      </div>
    </div>
  )
}

export default memo(PersonaCard)
