import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-turquoise)"

const ACCENT_CLASSES = {
  yellow: "bg-yellow text-ink",
  turquoise: "bg-turquoise text-ink",
  red: "bg-red text-paper",
  orange: "bg-orange text-ink",
} as const

type AccentName = keyof typeof ACCENT_CLASSES

/**
 * Sección 03 — Interfaz como Cómic.
 *
 * La composición está organizada como una secuencia editorial:
 * introducción, referentes visuales, interpretación de sus recursos
 * y conclusión sobre el nacimiento de TrendyMan.
 *
 * Cada bloque utiliza Reveal para conservar el sistema de
 * scrollytelling existente en el proyecto.
 */
export function InterfazComic() {
  return (
    <section
      id="ref-comic"
      data-section={3}
      aria-labelledby="ref-comic-title"
      className="relative w-full scroll-mt-4 overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Barra lateral de color correspondiente a la sección */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-2 sm:w-3"
        style={{ backgroundColor: ACCENT }}
      />

      {/* Texturas decorativas del fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <span className="absolute -right-24 top-48 h-80 w-80 rounded-full halftone-yellow" />
        <span className="absolute -left-32 top-[42%] h-80 w-80 rounded-full halftone-red" />
        <span className="absolute -right-24 bottom-48 h-72 w-72 rounded-full action-lines" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado de la sección */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span
                className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]"
                style={{ backgroundColor: ACCENT }}
              >
                03
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Referencias visuales
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="ref-comic-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Interfaz como Cómic
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span
              aria-hidden
              className="mt-5 block h-1.5 w-24 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
          </Reveal>
        </header>

        {/* Idea principal de la sección */}
        <Reveal delay={180} direction="scale">
          <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-card p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0"
            />

            <div className="relative">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                Idea rectora
              </span>

              <p className="mt-6 max-w-5xl text-balance text-2xl font-semibold leading-tight text-navy sm:text-3xl lg:text-4xl">
                TrendyCom combina la energía gráfica de los cómics con una
                experiencia comercial moderna, cercana y entretenida.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Escena 01: detonante creativo */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-12">
          <Reveal
            direction="left"
            className="lg:col-span-5"
            delay={40}
          >
            <ReferencePanel
              src="/images/referencias-visuales/referencias_visuales_01.png"
              alt="Página promocional con una superheroína ilustrada que funciona como anfitriona visual de la experiencia comercial."
              width={569}
              height={713}
              label="Referente 01 · Anfitriona heroica"
              badge="Personaje guía"
              accent="red"
              caption="El uso de una superheroína como anfitriona visual fue el detonante creativo: la interfaz necesitaba un rostro capaz de conectar con los usuarios."
            />
          </Reveal>

          <div className="grid gap-7 lg:col-span-7">
            <Reveal direction="right" delay={100}>
              <StoryPanel
                number="01"
                title="La magia del arte secuencial"
                accent="yellow"
              >
                La principal inspiración detrás de TrendyCom nace de la magia
                del arte secuencial y de su capacidad para contar historias
                mediante imágenes, personajes, cartelas y viñetas.
              </StoryPanel>
            </Reveal>

            <Reveal direction="right" delay={180}>
              <StoryPanel
                number="02"
                title="Una experiencia inmersiva"
                accent="turquoise"
              >
                La plataforma se concibió no solo como una tienda, sino como una
                experiencia inmersiva: desde el primer clic, el usuario debe
                sentir que acaba de abrir las páginas de una novela gráfica.
              </StoryPanel>
            </Reveal>
          </div>
        </div>

        {/* Escena 02: dos formas de construir una página narrativa */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />

              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                La página web como una historieta abierta
              </span>

              <span className="h-1 flex-1 rounded-full bg-yellow" />
            </div>
          </Reveal>

          <div className="grid items-start gap-8 lg:grid-cols-12">
            <Reveal
              direction="left"
              className="lg:col-span-5"
              delay={60}
            >
              <ReferencePanel
                src="/images/referencias-visuales/referencias_visuales_02.png"
                alt="Página de CGV Cine Gallery organizada mediante franjas de colores, ilustraciones heroicas, cartelas y onomatopeyas."
                width={395}
                height={731}
                label="Referente 02 · CGV Cine Gallery"
                badge="Narrativa por franjas"
                accent="turquoise"
                caption="La composición por franjas convierte cada bloque informativo en una escena independiente y conduce la mirada mediante colores, personajes y onomatopeyas."
              />
            </Reveal>

            <Reveal
              direction="right"
              className="lg:col-span-7"
              delay={140}
            >
              <ReferencePanel
                src="/images/referencias-visuales/referencias_visuales_03.png"
                alt="Página editorial de estética pop art con personajes ilustrados integrados alrededor de textos, videos y módulos de producto."
                width={518}
                height={1003}
                label="Referente 03 · Personaje editorial"
                badge="Pop art & contenido"
                accent="yellow"
                caption="Los personajes no funcionan como adornos aislados: invaden el espacio negativo, acompañan cada módulo y mantienen una continuidad visual durante todo el recorrido."
              />
            </Reveal>
          </div>
        </div>

        {/* Interpretación de los dos referentes centrales */}
        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          <Reveal direction="left" delay={80}>
            <StoryPanel
              number="03"
              title="Cada sección funciona como una viñeta"
              accent="orange"
            >
              La interfaz rompe con lo tradicional mediante una diagramación en
              la que cada sección web funciona como una viñeta. Los cambios de
              escala, las composiciones asimétricas y las entradas animadas
              guían la navegación como si se tratara de un cómic interactivo.
            </StoryPanel>
          </Reveal>

          <Reveal direction="right" delay={160}>
            <StoryPanel
              number="04"
              title="Una identidad que acompaña al usuario"
              accent="red"
            >
              El análisis de estos referentes demostró que una identidad
              memorable no depende únicamente de colores o tipografías. También
              necesita un personaje capaz de acompañar, orientar y conectar
              emocionalmente con el público.
            </StoryPanel>
          </Reveal>
        </div>

        {/* Escena 03: catálogo estructurado como historieta */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12">
          <Reveal
            direction="left"
            className="lg:col-span-7"
            delay={60}
          >
            <ReferencePanel
              src="/images/referencias-visuales/referencias_visuales_04.png"
              alt="Página de Fruto Home Design con productos organizados en viñetas, globos de diálogo, fondos pop art y personajes de historieta."
              width={736}
              height={1133}
              label="Referente 04 · Fruto Home Design"
              badge="Catálogo en viñetas"
              accent="orange"
              caption="Los productos y servicios se organizan como una página de historieta: cada categoría ocupa su propia viñeta y se comunica mediante globos, rótulos y fondos pop art."
            />
          </Reveal>

          <div className="grid gap-7 lg:col-span-5">
            <Reveal direction="right" delay={120}>
              <div className="comic-panel relative overflow-hidden rounded-2xl bg-card p-6 sm:p-8">
                <span
                  aria-hidden
                  className="halftone pointer-events-none absolute inset-0"
                />

                <div className="relative">
                  <span className="text-comic inline-flex rounded-md border-2 border-ink bg-yellow px-3 py-1 text-sm uppercase text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                    Aplicación en TrendyCom
                  </span>

                  <p className="mt-6 text-pretty text-lg leading-relaxed text-navy">
                    Estas referencias confirman que una tienda puede conservar
                    una estructura clara y funcional sin renunciar a una
                    composición expresiva. En TrendyCom, los productos, las
                    categorías y los llamados a la acción podrán sentirse como
                    partes de una misma narración visual.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="scale" delay={220}>
              <div
                className="relative overflow-hidden rounded-2xl border-4 border-ink p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9"
                style={{ backgroundColor: "var(--color-navy)" }}
              >
                <span
                  aria-hidden
                  className="action-lines pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20"
                />

                <div className="relative">
                  <span className="text-comic inline-flex rounded-full border-2 border-ink bg-turquoise px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                    El nacimiento del héroe
                  </span>

                  <p className="text-comic mt-6 text-balance text-3xl leading-tight text-yellow sm:text-4xl">
                    Así nació TrendyMan.
                  </p>

                  <p className="mt-5 text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                    El superhéroe y mascota oficial del proyecto, cuyo nombre,
                    personalidad y misión están intrínsecamente ligados al
                    universo de TrendyCom.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

interface StoryPanelProps {
  number: string
  title: string
  accent: AccentName
  children: ReactNode
}

function StoryPanel({
  number,
  title,
  accent,
  children,
}: StoryPanelProps) {
  return (
    <article className="comic-panel relative h-full overflow-hidden rounded-2xl bg-card p-6 sm:p-8">
      <span
        aria-hidden
        className="halftone pointer-events-none absolute inset-0"
      />

      <div className="relative">
        <span
          className={`text-comic inline-flex h-11 min-w-11 items-center justify-center rounded-md border-2 border-ink px-2 text-lg shadow-[3px_3px_0_0_var(--color-ink)] ${ACCENT_CLASSES[accent]}`}
        >
          {number}
        </span>

        <h3 className="text-comic mt-6 text-2xl leading-tight text-navy sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-pretty text-base leading-relaxed text-navy/85 sm:text-lg">
          {children}
        </p>
      </div>
    </article>
  )
}

interface ReferencePanelProps {
  src: string
  alt: string
  width: number
  height: number
  label: string
  badge: string
  caption: string
  accent: AccentName
}

function ReferencePanel({
  src,
  alt,
  width,
  height,
  label,
  badge,
  caption,
  accent,
}: ReferencePanelProps) {
  return (
    <figure className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card">
      <figcaption
        className={`flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink px-4 py-3 ${ACCENT_CLASSES[accent]}`}
      >
        <span className="text-comic text-sm uppercase tracking-wide sm:text-base">
          {label}
        </span>

        <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          {badge}
        </span>
      </figcaption>

      <div className="relative flex flex-1 items-start justify-center bg-paper-soft p-3 sm:p-4">
        <span
          aria-hidden
          className="halftone pointer-events-none absolute inset-0"
        />

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={90}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="relative z-10 h-auto w-full rounded-lg border-2 border-ink object-contain"
        />
      </div>

      <p className="border-t-2 border-dashed border-ink/30 bg-card px-5 py-4 text-sm leading-relaxed text-navy/80 sm:text-base">
        {caption}
      </p>
    </figure>
  )
}