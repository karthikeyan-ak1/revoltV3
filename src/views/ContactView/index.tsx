import HeroSection from './components/HeroSection'
import FaqSection from '@/shared/components/FaqSection'
import { CONTACT_DATA } from '@/constants/contact'
import { PRICING_FAQ_DATA } from '@/constants/pricing'

const ContactView = () => {
  return (
    <main>
      <HeroSection data={CONTACT_DATA} />
      <FaqSection data={PRICING_FAQ_DATA} />
    </main>
  )
}

export default ContactView
