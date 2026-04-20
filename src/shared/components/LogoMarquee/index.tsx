import Image from 'next/image'
import styles from './LogoMarquee.module.scss'

interface Logo {
  name: string
  file: string
}

interface LogoMarqueeProps {
  logos: Logo[]
  speed?: number
}

export default function LogoMarquee({ logos, speed = 24 }: LogoMarqueeProps) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.track} style={{ animationDuration: `${speed}s` }}>
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={i}
              src={`/images/${logo.file}.webp`}
              alt={logo.name}
              height={28}
              width={120}
              className={styles.logo}
            />
          ))}
        </div>
      </div>

      <div className={styles.staticGrid}>
        {logos.map((logo) => (
          <Image
            key={logo.name}
            src={`/images/${logo.file}.webp`}
            alt={logo.name}
            height={28}
            width={120}
            className={styles.logo}
          />
        ))}
      </div>
    </>
  )
}
