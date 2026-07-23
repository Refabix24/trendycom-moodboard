import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-navy)"

export function SistemaTipografico() {
  return (
    <section
      id="tipografias"
      data-section={7}
      aria-labelledby="tipografias-title"
      className="relative w-full scroll-mt-4 overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Barra identificadora */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-2 sm:w-3"
        style={{ backgroundColor: ACCENT }}
      />

      {/* Decoraciones de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <span className="absolute -right-28 top-32 h-80 w-80 rounded-full halftone-yellow opacity-70" />
        <span className="absolute -left-32 top-[42%] h-80 w-80 rounded-full action-lines opacity-50" />
        <span className="absolute -right-24 bottom-36 h-72 w-72 rounded-full halftone-red opacity-50" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-navy px-2 text-sm text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                07
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Identidad verbal y visual
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="tipografias-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Sistema Tipográfico
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span className="mt-5 block h-1.5 w-24 rounded-full bg-navy" />
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
                La voz escrita de TrendyCom
              </span>

              <p className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                Las palabras también deben sentirse como parte de una
                historieta.
              </p>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                Para complementar la energía del cómic y mantener una lectura
                cómoda, TrendyCom utilizará un sistema tipográfico centrado en
                las familias Komika Title y Komika Title Kaps, o en
                alternativas digitales que conserven una personalidad visual
                semejante.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Referencia Comic Book Fonts */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={60} className="lg:col-span-8">
            <ReferencePanel
              src="/images/sistema-tipografico/sistema_tipografico_01.png"
              alt="Captura del sitio Comic Book Fonts con un encabezado de estilo cómic y navegación ilustrada."
              width={1266}
              height={696}
              label="Referente 01 · Comic Book Fonts"
              badge="Personalidad tipográfica"
              caption="La referencia demuestra que la tipografía puede integrarse con las ilustraciones, los botones y los elementos de navegación para reforzar la identidad de un universo gráfico."
              href="https://www.comicbookfonts.com/"
              linkLabel="Visitar Comic Book Fonts"
              accent="yellow"
            />
          </Reveal>

          <div className="grid gap-7 lg:col-span-4">
            <Reveal direction="right" delay={120}>
              <NarrativeCard
                number="01"
                title="Tipografía con personalidad"
                accent="red"
              >
                Las letras no serán un elemento neutro. Los títulos, botones,
                categorías y llamados importantes deben conservar el dinamismo,
                la fuerza y la expresividad propios de una historieta.
              </NarrativeCard>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <NarrativeCard
                number="02"
                title="Lectura clara y cómoda"
                accent="turquoise"
              >
                La estética no puede sacrificar la comprensión. Los tamaños,
                espacios, interlineados y extensiones de texto deben permitir
                que el usuario lea sin esfuerzo y encuentre rápidamente la
                información importante.
              </NarrativeCard>
            </Reveal>
          </div>
        </div>

        {/* Segunda captura */}
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={80} className="lg:col-span-4">
            <div className="comic-panel relative overflow-hidden rounded-2xl bg-card p-6 sm:p-7">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-orange px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Inspiración visual
                </span>

                <h3 className="text-comic mt-6 text-3xl leading-tight text-navy">
                  Letras que forman parte de la interfaz
                </h3>

                <p className="mt-4 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  Comic Book Fonts integra sus títulos con ilustraciones,
                  globos, botones y marcos. TrendyCom toma esta idea para evitar
                  que el texto se sienta separado del resto de la composición.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120} className="lg:col-span-8">
            <ReferencePanel
              src="/images/sistema-tipografico/sistema_tipografico_02.png"
              alt="Captura de Comic Book Fonts con personajes, titulares y botones diseñados con una estética de historieta."
              width={1371}
              height={824}
              label="Referente 02 · Integración gráfica"
              badge="Texto e ilustración"
              caption="Los títulos, personajes y botones comparten el mismo lenguaje visual. Esta relación inspira una interfaz donde cada palabra parezca pertenecer naturalmente al universo TrendyCom."
              accent="red"
            />
          </Reveal>
        </div>

        {/* Dos tipografías, una sola identidad */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-9 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />

              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-center text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                Dos tipografías, una sola identidad
              </span>

              <span className="h-1 flex-1 rounded-full bg-yellow" />
            </div>
          </Reveal>

          <div className="grid gap-7 lg:grid-cols-2">
            <Reveal direction="left" delay={60}>
              <TypeRoleCard
                number="01"
                family="Komika Title"
                role="La voz de los títulos"
                colorClass="bg-red text-paper"
              >
                Se utilizará para todos los títulos, encabezados y llamados a la
                acción principales. Su grosor y dinamismo aportan el impacto
                visual característico de las portadas de los cómics.
              </TypeRoleCard>
            </Reveal>

            <Reveal direction="right" delay={140}>
              <TypeRoleCard
                number="02"
                family="Komika Title Kaps"
                role="La voz de la lectura"
                colorClass="bg-turquoise text-ink"
              >
                Se utilizará para el cuerpo de texto, las descripciones de los
                productos y la lectura general. Complementa a la tipografía
                principal y mantiene la estética de los diálogos escritos a
                mano, sin perder comodidad ni claridad.
              </TypeRoleCard>
            </Reveal>
          </div>
        </div>

        {/* Ejemplos tipográficos reales */}
        <div className="mt-16">
          <Reveal direction="left">
            <div className="grid items-start gap-5 sm:grid-cols-[auto_1fr]">
              <span className="text-comic inline-flex h-14 min-w-14 items-center justify-center rounded-md border-[3px] border-ink bg-orange px-3 text-xl text-ink shadow-[4px_4px_0_0_var(--color-ink)]">
                04
              </span>

              <div>
                <h3 className="text-comic text-3xl leading-tight text-navy sm:text-4xl">
                  Así hablará TrendyCom
                </h3>

                <p className="mt-3 max-w-3xl text-pretty text-base leading-relaxed text-navy/75 sm:text-lg">
                  En lugar de textos de relleno, el sistema se prueba con
                  mensajes reales que podrían formar parte de la tienda.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-7 lg:grid-cols-12">
            <Reveal direction="left" delay={80} className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-red p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
                <span
                  aria-hidden
                  className="halftone pointer-events-none absolute inset-0 opacity-20"
                />

                <div className="relative">
                  <span className="text-comic text-sm uppercase tracking-[0.22em] text-yellow">
                    Titular principal · Komika Title
                  </span>

                  <p className="text-comic mt-8 text-balance text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
                    VISTE LA TENDENCIA.
                    <br />
                    VIVE TU UNIVERSO.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={140} className="lg:col-span-5">
              <div className="comic-panel relative h-full overflow-hidden rounded-2xl bg-card p-7 sm:p-8">
                <span
                  aria-hidden
                  className="halftone pointer-events-none absolute inset-0"
                />

                <div className="relative">
                  <span className="text-comic text-sm uppercase tracking-[0.18em] text-red">
                    Cuerpo de texto · Komika Title Kaps
                  </span>

                  <h4 className="text-comic mt-6 text-3xl leading-tight text-navy sm:text-4xl">
                    Descubre camisetas inspiradas en las historias que están
                    marcando el momento.
                  </h4>

                  <p className="mt-6 text-base leading-relaxed text-navy/75 sm:text-lg">
                    Explora colecciones organizadas por franquicia, conoce los
                    nuevos lanzamientos y encuentra diseños hechos para
                    seguidores del cine, los videojuegos, los cómics y las
                    series.
                  </p>

                  <span className="text-comic mt-7 inline-flex rounded-full border-2 border-ink bg-yellow px-5 py-3 text-sm uppercase tracking-wide text-ink shadow-[4px_4px_0_0_var(--color-ink)]">
                    Explorar colección
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Muestras de las fuentes */}
        <div className="mt-16">
          <Reveal direction="scale">
            <div className="rounded-2xl border-4 border-ink bg-navy p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-turquoise px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                Muestras tipográficas
              </span>

              <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-yellow sm:text-4xl">
                Variantes, alfabetos y expresividad visual
              </h3>

              <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                Las diferentes variantes permiten construir una jerarquía
                clara, desde encabezados grandes hasta etiquetas y mensajes de
                apoyo, sin perder la unidad gráfica del proyecto.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-3">
            <Reveal direction="left" delay={80} className="h-full">
              <FontSample
                src="/images/sistema-tipografico/sistema_tipografico_03.png"
                alt="Muestra de botones y llamados de TrendyCom utilizando una tipografía de estilo cómic."
                width={520}
                height={600}
                title="Botones y llamados"
                caption="Los botones, etiquetas y acciones breves conservarán una presencia fuerte y fácil de reconocer dentro de la interfaz."
                secondaryTitle="Variaciones de estilo"
                secondaryCaption="Los colores, tamaños y contrastes podrán variar según la importancia de cada acción, sin abandonar el mismo lenguaje visual."
              />
            </Reveal>

            <Reveal direction="scale" delay={140} className="h-full">
              <FontSample
                src="/images/sistema-tipografico/sistema_tipografico_04.png"
                alt="Muestra de Komika Title aplicada en distintos tamaños de títulos y encabezados."
                width={976}
                height={1610}
                title="Komika Title"
                caption="Se utilizará para todos los títulos, encabezados y llamados a la acción principales. Su grosor y dinamismo aportan el impacto visual característico de las portadas de los cómics."
              />
            </Reveal>

            <Reveal direction="right" delay={200} className="h-full">
              <FontSample
                src="/images/sistema-tipografico/sistema_tipografico_05.png"
                alt="Muestra de Komika Title Kaps aplicada en diferentes niveles de texto sobre un fondo oscuro."
                width={375}
                height={585}
                title="Komika Title Kaps"
                caption="Se utilizará para el cuerpo de texto, las descripciones de los productos y la lectura general. Complementa a la tipografía principal y conserva la estética de los diálogos escritos a mano."
              />
            </Reveal>
          </div>
        </div>

        {/* Principios de legibilidad */}
        <div className="mt-16 grid gap-7 md:grid-cols-3">
          <Reveal direction="left" delay={60}>
            <PrincipleCard
              number="01"
              title="Jerarquía clara"
              colorClass="bg-yellow text-ink"
            >
              Los tamaños y pesos permitirán reconocer rápidamente qué es un
              título, un subtítulo, una acción o un texto informativo.
            </PrincipleCard>
          </Reveal>

          <Reveal direction="scale" delay={140}>
            <PrincipleCard
              number="02"
              title="Interlineado amplio"
              colorClass="bg-turquoise text-ink"
            >
              Los bloques tendrán suficiente espacio entre líneas para evitar
              que la personalidad de las letras dificulte la lectura.
            </PrincipleCard>
          </Reveal>

          <Reveal direction="right" delay={220}>
            <PrincipleCard
              number="03"
              title="Composición equilibrada"
              colorClass="bg-red text-paper"
            >
              Los textos se distribuirán en fragmentos breves, evitando
              párrafos excesivos y zonas visualmente sobrecargadas.
            </PrincipleCard>
          </Reveal>
        </div>

        {/* Conclusión */}
        <Reveal direction="scale" delay={180}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-card p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0"
            />

            <span
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-yellow/40"
            />

            <div className="relative grid items-center gap-7 lg:grid-cols-[auto_1fr]">
              <span className="text-comic flex h-24 w-24 rotate-[-6deg] items-center justify-center rounded-full border-4 border-ink bg-navy text-center text-xl leading-tight text-paper shadow-[6px_6px_0_0_var(--color-ink)]">
                ¡LEE!
              </span>

              <div>
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-orange px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Resultado final
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Una presentación expresiva, ordenada y coherente con la
                  identidad gráfica de TrendyCom.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  El sistema tipográfico permitirá conservar el tono amigable
                  y cercano de la marca, facilitar una jerarquía visual clara y
                  mantener una navegación cómoda y accesible para el usuario.
                  La página se sentirá como un cómic, pero siempre seguirá
                  siendo fácil de leer.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

type AccentName = "red" | "turquoise"

interface NarrativeCardProps {
  number: string
  title: string
  accent: AccentName
  children: ReactNode
}

function NarrativeCard({
  number,
  title,
  accent,
  children,
}: NarrativeCardProps) {
  const accentClass =
    accent === "red"
      ? "bg-red text-paper"
      : "bg-turquoise text-ink"

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

interface TypeRoleCardProps {
  number: string
  family: string
  role: string
  colorClass: string
  children: ReactNode
}

function TypeRoleCard({
  number,
  family,
  role,
  colorClass,
  children,
}: TypeRoleCardProps) {
  return (
    <article className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-6 sm:p-7">
      <span
        aria-hidden
        className="halftone pointer-events-none absolute inset-0"
      />

      <div className="relative flex flex-1 flex-col">
        <span
          className={`text-comic inline-flex h-12 w-12 items-center justify-center rounded-md border-2 border-ink text-lg shadow-[4px_4px_0_0_var(--color-ink)] ${colorClass}`}
        >
          {number}
        </span>

        <span className="text-comic mt-7 text-sm uppercase tracking-[0.18em] text-red">
          {role}
        </span>

        <h3 className="text-comic mt-3 text-3xl leading-tight text-navy">
          {family}
        </h3>

        <p className="mt-5 flex-1 text-pretty text-base leading-relaxed text-navy/80">
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
  accent: "yellow" | "red"
  href?: string
  linkLabel?: string
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
  href,
  linkLabel = "Visitar referencia",
}: ReferencePanelProps) {
  const headerClass =
    accent === "yellow"
      ? "bg-yellow text-ink"
      : "bg-red text-paper"

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

interface FontSampleProps {
  src: string
  alt: string
  width: number
  height: number
  title: string
  caption: string
  secondaryTitle?: string
  secondaryCaption?: string
}

function FontSample({
  src,
  alt,
  width,
  height,
  title,
  caption,
  secondaryTitle,
  secondaryCaption,
}: FontSampleProps) {
  return (
    <figure className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card">
      <div className="relative flex h-[380px] items-center justify-center bg-paper-soft p-5 sm:h-[460px] lg:h-[520px]">
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
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="relative z-10 h-full w-full object-contain"
        />
      </div>

      <figcaption className="flex flex-1 flex-col border-t-[3px] border-ink bg-card p-5 sm:p-6">
        <h4 className="text-comic text-2xl text-navy">
          {title}
        </h4>

        <p className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-base">
          {caption}
        </p>

        {secondaryTitle && secondaryCaption ? (
          <div className="mt-5 border-t-2 border-dashed border-ink/25 pt-5">
            <h4 className="text-comic text-2xl text-navy">
              {secondaryTitle}
            </h4>

            <p className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-base">
              {secondaryCaption}
            </p>
          </div>
        ) : null}
      </figcaption>
    </figure>
  )
}

interface PrincipleCardProps {
  number: string
  title: string
  colorClass: string
  children: ReactNode
}

function PrincipleCard({
  number,
  title,
  colorClass,
  children,
}: PrincipleCardProps) {
  return (
    <article className="relative flex h-full flex-col items-center text-center">
      <span
        className={`text-comic relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-ink text-xl shadow-[5px_5px_0_0_var(--color-ink)] ${colorClass}`}
      >
        {number}
      </span>

      <div className="comic-panel -mt-3 h-full rounded-2xl bg-card px-6 pb-6 pt-10">
        <h3 className="text-comic text-2xl text-navy">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-navy/80 sm:text-base">
          {children}
        </p>
      </div>
    </article>
  )
}