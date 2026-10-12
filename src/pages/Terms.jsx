import LegalPage from '../components/ui/LegalPage'

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="October 2026"
      intro="Template content for demonstration. Have a qualified professional review and replace this text before publishing the website."
      sections={[
        { title: 'Use of this website', text: 'The content on this website is provided for general information. You agree to use it lawfully and not to interfere with its operation.' },
        { title: 'No offer or guarantee', text: 'Information about services, projects and timelines is descriptive only. Formal proposals and contracts define the scope, price and obligations for any project.' },
        { title: 'Quotation requests', text: 'Submitting a request does not create a contract. Estimates depend on information provided and may change after site review.' },
        { title: 'Intellectual property', text: 'Text, images and design on this website belong to the company or its licensors and may not be reused without permission.' },
        { title: 'Limitation of liability', text: 'To the extent permitted by law, we are not liable for losses arising from reliance on general website information.' },
      ]}
    />
  )
}
