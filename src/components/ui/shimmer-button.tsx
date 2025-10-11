import * as React from 'react'

import { motion, type HTMLMotionProps } from 'motion/react'

import { cn } from '@/lib/utils'

interface ShimmerButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode
}

function ShimmerButton({ children, className, ...props }: ShimmerButtonProps) {
  return (
    <motion.button
      className='relative inline-flex items-center justify-center rounded-lg border-2 border-[linear-gradient(120deg,var(--primary)_calc(var(--shimmer-x)-25%),var(--primary-foreground)_var(--shimmer-x),var(--primary)_calc(var(--shimmer-x)+25%))] [--shimmer-x:0%] bg-transparent px-6 py-2 text-sm font-medium text-white'
      initial={{
        scale: 1,
        '--shimmer-button-x': '-100%'
      }}
      animate={{
        '--shimmer-button-x': '200%'
      }}
      transition={{
        stiffness: 500,
        damping: 20,
        type: 'spring',
        '--shimmer-button-x': {
          duration: 3,
          repeat: Infinity,
          ease: [0.445, 0.05, 0.55, 0.95]
        }
      }}
      whileTap={{
        scale: 0.95
      }}
      whileHover={{
        scale: 1.05
      }}
      {...props}
    >
      <span
        className={cn(
          'bg-transparent m-0.5 rounded-md px-4 py-2 text-sm font-medium text-white backdrop-blur-sm',
          className
        )}
      >
        {children}
      </span>
    </motion.button>
  )
}

export { ShimmerButton, type ShimmerButtonProps }
