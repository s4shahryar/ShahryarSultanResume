export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-14 min-h-screen flex items-center bg-white"
    >
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="section-label">Available for Contract</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-tight mb-6">
            Microsoft Dynamics 365
            <br />
            <span className="text-blue-700">Solution Architect</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
            D365 CE, Customer Journeys, Power Platform and Azure Integrations.
            End-to-end CRM delivery for organisations that need a senior
            resource to own the full lifecycle.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-blue-700 text-white text-sm font-medium rounded hover:bg-blue-800 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded hover:border-slate-400 hover:text-slate-900 transition-colors"
            >
              View Profile
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '8+', label: 'Years Experience' },
            { value: 'D365 CE', label: 'Core Platform' },
            { value: 'Power Platform', label: 'Automation' },
            { value: 'Azure', label: 'Integrations' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-lg font-semibold text-slate-900">{value}</p>
              <p className="text-sm text-slate-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
