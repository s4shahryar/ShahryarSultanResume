const capabilities = [
  'Requirements gathering and solution design',
  'Dynamics 365 customisation and extension',
  'Integration with third-party systems',
  'Data migration and transformation',
  'Power Automate and workflow automation',
  'Testing, deployment, and go-live support',
  'Performance optimisation for high-volume processes',
  'Technical leadership across business and engineering teams',
]

export default function SelectedCapabilities() {
  return (
    <section className="section-divider bg-slate-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="section-label">Selected Capabilities</p>
            <h2 className="section-heading">What I Bring to an Engagement</h2>
            <p className="text-slate-500 leading-relaxed">
              A practical, delivery-focused skillset applied across every phase
              of the project. No hand-offs, no gaps. One senior resource across
              the full scope.
            </p>
          </div>

          <ul className="space-y-3 pt-1">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <svg
                  className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
