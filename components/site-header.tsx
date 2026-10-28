'use client'

import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="Project Imbutech home">PROJECT IMBUTECH<span>®</span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      <a href="/systems">Systems</a><a href="/research">Research</a><a href="/intelligence">Intelligence</a>
    </nav>
    <div className="header-actions"><a href="mailto:contact@meridian.systems" className="header-contact">Initiate contact <ArrowUpRight aria-hidden="true" /></a><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div>
    {open && <div className="mobile-menu"><a href="/systems" onClick={() => setOpen(false)}>Systems</a><a href="/research" onClick={() => setOpen(false)}>Research</a><a href="/intelligence" onClick={() => setOpen(false)}>Intelligence</a><a href="mailto:contact@meridian.systems" onClick={() => setOpen(false)}>Initiate contact</a></div>}
  </header>
}
