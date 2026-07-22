import type { ReactNode } from "react"
import { COLOR_VAR, type SectionMeta } from "./sections-data"
import { Reveal } from "./reveal"

interface SectionShellProps {
  meta: SectionMeta
  children?: ReactNode
}

/**
 * Standard shell for each of the 14 sections. Renders the narrative header
 * (kicker, big pop-art title, section counter) plus a slot for the content
 * that will be provided later, section by section. When no content is passed
 * it shows a neutral, clearly-marked placeholder frame.
 */
export function SectionShell({ meta, children }: SectionShellProps) {
  const accent = COLOR_VAR[meta.accent]

  return (
    <section
      id={meta.id}
      data-section={meta.n}
      aria-labelledby={`${meta.id}-title`}
      className="relative flex min-h-screen w-full scroll-mt-4 flex-col justify-center overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Decorative accent bar */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-2 sm:w-3"
        style={{ backgroundColor: accent }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span
                className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]"
                style={{ backgroundColor: accent }}
              >
                {String(meta.n).padStart(2, "0")}
              </span>
              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                {meta.kicker}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id={`${meta.id}-title`}
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              {meta.title}
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span
              aria-hidden
              className="mt-5 block h-1.5 w-24 rounded-full"
              style={{ backgroundColor: accent }}
            />
          </Reveal>
        </header>

        <Reveal delay={120}>
          {children ?? <ContentPlaceholder label={meta.title} accent={accent} />}
        </Reveal>
      </div>
    </section>
  )
}

function ContentPlaceholder({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="comic-panel relative flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-xl p-8 text-center sm:min-h-[340px]">
      <span aria-hidden className="halftone pointer-events-none absolute inset-0 rounded-xl" />
      <span
        aria-hidden
        className="text-comic relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink text-2xl text-ink"
        style={{ backgroundColor: accent }}
      >
        +
      </span>
      <p className="text-comic relative text-xl text-navy">Contenido pendiente</p>
      <p className="relative max-w-sm text-sm leading-relaxed text-navy/60">
        {"El contenido y los recursos visuales de la sección "}
        <span className="font-semibold text-navy">{`“${label}”`}</span>
        {" se incorporarán próximamente."}
      </p>
    </div>
  )
}
