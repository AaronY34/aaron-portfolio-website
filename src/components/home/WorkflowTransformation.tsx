const workflowSteps = [
  {
    title: "Messy task",
    description: "Scattered notes, repeated decisions, unclear next action.",
  },
  {
    title: "Structured workflow",
    description: "Steps, inputs, outputs, and decision points become visible.",
  },
  {
    title: "Automation layer",
    description: "Repetitive work is assisted by scripts, templates, and AI support.",
  },
  {
    title: "Human confirmation",
    description: "Sensitive decisions stay with the person responsible for the outcome.",
  },
  {
    title: "Tracked progress",
    description: "Work leaves evidence through logs, docs, dashboards, or updates.",
  },
];

export function WorkflowTransformation() {
  return (
    <div className="grid gap-3 lg:grid-cols-5">
      {workflowSteps.map((step, index) => (
        <article key={step.title} className="soft-card relative rounded-2xl p-5">
          {index < workflowSteps.length - 1 ? (
            <span className="absolute -right-3 top-8 hidden h-px w-6 bg-[#d9ccba] lg:block" />
          ) : null}
          <p className="text-sm text-[#8a6a4d]">0{index + 1}</p>
          <h3 className="mt-4 text-lg font-semibold text-[#111827]">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#596574]">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
