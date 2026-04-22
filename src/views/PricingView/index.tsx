'use client'

import { useState } from 'react'
import HeroSection from './components/HeroSection'
import PlansSection from './components/PlansSection'
import FeatureComparisonSection from './components/FeatureComparisonSection'
import FaqSection from '@/shared/components/FaqSection'
import { PRICING_DATA, PRICING_FAQ_DATA } from '@/constants/pricing'

const PricingView = () => {
  const { hero } = PRICING_DATA
  const [showComparison, setShowComparison] = useState(false)

  const handleViewMore = () => setShowComparison(true)
  const handleViewLess = () => setShowComparison(false)

  return (
    <main>
      <HeroSection {...hero} />
      <PlansSection onViewMore={handleViewMore} showViewMore={!showComparison} />
      {showComparison && <FeatureComparisonSection onViewLess={handleViewLess} />}
      <FaqSection data={PRICING_FAQ_DATA} />
    </main>
  )
}

export default PricingView
