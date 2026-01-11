export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 py-24 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
      Contact
    </h2>
    <div className="w-12 h-px bg-neutral-300 mt-4 mb-12" />

    <p className="text-neutral-600 max-w-2xl mb-16">
      If you would like to discuss opportunities, projects or collaborations,
      feel free to get in touch.
    </p>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 mb-16">
      <div className="border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 transition">
        <h3 className="text-sm font-medium text-neutral-900 mb-4">
          For Companies & Recruiters
        </h3>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li>Full-time roles</li>
          <li>Contract or project-based work</li>
          <li>Hybrid positions (Finance + Technology)</li>
        </ul>
      </div>

      <div className="border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 transition">
        <h3 className="text-sm font-medium text-neutral-900 mb-4">
          Independent Projects & Collaborations
        </h3>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li>Selective automation initiatives</li>
          <li>Data analysis and reporting support</li>
          <li>Short-term, well-defined projects</li>
        </ul>
      </div>
    </div>

    {/* Contact Actions */}
    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
      <a
        href="mailto:ribeiro.anamanuella@gmail.com"
        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition"
      >
        Email Me
      </a>

      <div className="flex gap-6 text-sm">
        <a
          href="https://www.linkedin.com/in/SEU-LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-neutral-900 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/anamanuellar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-neutral-900 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>

    );
}
