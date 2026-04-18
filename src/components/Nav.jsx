export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900 tracking-tight">
          D365 Solution Architect
        </span>
        <nav className="hidden md:flex items-center gap-7">
          {[
            { label: 'About', href: '#about' },
            { label: 'Expertise', href: '#expertise' },
            { label: 'Experience', href: '#experience' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
