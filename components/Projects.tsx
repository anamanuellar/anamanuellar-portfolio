const projects = [
  {
    title: "Automated Payroll Slip Distribution",
    description:
      "An automated solution designed to reduce operational and compliance risks in payroll slip distribution.",
    context:
      "Manual payroll distribution processes increase the risk of sending sensitive information to the wrong recipient, exposing companies to legal, compliance and trust issues.",
    solution:
      "A controlled and automated workflow that ensures individual, secure and auditable payroll slip delivery.",
    keyDecision:
      "Automate distribution while enforcing individual validation instead of bulk sending to eliminate compliance risk.",
    impact:
      "Reduced risk exposure, improved process reliability and increased trust between employees and HR.",
    role:
      "Solution design, business rules definition and technical implementation.",
    status: "Built and ready for implementation",
    code: {
      type: "private",
      note:
        "Proprietary logic involving sensitive data and compliance requirements.",
    },
  },
  {
    title: "Payment Request Workflow",
    description:
      "A structured workflow designed to organize, validate and control payment requests across teams.",
    context:
      "Unstructured payment requests often lead to delays, errors and lack of visibility for finance teams.",
    solution:
      "A standardized request flow with validation and approval steps, improving traceability and control.",
    keyDecision:
      "Centralize requests through a single controlled workflow instead of fragmented communication channels.",
    impact:
      "Improved financial control, better visibility and reduced operational friction.",
    role:
      "Process design and technical solution development.",
    status: "Concept & MVP",
    code: {
      type: "private",
      note: "Business workflow logic with commercial potential.",
    },
  },
  {
    title: "AI-Assisted Data Analysis Agent",
    description:
      "A lightweight agent designed to explore structured datasets, generate insights and answer contextual questions using AI as analytical support.",
    context:
      "Business and operational environments often generate datasets that are difficult to analyze quickly and consistently.",
    solution:
      "An AI-assisted agent capable of analyzing structured data while preserving validation, structure and interpretability.",
    keyDecision:
      "Use AI as an analysis accelerator, not as a decision-maker, keeping interpretation under explicit control.",
    impact:
      "Faster insights generation and clearer data-driven understanding.",
    role:
      "Data analysis design and AI-assisted solution development.",
    status: "Production-ready for analytical use",
    code: {
      type: "public",
      link: "https://github.com/anamanuellar/agente-analise-dados",
    },
  },
  {
    title: "Simple Profit Calculator",
    description:
      "A simple pricing and profit calculation tool designed to help small businesses understand margins and avoid selling at a loss.",
    context:
      "Many small business owners struggle with pricing decisions due to limited financial visibility and structured cost analysis.",
    solution:
      "A lightweight application that calculates profit margins based on cost, price and quantity, focusing on clarity and ease of use.",
    keyDecision:
      "Prioritize simplicity and usability over technical complexity to ensure adoption by non-technical users.",
    impact:
      "Improved financial awareness and pricing decision-making.",
    role:
      "Business logic definition and application design.",
    status: "MVP",
    code: {
      type: "public",
      link: "https://github.com/anamanuellar/calculo-lucro-simples",
    },
  },
  {
    title: "Apartment Inspection App",
    description:
      "A lightweight inspection tool designed to standardize apartment condition checks.",
    context:
      "Manual inspections lack standardization, consistency and historical tracking.",
    solution:
      "A digital checklist-based inspection app focused on simplicity, usability and structured records.",
    keyDecision:
      "Prioritize usability and standardization over feature-heavy inspection tools.",
    impact:
      "Improved operational efficiency and clearer communication between teams.",
    role:
      "Product concept and MVP development.",
    status: "Concept & MVP",
    code: {
      type: "private",
      note: "Early-stage product concept with niche commercial application.",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 bg-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Selected Projects
        </h2>
        <div className="w-12 h-px bg-neutral-300 mt-4 mb-12" />

        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.title} className="pb-12">
              <h3 className="text-xl font-medium mb-2 text-neutral-900">
                {project.title}
              </h3>

              <p className="text-neutral-600 mb-8 max-w-3xl">
                {project.description}
              </p>

              <div className="grid gap-8 md:grid-cols-2 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <strong className="text-xs uppercase tracking-wide text-neutral-400">
                    Context
                  </strong>
                  <p>{project.context}</p>
                </div>

                <div>
                  <strong className="text-xs uppercase tracking-wide text-neutral-400">
                    Solution
                  </strong>
                  <p>{project.solution}</p>
                </div>

                <div>
                  <strong className="text-xs uppercase tracking-wide text-neutral-400">
                    Key Decision
                  </strong>
                  <p>{project.keyDecision}</p>
                </div>

                <div>
                  <strong className="text-xs uppercase tracking-wide text-neutral-400">
                    Impact
                  </strong>
                  <p>{project.impact}</p>
                </div>

                <div>
                  <strong className="text-xs uppercase tracking-wide text-neutral-400">
                    Your Role
                  </strong>
                  <p>{project.role}</p>
                </div>

                <div>
                  <strong className="text-xs uppercase tracking-wide text-neutral-400">
                    Code
                  </strong>
                  {project.code.type === "public" ? (
                    <p>
                      <a
                        href={project.code.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-neutral-900 transition"
                      >
                        Public repository
                      </a>
                    </p>
                  ) : (
                    <p className="text-neutral-600">
                      Private repository <br />
                      <span className="text-xs text-neutral-500">
                        {project.code.note}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 text-xs text-neutral-500">
                Status · {project.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
