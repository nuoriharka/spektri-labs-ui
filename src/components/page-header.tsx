"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode // right-side actions
}

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div>
  <h1 className="font-bold tracking-tight text-foreground">{title}</h1>
        {description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children ? (<div className="flex items-center gap-2">{children}</div>) : null}
    </div>
  )
}
