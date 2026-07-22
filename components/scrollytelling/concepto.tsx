import { Reveal } from "./reveal"

const ACCENT = "var(--color-yellow)"

/**
 * Section 02 — "Concepto e Inspiración".
 *
 * Editorial comic-page composition built around the three provided reference
 * screenshots (Comics Etc. vertical, DC Comics horizontal, Marvel Unlimited
 * horizontal). The four mandatory text blocks are distributed around the
 * images without covering them.
 *
 * DOM order matches the required MOBILE order:
 *   título → bloque 1 → Comics Etc. → bloque 2 → DC Comics → bloque 3 →
 *   Marvel Unlimited → bloque 4
 * On desktop, each item is repositioned via explicit 12-column grid placement
 * to form the editorial layout (Comics Etc. left, DC top-right, Marvel
 * bottom-right, text woven around).
 *
 * The section keeps the same id / data-section / aria attributes as the
 * standard shell so the chapter-2 indicator activates correctly.
 */
export function Concepto() {
  return (
    <section
      id="concepto"
      data-section={2}
      aria-labelledby="concepto-title"
      className="relative flex min-h-screen w-full scroll-mt-4 flex-col justify-center overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Decorative accent bar (matches the standard shell) */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-2 sm:w-3"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Header: number 02 + title + accent underline */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span
                className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]"
                style={{ backgroundColor: ACCENT }}
              >
                02
              </span>
              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Capítulo 02
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="concepto-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Concepto e Inspiración
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

        {/* Editorial composition */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:auto-rows-auto lg:gap-7">
          {/* Bloque 1 — top-right on desktop */}
          <Reveal
            className="lg:col-start-6 lg:col-end-13 lg:row-start-1"
            delay={40}
          >
            <TextBlock n="01">
              El concepto central de TrendyCom surge al identificar una
              oportunidad clara en el mercado: aunque la moda geek es muy
              popular, la mayoría de las tiendas se limitan a reciclar logotipos
              clásicos o diseños nostálgicos, dejando de lado los lanzamientos
              más recientes del cine, las series y los videojuegos.
            </TextBlock>
          </Reveal>

          {/* Comics Etc. — tall feature panel, left column on desktop */}
          <Reveal
            direction="left"
            className="lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-span-2"
          >
            <ReferencePanel
              src="/images/ref-comicsetc.png"
              alt="Diseño web de la tienda de cómics Comics Etc., con banners de superhéroes, un carrusel de portadas y una sección del universo DC New 52."
              label="Referente · Comics Etc."
              caption="Tienda geek con estética de historieta: paneles, viñetas y personajes integrados en la interfaz."
              badge="Comunidad & Retail"
            />
          </Reveal>

          {/* Bloque 2 — mid-left on desktop */}
          <Reveal
            className="lg:col-start-1 lg:col-end-6 lg:row-start-3"
            delay={40}
          >
            <TextBlock n="02">
              De esta necesidad de ofrecer lo último en la cultura pop nace el
              nombre del proyecto, enfocado enteramente en la tendencia.
            </TextBlock>
          </Reveal>

          {/* DC Comics — top-right image */}
          <Reveal
            direction="right"
            className="lg:col-start-6 lg:col-end-13 lg:row-start-2"
          >
            <ReferencePanel
              src="/images/ref-dccomics.webp"
              alt="Página principal del sitio oficial de DC Comics, con un gran banner de First Look: Suicide Squad Rebirth y paneles laterales de contenido."
              label="Referente · DC Comics"
              caption="Plataforma oficial: jerarquía visual potente, banners cinematográficos y navegación editorial clara."
              badge="Plataforma oficial"
            />
          </Reveal>

          {/* Bloque 3 — mid-right on desktop */}
          <Reveal
            className="lg:col-start-6 lg:col-end-13 lg:row-start-3"
            delay={40}
          >
            <TextBlock n="03">
              Inspirados por la vibrante comunidad geek en Colombia, el objetivo
              es crear una marca que transmita energía, entretenimiento y
              dinamismo juvenil.
            </TextBlock>
          </Reveal>

          {/* Marvel Unlimited — bottom-right image */}
          <Reveal
            direction="scale"
            className="lg:col-start-6 lg:col-end-13 lg:row-start-4"
          >
            <ReferencePanel
              src="/images/ref-marvel-unlimited.png"
              alt="Sección New on Marvel Unlimited del sitio oficial de Marvel, con portadas de cómics recientes desplegadas sobre un fondo estelar."
              label="Referente · Marvel Unlimited"
              caption="Escaparate de novedades: enfoque total en los lanzamientos más recientes y en la tendencia."
              badge="Novedades & Tendencia"
            />
          </Reveal>

          {/* Bloque 4 — conclusión, bottom-left on desktop (highlighted) */}
          <Reveal
            className="lg:col-start-1 lg:col-end-6 lg:row-start-4"
            delay={40}
          >
            <TextBlock n="04" highlight>
              Para lograrlo, la dirección visual toma como grandes referentes
              como las plataformas oficiales de Marvel y DC Comics, buscando
              construir un entorno digital impactante y creativo donde cada
              interacción celebre la cultura geek y haga sentir al usuario dentro
              de su propia historieta.
            </TextBlock>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** White comic text panel with a yellow numbered caption tab. */
function TextBlock({
  n,
  children,
  highlight = false,
}: {
  n: string
  children: React.ReactNode
  highlight?: boolean
}) {
  return (
    <div
      className={`comic-panel relative flex h-full flex-col gap-4 rounded-xl p-6 sm:p-7 ${
        highlight ? "bg-navy" : "bg-card"
      }`}
    >
      {/* Numbered cartela (yellow) */}
      <span className="text-comic inline-flex h-10 w-10 items-center justify-center self-start rounded-md border-2 border-ink bg-yellow text-lg text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
        {n}
      </span>
      <p
        className={`text-pretty text-base leading-relaxed sm:text-lg ${
          highlight ? "text-paper" : "text-navy"
        }`}
      >
        {children}
      </p>
    </div>
  )
}

/**
 * Image reference panel: shows the screenshot at full proportions (no crop)
 * inside a comic frame, with a yellow label cartela and a short caption
 * explaining why it works as a reference.
 */
function ReferencePanel({
  src,
  alt,
  label,
  caption,
  badge,
}: {
  src: string
  alt: string
  label: string
  caption: string
  badge: string
}) {
  return (
    <figure className="comic-panel relative flex h-full flex-col overflow-hidden rounded-xl bg-card">
      {/* Yellow label cartela */}
      <figcaption className="flex items-center justify-between gap-3 border-b-[3px] border-ink bg-yellow px-4 py-2">
        <span className="text-comic text-sm uppercase tracking-wide text-ink sm:text-base">
          {label}
        </span>
        <span className="rounded-full border-2 border-ink bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy">
          {badge}
        </span>
      </figcaption>

      {/* Image — proportional, never cropped */}
      <div className="relative flex flex-1 items-center justify-center bg-paper-soft p-3">
        <span aria-hidden className="halftone pointer-events-none absolute inset-0" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="relative z-10 h-auto max-h-[520px] w-full rounded-md border-2 border-ink object-contain"
        />
      </div>

      {/* Caption explaining the reference */}
      <p className="border-t-2 border-dashed border-ink/30 bg-card px-4 py-3 text-sm leading-relaxed text-navy/80">
        {caption}
      </p>
    </figure>
  )
}
