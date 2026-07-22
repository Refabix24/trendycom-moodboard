"use client"

import { useEffect, useState } from "react"
import { CHAPTERS, SECTIONS } from "./sections-data"

export function ChapterNav() {
  const [activeSection, setActiveSection] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const n = Number((entry.target as HTMLElement).dataset.section)
            if (n) setActiveSection(n)
          }
        })
      },
      // Center-line detection: whichever section crosses the middle of the
      // viewport becomes active. Works for sections of any height (including
      // sections taller than one viewport, like "Concepto e Inspiración").
      { threshold: 0, rootMargin: "-50% 0px -50% 0px" },
    )

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      setProgress(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const activeMeta = SECTIONS.find((s) => s.n === activeSection) ?? SECTIONS[0]
  const activeChapter = activeMeta.chapter

  const jumpTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-1.5 bg-navy/10">
        <div
          className="h-full bg-red transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Desktop side navigation — 8 chapters */}
      <nav
        aria-label="Capítulos de la presentación"
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
      >
        {CHAPTERS.map((c) => {
          const isActive = c.n === activeChapter
          return (
            <button
              key={c.n}
              type="button"
              onClick={() => jumpTo(c.targetId)}
              aria-current={isActive ? "true" : undefined}
              className="group flex items-center justify-end gap-3"
            >
              <span
                className={`text-comic whitespace-nowrap text-sm uppercase tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-navy opacity-100"
                    : "translate-x-1 text-navy/50 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {c.label}
              </span>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink text-[11px] font-bold transition-all duration-300 ${
                  isActive
                    ? "scale-110 bg-yellow text-ink shadow-[3px_3px_0_0_var(--color-ink)]"
                    : "bg-paper text-ink/60 group-hover:bg-turquoise group-hover:text-ink"
                }`}
              >
                {c.n}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Mobile chapter indicator */}
      <div className="fixed right-3 top-4 z-40 lg:hidden">
        <div className="text-comic flex items-center gap-1.5 rounded-full border-2 border-ink bg-yellow px-3 py-1 text-xs text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
          <span aria-hidden>Cap.</span>
          <span className="tabular-nums">{activeChapter}</span>
          <span aria-hidden>/ 8</span>
          <span className="sr-only">
            Capítulo {activeChapter} de 8. Sección {activeMeta.n} de 14.
          </span>
        </div>
      </div>
    </>
  )
}
