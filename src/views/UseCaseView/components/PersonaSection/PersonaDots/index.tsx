import React from 'react'
import clsx from 'clsx'

import styles from './PersonaDots.module.scss'

interface PersonaDotsProps {
  count: number
  activeIndex: number
  onDotClick: (index: number) => void
}

const PersonaDots: React.FC<PersonaDotsProps> = ({ count, activeIndex, onDotClick }) => {
  return (
    <div className={styles.list} role="tablist" aria-label="Persona slides">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={`Slide ${i + 1}`}
          className={clsx(styles.dot, i === activeIndex && styles.active)}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  )
}

export default PersonaDots
