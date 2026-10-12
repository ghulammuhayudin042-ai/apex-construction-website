import LegalPage from '../components/ui/LegalPage'

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 2026"
      intro="Template content for demonstration. Have a qualified professional review and replace this text before publishing the website."
      sections={[
        { title: 'Information we collect', text: 'When you submit a quotation request or contact form we may collect your name, company, email, phone number, project details and any files you attach.' },
        { title: 'How we use information', text: 'We use the information to respond to your request, prepare proposals and manage our relationship with you. We do not sell personal information.' },
        { title: 'Sharing', text: 'We share information only with team members, consultants or service providers who need it to handle your request, or where required by law.' },
        { title: 'Retention and security', text: 'We keep information only as long as needed for the purposes described and use reasonable safeguards to protect it.' },
        { title: 'Your choices', text: 'You may request access, correction or deletion of your information by contacting us using the details on the Contact page.' },
      ]}
    />
  )
}
