export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/research", label: "Research" },
  { href: "/faq", label: "FAQ" },
  { href: "/contribute", label: "Contribute" }
];

export const stakeholders = [
  {
    key: "landowners",
    label: "Landowners",
    useful: "Clarify whether a parcel is truly power-adjacent, developable, and strategically relevant before time is wasted on weak proposals.",
    provide: ["Parcel maps and surveys", "Ownership structure", "Known utility context", "Existing studies or site photos"],
    receive: ["Site-readiness screen", "Buyer and utility framing", "Questions to resolve before marketing"]
  },
  {
    key: "utilities",
    label: "Utilities",
    useful: "Frame prospective campuses as grid-aware projects that reduce friction, improve transparency, and strengthen reliability in regional grids.",
    provide: ["Interconnection process guidance", "Upgrade constraints", "Hosting capacity context", "Preferred engagement protocol"],
    receive: ["Structured stakeholder requests", "Grid-safe architecture framing", "Comparable project inputs"]
  },
  {
    key: "builders",
    label: "Builders & Developers",
    useful: "Translate technical, political, and diligence complexity into a cleaner process for siting, procurement, and stakeholder alignment across markets.",
    provide: ["Project concept and load profile", "Timeline and bid needs", "Site criteria", "Questions requiring neutral research"],
    receive: ["Advisory briefings", "Stakeholder maps", "Open frameworks and private diligence support"]
  },
  {
    key: "municipalities",
    label: "Municipalities",
    useful: "Make data center proposals legible to planning, economic development, and community leadership before local trust erodes.",
    provide: ["Permitting pathway", "Local priorities", "Infrastructure constraints", "Community concerns"],
    receive: ["Plain-language evaluation tools", "Decision checklists", "Questions to ask developers and utilities"]
  },
  {
    key: "capital",
    label: "Capital Partners",
    useful: "De-risk diligence by separating hype from validated siting, power, timing, and stakeholder realities.",
    provide: ["Investment criteria", "Risk thresholds", "Underwriting questions", "Data room expectations"],
    receive: ["Independent memos", "Timeline and dependency mapping", "Risk-screening framework"]
  },
  {
    key: "community",
    label: "Community Stakeholders",
    useful: "Offer a credible place for public-interest questions, concerns, and transparency requests to be addressed without builder spin.",
    provide: ["Local concerns and priorities", "Community questions", "Impact expectations", "Relevant local context"],
    receive: ["Accessible explanations", "Framework summaries", "Process transparency and participation guidance"]
  }
];

export const materialCategories = [
  "Site and parcel materials",
  "Utility and power information",
  "Permitting and municipal documents",
  "Commercial and finance materials",
  "Technical briefs and research",
  "Community input and correspondence"
];

export const researchTracks = [
  {
    title: "Grid-safe AI power architecture",
    description: "Explain medium-voltage architecture, two-sided power quality, subsynchronous oscillation risk, and why grid-safe design changes interconnection outcomes.",
    outputs: ["Technical briefing notes", "Meeting prep guides", "Grid-safe architecture explainer"]
  },
  {
    title: "Global stakeholder ecosystem mapping",
    description: "Map national agencies, laboratories, vendors, utilities, municipalities, landowners, capital partners, standards groups, and communities shaping outcomes across regions.",
    outputs: ["Stakeholder maps", "Engagement sequencing", "Decision-rights landscape"]
  },
  {
    title: "Open implementation frameworks",
    description: "Publish reusable checklists and comparative standards that help participants evaluate proposals on consistent terms in 50 Hz and 60 Hz markets.",
    outputs: ["Siting checklist", "Procurement framework", "Public-interest implementation playbook"]
  }
];

export const frameworkLibrary = [
  {
    title: "Open siting checklist",
    description: "A first-pass screen for land, power adjacency, permitting posture, and stakeholder readiness.",
    forWhom: "Landowners, developers, capital partners"
  },
  {
    title: "Utility and community diligence rubric",
    description: "A shared way to compare projects through grid, community, and implementation risk.",
    forWhom: "Utilities, municipalities, community stakeholders"
  },
  {
    title: "Transparent procurement framework",
    description: "Standardize the questions, comparables, and disclosures expected across bidders and delivery partners.",
    forWhom: "Builders, capital partners, public-sector teams"
  },
  {
    title: "Public-benefit implementation playbook",
    description: "Translate technical programs into operational steps that civic and non-expert stakeholders can actually use.",
    forWhom: "Municipalities, community groups, advisory partners"
  }
];

export const faqItems = [
  {
    question: "What is DataCenterConsulting.org actually doing?",
    answer: "The institute is building open research, implementation frameworks, and stakeholder translation tools for data center siting, power stewardship, and public-interest decision making."
  },
  {
    question: "Is this a builder, broker, or utility affiliate?",
    answer: "No. The posture is deliberately independent so the work can compare bidders, surface tradeoffs, and publish neutral frameworks rather than advocate for a single in-house operator."
  },
  {
    question: "Can I send confidential materials?",
    answer: "Yes, but the first-pass public intake currently supports structured submissions and secure document-link sharing. Direct file upload can be layered in later once dedicated storage credentials are configured."
  },
  {
    question: "Is this only focused on the United States?",
    answer: "No. The methods are designed for global use. Frameworks explicitly account for both 50 Hz and 60 Hz grid environments, with local policy and utility context adapted by region."
  },
  {
    question: "What does grid-safe architecture mean in plain language?",
    answer: "It means protecting both sides of the interface: protecting compute operations from grid disturbances and protecting the grid from sudden compute-driven load behavior."
  },
  {
    question: "What should a landowner prepare before outreach?",
    answer: "Parcel maps, surveys, utility context, ownership information, environmental or zoning materials, and a concise summary of why the site may matter."
  },
  {
    question: "What should utilities or municipalities expect from this site?",
    answer: "Clear framing of project questions, structured intake, plain-language research outputs, and comparable evaluation frameworks rather than one-sided advocacy decks."
  },
  {
    question: "What does a builder or capital partner get here?",
    answer: "A combination of public frameworks and private strategic input: stakeholder maps, diligence framing, research synthesis, and neutral process design."
  }
];

export const resourceDownloads = [
  {
    title: "Global Grid-Efficiency Research Brief (Public)",
    description: "Public-facing synthesis of regional grid models, 50/60 Hz planning implications, and implementation priorities.",
    href: "/research"
  },
  {
    title: "Open Stakeholder Framework Library",
    description: "Frameworks and checklists intended for shared, transparent decision-making across stakeholders.",
    href: "/frameworks"
  },
  {
    title: "Contribution and Contact Paths",
    description: "Submit structured inputs, data links, and stakeholder context through controlled intake pathways.",
    href: "/contribute"
  }
];

export const contributePaths = [
  {
    title: "Public research requests",
    description: "Use when you want a framework, explainer, briefing memo, or neutral synthesis that can inform multiple stakeholders across markets."
  },
  {
    title: "Confidential project intake",
    description: "Use when you want to share site, power, diligence, or process context privately for a specific opportunity."
  },
  {
    title: "Stakeholder coordination",
    description: "Use when a builder, utility, municipality, landowner, standards body, or community group needs a common process and comparable questions."
  }
];

export const regionalGridModels = [
  {
    title: "North America: utility interconnection queue model",
    frequency: "60 Hz",
    summary: "Queue position, transmission constraints, and upgrade sequencing dominate project timing; managed-load design can reduce friction in studies.",
    priorityMetrics: ["Interconnection queue duration", "Substation headroom", "Upgrade dependency map"]
  },
  {
    title: "Europe: policy-constrained multi-jurisdiction model",
    frequency: "50 Hz",
    summary: "Cross-border market coupling, regional reliability targets, and local permitting standards require coordinated country-by-country adaptation.",
    priorityMetrics: ["Grid code alignment", "Cross-border capacity access", "Permitting and environmental timelines"]
  },
  {
    title: "Gulf, Africa, and South Asia: infrastructure growth model",
    frequency: "50 Hz",
    summary: "Rapid demand growth and uneven infrastructure maturity make phased build strategy, resilience planning, and local policy navigation central.",
    priorityMetrics: ["Expansion capacity by phase", "Reliability risk profile", "Policy and market entry constraints"]
  },
  {
    title: "East Asia and Oceania: industrial-policy plus reliability model",
    frequency: "50 Hz / 60 Hz",
    summary: "National strategic priorities, grid reliability expectations, and concentrated metro load constraints shape where high-density compute can scale responsibly.",
    priorityMetrics: ["Policy alignment", "Power quality tolerance", "Transmission and cooling constraints"]
  }
];

export const frequencyComparisonRows = [
  {
    topic: "Grid baseline",
    hz50: "50 cycles per second; common in Europe, Africa, most of Asia, and parts of South America.",
    hz60: "60 cycles per second; common in North America and parts of East Asia and Latin America.",
    implication: "Global infrastructure programs need explicit assumptions by region before specifying power architecture."
  },
  {
    topic: "Equipment compatibility",
    hz50: "Imported equipment may require adaptation if originally designed for 60 Hz tolerance windows.",
    hz60: "Imported equipment may require adaptation if originally designed for 50 Hz tolerance windows.",
    implication: "Technical diligence should verify frequency tolerance at procurement, not after commissioning."
  },
  {
    topic: "Power quality and transients",
    hz50: "Transient behavior and harmonic interactions are shaped by local grid code and regional generation mix.",
    hz60: "Transient behavior and harmonic interactions vary by utility territory and legacy infrastructure context.",
    implication: "Use local monitoring assumptions and a two-sided power quality framework in both cases."
  },
  {
    topic: "Policy and standards",
    hz50: "Regional market rules often require multi-country coordination and additional compliance layers.",
    hz60: "Rules are often utility- or jurisdiction-specific with queue-driven process bottlenecks.",
    implication: "Comparative frameworks must normalize technical, policy, and timing risk across regions."
  }
];

export const policyFaqItems = [
  {
    question: "How should cross-border transmission be considered in data center planning?",
    answer: "Treat cross-border flows as a strategic dependency with regulatory and commercial constraints. Track access rights, congestion risk, and policy changes the same way you track land and utility constraints."
  },
  {
    question: "Can one framework work across countries with different grid frequencies?",
    answer: "Yes, if the framework keeps core decision logic constant while parameterizing local frequency, grid code, reliability targets, and permitting pathways."
  },
  {
    question: "What is the minimum policy dataset for comparing regions?",
    answer: "At minimum: interconnection process, timeline risk, environmental/permitting requirements, grid code constraints, incentives, and data sovereignty or localization obligations."
  },
  {
    question: "How do we avoid US-centric assumptions when expanding globally?",
    answer: "Start with region-specific baseline models, use frequency-aware technical assumptions, and force every recommendation to cite local constraints and governing authorities."
  }
];
