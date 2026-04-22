import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, CASE_STUDIES } from '@/constants/case-studies'
import CaseStudyView from '@/views/CaseStudyView'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const data = getCaseStudyBySlug(slug)

  if (!data) notFound()

  return <CaseStudyView {...data} />
}
