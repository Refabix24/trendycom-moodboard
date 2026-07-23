import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-turquoise)"

export function ReferentesComerciales() {
  return (
    <section
      id="app-referentes"
      data-section={11}
      aria-labelledby="referentes-comerciales-title"
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
        <span className="absolute -left-24 top-28 h-72 w-72 rounded-full halftone-yellow opacity-70" />
        <span className="absolute -right-32 top-[31%] h-96 w-96 rounded-full action-lines opacity-45" />
        <span className="absolute -left-24 bottom-32 h-80 w-80 rounded-full halftone-red opacity-50" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-turquoise px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                11
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Aplicación de la identidad
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="referentes-comerciales-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Referentes Comerciales
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span className="mt-5 block h-1.5 w-24 rounded-full bg-turquoise" />
          </Reveal>
        </header>

        <Reveal direction="scale" delay={180}>
          <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-navy p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="action-lines pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20"
            />

            <div className="relative">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                Exhibir también es narrar
              </span>

              <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                En TrendyCom, cada producto debe sentirse como el protagonista
                de su propia viñeta.
              </h3>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                Para definir la presentación del catálogo se estudiaron
                plataformas comerciales orientales que integran fotografías,
                ilustraciones y recursos de historieta en una sola experiencia.
                En estos referentes, los productos no aparecen aislados:
                participan dentro de una composición que explica, sorprende y
                conduce hacia la compra.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <div className="mb-9 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />
              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-center text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                La fórmula comercial de TrendyCom
              </span>
              <span className="h-1 flex-1 rounded-full bg-yellow" />
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal direction="left" delay={70}>
              <EditorialPrinciple
                eyebrow="Concepto híbrido"
                title="Fotografía real dentro de una narrativa gráfica"
                colorClass="bg-red text-paper"
              >
                <p>
                  Los productos conservarán fotografías reales, claras y
                  reconocibles. Alrededor de ellas aparecerán fondos
                  ilustrados, viñetas, cartelas, tramas y formas de impacto
                  inspiradas en el Pop Art.
                </p>

                <p>
                  La intención es que cada camiseta tenga contexto y
                  personalidad. En lugar de aparecer como un objeto aislado,
                  formará parte de una pequeña historia que conduzca la mirada
                  desde la colección o la tendencia hasta el precio y la acción
                  de compra.
                </p>
              </EditorialPrinciple>
            </Reveal>

            <Reveal direction="right" delay={140}>
              <EditorialPrinciple
                eyebrow="Interacción y usabilidad"
                title="TrendyMan guía la experiencia sin competir con el producto"
                colorClass="bg-turquoise text-ink"
              >
                <p>
                  TrendyMan tendrá un papel activo dentro del catálogo: podrá
                  presentar novedades, señalar promociones y acompañar
                  visualmente camisetas y accesorios como anfitrión de la
                  tienda.
                </p>

                <p>
                  Esta expresividad no reemplazará la jerarquía comercial.
                  Precios, beneficios, descripciones y botones permanecerán
                  ordenados, visibles y fáciles de comparar. La narrativa debe
                  enriquecer la compra, nunca dificultarla.
                </p>
              </EditorialPrinciple>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={70} className="lg:col-span-7">
            <ReferencePanel
              src="/images/referentes-comerciales/referente_comercial_01_red_lobster.png"
              alt="Página comercial de Red Lobster organizada como una historieta con fotografías, entrevistas y paneles de colores."
              width={564}
              height={1204}
              label="Referente 01 · Red Lobster"
              badge="Historia + producto"
              caption="La pieza combina fotografía real, entrevistas, comida y bloques editoriales dentro de una secuencia de viñetas. La información comercial se siente parte de una historia y no un listado independiente."
              accent="red"
              imageHeightClass="max-h-[900px]"
            />
          </Reveal>

          <div className="grid gap-7 lg:col-span-5">
            <Reveal direction="right" delay={120}>
              <NarrativeCard
                number="01"
                title="La fotografía conserva la credibilidad"
                accent="yellow"
              >
                El producto real sigue siendo reconocible y protagonista. El
                lenguaje de cómic se utiliza para organizarlo, contextualizarlo
                y darle personalidad, no para ocultarlo.
              </NarrativeCard>
            </Reveal>

            <Reveal direction="right" delay={190}>
              <NarrativeCard
                number="02"
                title="La secuencia mantiene el interés"
                accent="turquoise"
              >
                Cada panel propone una nueva lectura: primero presenta, después
                explica y finalmente conduce hacia una decisión. Esta progresión
                inspira el recorrido comercial de TrendyCom.
              </NarrativeCard>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-8 xl:grid-cols-12">
          <Reveal direction="left" delay={80} className="xl:col-span-5">
            <div className="comic-panel relative overflow-hidden rounded-2xl bg-card p-7 sm:p-8">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-red px-4 py-1 text-sm uppercase tracking-wider text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                  Mascota dentro del catálogo
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Un personaje puede convertir una lista de productos en una
                  experiencia guiada.
                </h3>

                <p className="mt-5 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  El referente APPo demuestra cómo una mascota puede presentar
                  promociones, dividir categorías y acompañar al usuario durante
                  una página extensa. En TrendyCom, TrendyMan cumplirá esta
                  función como anfitrión y guía visual.
                </p>

                <p className="mt-6 border-l-4 border-yellow pl-5 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  En la práctica, TrendyMan podrá <strong>presentar</strong>{" "}
                  colecciones y novedades, pero también <strong>señalar</strong>{" "}
                  beneficios, promociones y acciones importantes. De esta
                  manera, su presencia tendrá una función narrativa y no será
                  únicamente decorativa.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={140} className="xl:col-span-7">
            <ReferencePanel
              src="/images/referentes-comerciales/referente_comercial_02_appo.png"
              alt="Página comercial APPo con un personaje ilustrado que acompaña productos, promociones, cupones y llamados a la acción."
              width={627}
              height={2048}
              label="Referente 02 · APPo"
              badge="Mascota activa"
              caption="La mascota aparece en distintos momentos de la página para presentar productos, comunicar beneficios y mantener una continuidad visual entre secciones."
              accent="yellow"
              imageHeightClass="max-h-[1100px]"
            />
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal direction="scale">
            <ReferencePanel
              src="/images/referentes-comerciales/referente_comercial_03_dena.png"
              alt="Landing comercial DeNA con estética Pop Art, paneles de cómic, personajes ilustrados y una sección de compra."
              width={653}
              height={2048}
              label="Referente 03 · DeNA"
              badge="Página narrativa completa"
              caption="La página transforma una demostración de producto en una narración visual de principio a fin: plantea un problema, presenta una solución, muestra beneficios, incluye testimonios y finalmente conduce al producto."
              accent="turquoise"
              imageHeightClass="max-h-[1180px]"
            />
          </Reveal>

          <Reveal direction="scale" delay={120}>
            <div className="comic-panel relative mt-8 overflow-hidden rounded-2xl bg-card p-7 sm:p-9">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Un recorrido comercial completo
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  La página primero despierta curiosidad, después demuestra el
                  valor del producto y finalmente conduce hacia la acción.
                </h3>

                <div className="mt-7 grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="text-comic text-2xl text-red">Plantear</h4>
                    <p className="mt-3 text-base leading-relaxed text-navy/75">
                      La apertura presenta una situación o necesidad que invita
                      al usuario a seguir explorando.
                    </p>
                  </div>

                  <div className="border-t-2 border-dashed border-ink/25 pt-6 md:border-l-2 md:border-t-0 md:pl-6 md:pt-0">
                    <h4 className="text-comic text-2xl text-orange">
                      Demostrar
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-navy/75">
                      Las viñetas explican beneficios, usos y diferencias de
                      forma visual y fácil de comprender.
                    </p>
                  </div>

                  <div className="border-t-2 border-dashed border-ink/25 pt-6 md:border-l-2 md:border-t-0 md:pl-6 md:pt-0">
                    <h4 className="text-comic text-2xl text-turquoise">
                      Convertir
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-navy/75">
                      El recorrido termina en información comercial clara y en
                      una acción concreta para continuar o comprar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-8 xl:grid-cols-2">
          <Reveal direction="left" delay={80} className="h-full">
            <ReferencePanel
              src="/images/referentes-comerciales/referente_comercial_04_hamburguesas.png"
              alt="Publicidad de hamburguesas organizada con fotografías reales y personajes ilustrados en paneles de cómic."
              width={399}
              height={686}
              label="Referente 04 · Exhibición directa"
              badge="Producto real"
              caption="Las fotografías ocupan el centro de cada panel, mientras los personajes, colores y líneas de acción aportan contexto y energía. El producto nunca pierde protagonismo."
              accent="orange"
              imageHeightClass="max-h-[690px]"
            />
          </Reveal>

          <Reveal direction="right" delay={140} className="h-full">
            <ReferencePanel
              src="/images/referentes-comerciales/referente_comercial_05_pickles.png"
              alt="Página promocional de un producto alimenticio con estética retro, personajes Pop Art, globos de diálogo y tarjetas informativas."
              width={633}
              height={1085}
              label="Referente 05 · Personalidad editorial"
              badge="Promoción + explicación"
              caption="El producto se presenta con una identidad visual completa: personajes, recetas, beneficios, diálogos y llamados. Esta mezcla demuestra que vender e informar pueden formar parte de la misma composición."
              accent="red"
              imageHeightClass="max-h-[760px]"
            />
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-red p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0 opacity-20"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  De la referencia a la tienda
                </span>

                <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  TrendyCom aplicará estas ideas sin copiar sus formas:
                  construirá su propia vitrina de cómic.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                  La fotografía real de las camisetas se combinará con la paleta
                  oficial, los contornos negros, las tramas y la presencia de
                  TrendyMan. El objetivo es que el usuario disfrute el recorrido
                  visual y, al mismo tiempo, encuentre precio, colección,
                  descripción y acción de compra con total claridad.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12">
            <Reveal direction="left" delay={80} className="lg:col-span-8">
              <TrendyComCatalogPreview />
            </Reveal>

            <Reveal direction="right" delay={140} className="lg:col-span-4">
              <div className="grid h-full gap-6">
                <NarrativeCard
                  number="03"
                  title="La camiseta es la protagonista"
                  accent="yellow"
                >
                  El marco, la ilustración y la mascota apoyan la presentación,
                  pero nunca compiten con la imagen, el diseño ni la información
                  del producto.
                </NarrativeCard>

                <NarrativeCard
                  number="04"
                  title="La acción siempre es visible"
                  accent="red"
                >
                  Los llamados a explorar, personalizar o comprar utilizarán
                  botones claramente diferenciados y ubicados al final de cada
                  pequeño recorrido visual.
                </NarrativeCard>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal direction="scale" delay={180}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-card p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0"
            />

            <div className="relative grid items-center gap-7 lg:grid-cols-[auto_1fr]">
              <span className="text-comic flex h-24 w-24 rotate-[-7deg] items-center justify-center rounded-full border-4 border-ink bg-turquoise text-center text-xl leading-tight text-ink shadow-[6px_6px_0_0_var(--color-ink)]">
                ¡MIRA!
              </span>

              <div>
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-orange px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Principio de aplicación
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Una exhibición dinámica, divertida e inmersiva que mantiene el
                  producto en el centro de la experiencia.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  Los referentes comerciales permiten entender cómo la estética
                  de cómic puede participar en una tienda real. TrendyCom toma
                  esa enseñanza para diseñar un catálogo propio, coherente con
                  su identidad y guiado por TrendyMan, sin sacrificar orden,
                  lectura ni facilidad de compra.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

interface EditorialPrincipleProps {
  eyebrow: string
  title: string
  colorClass: string
  children: ReactNode
}

function EditorialPrinciple({
  eyebrow,
  title,
  colorClass,
  children,
}: EditorialPrincipleProps) {
  return (
    <article className="comic-panel relative h-full overflow-hidden rounded-2xl bg-card p-7 sm:p-9">
      <span
        aria-hidden
        className="halftone pointer-events-none absolute inset-0"
      />

      <div className="relative">
        <span
          className={`text-comic inline-flex rounded-full border-2 border-ink px-4 py-1 text-sm uppercase tracking-wider shadow-[3px_3px_0_0_var(--color-ink)] ${colorClass}`}
        >
          {eyebrow}
        </span>

        <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
          {title}
        </h3>

        <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
          {children}
        </div>
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
  accent: "red" | "yellow" | "turquoise" | "orange"
  imageHeightClass: string
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
  imageHeightClass,
}: ReferencePanelProps) {
  const headerClass = {
    red: "bg-red text-paper",
    yellow: "bg-yellow text-ink",
    turquoise: "bg-turquoise text-ink",
    orange: "bg-orange text-ink",
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

      <div className="relative flex flex-1 items-center justify-center bg-paper-soft p-3 sm:p-5">
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
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={`relative z-10 h-auto w-full rounded-lg border-2 border-ink object-contain ${imageHeightClass}`}
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
  accent: "yellow" | "red" | "turquoise"
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

function TrendyComCatalogPreview() {
  return (
    <div className="comic-panel relative h-full overflow-visible rounded-2xl bg-navy p-4 sm:p-6">
      <span
        aria-hidden
        className="action-lines pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-20"
      />

      <div className="relative overflow-visible border-[4px] border-ink bg-paper-soft shadow-[7px_7px_0_0_var(--color-ink)]">
        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b-[4px] border-ink bg-yellow px-5 py-4">
          <span
            aria-hidden
            className="absolute -left-7 bottom-0 h-full w-24 -skew-x-12 bg-orange"
          />

          <span className="text-comic relative text-xl text-ink sm:text-2xl">
            Colecciones en tendencia
          </span>

          <span className="text-comic relative rotate-[-3deg] border-[3px] border-ink bg-red px-4 py-2 text-sm text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
            ¡TRENDING!
          </span>
        </div>

        <div className="relative overflow-visible bg-[#EDEDED] p-3 sm:p-5">
          <span
            aria-hidden
            className="halftone-red pointer-events-none absolute -left-24 -top-16 h-80 w-80 rounded-full opacity-30"
          />

          <ComicCatalogTemplate />

          <div className="relative mt-4 flex flex-wrap items-center justify-between gap-3 border-[3px] border-ink bg-paper px-4 py-3">
            <p className="text-comic text-sm text-navy sm:text-base">
              Tres estilos. Una misma identidad heroica.
            </p>

            <span className="text-comic rotate-[1deg] border-[3px] border-ink bg-turquoise px-4 py-2 text-xs uppercase text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
              ¡Elige tu versión!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Se conserva la misma página de cómic en todos los tamaños de pantalla.
 *
 * Geometría aprobada:
 * - El primer corte desciende hacia la derecha.
 * - El segundo corte asciende hacia la derecha.
 * - Los tres paneles forman una sola página continua.
 */
function ComicCatalogTemplate() {
  return (
    <div className="relative z-10 aspect-[736/1315] w-full min-h-[760px] overflow-visible sm:min-h-[980px] lg:min-h-0">
      <ComicProductPanel
        clipPath="polygon(0 0, 100% 0, 100% 35%, 0 23%)"
        panelClass="bg-turquoise"
        primarySrc="/images/referentes-comerciales/catalogo/catalogo_camiseta_azul_frontal.png"
        secondarySrc="/images/referentes-comerciales/catalogo/catalogo_camiseta_azul_perspectiva.png"
        imageAlt="Camiseta azul de Superman mostrada completamente dentro de la viñeta superior."
        label="Estilo clásico"
        title="Superman: estilo clásico"
        price="$64.900"
        badgeClass="bg-yellow text-ink"
        textClass="text-navy"
        textBoxClass="left-[5%] top-[4%] h-[23%] w-[38%]"
        imageBoxClass="right-[1%] top-[1.5%] h-[31%] w-[48%]"
        actionLinesClass="right-[-3%] top-[-1%] h-[34%] w-[54%]"
      />

      <ComicProductPanel
        clipPath="polygon(0 24%, 100% 36%, 100% 61%, 0 69%)"
        panelClass="bg-red"
        primarySrc="/images/referentes-comerciales/catalogo/catalogo_camiseta_roja_frontal.png"
        secondarySrc="/images/referentes-comerciales/catalogo/catalogo_camiseta_roja_perspectiva.png"
        imageAlt="Camiseta roja de Superman mostrada completamente dentro de la viñeta central."
        label="Capa roja"
        title="Superman: capa roja"
        price="$59.900"
        badgeClass="bg-yellow text-ink"
        textClass="text-paper"
        textBoxClass="right-[3%] top-[38%] h-[23%] w-[44%]"
        imageBoxClass="left-[2%] top-[31%] h-[32%] w-[48%]"
        actionLinesClass="left-[-4%] top-[29%] h-[37%] w-[55%]"
      />

      <ComicProductPanel
        clipPath="polygon(0 70%, 100% 62%, 100% 100%, 0 100%)"
        panelClass="bg-navy"
        primarySrc="/images/referentes-comerciales/catalogo/catalogo_camiseta_negra_frontal.png"
        secondarySrc="/images/referentes-comerciales/catalogo/catalogo_camiseta_negra_perspectiva.png"
        imageAlt="Camiseta negra de Superman mostrada completamente dentro de la viñeta inferior."
        label="Edición negra"
        title="Superman: edición negra"
        price="$57.900"
        badgeClass="bg-red text-paper"
        textClass="text-paper"
        textBoxClass="left-[31%] top-[72%] h-[23%] w-[27%]"
        imageBoxClass="right-[1%] top-[65.5%] h-[32%] w-[48%]"
        actionLinesClass="right-[-5%] top-[64%] h-[35%] w-[48%]"
      />

      {/*
        TrendyMan queda apoyado sobre la última línea exterior.
        Su zona visible termina antes del texto del panel negro,
        por lo que no cubre la camiseta, el título ni el precio.
      */}
      <div className="pointer-events-none absolute -bottom-[4.5%] -left-[5%] z-50 w-[38%]">
        <Image
          src="/images/referentes-comerciales/catalogo/catalogo_trendyman_sentado.png"
          alt="TrendyMan sentado sobre la línea inferior del catálogo y señalando la camiseta negra."
          width={1866}
          height={2048}
          quality={94}
          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 39vw, 32vw"
          className="h-auto w-full object-contain drop-shadow-[8px_11px_0_rgba(0,0,0,0.24)] lg:drop-shadow-[11px_14px_0_rgba(0,0,0,0.24)]"
        />
      </div>
    </div>
  )
}

interface ComicProductPanelProps {
  clipPath: string
  panelClass: string
  primarySrc: string
  secondarySrc: string
  imageAlt: string
  label: string
  title: string
  price: string
  badgeClass: string
  textClass: string
  textBoxClass: string
  imageBoxClass: string
  actionLinesClass: string
}

function ComicProductPanel({
  clipPath,
  panelClass,
  primarySrc,
  secondarySrc,
  imageAlt,
  label,
  title,
  price,
  badgeClass,
  textClass,
  textBoxClass,
  imageBoxClass,
  actionLinesClass,
}: ComicProductPanelProps) {
  return (
    <article
      className="group absolute inset-0 overflow-hidden bg-ink"
      style={{ clipPath }}
    >
      <div
        className={`absolute inset-[4px] sm:inset-[5px] ${panelClass}`}
        style={{ clipPath }}
      />

      <span
        aria-hidden
        className="halftone pointer-events-none absolute inset-[4px] opacity-20 sm:inset-[5px]"
        style={{ clipPath }}
      />

      <span
        aria-hidden
        className={`action-lines pointer-events-none absolute rounded-full opacity-[0.17] ${actionLinesClass}`}
      />

      <div
        className={`absolute z-30 flex flex-col justify-center ${textBoxClass} ${textClass}`}
      >
        <span
          className={`text-comic inline-flex w-fit border-2 border-ink px-2 py-1 text-[7px] uppercase shadow-[2px_2px_0_0_var(--color-ink)] sm:border-[3px] sm:px-3 sm:text-[10px] sm:shadow-[3px_3px_0_0_var(--color-ink)] ${badgeClass}`}
        >
          {label}
        </span>

        <h4 className="text-comic mt-2 text-lg leading-[0.96] sm:mt-3 sm:text-3xl lg:text-4xl">
          {title}
        </h4>

        <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-4">
          <span className="text-base font-black sm:text-xl lg:text-2xl">
            {price}
          </span>

          <span
            className={`text-comic border-2 px-2 py-1 text-[7px] uppercase sm:border-[3px] sm:px-3 sm:py-2 sm:text-[10px] ${
              textClass === "text-paper"
                ? "border-paper bg-paper text-navy"
                : "border-ink bg-navy text-paper"
            }`}
          >
            Ver
          </span>
        </div>
      </div>

      <div className={`absolute z-20 ${imageBoxClass}`}>
        <ProductImageSwitch
          className="h-full w-full"
          primarySrc={primarySrc}
          secondarySrc={secondarySrc}
          alt={imageAlt}
        />
      </div>
    </article>
  )
}

interface ProductImageSwitchProps {
  className: string
  primarySrc: string
  secondarySrc: string
  alt: string
}

function ProductImageSwitch({
  className,
  primarySrc,
  secondarySrc,
  alt,
}: ProductImageSwitchProps) {
  return (
    <div className={`relative min-w-0 ${className}`}>
      <Image
        src={primarySrc}
        alt={alt}
        fill
        quality={94}
        sizes="(max-width: 640px) 48vw, (max-width: 1024px) 45vw, 31vw"
        className="object-contain p-0 transition duration-500 group-hover:opacity-0"
      />

      <Image
        src={secondarySrc}
        alt=""
        fill
        quality={94}
        sizes="(max-width: 640px) 48vw, (max-width: 1024px) 45vw, 31vw"
        className="object-contain p-0 opacity-0 transition duration-500 group-hover:opacity-100"
      />
    </div>
  )
}
