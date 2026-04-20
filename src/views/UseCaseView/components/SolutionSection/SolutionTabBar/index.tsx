import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import type { SolutionFeature } from '@/constants/use-cases/types'

import styles from './SolutionTabBar.module.scss'

interface SolutionTabBarProps {
  tabs: SolutionFeature[]
  activeIndex: number
  onTabClick: (index: number) => void
}

const SolutionTabBar: React.FC<SolutionTabBarProps> = ({ tabs, activeIndex, onTabClick }) => {
  return (
    <div
      className={styles.tabBar}
      role="tablist"
      style={
        {
          '--tab-count': tabs.length,
          '--active-index': activeIndex,
        } as React.CSSProperties
      }
    >
      <div className={styles.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={tab.tabLabel}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={tab.tabLabel}
            className={clsx(styles.tab, i === activeIndex && styles.tabActive)}
            onClick={() => onTabClick(i)}
          >
            <span className={styles.tabIcon}>
              <Image src={tab.icon} alt="tab icon" width={16} height={16} />
            </span>
            <span className={styles.tabLabel}>{tab.tabLabel}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SolutionTabBar
