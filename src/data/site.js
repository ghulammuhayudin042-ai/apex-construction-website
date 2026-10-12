// Central, editable company configuration.
// NOTE: All company details, figures and names below are DEMO PLACEHOLDERS.
// Replace them with verified client information before publishing.
export const site = {
  name: 'Apex Build Group',
  shortName: 'Apex Build',
  tagline: 'Construction & Engineering',
  description:
    'A full-service construction and engineering company delivering residential, commercial, industrial and infrastructure projects with a focus on safety, quality and clear communication.',
  contact: {
    phone: '+00 000 000 0000',
    phoneHref: 'tel:+000000000000',
    email: 'hello@example-apexbuild.com',
    address: 'Suite 400, Example Business Centre, Main Boulevard, Your City',
    hours: [
      { days: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
      { days: 'Saturday', time: '10:00 AM – 2:00 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'Linkedin' },
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'Facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'Instagram' },
    { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'Youtube' },
  ],
  // Editable DEMO statistics — replace with verified company figures.
  stats: [
    { value: 15, suffix: '+', label: 'Years of experience (demo)' },
    { value: 120, suffix: '+', label: 'Projects delivered (demo)' },
    { value: 250, suffix: '+', label: 'Team members (demo)' },
    { value: 98, suffix: '%', label: 'Client satisfaction (demo)' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export const footerLegal = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'FAQ', to: '/faq' },
]
