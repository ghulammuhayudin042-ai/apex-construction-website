// Image wrapper: fixed aspect ratio (no layout shift), lazy by default, graceful fallback.
import { useState } from 'react'

export default function Img({ src, alt, className = '', ratio = 'aspect-[3/2]', eager = false }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-navy-100 ${ratio} ${className}`}>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-navy-800 text-sm text-navy-100">{alt}</div>
      ) : (
        <img
          src={src}
          alt={alt}
          width="1200"
          height="800"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  )
}
