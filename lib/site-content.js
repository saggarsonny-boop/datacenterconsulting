export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/research", label: "Research" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Paths" }
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
    title: "Complete Stakeholder Outreach Package",
    description: "Comprehensive outreach package with stakeholder letters, sequencing logic, and campaign scaffolding for grid-safe AI infrastructure programs.",
    href: "/resources/complete-stakeholder-outreach-package.docx"
  },
  {
    title: "Advisory Engagement Brief for Builder Partner",
    description: "Strategic advisory brief describing ecosystem management, federal alignment, and grid-safe power architecture positioning.",
    href: "/resources/builder-partner-brief.docx"
  },
  {
    title: "Technical Briefing and Meeting Preparation Guide",
    description: "A plain-language preparation guide for speaking confidently about grid architecture, AI load behavior, and stakeholder conversations.",
    href: "/resources/technical-briefing-guide.docx"
  },
  {
    title: "Stakeholder Outreach Tracker",
    description: "Working spreadsheet for managing outreach across federal, utility, vendor, municipal, land, capital, and community channels.",
    href: "/resources/stakeholder-outreach-tracker.xlsx"
  }
];

export const contactPaths = [
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
