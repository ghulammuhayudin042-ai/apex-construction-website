import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import Field from './Field'
import FileUpload, { MAX_FILES, MAX_SIZE } from './FileUpload'
import { isEmail, isPhone, todayISO, formatBytes } from '../../utils/validators'
import { submitQuote } from '../../utils/api'

const PROJECT_TYPES = [
  'General Construction', 'Residential', 'Commercial', 'Industrial', 'Civil Engineering',
  'Infrastructure', 'Renovation & Remodeling', 'Interior & Finishing', 'Project Management',
  'Maintenance', 'Other',
]
const BUDGETS = ['Under 50,000', '50,000 – 150,000', '150,000 – 500,000', '500,000 – 1,000,000', 'Over 1,000,000', 'Not sure yet']
const CONTACT_METHODS = ['Email', 'Phone call', 'WhatsApp / message']

const EMPTY = {
  fullName: '', company: '', email: '', phone: '', projectType: '', location: '',
  budget: '', startDate: '', description: '', contactMethod: '', consent: false,
}

// Prefill project type from ?type=... (service titles / project categories map to the closest option).
const matchType = (param) => {
  if (!param) return ''
  const first = param.toLowerCase().split(/[\s&]/)[0]
  return PROJECT_TYPES.find((o) => o.toLowerCase().startsWith(first)) || ''
}

function validate(v, files) {
  const e = {}
  if (!v.fullName.trim()) e.fullName = 'Please enter your full name.'
  else if (v.fullName.trim().length < 2) e.fullName = 'Name must be at least 2 characters.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!isEmail(v.email)) e.email = 'Enter a valid email, for example name@company.com.'
  if (!v.phone.trim()) e.phone = 'Please enter a phone number.'
  else if (!isPhone(v.phone)) e.phone = 'Enter a valid phone number (7–15 digits; +, spaces and dashes allowed).'
  if (!v.projectType) e.projectType = 'Select a project type.'
  if (!v.location.trim()) e.location = 'Tell us where the project is located.'
  if (!v.budget) e.budget = 'Select an estimated budget range.'
  if (!v.startDate) e.startDate = 'Choose an expected start date.'
  else if (v.startDate < todayISO()) e.startDate = 'Start date cannot be in the past.'
  if (!v.description.trim()) e.description = 'Please describe your project.'
  else if (v.description.trim().length < 20) e.description = 'Add a little more detail (at least 20 characters).'
  if (!v.contactMethod) e.contactMethod = 'Choose how you would like to be contacted.'
  if (!v.consent) e.consent = 'Please agree so we can contact you about this request.'
  if (files.length > MAX_FILES) e.files = `You can attach up to ${MAX_FILES} files.`
  else {
    const big = files.find((f) => f.size > MAX_SIZE)
    if (big) e.files = `“${big.name}” is larger than ${formatBytes(MAX_SIZE)}.`
  }
  return e
}

export default function QuoteForm() {
  const [params] = useSearchParams()
  const [values, setValues] = useState(() => ({ ...EMPTY, projectType: matchType(params.get('type')) }))
  const [files, setFiles] = useState([])
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [reference, setReference] = useState('')
  const submitting = useRef(false) // blocks duplicate submissions even before state updates
  const formRef = useRef(null)
  const successRef = useRef(null)

  const set = (name, value) => {
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name] || errors[name]) setErrors(validate(next, files))
  }
  const blur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values, files))
  }
  const show = (name) => (touched[name] || touched.__submitted ? errors[name] : undefined)

  const onFiles = (next) => {
    setFiles(next)
    setErrors(validate(values, next))
    setTouched((t) => ({ ...t, files: true }))
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (submitting.current) return
    const errs = validate(values, files)
    setErrors(errs)
    setTouched({ ...Object.fromEntries(Object.keys(EMPTY).map((k) => [k, true])), files: true, __submitted: true })
    const firstKey = Object.keys(errs)[0]
    if (firstKey) {
      const el = formRef.current?.querySelector(`[name="${firstKey}"]`)
      el?.focus()
      return
    }
    submitting.current = true
    setStatus('submitting')
    try {
      const res = await submitQuote(values, files)
      setReference(res.reference)
      setStatus('success')
      setTimeout(() => successRef.current?.focus(), 50)
    } catch {
      setStatus('error')
    } finally {
      submitting.current = false
    }
  }

  const reset = () => {
    setValues(EMPTY)
    setFiles([])
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-lg border border-green-200 bg-green-50 p-8 text-center outline-none">
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 font-display text-3xl font-bold uppercase text-navy-900">Request received</h3>
        <p className="mt-2 text-charcoal">
          Thank you, {values.fullName.split(' ')[0]}. Our team will review your project and contact you by{' '}
          <strong>{values.contactMethod.toLowerCase()}</strong>.
        </p>
        <p className="mt-4 inline-block rounded bg-white px-4 py-2 font-mono text-sm text-navy-900 shadow-sm">
          Reference: {reference}
        </p>
        <p className="mt-3 text-xs text-slate-soft">Demo mode: no data was sent to a server.</p>
        <div className="mt-6">
          <button type="button" onClick={reset} className="rounded-md border-2 border-navy-900 px-5 py-2.5 font-semibold text-navy-900 hover:bg-navy-900 hover:text-white">
            Submit another request
          </button>
        </div>
      </div>
    )
  }

  const busy = status === 'submitting'

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-busy={busy} className="space-y-6">
      <p className="text-sm text-slate-soft">
        Fields marked <span className="font-bold text-red-600">*</span> are required.
      </p>

      {status === 'error' && (
        <div role="alert" className="flex gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">We could not send your request.</p>
            <p className="text-sm">Please check your connection and try again. Your details are still filled in.</p>
          </div>
        </div>
      )}

      <fieldset disabled={busy} className="space-y-6 border-0 p-0">
        <legend className="sr-only">Request a quote</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" required name="fullName" autoComplete="name" value={values.fullName}
            onChange={(e) => set('fullName', e.target.value)} onBlur={() => blur('fullName')} error={show('fullName')} />
          <Field label="Company / organization" name="company" autoComplete="organization" value={values.company}
            onChange={(e) => set('company', e.target.value)} hint="Optional" />
          <Field label="Email" required type="email" name="email" autoComplete="email" value={values.email}
            onChange={(e) => set('email', e.target.value)} onBlur={() => blur('email')} error={show('email')} />
          <Field label="Phone" required type="tel" name="phone" autoComplete="tel" value={values.phone}
            onChange={(e) => set('phone', e.target.value)} onBlur={() => blur('phone')} error={show('phone')} />
          <Field label="Project type" required as="select" name="projectType" options={PROJECT_TYPES} value={values.projectType}
            onChange={(e) => set('projectType', e.target.value)} onBlur={() => blur('projectType')} error={show('projectType')} />
          <Field label="Project location" required name="location" value={values.location} placeholder="City, area or site address"
            onChange={(e) => set('location', e.target.value)} onBlur={() => blur('location')} error={show('location')} />
          <Field label="Estimated budget" required as="select" name="budget" options={BUDGETS} value={values.budget}
            onChange={(e) => set('budget', e.target.value)} onBlur={() => blur('budget')} error={show('budget')}
            hint="Currency per your region. A range helps us suggest suitable options." />
          <Field label="Expected start date" required type="date" name="startDate" min={todayISO()} value={values.startDate}
            onChange={(e) => set('startDate', e.target.value)} onBlur={() => blur('startDate')} error={show('startDate')} />
        </div>

        <Field label="Project description" required as="textarea" name="description" value={values.description}
          placeholder="Describe the scope, size, finishes, timeline and anything we should know about the site."
          onChange={(e) => set('description', e.target.value)} onBlur={() => blur('description')} error={show('description')} />

        <FileUpload files={files} onChange={onFiles} error={touched.files ? errors.files : undefined} />

        <fieldset aria-describedby={show('contactMethod') ? 'cm-err' : undefined}>
          <legend className="mb-2 text-sm font-semibold text-navy-900">
            Preferred contact method <span aria-hidden="true" className="text-red-600">*</span>
            <span className="sr-only"> (required)</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {CONTACT_METHODS.map((m) => (
              <label key={m} className={`flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium ${
                values.contactMethod === m ? 'border-navy-900 bg-navy-900 text-white' : 'border-navy-100 bg-white text-charcoal hover:border-navy-700'
              }`}>
                <input
                  type="radio" name="contactMethod" value={m} checked={values.contactMethod === m}
                  onChange={() => set('contactMethod', m)} onBlur={() => blur('contactMethod')}
                  className="h-4 w-4 accent-amber-500"
                />
                {m}
              </label>
            ))}
          </div>
          {show('contactMethod') && <p id="cm-err" role="alert" className="mt-1.5 text-sm font-medium text-red-700">{errors.contactMethod}</p>}
        </fieldset>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-charcoal">
            <input
              type="checkbox" name="consent" checked={values.consent}
              onChange={(e) => set('consent', e.target.checked)} onBlur={() => blur('consent')}
              aria-invalid={show('consent') ? true : undefined}
              className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
            />
            <span>
              I agree to be contacted about this request and accept the privacy policy.
              <span aria-hidden="true" className="ml-0.5 text-red-600">*</span>
              <span className="sr-only"> (required)</span>
            </span>
          </label>
          {show('consent') && <p role="alert" className="mt-1.5 text-sm font-medium text-red-700">{errors.consent}</p>}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={busy}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-lg font-semibold text-navy-950 transition-colors hover:bg-accent-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {busy ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            {status === 'error' ? 'Try again' : 'Submit Request'} <Send className="h-5 w-5" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
