'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { CARD, FEATURES } from './constants'
import styles from './CardStack.module.scss'

const CONTENT_IMAGE = '/images/cardStackContent.png'

export default function CardStack() {
  const outerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const elapsedRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)
  const prevCardRef = useRef(0)
  const hasStartedRef = useRef(false)

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const [activeCard, setActiveCard] = useState(0)
  const [cardProgress, setCardProgress] = useState(0)
  const [exitCard, setExitCard] = useState<number | null>(null)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')

  const stopTimer = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    lastTimeRef.current = null
  }, [])

  const goToCard = useCallback((next: number) => {
    const prev = prevCardRef.current
    if (next === prev) return

    setDirection(next > prev ? 'forward' : 'backward')
    setExitCard(prev)
    prevCardRef.current = next
    elapsedRef.current = 0
    lastTimeRef.current = null
    setCardProgress(0)
    setActiveCard(next)
    setTimeout(() => setExitCard(null), 650)
  }, [])

  const startTimer = useCallback(() => {
    if (rafRef.current) return

    const animate = (timestamp: number) => {
      if (lastTimeRef.current !== null) {
        elapsedRef.current += timestamp - lastTimeRef.current
      }
      lastTimeRef.current = timestamp

      const duration = FEATURES[prevCardRef.current].duration
      const progress = Math.min(elapsedRef.current / duration, 1)
      setCardProgress(progress)

      if (elapsedRef.current >= duration) {
        const next = prevCardRef.current + 1
        goToCard(next < FEATURES.length ? next : 0)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [goToCard])

  const handleCardClick = useCallback(
    (index: number) => {
      stopTimer()
      goToCard(index)
      requestAnimationFrame(() => startTimer())
    },
    [goToCard, startTimer, stopTimer],
  )

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) < 50) return

    stopTimer()
    if (diff > 0) {
      goToCard((activeCard + 1) % FEATURES.length)
    } else {
      goToCard(activeCard - 1 < 0 ? FEATURES.length - 1 : activeCard - 1)
    }
    requestAnimationFrame(() => startTimer())
    touchStartX.current = null
    touchEndX.current = null
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasStartedRef.current) hasStartedRef.current = true
          startTimer()
        } else {
          stopTimer()
        }
      },
      { threshold: 0.3 },
    )

    if (outerRef.current) observer.observe(outerRef.current)
    return () => {
      observer.disconnect()
      stopTimer()
    }
  }, [startTimer, stopTimer])

  const getBarWidth = (i: number) => {
    if (i < activeCard) return '100%'
    if (i === activeCard) return `${cardProgress * 100}%`
    return '0%'
  }

  const getImageClass = (i: number) => {
    if (i === activeCard) return styles.imageEnter
    if (i === exitCard)
      return direction === 'forward' ? styles.imageExitLeft : styles.imageExitRight
    return styles.imageHidden
  }

  return (
    <div ref={outerRef} className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <ul className={styles.featureList}>
            {FEATURES.map((feat, i) => {
              const isActive = i === activeCard
              return (
                <li
                  key={feat.title}
                  onClick={() => handleCardClick(i)}
                  className={`${styles.featureItem} ${isActive ? styles.featureItemActive : ''}`}
                >
                  <div className={styles.featureRow}>
                    <Image src={feat.icon} height={20} width={20} alt="" />
                    <span className={styles.featureTitle}>{feat.title}</span>
                  </div>
                  <div className={styles.featureMeta}>
                    <div className={styles.featureMetaInner}>
                      <p className={styles.featureDesc}>{feat.desc}</p>
                      <div className={styles.progressTrack}>
                        <div className={styles.progressBar} style={{ width: getBarWidth(i) }} />
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div
            className={styles.ctaLink}
            onClick={() => window.open('https://console.revolte.ai/auth/signup', '_blank')}
          >
            <div>{CARD.CTA}</div>
            <div className={styles.arrow}>{CARD.ARROW}</div>
          </div>
        </div>

        <div className={styles.right}>
          {FEATURES.map((_, i) => (
            <div key={i} className={`${styles.imageSlot} ${getImageClass(i)}`}>
              <Image
                src={CONTENT_IMAGE}
                alt="Card stack content"
                className={styles.coverImage}
                width={662}
                height={752}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={styles.mobileWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.mobileContent}>
          <div className={styles.mobileHeader}>
            <div>
              <Image src={FEATURES[activeCard].icon} width={22} height={22} alt="" />
            </div>
            <h3 className={styles.title}>{FEATURES[activeCard].title}</h3>
          </div>
          <p className={styles.mobileDesc}>{FEATURES[activeCard].desc}</p>
          <div
            className={styles.mobileCTA}
            onClick={() => window.open('https://console.revolte.ai/auth/signup', '_blank')}
          >
            <div>{CARD.CTA}</div>
            <div className={styles.arrow}>{CARD.ARROW}</div>
          </div>
        </div>

        <div className={styles.mobileMedia}>
          <Image
            src={CONTENT_IMAGE}
            alt="Card stack content"
            width={500}
            height={500}
            className={styles.mobileImage}
          />
        </div>

        <div className={styles.mobileBars}>
          {FEATURES.map((_, i) => (
            <div key={i} className={styles.mobileBarTrack}>
              <div
                className={styles.mobileBar}
                style={{
                  transform: `scaleX(${i < activeCard ? 1 : i === activeCard ? cardProgress : 0})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
