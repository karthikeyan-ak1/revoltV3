import React from 'react'
import clsx from 'clsx'

import styles from './FaqAccordionItem.module.scss'

interface FaqAccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={clsx(styles.item, isOpen && styles.itemOpen)}>
      <button type="button" className={styles.trigger} onClick={onToggle} aria-expanded={isOpen}>
        <span className={styles.question}>{question}</span>
      </button>

      <div className={styles.answerWrap} aria-hidden={!isOpen}>
        <div className={styles.answerInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>

      <div className={styles.divider} />
    </div>
  )
}

export default FaqAccordionItem
