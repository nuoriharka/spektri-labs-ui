import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'logomark' | 'horizontal' | 'stacked'
  size?: number
}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ variant = 'logomark', size = 32, className, ...props }, ref) => {
    const getLogoSrc = () => {
      switch (variant) {
        case 'horizontal':
          return '/brand/spektri-logo-horizontal.svg'
        case 'stacked':
          return '/brand/spektri-logo-stacked.svg'
        case 'logomark':
        default:
          return '/brand/spektri-logomark-gradient.svg'
      }
    }

    return (
      <div
        ref={ref}
        className={cn('relative', className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <Image
          src={getLogoSrc()}
          alt={`Spektri Logo - ${variant}`}
          fill
          sizes={`${size}px`}
          priority
        />
      </div>
    )
  }
)

Logo.displayName = 'Logo'
