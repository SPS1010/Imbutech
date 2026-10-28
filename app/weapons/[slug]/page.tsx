import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const weapons = {
  lancer: { id: 'AE—01', name: 'LANCER', type: 'Conix energy / prototype', status: 'POWERING UP', text: 'A long-range platform tuned to the charge behind every Conix run. Lancer turns momentum into a line that keeps moving.', detail: 'The current iteration is less interested in impact than velocity. It watches, waits, and makes the next second feel like a bonus round.' },
  eclipse: { id: 'AE—02', name: 'ECLIPSE', type: 'Conix field projection / active', status: 'IN PLAY', text: 'Eclipse makes a temporary arcade out of atmosphere, signal, and extremely good timing.', detail: 'Operators describe the field as a level with no walls. We describe it as a question with a high score.' },
  rift: { id: 'AE—03', name: 'RIFT', type: 'Conix spatial research / restricted', status: 'LEVEL LOCKED', text: 'The environment is not passive. Rift follows the possibility that Conix energy has been responding all along.', detail: 'Research remains inconclusive, which is another way of saying the level keeps opening.' },
  kite: { id: 'AE—04', name: 'KITE', type: 'Conix reconnaissance / active', status: 'RUNNING', text: 'Kite moves before the map catches up. A quiet system with arcade-speed instincts.', detail: 'Its best work is the information nobody notices arriving. Its second-best work is leaving a clean high-score trail.' },
  morrow: { id: 'AE—05', name: 'MORROW', type: 'Conix material intelligence / classified', status: 'SECRET BONUS', text: 'Morrow treats material as a collaborator, not a container. The prototype has begun taking cues from Conix.', detail: 'We are still deciding whether that is a feature, a failure mode, or a new category of power-up.' },
} as const

export function generateStaticParams() { return Object.keys(weapons).map((slug) => ({ slug })) }

export default async function WeaponPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const weapon = weapons[slug as keyof typeof weapons]
  if (!weapon) notFound()

  return <main className="meridian-site weapon-detail-page">
    <SiteHeader />
    <section className="weapon-hero page-hero">
      <a className="back-link" href="/systems"><ArrowLeft aria-hidden="true" /> Back to systems</a>
      <p className="eyebrow">{weapon.id} / WEAPON SYSTEM DOSSIER</p>
      <h1>{weapon.name}</h1>
      <p>{weapon.type}</p>
      <span className="hero-index">DOSSIER <span>/</span> 0{Object.keys(weapons).indexOf(slug) + 1}</span>
    </section>
    <section className="weapon-dossier section-light">
      <div className="weapon-placeholder" role="img" aria-label={`${weapon.name} visual placeholder`}><span>VISUAL PLACEHOLDER</span><strong>{weapon.id}</strong><small>RENDER PENDING / RANGE 04</small></div>
      <div className="weapon-copy"><p className="section-kicker">FIELD NOTES <span>{weapon.status}</span></p><h2>{weapon.text}</h2><p>{weapon.detail}</p><a className="text-link" href="/research">Read related research <ArrowUpRight aria-hidden="true" /></a></div>
    </section>
    <section className="weapon-specs section-dark"><p className="section-kicker muted">SYSTEM LOG / {weapon.id}</p><div className="weapon-spec-grid"><div><span>PROGRAM</span><strong>AE / ADVANCED EDGE</strong></div><div><span>LOCATION</span><strong>RANGE 04 — REDACTED</strong></div><div><span>LAST SIGNAL</span><strong>06:14:09 UTC</strong></div></div></section>
    <SiteFooter />
  </main>
}
