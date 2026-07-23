"use client"

import { useEffect, useRef, useState } from "react"

import { SECTIONS } from "./sections-data"

export function ChapterNav() {
  const [activeSection, setActiveSection] = useState(1)
  const [progress, setProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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
      {
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px",
      },
    )

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    const onScroll = () => {
      const documentElement = document.documentElement
      const scrollable =
        documentElement.scrollHeight - documentElement.clientHeight

      setProgress(
        scrollable > 0
          ? (documentElement.scrollTop / scrollable) * 100
          : 0,
      )
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target)
      ) {
        setMobileMenuOpen(false)
      }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick)
    document.addEventListener("keydown", closeOnEscape)

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

  const activeMeta =
    SECTIONS.find((section) => section.n === activeSection) ?? SECTIONS[0]

  const jumpTo = (id: string) => {
    const element = document.getElementById(id)

    setMobileMenuOpen(false)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      {/* Barra de progreso superior */}
      <div className="fixed inset-x-0 top-0 z-50 h-1.5 bg-navy/10">
        <div
          className="h-full bg-red transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navegación lateral de escritorio — una opción por cada sección */}
      <nav
        aria-label="Secciones de la presentación"
        className="fixed right-5 top-1/2 z-40 hidden max-h-[calc(100vh-4rem)] -translate-y-1/2 flex-col gap-2 overflow-y-auto py-2 pr-1 lg:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SECTIONS.map((section) => {
          const isActive = section.n === activeSection

          return (
            <button
              key={section.n}
              type="button"
              onClick={() => jumpTo(section.id)}
              aria-label={`Ir a la sección ${section.n}: ${section.title}`}
              aria-current={isActive ? "true" : undefined}
              title={section.title}
              className="group flex items-center justify-end gap-3"
            >
              <span
                className={`text-comic max-w-[280px] whitespace-nowrap text-right text-sm uppercase leading-tight tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-navy opacity-100"
                    : "translate-x-1 text-navy/50 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {section.title}
              </span>

              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink text-[11px] font-bold transition-all duration-300 ${
                  isActive
                    ? "scale-110 bg-yellow text-ink shadow-[3px_3px_0_0_var(--color-ink)]"
                    : "bg-paper text-ink/60 group-hover:scale-105 group-hover:bg-turquoise group-hover:text-ink"
                }`}
              >
                {section.n}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Navegación desplegable para celular y tableta */}
      <div
        ref={mobileMenuRef}
        className="fixed right-3 top-4 z-[60] lg:hidden"
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-section-menu"
          aria-label={`Abrir navegación. Sección actual ${activeMeta.n} de 14: ${activeMeta.title}`}
          className="text-comic flex items-center gap-1.5 rounded-full border-2 border-ink bg-yellow px-3 py-1 text-xs text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition duration-300 hover:-translate-y-0.5 hover:bg-turquoise"
        >
          <span aria-hidden>Sec.</span>
          <span className="tabular-nums">{activeMeta.n}</span>
          <span aria-hidden>/ 14</span>

          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className={`ml-0.5 h-3.5 w-3.5 transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 7.5 5 5 5-5" />
          </svg>
        </button>

        {mobileMenuOpen && (
          <nav
            id="mobile-section-menu"
            aria-label="Menú de las 14 secciones"
            className="absolute right-0 top-full mt-3 w-[calc(100vw-1.5rem)] max-w-sm overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-[7px_7px_0_0_var(--color-ink)]"
          >
            <div className="flex items-center justify-between border-b-[3px] border-ink bg-navy px-4 py-3 text-paper">
              <div>
                <p className="text-comic text-base uppercase tracking-wide">
                  Secciones
                </p>
                <p className="mt-0.5 text-xs text-paper/70">
                  Toca una opción para ir directamente.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú de secciones"
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-red text-lg leading-none text-paper transition hover:scale-105 hover:bg-orange"
              >
                ×
              </button>
            </div>

            <div className="max-h-[calc(100vh-8rem)] overflow-y-auto p-2">
              {SECTIONS.map((section) => {
                const isActive = section.n === activeSection

                return (
                  <button
                    key={section.n}
                    type="button"
                    onClick={() => jumpTo(section.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex w-full items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-left transition duration-200 ${
                      isActive
                        ? "border-ink bg-yellow shadow-[3px_3px_0_0_var(--color-ink)]"
                        : "border-transparent hover:border-ink hover:bg-turquoise/25"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink text-xs font-bold ${
                        isActive
                          ? "bg-navy text-paper"
                          : "bg-card text-navy group-hover:bg-turquoise"
                      }`}
                    >
                      {section.n}
                    </span>

                    <span className="text-comic text-sm uppercase leading-tight text-navy">
                      {section.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </>
  )
}
