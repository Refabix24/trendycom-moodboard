import { ChapterNav } from "@/components/scrollytelling/chapter-nav"
import { Concepto } from "@/components/scrollytelling/concepto"
import { ConclusionVisual } from "@/components/scrollytelling/conclusion-visual"
import { EvolucionLogotipo } from "@/components/scrollytelling/evolucion-logotipo"
import { HeaderBannerPrincipal } from "@/components/scrollytelling/header-banner-principal"
import { IlustracionesEstiloGrafico } from "@/components/scrollytelling/ilustraciones-estilo-grafico"
import { InterfazComic } from "@/components/scrollytelling/interfaz-comic"
import { NavegacionNarrativa } from "@/components/scrollytelling/navegacion-narrativa"
import { OrigenTrendyMan } from "@/components/scrollytelling/origen-trendyman"
import { OrganizacionCatalogos } from "@/components/scrollytelling/organizacion-catalogos"
import { PaletaColores } from "@/components/scrollytelling/paleta-colores"
import { Portada } from "@/components/scrollytelling/portada"
import { ProductosInteraccion } from "@/components/scrollytelling/productos-interaccion"
import { ReferentesComerciales } from "@/components/scrollytelling/referentes-comerciales"
import { SectionShell } from "@/components/scrollytelling/section-shell"
import { SECTIONS } from "@/components/scrollytelling/sections-data"
import { SistemaTipografico } from "@/components/scrollytelling/sistema-tipografico"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Decorative fixed backdrop — subtle, never covering content */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <span className="absolute -right-24 top-10 h-72 w-72 rounded-full action-lines" />
        <span className="absolute -left-16 bottom-24 h-64 w-64 rounded-full halftone-yellow" />
      </div>

      <ChapterNav />

      <Portada />

      <Concepto />

      <InterfazComic />

      <NavegacionNarrativa />

      <OrganizacionCatalogos />

      <PaletaColores />

      <SistemaTipografico />

      <IlustracionesEstiloGrafico />

      <OrigenTrendyMan />

      <EvolucionLogotipo />

      <ReferentesComerciales />

      <ProductosInteraccion />

      <HeaderBannerPrincipal />

      <ConclusionVisual />

      {SECTIONS.filter(
        (meta) => ![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(meta.n),
      ).map((meta) => (
        <SectionShell key={meta.id} meta={meta} />
      ))}

      <footer className="border-t-4 border-ink bg-navy px-5 py-10 text-center">
        <p className="text-comic text-2xl text-yellow">TrendyCom</p>

        <p className="mt-2 text-sm text-paper/70">
          Presentación digital del moodboard e identidad visual — Propuesta
          académica.
        </p>
      </footer>
    </main>
  )
}
