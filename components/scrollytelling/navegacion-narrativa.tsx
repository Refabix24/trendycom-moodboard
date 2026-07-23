import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-orange)"

/**
 * Sección 04 — Navegación Narrativa.
 *
 * Explica cómo el desplazamiento deja de ser una acción meramente
 * funcional y se convierte en parte de la narración visual.
 *
 * Los bloques utilizan Reveal para conservar el sistema de
 * scrollytelling ya establecido en el proyecto.
 */
export function NavegacionNarrativa() {
  return (
    <section
      id="ref-navegacion"
      data-section={4}
      aria-labelledby="ref-navegacion-title"
      className="relative w-full scroll-mt-4 overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Barra lateral identificadora de la sección */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-2 sm:w-3"
        style={{ backgroundColor: ACCENT }}
      />

      {/* Recursos decorativos del fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <span className="absolute -right-24 top-40 h-80 w-80 rounded-full halftone-yellow" />
        <span className="absolute -left-28 top-[44%] h-72 w-72 rounded-full action-lines opacity-60" />
        <span className="absolute -right-28 bottom-44 h-80 w-80 rounded-full halftone-red" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span
                className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]"
                style={{ backgroundColor: ACCENT }}
              >
                04
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Referencias visuales
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="ref-navegacion-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Navegación Narrativa
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

        {/* Declaración principal */}
        <Reveal direction="scale" delay={180}>
          <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-navy p-6 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8 lg:p-10">
            <span
              aria-hidden
              className="action-lines pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20"
            />

            <div className="relative">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                Comportamiento visual
              </span>

              <p className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                La navegación de TrendyCom no solo desplaza contenido:
                avanza la historia.
              </p>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                La estructura de desplazamiento de Hellboy Web of Wyrd sirve
                como un referente clave para convertir el recorrido de la
                página en una experiencia visual continua, expresiva e
                inmersiva.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Escena 01 */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12">
          <Reveal
            direction="left"
            delay={60}
            className="lg:col-span-8"
          >
            <ScreenshotPanel
  src="/images/navegacion-narrativa/navegacion_narrativa_01.png"
  alt="Captura de Hellboy Web of Wyrd con una composición narrativa oscura, una ilustración direccional y contenido editorial integrado."
  width={1265}
  height={603}
  label="Referente 01 · Hellboy Web of Wyrd"
  badge="Dirección de lectura"
  caption="Esta referencia orienta el comportamiento visual de TrendyCom: a medida que el usuario avance, las distintas secciones aparecerán y se desplazarán de forma fluida, orgánica y escalonada, convirtiendo el scroll en parte de la narración."
  href="https://www.hellboywebofwyrd.com/"
  linkLabel="Visitar referencia original"
  accent="orange"
/>
          </Reveal>

          <div className="grid gap-7 lg:col-span-4">
            <Reveal direction="right" delay={120}>
              <NarrativeCard
                number="01"
                title="Del scroll estático al movimiento"
                accent="yellow"
              >
                TrendyCom abandonará el desplazamiento vertical completamente
                estático mediante la implementación de animaciones activadas
                por el scroll.
              </NarrativeCard>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <NarrativeCard
                number="02"
                title="Una llegada fluida y escalonada"
                accent="turquoise"
              >
                Los títulos, imágenes, productos y paneles aterrizarán en la
                pantalla de manera fluida, orgánica y escalonada, evitando que
                toda la información aparezca al mismo tiempo.
              </NarrativeCard>
            </Reveal>
          </div>
        </div>

        {/* Secuencia gráfica del movimiento */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />

              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-center text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                El ritmo del recorrido
              </span>

              <span className="h-1 flex-1 rounded-full bg-yellow" />
            </div>
          </Reveal>

          <div className="relative grid gap-6 md:grid-cols-3">
            {/* Línea de continuidad en escritorio */}
            <span
              aria-hidden
              className="absolute left-[16%] right-[16%] top-8 hidden border-t-4 border-dashed border-ink/30 md:block"
            />

            <Reveal direction="left" delay={60}>
              <MotionStep
                number="01"
                title="Aparece"
                color="bg-yellow"
              >
                El contenido entra cuando el usuario alcanza el punto adecuado
                de la historia.
              </MotionStep>
            </Reveal>

            <Reveal direction="scale" delay={140}>
              <MotionStep
                number="02"
                title="Se conecta"
                color="bg-turquoise"
              >
                Los elementos permanecen relacionados mediante ritmo, dirección
                y continuidad visual.
              </MotionStep>
            </Reveal>

            <Reveal direction="right" delay={220}>
              <MotionStep
                number="03"
                title="Cede el paso"
                color="bg-red text-paper"
              >
                Cada escena prepara la entrada de la siguiente, como al cambiar
                de viñeta.
              </MotionStep>
            </Reveal>
          </div>
        </div>

        {/* Escena 02 */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12">
          <div className="order-2 grid gap-7 lg:order-1 lg:col-span-4">
            <Reveal direction="left" delay={100}>
              <NarrativeCard
                number="03"
                title="Transiciones como viñetas"
                accent="orange"
              >
                La transición entre categorías, productos y contenidos debe
                sentirse como el paso entre los paneles de una novela gráfica:
                cada escena conserva su identidad, pero forma parte de una
                secuencia mayor.
              </NarrativeCard>
            </Reveal>

            <Reveal direction="left" delay={180}>
              <NarrativeCard
                number="04"
                title="Una función narrativa"
                accent="red"
              >
                La interactividad no será solamente estética. Su propósito será
                orientar la lectura, dirigir la atención y mantener la
                inmersión del usuario durante todo el recorrido.
              </NarrativeCard>
            </Reveal>
          </div>

          <Reveal
            direction="right"
            delay={60}
            className="order-1 lg:order-2 lg:col-span-8"
          >
            <ScreenshotPanel
              src="/images/navegacion-narrativa/navegacion_narrativa_02.png"
              alt="Captura de Hellboy Web of Wyrd organizada como una página de cómic con múltiples viñetas, globos y una onomatopeya."
              width={1274}
              height={612}
              label="Referente 02 · Secuencia de viñetas"
              badge="Continuidad narrativa"
              caption="La información se distribuye como una página de historieta. Los paneles cambian de tamaño y posición, mientras globos y onomatopeyas atraviesan los límites de la cuadrícula."
              accent="red"
            />
          </Reveal>
        </div>

        {/* Conclusión */}
        <Reveal direction="scale" delay={160}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-card p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0"
            />

            <span
              aria-hidden
              className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-orange/20"
            />

            <div className="relative grid items-center gap-7 lg:grid-cols-[auto_1fr]">
              <div className="flex justify-center">
                <span className="text-comic flex h-24 w-24 rotate-[-5deg] items-center justify-center rounded-full border-4 border-ink bg-orange text-3xl text-ink shadow-[6px_6px_0_0_var(--color-ink)]">
                  ¡SIGUE!
                </span>
              </div>

              <div>
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-turquoise px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Aplicación en TrendyCom
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Cada movimiento debe ayudar a comprender dónde termina una
                  escena y dónde comienza la siguiente.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  El resultado será una navegación en la que las animaciones,
                  los paneles y los cambios de composición acompañen al usuario
                  sin distraerlo. La página conservará claridad comercial,
                  pero se sentirá como una historieta que cobra vida mientras
                  avanza el scroll.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

type CardAccent = "yellow" | "turquoise" | "orange" | "red"

const CARD_ACCENTS: Record<CardAccent, string> = {
  yellow: "bg-yellow text-ink",
  turquoise: "bg-turquoise text-ink",
  orange: "bg-orange text-ink",
  red: "bg-red text-paper",
}

interface NarrativeCardProps {
  number: string
  title: string
  accent: CardAccent
  children: ReactNode
}

function NarrativeCard({
  number,
  title,
  accent,
  children,
}: NarrativeCardProps) {
  return (
    <article className="comic-panel relative h-full overflow-hidden rounded-2xl bg-card p-6 sm:p-7">
      <span
        aria-hidden
        className="halftone pointer-events-none absolute inset-0"
      />

      <div className="relative">
        <span
          className={`text-comic inline-flex h-11 min-w-11 items-center justify-center rounded-md border-2 border-ink px-2 text-lg shadow-[3px_3px_0_0_var(--color-ink)] ${CARD_ACCENTS[accent]}`}
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

interface MotionStepProps {
  number: string
  title: string
  color: string
  children: ReactNode
}

function MotionStep({
  number,
  title,
  color,
  children,
}: MotionStepProps) {
  return (
    <article className="relative z-10 flex h-full flex-col items-center text-center">
      <span
        className={`text-comic flex h-16 w-16 items-center justify-center rounded-full border-4 border-ink text-xl shadow-[5px_5px_0_0_var(--color-ink)] ${color}`}
      >
        {number}
      </span>

      <div className="comic-panel mt-5 h-full rounded-2xl bg-card p-5 sm:p-6">
        <h3 className="text-comic text-2xl text-navy">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-navy/80 sm:text-base">
          {children}
        </p>
      </div>
    </article>
  )
}

interface ScreenshotPanelProps {
  src: string
  alt: string
  width: number
  height: number
  label: string
  badge: string
  caption: string
  accent: "orange" | "red"
  href?: string
  linkLabel?: string
}

function ScreenshotPanel({
  src,
  alt,
  width,
  height,
  label,
  badge,
  caption,
  accent,
  href,
  linkLabel = "Visitar sitio de referencia",
}: ScreenshotPanelProps) {
  const headerColor =
    accent === "orange"
      ? "bg-orange text-ink"
      : "bg-red text-paper"

  return (
    <figure className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card">
      <figcaption
        className={`flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink px-4 py-3 ${headerColor}`}
      >
        <span className="text-comic text-sm uppercase tracking-wide sm:text-base">
          {label}
        </span>

        <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          {badge}
        </span>
      </figcaption>

      <div className="relative flex flex-1 items-center justify-center bg-paper-soft p-3 sm:p-4">
        <span
          aria-hidden
          className="halftone pointer-events-none absolute inset-0"
        />

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={92}
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="relative z-10 h-auto w-full rounded-lg border-2 border-ink object-contain"
        />
      </div>

      <div className="border-t-2 border-dashed border-ink/30 bg-card px-5 py-4">
  <p className="text-sm leading-relaxed text-navy/80 sm:text-base">
    {caption}
  </p>

  {href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-comic mt-4 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-yellow px-4 py-2 text-xs uppercase tracking-wide text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-turquoise/40"
    >
      {linkLabel}
      <span aria-hidden>↗</span>
    </a>
  ) : null}
</div>
    </figure>
  )
}