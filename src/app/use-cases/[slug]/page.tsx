import { notFound } from 'next/navigation'
import { getUseCaseBySlug, USE_CASES } from '@/constants/use-cases'
import UseCaseView from '@/views/UseCaseView'

interface UseCasePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return USE_CASES.map((uc) => ({ slug: uc.slug }))
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params
  const data = getUseCaseBySlug(slug)

  if (!data) notFound()

  return (
    <UseCaseView
      hero={data.hero}
      persona={data.persona}
      howItWorks={data.howItWorks}
      solution={data.solution}
      proof={data.proof}
      valueProp={data.valueProp}
      features={data.features}
      ctaBanner={data.ctaBanner}
      faq={data.faq}
    />
  )
}
