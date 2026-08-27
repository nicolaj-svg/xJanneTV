import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
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
  ["Kunst", "/kunst"], ["Musik", "/musik"], ["Arcanimals", "/arcanimals"], ["Contact", "/contact"],
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
    <section className="intro-section"><div className="intro-copy"><a href="https://www.twitch.tv/xjannetv" target="_blank" rel="noreferrer" className="eyebrow">WILLKOMMEN <ArrowUpRight size={14} /></a><h1 className="flex flex-col items-start justify-start pr-[5px]">Musik,<br className="hidden md:block" /> Kunst, Streaming</h1><p>Willkommen auf der offiziellen Website von xJanne.</p><Link to="/projekte" className="text-link">Entdecke die Welt <ArrowUpRight size={17} /></Link></div><img src={artwork.creative} alt="Creative design artwork" className="creative-art" /></section>
  </main><Footer /></div>;
}

export function ContactPage() {
  return <div className="site-shell"><Header /><main className="contact-page"><div className="contact-page-inner"><img src="https://cdn.builder.io/api/v1/image/assets%2F843c2c9147174e21a08386d68870f8b1%2F3bdd9b522be04ea8aa28c3f63007e729?format=webp&width=800&height=1200" alt="Contact xJanne" className="contact-title-art" /><div className="contact-card"><div className="contact-icon"><MessageCircle size={30} /></div><div><span className="contact-label">COMMUNITY</span><h1>Discord</h1><p>Werde Teil der xJanne Community. Austausch, Updates und neue Projekte findest du auf Discord.</p></div><div className="contact-status"><span /> Invite-Link folgt</div></div></div></main><Footer /></div>;
}

const sectionContent: Record<string, { image: string; label: string; links: { label: string; href: string; external?: boolean }[] }> = {
  Socials: { image: "https://cdn.builder.io/api/v1/image/assets%2F843c2c9147174e21a08386d68870f8b1%2Faec16121e65a4908a9979850982e9fb7?format=webp&width=800&height=1200", label: "FOLGE XJANNE", links: [{ label: "Twitch", href: "https://www.twitch.tv/xjannetv", external: true }, { label: "YouTube", href: "https://www.youtube.com/@xjannetv", external: true }, { label: "Instagram", href: "https://www.instagram.com/xjannetv", external: true }, { label: "TikTok", href: "https://www.tiktok.com/@xjannetv", external: true }] },
  Projekte: { image: "https://cdn.builder.io/api/v1/image/assets%2F843c2c9147174e21a08386d68870f8b1%2F8421c898a7de468283b88454a2878a27?format=webp&width=800&height=1200", label: "WAS ENTSTEHT", links: [{ label: "Minecraft SMP — bald mehr", href: "https://www.twitch.tv/xjannetv", external: true }, { label: "Stream-Projekte", href: "https://www.twitch.tv/vibewithjanne", external: true }, { label: "Projekt-Updates auf YouTube", href: "https://www.youtube.com/@xjannetv", external: true }] },
  Stream: { image: "https://cdn.builder.io/api/v1/image/assets%2F843c2c9147174e21a08386d68870f8b1%2Fdb67860ef05d445daf98bb9eebb8a36f?format=webp&width=800&height=1200", label: "LIVE AUF TWITCH", links: [{ label: "xJanneTV", href: "https://www.twitch.tv/xjannetv", external: true }, { label: "Vibe with Janne", href: "https://www.twitch.tv/vibewithjanne", external: true }] },
  Kunst: { image: "https://cdn.builder.io/api/v1/image/assets%2F843c2c9147174e21a08386d68870f8b1%2F173803265ac54437a1c3cbad6d006298?format=webp&width=800&height=1200", label: "VISUELLE WELTEN", links: [{ label: "Linktree öffnen", href: "https://linktr.ee/xjannetv", external: true }] },
  Musik: { image: "https://cdn.builder.io/api/v1/image/assets%2F843c2c9147174e21a08386d68870f8b1%2Fd1bb8734c134498e9d5644135108cb61?format=webp&width=800&height=1200", label: "SOUNDS VON XJANNE", links: [{ label: "Linktree öffnen", href: "https://linktr.ee/xjannetv", external: true }] },
  Arcanimals: { image: "https://cdn.builder.io/api/v1/image/assets%2F843c2c9147174e21a08386d68870f8b1%2Fef6cba0444bd416596d3192e9ba7745e?format=webp&width=800&height=1200", label: "COMING SOON", links: [] },
};

export function SectionPage({ title, subtitle }: { title: string; subtitle: string }) {
  const content = sectionContent[title];
  return <div className="site-shell"><Header /><main className="section-page"><div className="section-page-inner"><span className="eyebrow">XJANNE / {title.toUpperCase()}</span><h1>{title}</h1>{title !== "Arcanimals" && <p className="section-subtitle">{subtitle}</p>}<div className="section-content"><img src={content.image} alt="" /><div className="section-links"><span className="contact-label">{content.label}</span>{content.links.map((link) => <a key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="text-link">{link.label} <ArrowUpRight size={17} /></a>)}</div></div><Link to="/" className="text-link">Zur Startseite <ArrowUpRight size={17} /></Link></div></main><Footer /></div>;
}
