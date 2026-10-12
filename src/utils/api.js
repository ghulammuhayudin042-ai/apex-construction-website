// ---------------------------------------------------------------------------
// FUTURE BACKEND INTEGRATION POINT
// ---------------------------------------------------------------------------
// submitQuote() is a frontend-only DEMO. To connect a real backend:
//   1. Set VITE_API_URL in a .env file (e.g. https://api.example.com).
//   2. Replace the demo block below with the fetch() call shown in the comment.
//   3. Send files as multipart/form-data (FormData) and return { reference }.
//
// Demo behaviour: resolves after ~1.4s with a reference number. Use an email
// ending in "@error.test" to preview the error state.
// ---------------------------------------------------------------------------

const API_URL = import.meta.env.VITE_API_URL

export async function submitQuote(values, files = []) {
  if (API_URL) {
    const body = new FormData()
    Object.entries(values).forEach(([k, v]) => body.append(k, v))
    files.forEach((f) => body.append('attachments', f))
    const res = await fetch(`${API_URL}/quotes`, { method: 'POST', body })
    if (!res.ok) throw new Error(`Request failed (${res.status})`)
    return res.json() // expected: { reference: 'Q-XXXX' }
  }

  // ---- DEMO MODE ----
  await new Promise((r) => setTimeout(r, 1400))
  if (String(values.email).toLowerCase().endsWith('@error.test')) {
    throw new Error('Simulated server error')
  }
  const reference = `Q-${Date.now().toString(36).toUpperCase().slice(-6)}`
  return { reference }
}
