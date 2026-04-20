import { USE_CASES } from '@/constants/use-cases'
import { redirect } from 'next/navigation'

export default function UseCasesPage() {
  redirect(`/use-cases/${USE_CASES[0].slug}`)
}
