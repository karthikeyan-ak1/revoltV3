import React from 'react'
import HeroSection from './components/HeroSection'
import QuoteSection from './components/QuoteSection'
import BodySection from './components/BodySection'
import type { CaseStudyData } from '@/constants/case-studies'

const CaseStudyView: React.FC<CaseStudyData> = ({ hero, quote, body }) => {
  return (
    <main>
      <HeroSection {...hero} />
      <QuoteSection {...quote} />
      <BodySection {...body} />
    </main>
  )
}

export default CaseStudyView
