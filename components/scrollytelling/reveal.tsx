"use client"

import { type ElementType, type ReactNode, useEffect, useRef, useState } from "react"

type Direction = "up" | "left" | "right" | "scale"

interface RevealProps {
  children: ReactNode
  /** Direction the element travels from as it appears */
  direction?: Direction
  /** Stagger delay in ms */
  delay?: number
  /** Render as a different element (default div) */
  as?: ElementType
  className?: string
}

/**
 * Wraps content and gently reveals it when scrolled into view using an
 * IntersectionObserver. Motion is fully disabled via CSS when the user
 * prefers reduced motion.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  as,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const dir = direction === "up" ? undefined : direction

  return (
    <Tag
      ref={ref}
      data-dir={dir}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
