import { useId, useRef, useState } from 'react'
import { FileUp, Paperclip, Trash2 } from 'lucide-react'
import { formatBytes } from '../../utils/validators'

export const MAX_FILES = 5
export const MAX_SIZE = 5 * 1024 * 1024
const ACCEPT = '.pdf,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx,.dwg'

// Attachment UI: click or drag-and-drop. Validation happens in the parent (see QuoteForm).
export default function FileUpload({ files, onChange, error }) {
  const id = useId()
  const inputRef = useRef(null)
  const [drag, setDrag] = useState(false)

  const add = (list) => {
    const next = [...files]
    Array.from(list).forEach((f) => {
      if (!next.some((x) => x.name === f.name && x.size === f.size)) next.push(f)
    })
    onChange(next)
  }

  return (
    <div>
      <span className="mb-1.5 block text-sm font-semibold text-navy-900" id={`${id}-label`}>
        Attachments <span className="font-normal text-slate-soft">(optional)</span>
      </span>
      <div
        onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files) }}
        className={`rounded-md border-2 border-dashed p-5 text-center transition-colors ${
          drag ? 'border-accent bg-accent/10' : error ? 'border-red-600 bg-red-50/40' : 'border-navy-100 bg-navy-50'
        }`}
      >
        <FileUp className="mx-auto h-8 w-8 text-navy-700" aria-hidden="true" />
        <p className="mt-2 text-sm text-charcoal">
          Drag files here or{' '}
          <button type="button" className="font-semibold text-navy-900 underline underline-offset-2 hover:text-accent-dark" onClick={() => inputRef.current?.click()}>
            browse
          </button>
        </p>
        <p className="mt-1 text-xs text-slate-soft">Drawings, photos or briefs. Up to {MAX_FILES} files, {formatBytes(MAX_SIZE)} each.</p>
        <input
          ref={inputRef}
          id={id}
          type="file"
          multiple
          accept={ACCEPT}
          aria-labelledby={`${id}-label`}
          className="sr-only"
          onChange={(e) => { add(e.target.files); e.target.value = '' }}
        />
      </div>
      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((f) => (
            <li key={`${f.name}-${f.size}`} className="flex items-center justify-between gap-3 rounded-md border border-navy-100 bg-white px-3 py-2 text-sm">
              <span className="flex min-w-0 items-center gap-2">
                <Paperclip className="h-4 w-4 shrink-0 text-navy-700" aria-hidden="true" />
                <span className="truncate">{f.name}</span>
                <span className="shrink-0 text-slate-soft">{formatBytes(f.size)}</span>
              </span>
              <button
                type="button"
                aria-label={`Remove ${f.name}`}
                onClick={() => onChange(files.filter((x) => x !== f))}
                className="rounded p-1 text-slate-soft hover:bg-red-50 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && <p role="alert" className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
    </div>
  )
}
