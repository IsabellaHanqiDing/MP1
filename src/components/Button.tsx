import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary: 'bg-[#203655] text-white border-2 border-[#d9c1a1] hover:bg-[#d9c1a1] hover:text-[#203655]',
  secondary: 'bg-transparent text-white border-2 border-[#d9c1a1] hover:bg-[#d9c1a1] hover:text-[#203655]',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}