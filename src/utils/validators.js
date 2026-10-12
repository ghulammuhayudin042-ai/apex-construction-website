export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim())

// Accepts digits, spaces, dashes, parentheses and a leading +; 7–15 digits.
export const isPhone = (v) => {
  const s = String(v).trim()
  if (!/^\+?[\d\s\-()]+$/.test(s)) return false
  const digits = s.replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}

export const todayISO = () => {
  const d = new Date()
  const off = d.getTimezoneOffset() * 60000
  return new Date(d.getTime() - off).toISOString().slice(0, 10)
}

export const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
