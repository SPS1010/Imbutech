'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const systems = [
  { id: 'AE—01', name: 'LANCER', type: 'Directed energy / prototype', note: 'Precision at the edge of possibility.' },
  { id: 'AE—02', name: 'ECLIPSE', type: 'Field projection / active', note: 'A new geometry for defense.' },
  { id: 'AE—03', name: 'RIFT', type: 'Spatial research / restricted', note: 'The environment is not passive.' },
]

const archive = [
  ['M—24.091', 'Test range observations / 07.18.24', 'FIELD NOTE'],
  ['M—24.067', 'On the persistence of residual fields', 'RESEARCH'],
  ['M—23.114', 'AE-01 Lancer: systems review', 'PROGRAM'],
]

export default function Page() {
  return (
    <main className="meridian-site">
      <SiteHeader />

      <section className="hero" id="top">
        <img src="/meridian-hero.png" alt="Graphite autonomous defense platform on a volcanic test range" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-meta"><span>PROJECT IMBUTECH / CONIX ENERGY</span><span>ARCADE SIGNAL / ACTIVE</span></div>
        <div className="hero-copy"><p className="eyebrow">The signal is already in motion.</p><h1>Channeling<br /><i>the Conix charge.</i></h1><p className="hero-description">Project Imbutech turns Conix energy into fast, strange, and impossible-to-ignore systems for the next level.</p></div>
        <a className="scroll-cue" href="#intro"><span>Scroll to explore</span><ArrowDownRight aria-hidden="true" /></a>
        <div className="hero-index">01 <span>/</span> 06</div>
      </section>

      <section className="intro section-light" id="intro"><div className="section-kicker">01 — POSITION</div><div className="intro-grid"><h2>We make technology<br />for the <em>unfamiliar.</em></h2><div className="intro-body"><p>When the operating environment changes, the system must change with it. Imbutech combines autonomy, advanced materials, and anomalous-energy research to give operators decisive capability in the moments that matter most.</p><a className="text-link" href="/intelligence">Our approach <ArrowUpRight aria-hidden="true" /></a></div></div></section>

      <section className="systems section-dark" id="systems"><div className="section-kicker muted">02 — ACTIVE SYSTEMS <span>AE PROGRAM / 2026</span></div><div className="systems-heading"><h2>Built for the<br /><em>edge cases.</em></h2><p>Six active programs. One expanding field of view.</p></div><div className="system-list">{systems.map((system, index) => <a className="system-row" href="/systems" key={system.id}><span className="system-index">0{index + 1}</span><span className="system-id">{system.id}</span><span className="system-name">{system.name}</span><span className="system-type">{system.type}</span><span className="system-note">{system.note}</span><ArrowUpRight aria-hidden="true" /></a>)}</div><a className="outline-link" href="/systems">View all systems <ArrowUpRight aria-hidden="true" /></a></section>

      <section className="feature-image"><img src="/meridian-facility.png" alt="Remote Imbutech research facility at night" /><div className="feature-caption"><span>IMBUTECH / RANGE 04</span><span>RESTRICTED AIRSPACE</span></div></section>

      <section className="research section-light" id="research"><div className="section-kicker">03 — RESEARCH ARCHIVE</div><div className="research-grid"><div><h2>Some answers<br />create <em>questions.</em></h2><p className="research-lede">Our research group works beyond established categories. We publish what can be shared.</p><a className="text-link" href="/research">Explore the archive <ArrowUpRight aria-hidden="true" /></a></div><div className="archive" id="archive">{archive.map(([code, title, tag]) => <a className="archive-row" href="/research" key={code}><span className="archive-code">{code}</span><span className="archive-title">{title}<small>{tag}</small></span><ArrowUpRight aria-hidden="true" /></a>)}</div></div></section>

      <section className="statement section-dark" id="company"><div className="statement-mark">M</div><div className="statement-copy"><p className="eyebrow">A different kind of defense company.</p><h2>Make the impossible<br /><em>operational.</em></h2><p>We are a small, exacting team of engineers, operators, and researchers working on problems that do not yet have names.</p></div></section>

      <SiteFooter />
    </main>
  )
}
