export default function WhatIDo() {
    return (
        <section id="what-i-do" className="scroll-mt-24 py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    What I Do
                </h2>
                <div className="w-12 h-px bg-neutral-300 mt-4 mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* FINANCE & BUSINESS */}
      <div className="mt-10 md:mt-0">
        <h3 className="font-medium mb-4 text-neutral-900">
          Finance & Business
        </h3>
        <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
          <li>Hands-on experience in financial operations and daily controls</li>
          <li>Operational financial analysis and reporting</li>
          <li>Process structuring to improve control, reliability and traceability</li>
          <li>Risk awareness and compliance-oriented decision-making</li>
          <li>Operational support for financial and business decisions</li>
        </ul>
      </div>

      {/* DATA ANALYSIS */}
      <div className="mt-10 md:mt-0">
        <h3 className="font-medium mb-4 text-neutral-900">
          Data Analysis
        </h3>
        <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
          <li>Exploratory data analysis to identify patterns and inconsistencies</li>
          <li>Data cleaning, validation and reconciliation</li>
          <li>Transforming raw data into structured, usable information</li>
          <li>Data-driven insights to support business decisions</li>
        </ul>
      </div>

      {/* TECHNOLOGY & AI */}
      <div className="mt-10 md:mt-0">
        <h3 className="font-medium mb-4 text-neutral-900">
          Technology & AI
        </h3>
        <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
          <li>Building practical, automation-focused solutions</li>
          <li>Using code as a tool for structure, not complexity</li>
          <li>AI-assisted workflows with validation and human oversight</li>
          <li>Focus on reliability, clarity and maintainability</li>
        </ul>
      </div>

                </div>
            </div>
        </section>
    );
}
