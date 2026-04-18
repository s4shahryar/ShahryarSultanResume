export default function About() {
  return (
    <section id="about" className="section-divider bg-slate-50">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <p className="section-label">About</p>
            <h2 className="section-heading">Senior Delivery Owner</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am a Microsoft Dynamics 365 Solution Architect with over 8 years
                of experience delivering end-to-end CRM and automation solutions
                across Dynamics 365, Power Platform, and Azure.
              </p>
              <p>
                I work with organisations that need more than configuration. I take
                ownership of the full delivery lifecycle, from requirements and
                architecture through to implementation, integration, and go-live. In
                many engagements, I act as the single point of contact between
                business stakeholders and technical teams, delivering scalable,
                production-ready systems.
              </p>
              <p>
                My focus is on building robust, high-volume solutions that automate
                core business processes, integrate seamlessly with external systems,
                and are built to scale.
              </p>
              <p>
                I specialise in Dynamics 365 CE architecture, Power Platform
                solutions, and Azure-based integrations, with hands-on capability
                across .NET, C#, Web API, JavaScript, and SQL. This allows me to
                operate effectively across both architecture and implementation when
                required.
              </p>
              <p>
                I work in agile environments and contribute across the full delivery
                lifecycle, including estimation, planning, and structured execution.
                My approach is pragmatic and outcome-driven, aligned with business
                objectives rather than tooling.
              </p>
              <p className="font-medium text-slate-800">
                Available for contract and B2B engagements. If you need a senior
                resource to own your Dynamics 365 or Power Platform delivery
                end-to-end, reach out.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
                Engagement Type
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
                  Contract
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
                  B2B Consultancy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
                  Fixed-Scope Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
                  Retained Advisory
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
                Core Stack
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  'Dynamics 365 CE',
                  'Power Platform',
                  'Azure',
                  '.NET / C#',
                  'Web API',
                  'SQL',
                  'JavaScript',
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
