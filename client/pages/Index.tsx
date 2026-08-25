import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const artwork = {
  circle: "https://maini.frappe.cloud/files/farb%20quadrat%20xjanne%20kreis.webp",
  space: "https://maini.frappe.cloud/files/farb%20quadrat%20xjanne%20space.webp",
  cover: "https://maini.frappe.cloud/files/ohne%20bg%20raw%20cover%202.webp",
  creative: "https://maini.frappe.cloud/files/design%20quadrat%20krativ.webp",
  mark: "https://maini.frappe.cloud/files/kreis%20ohne%20bg%20mit%20stern%20dunkel.webp",
  logo: "https://maini.frappe.cloud/files/xj%20lila.webp",
};

const links = [
  ["Socials", "/socials"], ["Projekte", "/projekte"], ["Stream", "/stream"],
  ["Kunst", "/kunst"], ["Musik", "/musik"], ["Arcanimals", "/arcanimals"],
];

function Nav({ onClose }: { onClose?: () => void }) {
  return <nav className="flex flex-col items-center gap-1 md:flex-row md:gap-0">
    {links.map(([label, href]) => <Link onClick={onClose} key={href} to={href} className="nav-link">{label}</Link>)}
  </nav>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#180824]/85 backdrop-blur-md">
    <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between px-6 md:px-10">
      <Link to="/" className="z-10 transition-transform hover:scale-105"><img src={artwork.logo} alt="xJanne" className="h-12 w-12 object-contain" /></Link>
      <div className="hidden md:block"><Nav /></div>
      <button aria-label="Menü öffnen" onClick={() => setOpen(!open)} className="z-10 rounded-full p-2 text-white md:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="absolute left-0 right-0 top-[78px] border-b border-white/10 bg-[#180824] px-8 py-8"><Nav onClose={() => setOpen(false)} /></div>}
  </header>;
}

function Footer() {
  return <footer className="relative overflow-hidden bg-gradient-to-b from-[#150122] to-[#050108] px-6 py-16 md:h-[338px] md:px-12">
    <div className="mx-auto flex h-full max-w-[1280px] flex-col justify-between md:relative">
      <div className="md:absolute md:left-0 md:top-16"><div className="text-2xl font-bold text-[#db2bff]">xJanne</div><div className="text-2xl text-[#7325ab]">Musik, Kunst, Streaming</div></div>
      <img src={artwork.mark} alt="xJanne star mark" className="mx-auto my-8 h-40 w-40 object-contain opacity-90 md:absolute md:left-1/2 md:top-0 md:my-0 md:-translate-x-1/2" />
      <Link to="/contact" className="mx-auto rounded bg-[#200628] px-4 py-2 text-sm text-[#b8b0b0] transition hover:bg-[#35103e] md:absolute md:left-1/2 md:top-[212px] md:-translate-x-1/2">Contact</Link>
      <div className="text-center text-xs text-[#bfb8b8] md:absolute md:bottom-0 md:left-0">© <a href="https://xjanne.com/" target="_blank" rel="noreferrer" className="underline">xJanne.com</a> <span className="mx-2">|</span> <a href="https://nicolaj.org/" target="_blank" rel="noreferrer" className="underline">Nicolaj.org</a> <span className="ml-2">All Rights Reserved</span></div>
    </div>
  </footer>;
}

export default function Index() {
  return <div className="site-shell"><Header /><main>
    <section className="hero-art" aria-label="xJanne artwork">
      <img src={artwork.circle} alt="Colorful circular artwork" className="art art-left" />
      <img src={artwork.space} alt="Colorful space artwork" className="art art-right" />
      <img src={artwork.cover} alt="xJanne cover art" className="art art-cover" />
      <div className="hero-glow" />
    </section>
    <section className="intro-section"><div className="intro-copy"><Link to="/musik" className="eyebrow">WILLKOMMEN <ArrowUpRight size={14} /></Link><h1>Musik,<br className="hidden md:block" /> Kunst, Streaming</h1><p>Willkommen auf der offiziellen Website von xJanne.</p><Link to="/projekte" className="text-link">Entdecke die Welt <ArrowUpRight size={17} /></Link></div><img src={artwork.creative} alt="Creative design artwork" className="creative-art" /></section>
  </main><Footer /></div>;
}

export function SectionPage({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="site-shell"><Header /><main className="section-page"><div className="section-page-inner"><span className="eyebrow">XJANNE / {title.toUpperCase()}</span><h1>{title}</h1><p>{subtitle}</p><Link to="/" className="text-link">Zur Startseite <ArrowUpRight size={17} /></Link></div></main><Footer /></div>;
}
