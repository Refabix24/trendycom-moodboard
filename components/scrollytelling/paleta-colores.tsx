import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-turquoise)"

const MAIN_COLORS = [
  {
    name: "Rojo coral",
    hex: "#E04338",
    role: "Energía y llamados de atención",
    textClass: "text-paper",
  },
  {
    name: "Turquesa",
    hex: "#329F9E",
    role: "Frescura y equilibrio visual",
    textClass: "text-ink",
  },
  {
    name: "Amarillo",
    hex: "#F6C739",
    role: "Optimismo y elementos protagonistas",
    textClass: "text-ink",
  },
]

const SECONDARY_COLORS = [
  {
    name: "Azul marino",
    hex: "#011121",
    role: "Profundidad y fondos oscuros",
    textClass: "text-paper",
  },
  {
    name: "Naranja",
    hex: "#FE9409",
    role: "Movimiento y acentos de apoyo",
    textClass: "text-ink",
  },
  {
    name: "Negro",
    hex: "#000000",
    role: "Contornos, contraste y estructura",
    textClass: "text-paper",
  },
]

const NEUTRAL_COLORS = [
  {
    name: "Gris medio",
    hex: "#D9D9D9",
    role: "Separadores y superficies suaves",
  },
  {
    name: "Gris claro",
    hex: "#E6E6E6",
    role: "Fondos secundarios",
  },
  {
    name: "Gris muy claro",
    hex: "#EDEDED",
    role: "Lectura y espacios de descanso",
  },
]

export function PaletaColores() {
  return (
    <section
      id="paleta"
      data-section={6}
      aria-labelledby="paleta-title"
      className="relative w-full scroll-mt-4 overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Identificador lateral */}
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
        <span className="absolute -right-24 top-20 h-80 w-80 rounded-full halftone-yellow opacity-70" />
        <span className="absolute -left-28 top-[42%] h-72 w-72 rounded-full action-lines opacity-50" />
        <span className="absolute -right-24 bottom-32 h-72 w-72 rounded-full halftone-red opacity-50" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-turquoise px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                06
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Identidad cromática
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="paleta-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Paleta de Colores
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span className="mt-5 block h-1.5 w-24 rounded-full bg-turquoise" />
          </Reveal>
        </header>

        {/* Origen de la paleta */}
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <Reveal
            direction="left"
            delay={80}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-navy p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
              <span
                aria-hidden
                className="action-lines pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Todo nace del héroe
                </span>

                <h3 className="text-comic mt-7 text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                  La identidad cromática de TrendyCom nace directamente del
                  traje de TrendyMan.
                </h3>

                <p className="mt-6 text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                  La decisión para elegir los colores fue clara: la mascota
                  debía impregnar toda la página con su energía, personalidad
                  y estética de historieta.
                </p>

                <p className="mt-4 text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                  El rojo, el turquesa y el amarillo fueron extraídos de sus
                  elementos más reconocibles. Estos colores serán los
                  protagonistas de botones, títulos, llamados de atención y
                  componentes importantes.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={160}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <span
                aria-hidden
                className="absolute inset-x-8 bottom-3 h-16 rounded-[50%] bg-ink/25 blur-md"
              />

              <span
                aria-hidden
                className="halftone-red absolute -right-8 top-10 h-40 w-40 rounded-full"
              />

              <Image
                src="/images/paleta-colores/paletas_de_color_02.png"
                alt="TrendyMan, mascota de TrendyCom, con traje azul, rojo, amarillo y detalles anaranjados."
                width={1121}
                height={1682}
                priority={false}
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="relative z-10 h-auto max-h-[720px] w-full object-contain drop-shadow-[10px_12px_0_rgba(0,0,0,0.22)]"
              />
            </div>
          </Reveal>
        </div>

        {/* Colores principales */}
        <div className="mt-16">
          <Reveal direction="left">
            <PaletteHeading
              number="01"
              title="Colores principales"
              description="Son los tonos protagonistas de la identidad. Aportan energía, reconocimiento y vida a los elementos más importantes."
              colorClass="bg-red text-paper"
            />
          </Reveal>

          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {MAIN_COLORS.map((color, index) => (
              <Reveal
                key={color.hex}
                direction={
                  index === 0
                    ? "left"
                    : index === 1
                      ? "scale"
                      : "right"
                }
                delay={80 + index * 80}
              >
                <MainColorCard {...color} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Frase intermedia */}
        <Reveal direction="scale" delay={100}>
          <div className="relative mt-14 overflow-hidden rounded-2xl border-4 border-ink bg-yellow p-7 text-ink shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0"
            />

            <p className="text-comic relative text-balance text-center text-3xl leading-tight sm:text-4xl">
              Colores que llaman la atención sin convertir toda la página en
              una explosión permanente.
            </p>
          </div>
        </Reveal>

        {/* Colores secundarios */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12">
          <Reveal
            direction="left"
            delay={60}
            className="lg:col-span-4"
          >
            <NarrativeCard
              number="02"
              title="La base oscura"
              accent="navy"
            >
              Una pantalla llena de colores muy vibrantes puede resultar
              agotadora. Por eso, el azul marino, el negro y el naranja forman
              una base sólida que aporta contraste, profundidad y equilibrio.
            </NarrativeCard>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            {SECONDARY_COLORS.map((color, index) => (
              <Reveal
                key={color.hex}
                direction="scale"
                delay={100 + index * 70}
              >
                <CompactColorCard {...color} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Neutros */}
        <div className="mt-16">
          <Reveal direction="right">
            <PaletteHeading
              number="03"
              title="Espacios para respirar"
              description="Los tonos neutros actuarán como el lienzo de la tienda y permitirán que la vista del usuario descanse durante la lectura."
              colorClass="bg-turquoise text-ink"
            />
          </Reveal>

          <div className="mt-8 rounded-2xl border-4 border-ink bg-card p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {NEUTRAL_COLORS.map((color, index) => (
                <Reveal
                  key={color.hex}
                  direction={
                    index === 0
                      ? "left"
                      : index === 1
                        ? "scale"
                        : "right"
                  }
                  delay={100 + index * 80}
                >
                  <NeutralColorCard {...color} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Aplicación */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <Reveal
            direction="left"
            delay={80}
            className="lg:col-span-5"
          >
            <NarrativeCard
              number="04"
              title="El lienzo de la tienda"
              accent="orange"
            >
              Los tonos suaves y oscuros se utilizarán en fondos, tarjetas,
              secciones de lectura y espacios amplios, para que los colores
              protagonistas puedan destacar sin saturar toda la interfaz.
            </NarrativeCard>
          </Reveal>

          <Reveal
            direction="right"
            delay={140}
            className="lg:col-span-7"
          >
            <ApplicationPreview />
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
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red/20"
            />

            <div className="relative grid items-center gap-7 lg:grid-cols-[auto_1fr]">
              <span className="text-comic flex h-24 w-24 rotate-[-6deg] items-center justify-center rounded-full border-4 border-ink bg-red text-center text-xl leading-tight text-paper shadow-[6px_6px_0_0_var(--color-ink)]">
                ¡BALANCE!
              </span>

              <div>
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Resultado final
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Una identidad vibrante como TrendyMan, pero cómoda para
                  navegar, leer y comprar.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  La combinación permite conservar la fuerza visual del héroe
                  sin sacrificar la comodidad del usuario. Los colores intensos
                  comunican personalidad y los tonos oscuros y neutros
                  mantienen el equilibrio de toda la experiencia.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

interface PaletteHeadingProps {
  number: string
  title: string
  description: string
  colorClass: string
}

function PaletteHeading({
  number,
  title,
  description,
  colorClass,
}: PaletteHeadingProps) {
  return (
    <div className="grid items-start gap-5 sm:grid-cols-[auto_1fr]">
      <span
        className={`text-comic inline-flex h-14 min-w-14 items-center justify-center rounded-md border-3 border-ink px-3 text-xl shadow-[4px_4px_0_0_var(--color-ink)] ${colorClass}`}
      >
        {number}
      </span>

      <div>
        <h3 className="text-comic text-3xl leading-tight text-navy sm:text-4xl">
          {title}
        </h3>

        <p className="mt-3 max-w-3xl text-pretty text-base leading-relaxed text-navy/75 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

interface ColorCardProps {
  name: string
  hex: string
  role: string
  textClass: string
}

function MainColorCard({
  name,
  hex,
  role,
  textClass,
}: ColorCardProps) {
  return (
    <article className="comic-panel group relative h-full overflow-hidden rounded-2xl bg-card p-4">
      <div
        className={`relative flex min-h-64 flex-col justify-between overflow-hidden rounded-xl border-3 border-ink p-6 transition-transform duration-300 group-hover:-translate-y-1 ${textClass}`}
        style={{ backgroundColor: hex }}
      >
        <span
          aria-hidden
          className="halftone pointer-events-none absolute inset-0 opacity-25"
        />

        <span className="text-comic relative text-sm uppercase tracking-widest">
          Color protagonista
        </span>

        <div className="relative">
          <h4 className="text-comic text-3xl leading-tight">
            {name}
          </h4>

          <p className="mt-2 text-sm font-semibold opacity-80">
            {role}
          </p>
        </div>

        <code className="text-comic relative mt-7 w-fit rounded-full border-2 border-current bg-card/90 px-4 py-2 text-sm text-ink">
          {hex}
        </code>
      </div>
    </article>
  )
}

function CompactColorCard({
  name,
  hex,
  role,
  textClass,
}: ColorCardProps) {
  return (
    <article className="comic-panel flex h-full flex-col overflow-hidden rounded-2xl bg-card p-4">
      <div
        className={`flex min-h-40 items-end rounded-xl border-3 border-ink p-5 ${textClass}`}
        style={{ backgroundColor: hex }}
      >
        <code className="text-comic rounded-full border-2 border-current bg-card/90 px-3 py-1 text-xs text-ink">
          {hex}
        </code>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <h4 className="text-comic text-2xl text-navy">
          {name}
        </h4>

        <p className="mt-2 text-sm leading-relaxed text-navy/75">
          {role}
        </p>
      </div>
    </article>
  )
}

interface NeutralColorCardProps {
  name: string
  hex: string
  role: string
}

function NeutralColorCard({
  name,
  hex,
  role,
}: NeutralColorCardProps) {
  return (
    <article className="rounded-2xl border-3 border-ink bg-paper-soft p-4 shadow-[5px_5px_0_0_var(--color-ink)]">
      <div
        className="aspect-[4/3] rounded-xl border-3 border-ink"
        style={{ backgroundColor: hex }}
      />

      <h4 className="text-comic mt-5 text-2xl text-navy">
        {name}
      </h4>

      <code className="mt-2 inline-block text-sm font-bold text-navy">
        {hex}
      </code>

      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        {role}
      </p>
    </article>
  )
}

type NarrativeAccent = "navy" | "orange"

interface NarrativeCardProps {
  number: string
  title: string
  accent: NarrativeAccent
  children: ReactNode
}

function NarrativeCard({
  number,
  title,
  accent,
  children,
}: NarrativeCardProps) {
  const accentClass =
    accent === "navy"
      ? "bg-navy text-paper"
      : "bg-orange text-ink"

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

function ApplicationPreview() {
  return (
    <div className="comic-panel relative overflow-hidden rounded-2xl bg-navy p-5 sm:p-7">
      <span
        aria-hidden
        className="action-lines pointer-events-none absolute -right-20 -top-20 h-64 w-64 opacity-20"
      />

      <div className="relative overflow-hidden rounded-xl border-3 border-ink bg-paper-soft">
        <div className="flex items-center justify-between border-b-3 border-ink bg-navy px-5 py-4">
          <span className="text-comic text-xl text-yellow">
            TrendyCom
          </span>

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full border border-paper bg-red" />
            <span className="h-3 w-3 rounded-full border border-paper bg-turquoise" />
            <span className="h-3 w-3 rounded-full border border-paper bg-yellow" />
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-3">
          <div className="rounded-lg border-2 border-ink bg-card p-3">
            <div className="aspect-square rounded-md bg-red" />
            <div className="mt-3 h-3 rounded-full bg-navy/20" />
            <div className="mt-2 h-3 w-2/3 rounded-full bg-navy/10" />
          </div>

          <div className="rounded-lg border-2 border-ink bg-card p-3">
            <div className="aspect-square rounded-md bg-turquoise" />
            <div className="mt-3 h-3 rounded-full bg-navy/20" />
            <div className="mt-2 h-3 w-2/3 rounded-full bg-navy/10" />
          </div>

          <div className="rounded-lg border-2 border-ink bg-card p-3">
            <div className="aspect-square rounded-md bg-yellow" />
            <div className="mt-3 h-3 rounded-full bg-navy/20" />
            <div className="mt-2 h-3 w-2/3 rounded-full bg-navy/10" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t-3 border-ink bg-[#EDEDED] px-5 py-4">
          <span className="text-sm font-bold text-navy">
            Fondo neutro para descansar la vista
          </span>

          <span className="text-comic rounded-full border-2 border-ink bg-orange px-4 py-2 text-xs text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
            Explorar
          </span>
        </div>
      </div>
    </div>
  )
}