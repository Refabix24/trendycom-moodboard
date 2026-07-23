import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-yellow)"

export function OrganizacionCatalogos() {
  return (
    <section
      id="ref-catalogos"
      data-section={5}
      aria-labelledby="ref-catalogos-title"
      className="relative w-full scroll-mt-4 overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-2 sm:w-3"
        style={{ backgroundColor: ACCENT }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <span className="absolute -left-24 top-32 h-72 w-72 rounded-full halftone-yellow opacity-80" />
        <span className="absolute -right-20 top-[18%] h-64 w-64 rounded-full halftone-red opacity-60" />
        <span className="absolute bottom-32 right-10 h-80 w-80 rounded-full action-lines opacity-40" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-yellow px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                05
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Referencias visuales
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="ref-catalogos-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Organización de los Catálogos
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span className="mt-5 block h-1.5 w-24 rounded-full bg-yellow" />
          </Reveal>
        </header>

        {/* Declaración principal */}
        <Reveal direction="scale" delay={180}>
          <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-card p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8 lg:p-10">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0"
            />

            <div className="relative">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-turquoise px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                Idea rectora
              </span>

              <p className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
                La tienda debe guiar al usuario, no abrumarlo.
              </p>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                TrendyCom busca que la navegación sea súper fácil y cero
                estresante. La organización del catálogo debe ayudar al usuario
                a encontrar rápido lo que le interesa, sin enfrentarlo a un
                montón de elementos mezclados.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Referente Heroes & Villains */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={60} className="lg:col-span-8">
            <ScreenshotPanel
              src="/images/organizacion-catalogos/catalogos_organizacion_01.png"
              alt="Captura de la página Heroes Villains con una organización del catálogo por marcas y franquicias."
              width={1848}
              height={434}
              label="Referente 01 · Heroes & Villains"
              badge="Orden por franquicias"
              caption="De esta referencia se toma la idea de organizar la tienda por universos reconocibles. Si el usuario entra buscando Marvel, DC Comics o su videojuego favorito, debe encontrar un espacio dedicado solo a ese mundo."
              href="https://heroesvillains.com/"
              linkLabel="Visitar Heroes & Villains"
              accent="yellow"
            />
          </Reveal>

          <div className="grid gap-7 lg:col-span-4">
            <Reveal direction="right" delay={120}>
              <NarrativeCard
                number="01"
                title="Navegación sin estrés"
                accent="yellow"
              >
                La intención es que buscar productos en TrendyCom se sienta
                claro, rápido y agradable, sin saturar al usuario con muchas
                categorías mezcladas al mismo tiempo.
              </NarrativeCard>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <NarrativeCard
                number="02"
                title="Catálogo por franquicias"
                accent="orange"
              >
                Agrupar por franquicias permite que cada universo tenga su
                propio espacio. Esto hace que encontrar el estilo adecuado sea
                más directo, ordenado y mucho más disfrutable.
              </NarrativeCard>
            </Reveal>
          </div>
        </div>

        {/* Banda intermedia */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />
              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-center text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                Qué debe lograr TrendyCom
              </span>
              <span className="h-1 flex-1 rounded-full bg-turquoise" />
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            <Reveal direction="left" delay={60}>
              <MotionStep
                number="01"
                title="Identificar"
                color="bg-yellow"
              >
                El usuario reconoce enseguida el universo o franquicia que le
                interesa.
              </MotionStep>
            </Reveal>

            <Reveal direction="scale" delay={140}>
              <MotionStep
                number="02"
                title="Entrar"
                color="bg-turquoise"
              >
                Cada categoría ofrece un acceso claro y ordenado a su propio
                espacio temático.
              </MotionStep>
            </Reveal>

            <Reveal direction="right" delay={220}>
              <MotionStep
                number="03"
                title="Explorar"
                color="bg-red text-paper"
              >
                La experiencia se vuelve más cómoda, más rápida y mucho más
                intuitiva para comprar o descubrir productos.
              </MotionStep>
            </Reveal>
          </div>
        </div>

        {/* Referente Rippaverse */}
        <div className="mt-16">
          <Reveal direction="scale" delay={40}>
            <div className="rounded-2xl border-4 border-ink bg-navy p-6 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                Referente 02 · Rippaverse
              </span>

              <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-paper sm:text-4xl">
                Color, personalidad visual e interacción con energía.
              </h3>

              <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                De Rippaverse se toman ideas para definir la personalidad
                visual de TrendyCom: una interfaz vibrante, con colores
                intensos, elementos que resaltan al instante y detalles que
                hacen que la página se sienta viva.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-8 xl:grid-cols-2">
            <Reveal direction="left" delay={80}>
              <ScreenshotPanel
                src="/images/organizacion-catalogos/catalogos_organizacion_02.png"
                alt="Captura de Rippaverse con una sección de personajes y un diseño llamativo en rojo, amarillo y blanco."
                width={1542}
                height={634}
                label="Rippaverse · Personajes"
                badge="Vitrina visual"
                caption="Esta referencia aporta ideas sobre cómo presentar productos o colecciones con una composición atractiva, jerarquías claras y personajes que funcionan como foco inmediato de atención."
                href="https://rippaverse.com/"
                linkLabel="Visitar Rippaverse"
                accent="red"
              />
            </Reveal>

            <Reveal direction="right" delay={140}>
              <ScreenshotPanel
                src="/images/organizacion-catalogos/catalogos_organizacion_03.png"
                alt="Captura de Rippaverse con una sección promocional de membresía y beneficios."
                width={1090}
                height={653}
                label="Rippaverse · Membresía"
                badge="Detalles interactivos"
                caption="También inspira los pequeños recursos visuales que hacen que la página respire la esencia de su universo: contrastes fuertes, secciones vivas y componentes que reaccionan visualmente al recorrido del usuario."
                accent="turquoise"
              />
            </Reveal>
          </div>
        </div>

        {/* Conclusión */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={80} className="lg:col-span-5">
            <NarrativeCard
              number="03"
              title="Una tienda con identidad"
              accent="turquoise"
            >
              Más allá de organizar productos, TrendyCom debe sentirse
              coherente con el mundo geek y del entretenimiento. La estructura
              del sitio también comunica personalidad.
            </NarrativeCard>
          </Reveal>

          <Reveal direction="right" delay={140} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-card p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-10">
              <span
                aria-hidden
                className="action-lines pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-40"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-red px-4 py-1 text-sm uppercase tracking-wider text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                  Aplicación en TrendyCom
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  La organización del catálogo debe ser funcional, pero también
                  debe transmitir la vibra auténtica del proyecto.
                </h3>

                <p className="mt-5 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  La meta es que cada sección del sitio respire la misma
                  esencia del universo TrendyCom: una experiencia comercial
                  clara, organizada y al mismo tiempo cargada de identidad
                  visual, energía y carácter.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
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
    <article className="relative flex h-full flex-col items-center text-center">
      <span
        className={`text-comic flex h-16 w-16 items-center justify-center rounded-full border-4 border-ink text-xl shadow-[5px_5px_0_0_var(--color-ink)] ${color}`}
      >
        {number}
      </span>

      <div className="comic-panel mt-5 h-full rounded-2xl bg-card p-5 sm:p-6">
        <h3 className="text-comic text-2xl text-navy">{title}</h3>

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
  accent: "yellow" | "red" | "turquoise"
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
  linkLabel = "Visitar referencia",
}: ScreenshotPanelProps) {
  const headerColor =
    accent === "yellow"
      ? "bg-yellow text-ink"
      : accent === "turquoise"
        ? "bg-turquoise text-ink"
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