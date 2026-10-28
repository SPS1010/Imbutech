import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const weapons = {
  lancer: { id: 'AE—01', name: 'LANCER', type: 'Directed energy / prototype', status: 'POWERING UP', text: 'A long-range energy platform built around impossible precision. Lancer turns a single opening into a decisive line of fire.', detail: 'Its targeting intelligence reads motion before it becomes intent, holding steady through interference and delivering force exactly where it is needed.' },
  eclipse: { id: 'AE—02', name: 'ECLIPSE', type: 'Field projection / active', status: 'OPERATIONAL', text: 'Eclipse projects a mobile blackout field that reshapes the fight in seconds.', detail: 'It suppresses hostile sensors, fractures visual coverage, and gives operators control of the terrain without leaving a footprint behind.' },
  rift: { id: 'AE—03', name: 'RIFT', type: 'Spatial research / restricted', status: 'RESTRICTED', text: 'Rift treats unstable space as a route instead of a barrier.', detail: 'The system maps discontinuities in real time, opening brief tactical corridors through terrain that conventional hardware cannot cross.' },
  kite: { id: 'AE—04', name: 'KITE', type: 'Autonomous reconnaissance / active', status: 'DEPLOYED', text: 'Kite moves before the map catches up: silent, fast, and already watching the next position.', detail: 'Its compact frame carries a full-spectrum sensor suite and an intelligence that can mark, track, and reroute without waiting for a command.' },
  morrow: { id: 'AE—05', name: 'MORROW', type: 'Adaptive material intelligence / classified', status: 'CLASSIFIED', text: 'Morrow is armour that learns. Every impact becomes data, and every weakness becomes a new layer of protection.', detail: 'The prototype changes density and shape under pressure, turning incoming force into structural advantage while its intelligence studies the threat.' },
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
