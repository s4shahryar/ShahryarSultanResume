const highlights = [
  {
    tag: 'D365 CE',
    title: 'End-to-End Dynamics 365 Delivery',
    description:
      'Full lifecycle ownership of Dynamics 365 CE implementations. Responsible for solution architecture, configuration, customisation, integration design, UAT coordination, and production go-live across multiple enterprise engagements.',
    points: [
      'Architecture and solution design from inception',
      'Stakeholder liaison across business and technical teams',
      'Production-ready delivery with post-go-live support',
    ],
  },
  {
    tag: 'Power Platform',
    title: 'Power Platform Automation',
    description:
      'Designed and delivered process automation solutions on Power Platform and Dataverse, reducing manual overhead and enabling scalable, repeatable business operations for clients across multiple sectors.',
    points: [
      'Power Automate flows at enterprise scale',
      'Model-driven and canvas app delivery',
      'Dataverse schema design and governance',
    ],
  },
  {
    tag: 'Azure / .NET',
    title: 'Azure and .NET Integrations',
    description:
      'Built and maintained scalable integration layers and backend services connecting Dynamics 365 with external platforms. Delivered high-volume, resilient architectures using Azure services and .NET middleware.',
    points: [
      'Azure Service Bus, Functions, and Logic Apps',
      'Custom .NET plugins and Web API services',
      'High-throughput, fault-tolerant integration patterns',
    ],
  },
]

export default function ExperienceHighlights() {
  return (
    <section id="experience" className="section-divider bg-white">
      <div className="section-container">
        <p className="section-label">Experience Highlights</p>
        <h2 className="section-heading">Selected Delivery Areas</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          Representative examples of the type of work I own and deliver.
          Specific client details are available on request.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ tag, title, description, points }) => (
            <div
              key={title}
              className="border border-slate-200 rounded-lg p-7 flex flex-col"
            >
              <span className="inline-block text-xs font-semibold tracking-widest text-blue-700 uppercase mb-4">
                {tag}
              </span>
              <h3 className="text-base font-semibold text-slate-900 mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                {description}
              </p>
              <ul className="mt-auto space-y-2">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-xs text-slate-600"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
