import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-red)"

const ORIGIN_FORCES = [
  {
    number: "01",
    title: "El ideal heroico",
    label: "Inspiración",
    description:
      "De Superman se toma la presencia luminosa del héroe clásico: una figura fuerte, confiable y cercana, capaz de representar esperanza y protección.",
    colorClass: "bg-red text-paper",
  },
  {
    number: "02",
    title: "La fuerza del vigilante",
    label: "Carácter",
    description:
      "De Batman se recoge la disciplina, la determinación y una silueta visual poderosa que aporta contraste, firmeza y personalidad.",
    colorClass: "bg-navy text-paper",
  },
  {
    number: "03",
    title: "La misión cotidiana",
    label: "Propósito",
    description:
      "Del repartidor nace la función real del personaje: acercarse a la comunidad, transportar pedidos y conectar la tienda con la vida cotidiana.",
    colorClass: "bg-turquoise text-ink",
  },
]

export function OrigenTrendyMan() {
  return (
    <section
      id="origen"
      data-section={9}
      aria-labelledby="origen-title"
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
        <span className="absolute -left-24 top-24 h-72 w-72 rounded-full halftone-red opacity-60" />
        <span className="absolute -right-32 top-[28%] h-96 w-96 rounded-full action-lines opacity-45" />
        <span className="absolute -left-28 bottom-20 h-80 w-80 rounded-full halftone-yellow opacity-70" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-red px-2 text-sm text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                09
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Identidad del personaje
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="origen-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              El Origen de TrendyMan
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span className="mt-5 block h-1.5 w-24 rounded-full bg-red" />
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
                La fórmula del héroe
              </span>

              <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                Dos grandes arquetipos del cómic y una misión cotidiana dieron
                vida al rostro oficial de TrendyCom.
              </h3>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                TrendyMan nació de combinar la fuerza simbólica de Superman y
                Batman con la figura cercana de un repartidor. La intención no
                era crear un mensajero convencional, sino un héroe propio que
                pudiera representar, acompañar y conectar a toda la comunidad.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Ecuación visual */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-9 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />

              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-center text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                La ecuación de origen
              </span>

              <span className="h-1 flex-1 rounded-full bg-yellow" />
            </div>
          </Reveal>

          <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <Reveal direction="left" delay={60} className="h-full">
              <OriginSourceCard
                src="/images/origen-trendyman/origen_trendyman_01_superman.png"
                alt="Referencia visual de Superman como arquetipo del héroe clásico."
                width={730}
                height={1146}
                eyebrow="Fuerza y esperanza"
                title="Superman"
                caption="Aporta la imagen del héroe noble, visible y confiable."
                accent="red"
              />
            </Reveal>

            <Reveal direction="scale" delay={100} className="self-center">
              <EquationSymbol symbol="+" />
            </Reveal>

            <Reveal direction="scale" delay={140} className="h-full">
              <OriginSourceCard
                src="/images/origen-trendyman/origen_trendyman_02_batman.png"
                alt="Referencia visual de Batman como arquetipo de disciplina y determinación."
                width={769}
                height={1146}
                eyebrow="Disciplina y presencia"
                title="Batman"
                caption="Aporta contraste, determinación y una silueta poderosa."
                accent="navy"
              />
            </Reveal>

            <Reveal direction="scale" delay={180} className="self-center">
              <EquationSymbol symbol="+" />
            </Reveal>

            <Reveal direction="right" delay={220} className="h-full">
              <OriginSourceCard
                src="/images/origen-trendyman/origen_trendyman_03_repartidor.png"
                alt="Referencia visual de un repartidor que representa cercanía, servicio y entrega."
                width={766}
                height={1149}
                eyebrow="Servicio y cercanía"
                title="El repartidor"
                caption="Aporta la misión cotidiana que conecta la marca con la comunidad."
                accent="turquoise"
              />
            </Reveal>
          </div>
        </div>

        {/* Tres fuerzas conceptuales */}
        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {ORIGIN_FORCES.map((force, index) => (
            <Reveal
              key={force.number}
              direction={index === 0 ? "left" : index === 2 ? "right" : "scale"}
              delay={60 + index * 80}
              className="h-full"
            >
              <ConceptCard {...force} />
            </Reveal>
          ))}
        </div>

        {/* Nacimiento del personaje */}
        <div className="mt-16 grid items-center gap-9 lg:grid-cols-12">
          <Reveal direction="left" delay={80} className="lg:col-span-5">
            <div className="relative mx-auto max-w-xl px-12 sm:px-16">
              <span
                aria-hidden
                className="absolute inset-x-16 bottom-2 h-16 rounded-[50%] bg-ink/25 blur-md"
              />

              <span
                aria-hidden
                className="halftone-yellow absolute left-3 top-28 h-44 w-44 rounded-full opacity-75 sm:h-48 sm:w-48"
              />

              <span
                aria-hidden
                className="action-lines absolute left-[36%] top-5 h-56 w-56 -translate-x-1/2 rounded-full opacity-35 sm:h-64 sm:w-64"
              />

              <Image
                src="/images/origen-trendyman/origen_trendyman_04_trendyman.png"
                alt="TrendyMan, superhéroe repartidor y mascota oficial de TrendyCom, sosteniendo una caja."
                width={1094}
                height={1641}
                quality={95}
                sizes="(max-width: 1024px) 88vw, 42vw"
                className="relative z-10 h-auto max-h-[840px] w-full object-contain drop-shadow-[10px_12px_0_rgba(0,0,0,0.24)]"
              />

              <span className="text-comic absolute left-0 top-[24%] z-20 whitespace-nowrap rotate-[-8deg] rounded-full border-2 border-ink bg-red px-4 py-2 text-sm text-paper shadow-[4px_4px_0_0_var(--color-ink)]">
                HÉROE
              </span>

              <span className="text-comic absolute left-1 top-[43%] z-20 whitespace-nowrap rotate-[-5deg] rounded-full border-2 border-ink bg-turquoise px-4 py-2 text-sm text-ink shadow-[4px_4px_0_0_var(--color-ink)]">
                GUÍA
              </span>

              <span className="text-comic absolute right-0 top-[23%] z-20 whitespace-nowrap rotate-[6deg] rounded-full border-2 border-ink bg-yellow px-4 py-2 text-sm text-ink shadow-[4px_4px_0_0_var(--color-ink)]">
                REPARTIDOR
              </span>
            </div>
          </Reveal>

          <Reveal direction="right" delay={140} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-card p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-orange px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  El nacimiento de una identidad propia
                </span>

                <h3 className="text-comic mt-7 text-balance text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
                  TrendyMan transforma las referencias en una misión original:
                  entregar tendencias.
                </h3>

                <p className="mt-6 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  La estética clásica de los superhéroes se fusionó con la
                  función de hacer entregas y acompañar pedidos. Así apareció un
                  superhéroe repartidor que evita la imagen tradicional del
                  mensajero y convierte el servicio en una aventura de marca.
                </p>

                <p className="mt-4 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  El resultado es un personaje que actúa como rostro, guía y
                  mascota oficial de TrendyCom. Su presencia une el mundo de las
                  historietas con la experiencia de compra de la comunidad.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <IdentityBadge title="Rostro" text="Representa la marca." color="bg-red text-paper" />
                  <IdentityBadge title="Guía" text="Acompaña el recorrido." color="bg-yellow text-ink" />
                  <IdentityBadge title="Mascota" text="Conecta con la comunidad." color="bg-turquoise text-ink" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ADN visual */}
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={80} className="lg:col-span-5">
            <figure className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card">
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-yellow px-4 py-3 text-ink">
                <span className="text-comic text-sm uppercase tracking-wide sm:text-base">
                  Estudio cromático de origen
                </span>

                <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
                  ADN visual
                </span>
              </figcaption>

              <div className="relative flex flex-1 items-center justify-center bg-paper-soft p-4 sm:p-5">
                <span
                  aria-hidden
                  className="halftone pointer-events-none absolute inset-0"
                />

                <Image
                  src="/images/origen-trendyman/origen_trendyman_05_adn_cromatico.png"
                  alt="Estudio inicial de los colores que dieron forma al traje de TrendyMan."
                  width={589}
                  height={883}
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="relative z-10 h-auto max-h-[660px] w-full rounded-lg border-2 border-ink object-contain"
                />
              </div>
            </figure>
          </Reveal>

          <Reveal direction="right" delay={140} className="lg:col-span-7">
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border-4 border-ink p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9"
              style={{ backgroundColor: "var(--color-navy)" }}
            >
              <span
                aria-hidden
                className="action-lines pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-15"
              />

              <div className="relative z-10 flex flex-1 flex-col">
                <span className="text-comic inline-flex w-fit rounded-full border-2 border-ink bg-red px-4 py-1 text-sm uppercase tracking-wider text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                  De la idea al traje
                </span>

                <h3 className="text-comic mt-7 text-balance text-3xl leading-tight text-yellow sm:text-4xl">
                  El personaje debía reconocerse incluso antes de pronunciar su
                  nombre.
                </h3>

                <p className="mt-5 text-pretty text-base leading-relaxed text-paper/90 sm:text-lg">
                  El azul petróleo construye la base heroica; el rojo
                  anaranjado aporta energía; el amarillo ilumina el emblema y
                  los detalles; y el negro define los contornos. Esta
                  combinación convirtió la función de repartidor en una figura
                  memorable y coherente con la identidad gráfica de TrendyCom.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <ColorMeaning
                    swatch="bg-navy"
                    title="Azul petróleo"
                    text="Confianza, estabilidad y presencia heroica."
                  />
                  <ColorMeaning
                    swatch="bg-red"
                    title="Rojo anaranjado"
                    text="Energía, acción y conexión emocional."
                  />
                  <ColorMeaning
                    swatch="bg-yellow"
                    title="Amarillo"
                    text="Optimismo, visibilidad y protagonismo."
                  />
                  <ColorMeaning
                    swatch="bg-ink"
                    title="Negro"
                    text="Contraste, contorno y fuerza gráfica."
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Manifiesto final */}
        <Reveal direction="scale" delay={180}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-red p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0 opacity-20"
            />

            <div className="relative grid items-center gap-7 lg:grid-cols-[auto_1fr]">
              <span className="text-comic flex h-28 w-28 rotate-[-7deg] items-center justify-center rounded-full border-4 border-ink bg-yellow text-center text-xl leading-tight text-ink shadow-[6px_6px_0_0_var(--color-ink)]">
                ¡MISIÓN
                <br />
                CUMPLIDA!
              </span>

              <div>
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-navy px-4 py-1 text-sm uppercase tracking-wider text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                  El corazón de TrendyCom
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  TrendyMan no solo entrega pedidos: entrega identidad,
                  comunidad y tendencias.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                  Su origen resume la propuesta completa de la marca: convertir
                  una compra cotidiana en una experiencia cercana al universo
                  del cómic. Es el personaje que recibe, orienta, acompaña y
                  conecta cada colección con las personas que forman parte de
                  TrendyCom.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

interface OriginSourceCardProps {
  src: string
  alt: string
  width: number
  height: number
  eyebrow: string
  title: string
  caption: string
  accent: "red" | "navy" | "turquoise"
}

function OriginSourceCard({
  src,
  alt,
  width,
  height,
  eyebrow,
  title,
  caption,
  accent,
}: OriginSourceCardProps) {
  const accentClass = {
    red: "bg-red text-paper",
    navy: "bg-navy text-paper",
    turquoise: "bg-turquoise text-ink",
  }[accent]

  return (
    <figure className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card">
      <div className="relative flex h-[390px] items-center justify-center overflow-hidden bg-paper-soft p-3 sm:h-[460px]">
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
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="relative z-10 h-full w-full rounded-lg border-2 border-ink object-cover object-top"
        />
      </div>

      <figcaption className="flex flex-1 flex-col border-t-[3px] border-ink p-5">
        <span
          className={`text-comic inline-flex w-fit rounded-full border-2 border-ink px-3 py-1 text-xs uppercase tracking-wide shadow-[3px_3px_0_0_var(--color-ink)] ${accentClass}`}
        >
          {eyebrow}
        </span>

        <h3 className="text-comic mt-5 text-3xl leading-tight text-navy">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-base">
          {caption}
        </p>
      </figcaption>
    </figure>
  )
}

function EquationSymbol({ symbol }: { symbol: "+" | "=" }) {
  return (
    <span className="text-comic mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-ink bg-yellow text-3xl text-ink shadow-[5px_5px_0_0_var(--color-ink)]">
      {symbol}
    </span>
  )
}

interface ConceptCardProps {
  number: string
  title: string
  label: string
  description: string
  colorClass: string
}

function ConceptCard({
  number,
  title,
  label,
  description,
  colorClass,
}: ConceptCardProps) {
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

interface IdentityBadgeProps {
  title: string
  text: string
  color: string
}

function IdentityBadge({ title, text, color }: IdentityBadgeProps) {
  return (
    <div className="rounded-xl border-2 border-ink bg-paper-soft p-3 shadow-[3px_3px_0_0_var(--color-ink)]">
      <span
        className={`text-comic inline-flex rounded-full border-2 border-ink px-3 py-1 text-xs uppercase tracking-wide ${color}`}
      >
        {title}
      </span>

      <p className="mt-3 text-sm leading-relaxed text-navy/75">{text}</p>
    </div>
  )
}

interface ColorMeaningProps {
  swatch: string
  title: string
  text: string
}

function ColorMeaning({ swatch, title, text }: ColorMeaningProps) {
  return (
    <div className="rounded-xl border-2 border-paper/40 bg-ink/25 p-4">
      <div className="flex items-center gap-3">
        <span
          className={`h-10 w-10 shrink-0 rounded-full border-2 border-paper ${swatch}`}
        />

        <div>
          <h4 className="text-comic text-xl text-paper">{title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-paper/85">{text}</p>
        </div>
      </div>
    </div>
  )
}
