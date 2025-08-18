"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle(){
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(()=>setMounted(true),[])
  if(!mounted) return null
  const isDark = theme !== 'light'
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15"
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  )
}
