export type ProjectStatus = "In Progress" | "Research" | "Planned";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  category: string;
  summary: string;
  problem: string;
  role: string;
  tools: string[];
  focus: string[];
  outcome: string;
  currentProgress: string;
};

export const projects: Project[] = [
  {
    slug: "inventory-forecasting-dashboard",
    title: "Inventory Forecasting Dashboard",
    status: "In Progress",
    category: "Data analysis",
    summary:
      "A dashboard concept for tracking inventory signals and forecasting needs from structured business data.",
    problem:
      "Operational teams need clearer visibility into inventory signals before they become planning or fulfillment problems.",
    role: "Data workflow planner",
    tools: ["Excel", "Power BI", "Tableau", "Forecasting workflow planning"],
    focus: ["Forecasting workflow", "Dashboard planning", "Operational reporting"],
    outcome: "Initial project is listed for portfolio development; implementation details are still being gathered.",
    currentProgress:
      "Concept and portfolio framing are defined; evidence and implementation details still need to be gathered.",
  },
  {
    slug: "erp-crm-implementation-work",
    title: "ERP/CRM Implementation Work",
    status: "In Progress",
    category: "IT implementation",
    summary:
      "A case study draft focused on implementation planning, process mapping, data readiness, and user adoption.",
    problem:
      "Manual Excel workflows, disconnected users, and unclear handoffs make business operations harder to scale.",
    role: "Implementation analyst",
    tools: ["ERP/CRM", "Excel", "Training documentation", "Stakeholder coordination"],
    focus: ["Requirements", "Process mapping", "Change support"],
    outcome: "Case study structure is planned; specific evidence will be added when ready.",
    currentProgress:
      "Grounded in ALBA implementation experience; public-facing case study details still need careful review.",
  },
  {
    slug: "drone-data-pipeline-research-project",
    title: "Drone Data Pipeline / ICON Lab Research",
    status: "Research",
    category: "Data systems",
    summary:
      "A research project exploring how drone data can move from collection into organized, reviewable, analysis-ready outputs.",
    problem:
      "Research teams need reliable ways to connect drone setup, field testing, data acquisition, and analysis workflows.",
    role: "Researcher and workflow designer",
    tools: ["Drone systems", "CURA", "3D printing", "Data pipelines", "Dashboards"],
    focus: ["Data pipeline research", "Geospatial workflow planning", "Documentation"],
    outcome: "Research direction is defined; implementation evidence is still in progress.",
    currentProgress:
      "Experience is grounded in UBC ICON Lab coordination, drone systems support, and BuildSys 2024 research contribution.",
  },
];
