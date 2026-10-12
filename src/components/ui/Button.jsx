import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-accent text-navy-950 hover:bg-accent-dark hover:text-white border-transparent',
  secondary: 'bg-navy-900 text-white hover:bg-navy-700 border-transparent',
  outline: 'bg-transparent text-navy-900 border-navy-900 hover:bg-navy-900 hover:text-white',
  outlineLight: 'bg-transparent text-white border-white/70 hover:bg-white hover:text-navy-900',
  ghost: 'bg-transparent text-navy-900 border-transparent hover:bg-navy-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md border-2 font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {children}
      {icon}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  )
}
