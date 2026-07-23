import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-orange)"

const EVOLUTION_STEPS = [
  {
    number: "01",
    title: "Una primera idea poderosa",
    label: "Punto de partida",
    description:
      "El primer logotipo exploró una composición heroica basada en siluetas clásicas y un emblema central. La propuesta comunicaba fuerza, pero dependía demasiado de referentes ya reconocidos.",
    colorClass: "bg-navy text-paper",
  },
  {
    number: "02",
    title: "Buscar una voz propia",
    label: "Decisión",
    description:
      "Para construir una identidad auténtica, se abandonó la imitación directa y se inició una búsqueda centrada en Pop Art, historietas impresas, onomatopeyas y tipografías expresivas.",
    colorClass: "bg-red text-paper",
  },
  {
    number: "03",
    title: "Reunir los hallazgos",
    label: "Síntesis",
    description:
      "La tipografía, el estallido, las tramas, los colores y los bocadillos comenzaron a trabajar como un solo sistema. Solo después de esta síntesis apareció la solución final de TrendyCom.",
    colorClass: "bg-yellow text-ink",
  },
]

export function EvolucionLogotipo() {
  return (
    <section
      id="logotipo"
      data-section={10}
      aria-labelledby="logotipo-title"
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
        <span className="absolute -left-24 top-24 h-72 w-72 rounded-full halftone-yellow opacity-70" />
        <span className="absolute -right-28 top-[31%] h-96 w-96 rounded-full action-lines opacity-45" />
        <span className="absolute -left-20 bottom-28 h-72 w-72 rounded-full halftone-red opacity-55" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-orange px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                10
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Construcción de marca
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="logotipo-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Evolución del Logotipo
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span className="mt-5 block h-1.5 w-24 rounded-full bg-orange" />
          </Reveal>
        </header>

        {/* Declaración principal */}
        <Reveal direction="scale" delay={180}>
          <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-navy p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="action-lines pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20"
            />

            <div className="relative">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                De referencia a identidad
              </span>

              <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                El logotipo evolucionó cuando TrendyCom dejó de parecerse a
                otros héroes y comenzó a hablar con su propia voz.
              </h3>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                La primera propuesta partió de una estética heroica inspirada en
                siluetas emblemáticas. Después de evaluar que esta solución
                dependía demasiado de códigos visuales ya existentes, el
                proyecto tomó una decisión fundamental: conservar la energía
                del cómic, pero construir un símbolo auténtico y reconocible.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Comparación inicial */}
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={60} className="lg:col-span-7">
            <LogoPanel
              src="/images/evolucion-logotipo/evolucion_logo_01_inicial.png"
              alt="Primera propuesta del logotipo TrendyCom con una silueta heroica oscura y un emblema central."
              width={1435}
              height={747}
              label="Versión inicial"
              badge="Exploración conceptual"
              caption="La propuesta transmitía fuerza y una atmósfera de superhéroes, pero su cercanía con referentes icónicos impedía que TrendyCom desarrollara una personalidad completamente propia."
              accent="navy"
            />
          </Reveal>

          <div className="grid gap-7 lg:col-span-5">
            <Reveal direction="right" delay={120}>
              <NarrativeCard
                number="01"
                title="Lo que funcionaba"
                accent="yellow"
              >
                La composición tenía presencia, contraste y una lectura heroica
                inmediata. También introducía la idea de un emblema capaz de
                sostener el nombre de la marca.
              </NarrativeCard>
            </Reveal>

            <Reveal direction="right" delay={190}>
              <NarrativeCard
                number="02"
                title="Lo que debía cambiar"
                accent="red"
              >
                El lenguaje visual estaba demasiado ligado a identidades
                conocidas. Para crecer como marca, TrendyCom necesitaba un
                símbolo menos dependiente de referencias externas y mucho más
                conectado con su propio universo.
              </NarrativeCard>
            </Reveal>
          </div>
        </div>

        {/* Línea evolutiva */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-9 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />

              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-center text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                Tres decisiones que transformaron la marca
              </span>

              <span className="h-1 flex-1 rounded-full bg-yellow" />
            </div>
          </Reveal>

          <div className="grid gap-7 lg:grid-cols-3">
            {EVOLUTION_STEPS.map((step, index) => (
              <Reveal
                key={step.number}
                direction={index === 0 ? "left" : index === 2 ? "right" : "scale"}
                delay={60 + index * 80}
                className="h-full"
              >
                <EvolutionCard {...step} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Camino visual hacia el resultado */}
        <div className="mt-16">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-card p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-orange px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  El camino creativo
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Antes de llegar al logotipo final, TrendyCom encontró su voz
                  explorando letras, explosiones y composiciones del Pop Art.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  Estas imágenes no son el resultado definitivo. Representan
                  las decisiones visuales que fueron acercando la marca a una
                  solución propia: tipografías con ritmo, palabras integradas a
                  formas de impacto y una composición capaz de transmitir
                  energía incluso antes de leer el nombre.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid items-stretch gap-8 xl:grid-cols-12">
            <Reveal direction="left" delay={80} className="xl:col-span-5">
              <LogoPanel
                src="/images/evolucion-logotipo/evolucion_logo_05_tipografias.png"
                alt="Colección de tipografías expresivas inspiradas en caricaturas y cómics."
                width={1633}
                height={2048}
                label="Paso 01 · Búsqueda tipográfica"
                badge="Ritmo y personalidad"
                caption="La exploración de letras gruesas, irregulares y de alto contraste permitió definir una voz visual capaz de sentirse dinámica, cercana y completamente ligada al mundo de las historietas."
                accent="yellow"
              />
            </Reveal>

            <div className="grid gap-8 xl:col-span-7">
              <Reveal direction="right" delay={130}>
                <LogoPanel
                  src="/images/evolucion-logotipo/evolucion_logo_02_pop_art.png"
                  alt="Referencia Pop Art con la expresión POP ART dentro de una explosión roja, amarilla y azul."
                  width={1209}
                  height={874}
                  label="Paso 02 · El estallido"
                  badge="Pop Art"
                  caption="Las explosiones, los contornos gruesos y las tramas de puntos mostraron cómo una palabra podía convertirse en una imagen de alto impacto."
                  accent="red"
                />
              </Reveal>

              <Reveal direction="right" delay={190}>
                <LogoPanel
                  src="/images/evolucion-logotipo/evolucion_logo_03_comics.png"
                  alt="Referencia visual de una composición de cómic con la palabra COMICS dentro de una explosión."
                  width={539}
                  height={808}
                  label="Paso 03 · Palabra y forma"
                  badge="Síntesis gráfica"
                  caption="El nombre debía integrarse al estallido y compartir con él la misma fuerza visual. Esta unión entre tipografía y forma abrió el camino hacia el símbolo definitivo."
                  accent="turquoise"
                  compact
                />
              </Reveal>
            </div>
          </div>
        </div>

        {/* Función comercial de los bocadillos */}
        <div className="mt-16">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-card p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative grid items-start gap-6 lg:grid-cols-[auto_1fr]">
                <span className="text-comic inline-flex h-14 min-w-14 items-center justify-center rounded-md border-[3px] border-ink bg-orange px-3 text-xl text-ink shadow-[4px_4px_0_0_var(--color-ink)]">
                  05
                </span>

                <div>
                  <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                    Una marca que puede hablar
                  </span>

                  <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                    Los dos bocadillos pertenecen al logotipo oficial y permiten
                    incorporar llamados comerciales sin alterar su identidad.
                  </h3>

                  <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                    El globo superior puede anunciar una novedad o una nueva
                    colección, mientras que el inferior puede reforzar una acción
                    concreta, como invitar a descubrir productos o comprar. Los
                    mensajes cambian según la campaña, pero el nombre, el
                    estallido, los colores y la composición central permanecen
                    intactos.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Gran revelación final */}
        <div className="mt-16">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-red p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0 opacity-20"
              />

              <div className="relative text-center">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  La cumbre del recorrido
                </span>

                <h3 className="text-comic mx-auto mt-7 max-w-5xl text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Finalmente, todas las decisiones convergen en el logotipo
                  oficial de TrendyCom.
                </h3>

                <p className="mx-auto mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                  El estallido rojo-anaranjado aporta energía; las letras
                  amarillas construyen visibilidad; los contornos azul oscuro
                  dan profundidad; y los dos bocadillos convierten el símbolo en
                  una marca capaz de hablar. Este es el punto en el que
                  TrendyCom deja atrás las referencias y alcanza una identidad
                  propia, flexible y reconocible.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="scale" delay={140}>
            <FinalLogoClimax />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

interface LogoPanelProps {
  src: string
  alt: string
  width: number
  height: number
  label: string
  badge: string
  caption: string
  accent: "navy" | "yellow" | "red" | "turquoise"
  compact?: boolean
}

function LogoPanel({
  src,
  alt,
  width,
  height,
  label,
  badge,
  caption,
  accent,
  compact = false,
}: LogoPanelProps) {
  const headerClass = {
    navy: "bg-navy text-paper",
    yellow: "bg-yellow text-ink",
    red: "bg-red text-paper",
    turquoise: "bg-turquoise text-ink",
  }[accent]

  return (
    <figure className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card">
      <figcaption
        className={`flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink px-4 py-3 ${headerClass}`}
      >
        <span className="text-comic text-sm uppercase tracking-wide sm:text-base">
          {label}
        </span>

        <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          {badge}
        </span>
      </figcaption>

      <div
        className={`relative flex flex-1 items-center justify-center bg-paper-soft p-4 sm:p-5 ${
          compact ? "min-h-72" : "min-h-80"
        }`}
      >
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
          sizes="(max-width: 1024px) 100vw, 52vw"
          className={`relative z-10 h-auto w-full rounded-lg border-2 border-ink object-contain ${
            compact ? "max-h-[420px]" : "max-h-[700px]"
          }`}
        />
      </div>

      <div className="border-t-2 border-dashed border-ink/30 bg-card px-5 py-4">
        <p className="text-sm leading-relaxed text-navy/80 sm:text-base">
          {caption}
        </p>
      </div>
    </figure>
  )
}

interface NarrativeCardProps {
  number: string
  title: string
  accent: "yellow" | "red" | "turquoise" | "orange"
  children: ReactNode
}

function NarrativeCard({
  number,
  title,
  accent,
  children,
}: NarrativeCardProps) {
  const accentClass = {
    yellow: "bg-yellow text-ink",
    red: "bg-red text-paper",
    turquoise: "bg-turquoise text-ink",
    orange: "bg-orange text-ink",
  }[accent]

  return (
    <article className="comic-panel relative h-full overflow-hidden rounded-2xl bg-card p-6 sm:p-7">
      <span
        aria-hidden
        className="halftone pointer-events-none absolute inset-0"
      />

      <div className="relative">
        <span
          className={`text-comic inline-flex h-11 min-w-11 items-center justify-center rounded-md border-2 border-ink px-2 text-lg shadow-[3px_3px_0_0_var(--color-ink)] ${accentClass}`}
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

interface EvolutionCardProps {
  number: string
  title: string
  label: string
  description: string
  colorClass: string
}

function EvolutionCard({
  number,
  title,
  label,
  description,
  colorClass,
}: EvolutionCardProps) {
  return (
    <article className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-6 sm:p-7">
      <span
        aria-hidden
        className="halftone pointer-events-none absolute inset-0"
      />

      <div className="relative flex flex-1 flex-col">
        <span
          className={`text-comic inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] ${colorClass}`}
        >
          {number}
        </span>

        <span className="text-comic mt-6 text-xs uppercase tracking-[0.18em] text-red">
          {label}
        </span>

        <h3 className="text-comic mt-3 text-2xl leading-tight text-navy sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 flex-1 text-pretty text-base leading-relaxed text-navy/80">
          {description}
        </p>
      </div>
    </article>
  )
}

function FinalLogoClimax() {
  return (
    <figure className="comic-panel relative mt-8 overflow-hidden rounded-2xl bg-card">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-orange px-4 py-3 text-ink">
        <span className="text-comic text-sm uppercase tracking-wide sm:text-base">
          Logotipo oficial de TrendyCom
        </span>

        <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          Resultado final
        </span>
      </figcaption>

      <div className="relative flex min-h-[720px] items-center justify-center overflow-hidden bg-paper-soft px-3 py-8 sm:min-h-[860px] sm:px-8 sm:py-10 lg:min-h-[1040px]">
        <span
          aria-hidden
          className="halftone pointer-events-none absolute inset-0"
        />

        <span
          aria-hidden
          className="action-lines pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        />

        <div className="relative z-10 mx-auto w-full max-w-[820px]">
          <Image
            src="/images/evolucion-logotipo/evolucion_logo_04_final.png"
            alt="Logotipo oficial de TrendyCom dentro de una explosión de cómic y acompañado por dos globos de diálogo."
            width={1633}
            height={2048}
            quality={95}
            sizes="(max-width: 1024px) 96vw, 72vw"
            className="h-auto w-full object-contain drop-shadow-[14px_16px_0_rgba(0,0,0,0.24)]"
          />

          <span className="text-comic pointer-events-none absolute left-[5.8%] top-[27.8%] flex h-[14.4%] w-[19.6%] -rotate-[5deg] items-center justify-center px-[1%] text-center text-[9px] leading-[0.98] text-ink sm:text-sm md:text-base lg:text-xl">
            ¡NUEVA
            <br />
            COLECCIÓN!
          </span>

          <span className="text-comic pointer-events-none absolute bottom-[5.8%] right-[6.8%] flex h-[12.8%] w-[22%] rotate-[5deg] items-center justify-center px-[1%] text-center text-[9px] leading-[0.98] text-ink sm:text-sm md:text-base lg:text-xl">
            ¡DESCÚBRELA
            <br />
            AHORA!
          </span>
        </div>
      </div>

      <div className="border-t-2 border-dashed border-ink/30 bg-card px-5 py-4">
        <p className="text-center text-sm leading-relaxed text-navy/80 sm:text-base">
          Los textos están ubicados directamente dentro de los dos bocadillos
          originales del logotipo. Pueden cambiar según la campaña sin modificar
          la identidad gráfica de TrendyCom.
        </p>
      </div>
    </figure>
  )
}
