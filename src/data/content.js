// Shared page content: FAQ, process, industries, values, team, testimonials, timeline.
// All people, quotes and milestones are DEMO placeholders — replace with verified information.

export const faqs = [
  { q: 'How do I request a quotation?', a: 'Use the Request a Quote form on the Contact page. Share your project type, location, expected start and a short description. Our team will review it and reply using your preferred contact method.' },
  { q: 'What information is needed before estimating?', a: 'Helpful items include drawings or sketches, project location, scope and finishes, desired timeline and budget range. If you do not have drawings yet, we can discuss options after an initial consultation.' },
  { q: 'Do you handle residential and commercial projects?', a: 'Yes. We serve residential, commercial, industrial, infrastructure, renovation and interior fit-out clients.' },
  { q: 'How is the project timeline determined?', a: 'Timelines depend on scope, design status, approvals, procurement lead times, site conditions and weather. We provide a draft programme with the proposal and update it as decisions are confirmed.' },
  { q: 'How do you manage quality and site safety?', a: 'We use inspection checkpoints, supervision, material and workmanship reviews, site inductions, task planning and regular safety walks. Specific procedures are confirmed per project.' },
  { q: 'Can I request renovation or remodeling?', a: 'Yes. We start with a site review to understand existing conditions and then propose a clear scope, sequence and budget.' },
  { q: 'Do you provide project management?', a: 'Yes. We can manage projects we build and also provide owner-side project management and supervision for projects built by others.' },
  { q: 'What happens after completion?', a: 'We complete a handover review, provide available documentation and manage agreed defect-closure arrangements. Ongoing maintenance support can be arranged separately.' },
]

export const processSteps = [
  { n: '01', icon: 'MessagesSquare', title: 'Consultation', text: 'We discuss requirements, budget, timeline and site to understand what success looks like.' },
  { n: '02', icon: 'Ruler', title: 'Survey & Planning', text: 'Site and requirements are reviewed to identify constraints, risks and opportunities.' },
  { n: '03', icon: 'PencilRuler', title: 'Design & Coordination', text: 'Drawings and engineering inputs are coordinated where applicable to reduce clashes.' },
  { n: '04', icon: 'FileText', title: 'Estimation & Proposal', text: 'We issue a clear proposal covering scope, assumptions, schedule and commercial terms.' },
  { n: '05', icon: 'HardHat', title: 'Execution', text: 'Mobilization, procurement, construction and supervision with regular progress updates.' },
  { n: '06', icon: 'ShieldCheck', title: 'Quality & Safety', text: 'Inspections, monitoring and corrective actions keep standards consistent.' },
  { n: '07', icon: 'KeyRound', title: 'Handover', text: 'Completion review, snagging and documentation so you can start using the building.' },
  { n: '08', icon: 'LifeBuoy', title: 'Aftercare', text: 'Defect support and maintenance options where applicable.' },
]

export const homeProcess = processSteps.filter((s) => ['01', '02', '05', '06', '07'].includes(s.n))

export const industries = [
  { slug: 'residential', icon: 'House', title: 'Residential', image: '/images/industry-residential.svg', text: 'Houses, townhouses, apartment buildings and housing developments.' },
  { slug: 'commercial', icon: 'Building2', title: 'Commercial & Mixed-Use', text: 'Offices, retail centres and mixed-use developments built to programme.', image: '/images/industry-commercial.svg' },
  { slug: 'industrial', icon: 'Factory', title: 'Industrial & Warehousing', text: 'Warehouses, logistics hubs and light industrial facilities.', image: '/images/industry-industrial.svg' },
  { slug: 'infrastructure', icon: 'Route', title: 'Infrastructure & Civil', text: 'Roads, bridges, drainage and public works.', image: '/images/industry-infrastructure.svg' },
  { slug: 'renovation', icon: 'Hammer', title: 'Renovation & Restoration', text: 'Upgrades, extensions and sensitive restoration of existing buildings.', image: '/images/industry-renovation.svg' },
  { slug: 'interiors', icon: 'PaintRoller', title: 'Interior Fit-Out', text: 'Interior fit-out and finishing for homes, offices and public spaces.', image: '/images/industry-interiors.svg' },
  { slug: 'institutional', icon: 'GraduationCap', title: 'Education, Healthcare & Hospitality', text: 'Schools, clinics, hotels and community buildings with specialized requirements.', image: '/images/industry-institutional.svg' },
]

export const whyChoose = [
  { icon: 'ShieldCheck', title: 'Safety First', text: 'Site induction, planning and regular inspections are built into every project.' },
  { icon: 'BadgeCheck', title: 'Quality Workmanship', text: 'Mock-ups, checkpoints and clear standards keep finishes consistent.' },
  { icon: 'Briefcase', title: 'Experienced Team', text: 'Engineers, supervisors and managers who understand delivery on real sites.' },
  { icon: 'MessageCircle', title: 'Clear Communication', text: 'Regular updates and straightforward answers, without jargon.' },
  { icon: 'KanbanSquare', title: 'Project Management', text: 'Programme, cost and risk tracking from first meeting to handover.' },
  { icon: 'CalendarCheck', title: 'Reliable Delivery', text: 'Realistic schedules, early procurement and proactive coordination.' },
]

export const values = [
  { icon: 'ShieldCheck', title: 'Safety', text: 'Nobody should be harmed by the work we do.' },
  { icon: 'BadgeCheck', title: 'Quality', text: 'We build to last and inspect as we go.' },
  { icon: 'Handshake', title: 'Integrity', text: 'Honest estimates, honest reporting.' },
  { icon: 'ClipboardCheck', title: 'Accountability', text: 'We own our commitments and our mistakes.' },
  { icon: 'Lightbulb', title: 'Innovation', text: 'Better methods, tools and coordination practices.' },
  { icon: 'Leaf', title: 'Sustainability', text: 'Responsible materials and waste reduction.' },
  { icon: 'Users', title: 'Client Focus', text: 'Long-term relationships built on trust.' },
]

export const timeline = [
  { year: '2009', title: 'Company founded', text: 'Started as a small contracting team focused on residential projects. (demo milestone)' },
  { year: '2013', title: 'Commercial work begins', text: 'Expanded into offices and retail buildings. (demo milestone)' },
  { year: '2017', title: 'Industrial and civil divisions', text: 'Added capability for warehouses and site infrastructure. (demo milestone)' },
  { year: '2021', title: 'Project management service', text: 'Introduced owner-side project management. (demo milestone)' },
  { year: '2024', title: 'Larger infrastructure projects', text: 'Delivered bridge and road upgrade projects. (demo milestone)' },
  { year: '2026', title: 'Continuing to grow', text: 'Investing in people, equipment and digital project tools. (demo milestone)' },
]

export const team = [
  { name: 'Ahmed K.', role: 'Managing Director', image: '/images/team-md.svg', bio: 'Sets company direction and oversees major client relationships. (demo profile)' },
  { name: 'Sara R.', role: 'Project Director', image: '/images/team-project-director.svg', bio: 'Leads project delivery teams and programme control. (demo profile)' },
  { name: 'Mahmood H.', role: 'Engineering Lead', image: '/images/team-engineering-lead.svg', bio: 'Leads structural coordination and technical review. (demo profile)' },
  { name: 'Fatima N.', role: 'Operations Manager', image: '/images/team-operations.svg', bio: 'Coordinates procurement, plant and site logistics. (demo profile)' },
  { name: 'Bilal A.', role: 'HSE Manager', image: '/images/team-hse.svg', bio: 'Leads site safety, inductions and inspections. (demo profile)' },
  { name: 'Zainab T.', role: 'Commercial Manager', image: '/images/team-commercial.svg', bio: 'Manages estimating, contracts and cost reporting. (demo profile)' },
]

export const workforce = [
  { icon: 'Cpu', title: 'Engineers', text: 'Civil, structural and site engineers who plan and coordinate technical work.' },
  { icon: 'ClipboardList', title: 'Project Managers', text: 'Plan programmes, manage cost and keep stakeholders informed.' },
  { icon: 'Eye', title: 'Site Supervisors', text: 'Direct crews, check workmanship and enforce site rules daily.' },
  { icon: 'HardHat', title: 'Site Teams', text: 'Skilled trades and operators who build safely and carefully.' },
]

export const capabilities = [
  { icon: 'Ruler', title: 'Planning', text: 'Programme, sequencing and constraints review before work begins.' },
  { icon: 'PencilRuler', title: 'Engineering Coordination', text: 'Structural, architectural and services alignment.' },
  { icon: 'Truck', title: 'Procurement', text: 'Early ordering of long-lead items and supplier coordination.' },
  { icon: 'HardHat', title: 'Site Management', text: 'Daily supervision, logistics and progress control.' },
  { icon: 'ClipboardCheck', title: 'Quality Control', text: 'Inspection points, sampling and corrective actions.' },
  { icon: 'KeyRound', title: 'Project Delivery', text: 'Commissioning, handover and documentation.' },
]

export const safetyQuality = [
  { icon: 'ShieldCheck', title: 'Site safety', text: 'Inductions, task planning, protective equipment requirements and routine safety walks.' },
  { icon: 'ClipboardCheck', title: 'Inspections', text: 'Hold points and checklists for key activities such as reinforcement, pours, waterproofing and finishes.' },
  { icon: 'FileCheck', title: 'Compliance approach', text: 'We work to applicable regulations and project specifications. Specific certifications are confirmed per company and project (placeholder).' },
]

export const testimonials = [
  { quote: 'The team communicated clearly throughout the build and handled changes calmly. We always knew where the project stood.', name: 'Client Name (demo)', role: 'Property Developer' },
  { quote: 'Their site supervision was organized and safety-conscious. Handover documentation was complete and easy to follow.', name: 'Client Name (demo)', role: 'Facilities Manager' },
  { quote: 'We appreciated honest advice on materials and budget. The renovation was well planned and well managed.', name: 'Client Name (demo)', role: 'Homeowner' },
]

export const preparationChecklist = [
  'Drawings, sketches or reference images (if available)',
  'Project location and site access details',
  'Desired scope, finishes and quality level',
  'Target budget range and expected start date',
  'Any approvals, consultants or constraints already in place',
]
