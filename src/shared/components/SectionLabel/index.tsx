import styles from './SectionLabel.module.scss'

interface SectionLabelProps {
  label: string
  dotColor: string
}

export default function SectionLabel({ label, dotColor }: SectionLabelProps) {
  return (
    <p className={styles.label}>
      <span className={styles.dot} style={{ color: dotColor }}>
        ■
      </span>
      <span>{label}</span>
    </p>
  )
}
