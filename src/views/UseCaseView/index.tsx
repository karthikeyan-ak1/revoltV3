import React from 'react'
import HeroSection from './components/HeroSection'
import PersonaSection from './components/PersonaSection'
import HowItWorksSection from './components/HowItWorksSection'
import SolutionSection from './components/SolutionSection'
import ProofSection from './components/ProofSection'
import ValuePropSection from './components/ValuePropSection'
import CtaBanner from './components/CtaBanner'
import FeaturesSection from './components/FeaturesSection'
import FaqSection from '../../shared/components/FaqSection'
import type {
  HeroData,
  PersonaSectionData,
  HowItWorksSectionData,
  SolutionSectionData,
  ProofSectionData,
  ValuePropSectionData,
  CtaBannerData,
  FeaturesSectionData,
  FaqSectionData,
} from '@/constants/use-cases/types'

export interface UseCaseViewProps {
  hero: HeroData
  persona: PersonaSectionData
  howItWorks: HowItWorksSectionData
  solution: SolutionSectionData
  proof: ProofSectionData
  valueProp: ValuePropSectionData
  features: FeaturesSectionData
  ctaBanner: CtaBannerData
  faq: FaqSectionData
}

const UseCaseView: React.FC<UseCaseViewProps> = ({
  hero,
  persona,
  howItWorks,
  solution,
  proof,
  valueProp,
  features,
  ctaBanner,
  faq,
}) => {
  return (
    <main>
      <HeroSection {...hero} />
      <PersonaSection data={persona} />
      <HowItWorksSection data={howItWorks} />
      <SolutionSection data={solution} />
      <ProofSection data={proof} />
      <ValuePropSection data={valueProp} />
      <FeaturesSection data={features} />
      <CtaBanner data={ctaBanner} />
      <FaqSection data={faq} />
    </main>
  )
}

export default UseCaseView
