import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-300",
        destructive:
          "border border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
        outline:
          "border border-slate-200 bg-transparent shadow-sm hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
        secondary:
          "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700/80",
        ghost:
          "hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        premium:
          "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl",
        shiny:
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gradient-to-l",
        "secondary-outline":
          "border-border bg-secondary text-secondary-foreground shadow-sm transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground",
        plain: "text-primary",
        glow: "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gradient-to-l animate-glow",
        hero: "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gradient-to-l animate-glow",
        "gooey-left":
          "relative overflow-hidden bg-primary text-primary-foreground transition-all duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:size-full before:rounded-full before:bg-secondary before:transition-all before:duration-300 before:ease-in-out hover:text-primary hover:before:scale-150",
        "gooey-right":
          "relative overflow-hidden bg-primary text-primary-foreground transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:right-0 after:size-full after:rounded-full after:bg-secondary after:transition-all after:duration-300 after:ease-in-out hover:text-primary hover:after:scale-150",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        xxl: "h-14 rounded-md px-12 text-lg",
        xxxl: "h-16 rounded-md px-14 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
