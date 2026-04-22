import { Color } from '@/shared/constants/colors'
import styles from './SectionLabel.module.scss'

interface SectionLabelProps {
  label: string
  hasDot?: boolean
  dotColor?: string
  labelColor?: Color
}

export default function SectionLabel({
  label,
  hasDot = true,
  dotColor,
  labelColor = Color.WHITE_60,
}: SectionLabelProps) {
  return (
    <p className={styles.label} style={{ color: labelColor }}>
      {hasDot && <span className={styles.dot} style={{ backgroundColor: dotColor }} />}
      <span>{label}</span>
    </p>
  )
}
