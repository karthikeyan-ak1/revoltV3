'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Button from '@/shared/components/Button'
import { ButtonVariant, ButtonTheme } from '@/shared/enums/button'
import type { PricingTierData } from '@/constants/pricing'

import styles from './PricingCard.module.scss'

interface PricingCardProps {
  data: PricingTierData
  totalSpecCount: number
}

const PricingCard: React.FC<PricingCardProps> = ({ data, totalSpecCount }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const toggleProducts = () => setIsProductsOpen((prev) => !prev)

  const {
    id,
    name,
    headerColor,
    price,
    badges,
    description,
    billingNote,
    ctaLabel,
    ctaHref,
    specRows,
    specBullets,
    productsHeading,
    productItems,
    paygRates,
  } = data

  return (
    <article className={styles.card}>
      <div
        className={clsx(
          styles.header,
          id === 'free' && styles.first,
          id === 'enterprise' && styles.last,
        )}
        style={{ backgroundColor: headerColor }}
      >
        <span className={styles.name}>{name}</span>
      </div>

      <div className={clsx(styles.body, id === 'enterprise' && styles.lastBody)}>
        <div className={styles.priceRow}>
          <p className={styles.price}>
            <span className={styles.symbol}>{price !== 'Custom' && '$'}</span>
            {price}
          </p>
          <div className={styles.badges}>
            {badges.map((badge) => (
              <span key={badge} className={styles.badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <p className={styles.description}>{description}</p>
        <p className={styles.billingNote}>{billingNote}</p>

        <Button
          variant={ButtonVariant.Secondary}
          theme={ButtonTheme.White}
          href={ctaHref}
          className={styles.desktopCta}
        >
          {ctaLabel}
        </Button>

        <div className={styles.specSection}>
          {specRows?.map((row) => (
            <div key={row.label} className={styles.specRow}>
              <span className={styles.specLabel}>{row.label}</span>
              <span className={styles.specValue}>{row.value}</span>
            </div>
          ))}

          {specBullets?.map((bullet) => (
            <p key={bullet} className={styles.specBullet}>
              <Image
                src="/icons/diamond.svg"
                alt="icon"
                height={8}
                width={8}
                className={styles.bulletIcon}
              />
              {bullet}
            </p>
          ))}

          {specBullets &&
            Array.from({ length: totalSpecCount - specBullets.length }).map((_, i) => (
              <div key={`empty-${i}`} className={styles.specEmpty} />
            ))}
        </div>

        <Button
          variant={ButtonVariant.Secondary}
          theme={ButtonTheme.White}
          href={ctaHref}
          className={styles.mobileCta}
        >
          {ctaLabel}
        </Button>

        <div className={styles.products}>
          <button className={styles.productsHeader} onClick={toggleProducts}>
            <p className={styles.productsHeading}>{productsHeading}</p>
            <Image
              src="/icons/arrow-down.svg"
              alt="arrow"
              height={11}
              width={11}
              className={clsx(styles.productsArrow, isProductsOpen && styles.productsArrowOpen)}
            />
          </button>

          <div className={clsx(styles.productItems, isProductsOpen && styles.productItemsOpen)}>
            {productItems.map((item) => (
              <p key={item} className={styles.productItem}>
                <Image src="/icons/tick.svg" alt="icon" height={8} width={12} />
                {item}
              </p>
            ))}
          </div>
        </div>

        <p className={clsx(styles.paygRates, isProductsOpen && styles.paygRatesOpen)}>
          <span>Overages billed at PAYG rates</span>
          <br />
          {paygRates}
        </p>
      </div>
    </article>
  )
}

export default PricingCard
