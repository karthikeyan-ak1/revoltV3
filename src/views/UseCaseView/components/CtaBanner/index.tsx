import React from 'react'
import Image from 'next/image'
import Button from '@/shared/components/Button'
import { ButtonVariant, ButtonTheme } from '@/shared/enums/button'
import type { CtaBannerData } from '@/constants/use-cases/types'

import styles from './CtaBanner.module.scss'

interface CtaBannerProps {
  data: CtaBannerData
}

const CtaBanner: React.FC<CtaBannerProps> = ({ data }) => {
  const { headline, ctaLabel, ctaHref = '/get-started', backgroundImage } = data

  return (
    <section className={styles.banner}>
      <div className={styles.bg} aria-hidden="true">
        <Image
          src={backgroundImage}
          alt="background Image"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.headline}>{headline}</p>
        <Button variant={ButtonVariant.Primary} theme={ButtonTheme.White} href={ctaHref}>
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}

export default CtaBanner
