"use client"

import { useEffect, useRef } from "react"

export function useInterval(cb: () => void, delay: number | null) {
  const saved = useRef(cb)
  useEffect(() => {
    saved.current = cb
  }, [cb])
  useEffect(() => {
    if (delay === null) return
    const id = setInterval(() => saved.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}
