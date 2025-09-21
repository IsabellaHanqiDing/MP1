import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary: 'bg-[#002FA7] text-white border-2 border-[#ECBC41] hover:bg-[#ECBC41] hover:text-[#002FA7]',
  secondary: 'bg-transparent text-white border-2 border-[#ECBC41] hover:bg-[#ECBC41] hover:text-[#002FA7]',
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