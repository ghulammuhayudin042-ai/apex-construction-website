import { useId } from 'react'

const base =
  'w-full rounded-md border bg-white px-3.5 py-3 text-base text-charcoal placeholder:text-slate-soft/80 focus:border-navy-700'

// Generic accessible field wrapper: label, required marker, hint and error message.
export default function Field({ label, required, hint, error, as = 'input', options, className = '', ...props }) {
  const id = useId()
  const hintId = hint ? `${id}-hint` : undefined
  const errId = error ? `${id}-err` : undefined
  const describedBy = [hintId, errId].filter(Boolean).join(' ') || undefined
  const common = {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    'aria-required': required || undefined,
    className: `${base} ${error ? 'border-red-600 bg-red-50/40' : 'border-navy-100'}`,
    ...props,
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-0.5 text-red-600">*</span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {as === 'select' ? (
        <select {...common}>
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : as === 'textarea' ? (
        <textarea rows={5} {...common} />
      ) : (
        <input {...common} />
      )}
      {hint && !error && <p id={hintId} className="mt-1.5 text-sm text-slate-soft">{hint}</p>}
      {error && (
        <p id={errId} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
