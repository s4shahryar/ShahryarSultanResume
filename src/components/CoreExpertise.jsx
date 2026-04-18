const expertise = [
  {
    title: 'Dynamics 365 CE Solution Architecture',
    description:
      'Designing scalable, enterprise-grade Dynamics 365 CE solutions. End-to-end ownership from requirements through to production delivery.',
  },
  {
    title: 'Power Platform and Dataverse',
    description:
      'Building process automation, model-driven apps, and custom connectors on Power Platform and Dataverse at enterprise scale.',
  },
  {
    title: 'Azure Integrations',
    description:
      'Architecting and implementing Azure-based integration layers for complex CRM environments, including Service Bus, Functions, and API Management.',
  },
  {
    title: 'CRM Automation',
    description:
      'Automating core business processes across sales, service, and marketing using D365, Power Automate, and custom plugin architecture.',
  },
  {
    title: 'End-to-End Delivery',
    description:
      'Acting as single delivery owner across the full project lifecycle: scoping, architecture, implementation, UAT, and go-live.',
  },
  {
    title: '.NET and API Engineering',
    description:
      'Hands-on delivery of .NET and Web API solutions that extend or integrate with Dynamics 365, including custom plugins and backend services.',
  },
]

export default function CoreExpertise() {
  return (
    <section id="expertise" className="section-divider bg-white">
      <div className="section-container">
        <p className="section-label">Core Expertise</p>
        <h2 className="section-heading">Where I Deliver Value</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          Deep, hands-on experience across the Microsoft CRM and integration
          stack, applied across complex enterprise environments.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map(({ title, description }) => (
            <div
              key={title}
              className="bg-slate-50 border border-slate-100 rounded-lg p-6 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
            >
              <div className="w-7 h-0.5 bg-blue-700 mb-4 rounded-full" />
              <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
