// Service content. Add a new object here and a new /services/:slug page appears automatically.
export const services = [
  {
    slug: 'general-construction',
    title: 'General Construction',
    icon: 'HardHat',
    image: '/images/service-general-construction.svg',
    short: 'End-to-end building delivery from site mobilization to handover, under a single accountable team.',
    description:
      'Our general construction service covers the full build: site establishment, structure, envelope, services coordination and completion. One accountable contractor means fewer hand-offs, clearer reporting and a single point of contact from first meeting to final inspection.',
    benefits: ['Single point of accountability', 'Transparent cost and schedule reporting', 'Coordinated trades and suppliers', 'Documented quality and safety checks'],
    scope: ['Site mobilization and temporary works', 'Foundations, structure and masonry', 'Building envelope and roofing', 'Mechanical, electrical and plumbing coordination', 'Finishes, testing and completion'],
    stages: ['Brief and feasibility', 'Pre-construction planning', 'Mobilization', 'Construction and supervision', 'Inspection and handover'],
    capabilities: ['Site engineers and supervisors', 'Concrete, steel and masonry crews', 'Access equipment and lifting plant', 'Material tracking and procurement'],
    faqs: [
      { q: 'Can you work from our existing drawings?', a: 'Yes. We review the drawings, flag coordination risks early and price the work against the documents provided.' },
      { q: 'How do you report progress?', a: 'Clients receive regular progress summaries covering schedule, cost, quality inspections and any open decisions.' },
    ],
  },
  {
    slug: 'residential',
    title: 'Residential Construction',
    icon: 'House',
    image: '/images/service-residential.svg',
    short: 'Homes, villas and housing developments built with dependable workmanship and tidy sites.',
    description:
      'From single custom homes to multi-unit housing developments, we plan and build residences that balance comfort, durability and budget. We keep homeowners informed with clear milestones and straightforward conversations about options and trade-offs.',
    benefits: ['Clear milestone-based progress', 'Practical advice on layouts and materials', 'Tidy, respectful site management', 'Defect review at handover'],
    scope: ['Custom homes and villas', 'Townhouses and apartment blocks', 'Boundary walls, landscaping and external works', 'Utility connections and finishing'],
    stages: ['Requirements and budget', 'Design coordination', 'Foundations and structure', 'Services and finishes', 'Walkthrough and handover'],
    capabilities: ['Residential project managers', 'Skilled masons, carpenters and finishers', 'Material sampling and mock-ups'],
    faqs: [
      { q: 'Can I visit the site during construction?', a: 'Yes, by appointment. We schedule site visits around safety requirements and active work.' },
      { q: 'Do you handle approvals?', a: 'We can support documentation and coordinate with consultants. Approval requirements vary by location and are confirmed during planning.' },
    ],
  },
  {
    slug: 'commercial',
    title: 'Commercial Construction',
    icon: 'Building2',
    image: '/images/service-commercial.svg',
    short: 'Offices, retail and mixed-use buildings delivered with tight coordination and minimal disruption.',
    description:
      'Commercial projects depend on programme certainty and coordination between many trades. We plan sequences carefully, manage procurement lead times and keep tenants, neighbours and stakeholders informed throughout.',
    benefits: ['Programme-led planning', 'Coordinated building services', 'Flexible phasing for occupied sites', 'Clear handover documentation'],
    scope: ['Office buildings and business parks', 'Retail units and showrooms', 'Mixed-use developments', 'Tenant fit-out coordination'],
    stages: ['Feasibility and budgeting', 'Programme and procurement', 'Structure and envelope', 'Services and fit-out', 'Commissioning and handover'],
    capabilities: ['Programme planners', 'Services coordinators', 'Façade and glazing specialists via partners'],
    faqs: [
      { q: 'Can you build in phases?', a: 'Yes. We can phase work so parts of a building can open or be occupied while other areas continue.' },
      { q: 'Do you coordinate tenant fit-out?', a: 'We can coordinate base-build and tenant works so access, utilities and inspections stay aligned.' },
    ],
  },
  {
    slug: 'industrial',
    title: 'Industrial Construction',
    icon: 'Factory',
    image: '/images/service-industrial.svg',
    short: 'Warehouses, plants and logistics facilities engineered around operations, loads and safety.',
    description:
      'Industrial buildings are driven by function: floor loads, clear spans, material flow and safety. We work with operators early to design the build around how the facility will actually be used.',
    benefits: ['Operations-led planning', 'Heavy-duty floors and structures', 'Safe site logistics', 'Scalable layouts for future expansion'],
    scope: ['Warehouses and distribution hubs', 'Light manufacturing facilities', 'Steel frame buildings', 'Yards, hardstanding and drainage'],
    stages: ['Operational brief', 'Structural and layout planning', 'Groundworks and foundations', 'Steel erection and cladding', 'Services, testing and handover'],
    capabilities: ['Steel erection crews', 'Heavy lifting coordination', 'Industrial flooring specialists via partners'],
    faqs: [
      { q: 'Can the facility be expanded later?', a: 'Yes. We can plan structure, services and site layout so future extensions are practical.' },
      { q: 'How do you manage site safety on large sites?', a: 'Through site induction, controlled access, task planning and regular inspections.' },
    ],
  },
  {
    slug: 'civil-engineering',
    title: 'Civil Engineering',
    icon: 'Route',
    image: '/images/service-civil-engineering.svg',
    short: 'Earthworks, roads, drainage and site infrastructure built to specification.',
    description:
      'Our civil engineering teams handle the groundwork that every project depends on: earthworks, roads, drainage and utilities. We pay close attention to levels, compaction and testing because small errors below ground become large problems later.',
    benefits: ['Accurate setting-out and levels', 'Documented testing and inspections', 'Coordinated utilities and drainage', 'Safe traffic and plant management'],
    scope: ['Site clearance and earthworks', 'Roads, parking and hardstanding', 'Stormwater and drainage systems', 'Retaining structures and culverts'],
    stages: ['Survey and design review', 'Setting-out', 'Earthworks and drainage', 'Pavement and finishing', 'Testing and as-built records'],
    capabilities: ['Surveyors and setting-out engineers', 'Excavators, rollers and graders', 'Material testing coordination'],
    faqs: [
      { q: 'Do you provide as-built records?', a: 'Yes. We can provide as-built information and test records as part of handover.' },
      { q: 'Can you work on live roads?', a: 'Where permitted, with traffic management plans and agreed working windows.' },
    ],
  },
  {
    slug: 'renovation',
    title: 'Renovation & Remodeling',
    icon: 'Hammer',
    image: '/images/service-renovation.svg',
    short: 'Upgrades, extensions and restorations that respect existing structures and your daily routine.',
    description:
      'Renovation work starts with careful investigation. We survey what exists, identify hidden risks and plan sequences that reduce disruption to occupants, neighbours and operations.',
    benefits: ['Early condition survey', 'Dust, noise and access planning', 'Structural-sensitive methods', 'Clear scope and variation handling'],
    scope: ['Interior remodeling and layout changes', 'Extensions and additional floors', 'Facade and roof upgrades', 'Restoration of older buildings'],
    stages: ['Site investigation', 'Scope and sequence plan', 'Strip-out and structural works', 'Rebuild and finishes', 'Snagging and handover'],
    capabilities: ['Renovation supervisors', 'Propping and temporary support', 'Specialist restoration partners'],
    faqs: [
      { q: 'Can we stay in the building during work?', a: 'Sometimes. It depends on scope, safety and services. We review this during planning.' },
      { q: 'What if hidden issues appear?', a: 'We document them, explain the options and agree changes in writing before proceeding.' },
    ],
  },
  {
    slug: 'interior-finishing',
    title: 'Interior & Finishing',
    icon: 'PaintRoller',
    image: '/images/service-interior-finishing.svg',
    short: 'Fit-out, joinery, flooring, ceilings and finishing delivered with attention to detail.',
    description:
      'Finishing is where quality becomes visible. Our interior teams coordinate ceilings, partitions, flooring, joinery, paint and fixtures, using mock-ups and inspections to keep standards consistent.',
    benefits: ['Mock-ups before full rollout', 'Coordinated finishing trades', 'Consistent quality inspections', 'Clean, well-organized handover'],
    scope: ['Partitions, ceilings and flooring', 'Joinery and built-in furniture', 'Painting and wall finishes', 'Lighting and fixture installation coordination'],
    stages: ['Design review', 'Material selection and samples', 'Installation', 'Quality inspection', 'Snagging and handover'],
    capabilities: ['Finishing supervisors', 'Joinery workshop partners', 'Sample and mock-up process'],
    faqs: [
      { q: 'Can you work with our interior designer?', a: 'Yes. We coordinate with designers to clarify details, samples and installation sequences.' },
      { q: 'Do you provide samples?', a: 'We can arrange material samples and mock-up areas for approval before full installation.' },
    ],
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    icon: 'ClipboardList',
    image: '/images/service-project-management.svg',
    short: 'Independent planning, cost control and site supervision for owners and developers.',
    description:
      'We act on the owner’s behalf to plan, coordinate and monitor projects, whether we build them or not. Our focus is clear scope, realistic schedules, proactive risk tracking and honest reporting.',
    benefits: ['Clear scope and responsibilities', 'Proactive risk and change tracking', 'Cost and schedule reporting', 'Contractor and consultant coordination'],
    scope: ['Feasibility and budgeting support', 'Programme development', 'Procurement and tender support', 'Site supervision and progress reporting'],
    stages: ['Brief and objectives', 'Planning and procurement', 'Delivery monitoring', 'Change and risk control', 'Closeout and documentation'],
    capabilities: ['Project managers and planners', 'Quantity and cost control support', 'Document control process'],
    faqs: [
      { q: 'Can you manage a project another contractor is building?', a: 'Yes. We can provide owner-side management and supervision independent of the builder.' },
      { q: 'What reporting do I receive?', a: 'Regular summaries covering progress, cost, risks, decisions needed and upcoming milestones.' },
    ],
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure Works',
    icon: 'Landmark',
    image: '/images/service-infrastructure.svg',
    short: 'Bridges, roads, utilities and public works delivered with rigorous quality and safety control.',
    description:
      'Infrastructure projects demand disciplined planning, robust quality control and careful coordination with authorities and the public. We bring structured methods and experienced supervisors to complex linear and structural works.',
    benefits: ['Structured quality plans', 'Traffic and public safety management', 'Coordination with authorities and utilities', 'Detailed progress records'],
    scope: ['Bridges and overpasses', 'Road upgrades and junctions', 'Utility corridors and drainage', 'Public realm and civic works'],
    stages: ['Survey and constraints review', 'Method statements', 'Enabling works', 'Main construction', 'Testing and handover'],
    capabilities: ['Structural and civil engineers', 'Heavy plant fleet via owned and hired equipment', 'Dedicated safety and quality leads'],
    faqs: [
      { q: 'How do you manage public safety around the works?', a: 'Through traffic management plans, barriers, signage, controlled access and daily site checks.' },
      { q: 'Do you work with government clients?', a: 'We can work with public and private clients. Eligibility and prequalification are confirmed per tender.' },
    ],
  },
  {
    slug: 'maintenance',
    title: 'Maintenance & Aftercare',
    icon: 'Wrench',
    image: '/images/service-maintenance.svg',
    short: 'Planned maintenance and responsive support to keep buildings performing after handover.',
    description:
      'Buildings need ongoing care. We offer planned inspections, repairs and defect support so small issues are resolved before they become expensive. Scope and response arrangements are agreed per project.',
    benefits: ['Planned inspection routines', 'Defect support after handover', 'Clear response arrangements', 'Maintenance records for your asset'],
    scope: ['Routine building inspections', 'Repairs and waterproofing', 'Defect rectification support', 'Minor works and upgrades'],
    stages: ['Asset review', 'Maintenance plan', 'Scheduled inspections', 'Repairs and reporting', 'Plan review'],
    capabilities: ['Maintenance coordinators', 'Repair crews', 'Record-keeping and reporting'],
    faqs: [
      { q: 'Is aftercare included in every project?', a: 'Defect handling arrangements are agreed in the contract. Ongoing maintenance is offered as a separate service.' },
      { q: 'Can you maintain buildings you did not build?', a: 'Yes, subject to an initial assessment of the building and its condition.' },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
