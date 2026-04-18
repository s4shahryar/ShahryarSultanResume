export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          {year} Microsoft Dynamics 365 Solution Architect. All rights reserved.
        </p>
        <nav className="flex items-center gap-5">
          {[
            { label: 'About', href: '#about' },
            { label: 'Expertise', href: '#expertise' },
            { label: 'Experience', href: '#experience' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
