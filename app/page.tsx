import { ChapterNav } from "@/components/scrollytelling/chapter-nav"
import { Concepto } from "@/components/scrollytelling/concepto"
import { Portada } from "@/components/scrollytelling/portada"
import { SectionShell } from "@/components/scrollytelling/section-shell"
import { SECTIONS } from "@/components/scrollytelling/sections-data"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Decorative fixed backdrop — subtle, never covering content */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <span className="absolute -right-24 top-10 h-72 w-72 rounded-full action-lines" />
        <span className="absolute -left-16 bottom-24 h-64 w-64 halftone-yellow rounded-full" />
      </div>

      <ChapterNav />

      <Portada />

      <Concepto />

      {SECTIONS.filter((meta) => meta.n !== 1 && meta.n !== 2).map((meta) => (
        <SectionShell key={meta.id} meta={meta} />
      ))}

      <footer className="border-t-4 border-ink bg-navy px-5 py-10 text-center">
        <p className="text-comic text-2xl text-yellow">TrendyCom</p>
        <p className="mt-2 text-sm text-paper/70">
          Presentación digital del moodboard e identidad visual — Propuesta académica.
        </p>
      </footer>
    </main>
  )
}
