import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-yellow)"

const PRODUCTS = [
  {
    src: "/images/productos-interaccion/producto_superman_negro.png",
    alt: "Camiseta negra de Superman presentada sobre un fondo oscuro de estilo cómic.",
    width: 736,
    height: 1227,
    eyebrow: "Edición monocromática",
    title: "Superman · Negro",
    description:
      "Una propuesta sobria y contrastada para quienes prefieren una estética más oscura, sin perder el reconocimiento inmediato del emblema.",
    accentClass: "bg-navy text-paper",
    actionClass: "bg-yellow text-ink",
  },
  {
    src: "/images/productos-interaccion/producto_superman_rojo.png",
    alt: "Camiseta roja de Superman presentada sobre un fondo amarillo con líneas de acción.",
    width: 736,
    height: 1227,
    eyebrow: "Edición solar",
    title: "Superman · Rojo",
    description:
      "El rojo y el amarillo convierten la prenda en una pieza directa, vibrante y cercana a la iconografía clásica del héroe.",
    accentClass: "bg-red text-paper",
    actionClass: "bg-turquoise text-ink",
  },
  {
    src: "/images/productos-interaccion/producto_superman_azul.png",
    alt: "Camiseta azul de Superman presentada sobre un fondo Pop Art azul, rojo y amarillo.",
    width: 736,
    height: 1227,
    eyebrow: "Edición heroica",
    title: "Superman · Azul",
    description:
      "La combinación azul, rojo y amarillo ofrece la versión más luminosa y tradicional, ideal para una presentación de alto impacto.",
    accentClass: "bg-turquoise text-ink",
    actionClass: "bg-orange text-ink",
  },
]

export function ProductosInteraccion() {
  return (
    <section
      id="app-productos"
      data-section={12}
      aria-labelledby="productos-interaccion-title"
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
        <span className="absolute -right-32 top-[30%] h-96 w-96 rounded-full action-lines opacity-45" />
        <span className="absolute -left-28 bottom-24 h-80 w-80 rounded-full halftone-red opacity-50" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-yellow px-2 text-sm text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                12
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Aplicación de la identidad
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="productos-interaccion-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Productos e Interacción
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span className="mt-5 block h-1.5 w-24 rounded-full bg-yellow" />
          </Reveal>
        </header>

        {/* Introducción */}
        <Reveal direction="scale" delay={180}>
          <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-navy p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="action-lines pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20"
            />

            <div className="relative">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-red px-4 py-1 text-sm uppercase tracking-wider text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                Propuesta inicial de experiencia
              </span>

              <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                La tienda no mostrará camisetas sobre un fondo neutro: cada
                producto entrará en escena como parte de una viñeta.
              </h3>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                La maqueta preliminar plantea una experiencia donde las prendas
                reales se integran con fondos temáticos, líneas de acción,
                tramas Pop Art y expresiones gráficas. La intención es que
                explorar el catálogo se sienta dinámico e inmersivo, sin perder
                claridad comercial.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Desarrollo editorial sin exceso de tarjetas */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal direction="left" delay={70}>
            <EditorialPanel
              eyebrow="La estructura primaria"
              title="Una maqueta pensada para exhibir y orientar"
              accentClass="bg-yellow text-ink"
            >
              <p>
                Este esquema representa la base sobre la cual se presentarán
                los productos en la interfaz final de TrendyCom. La fotografía
                de cada camiseta será el elemento principal, mientras que la
                ambientación de cómic ayudará a diferenciar colecciones,
                estilos y tendencias.
              </p>

              <p>
                El fondo no será una decoración aleatoria. Sus colores, tramas
                y líneas responderán al universo del diseño estampado, creando
                una relación coherente entre la prenda y el contexto visual que
                la acompaña.
              </p>
            </EditorialPanel>
          </Reveal>

          <Reveal direction="right" delay={140}>
            <EditorialPanel
              eyebrow="Experiencia del usuario"
              title="Narrativa visual sin sacrificar la compra"
              accentClass="bg-turquoise text-ink"
            >
              <p>
                TrendyMan funcionará como anfitrión interactivo y podrá
                dirigirse directamente al visitante mediante globos de texto.
                Sus intervenciones motivarán a explorar una colección, comparar
                colores o descubrir una edición destacada.
              </p>

              <p>
                La información esencial seguirá estando visible: nombre,
                variante, descripción y llamada a la acción. La personalidad
                gráfica acompañará la decisión de compra, pero nunca deberá
                ocultarla ni volverla confusa.
              </p>
            </EditorialPanel>
          </Reveal>
        </div>

        {/* Maqueta preliminar */}
        <div className="mt-16">
          <Reveal direction="scale">
            <figure className="comic-panel relative overflow-hidden rounded-2xl bg-card">
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-yellow px-5 py-4 text-ink">
                <span className="text-comic text-base uppercase tracking-wide sm:text-lg">
                  Maqueta preliminar de TrendyCom
                </span>

                <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
                  Propuesta visual inicial
                </span>
              </figcaption>

              <div className="relative overflow-hidden bg-paper-soft p-3 sm:p-5 lg:p-7">
                <span
                  aria-hidden
                  className="halftone pointer-events-none absolute inset-0"
                />

                <Image
                  src="/images/productos-interaccion/maqueta_preliminar_productos.png"
                  alt="Maqueta preliminar de TrendyCom con tres camisetas de Superman dentro de una composición de cómic, TrendyMan como anfitrión, un globo de diálogo y onomatopeyas."
                  width={2048}
                  height={1130}
                  quality={94}
                  sizes="(max-width: 1024px) 100vw, 88vw"
                  className="relative z-10 h-auto w-full rounded-xl border-[3px] border-ink object-contain"
                />
              </div>

              <div className="border-t-2 border-dashed border-ink/30 bg-card p-6 sm:p-8">
                <h3 className="text-comic text-3xl leading-tight text-navy sm:text-4xl">
                  Esta imagen resume la experiencia que se quiere construir.
                </h3>

                <div className="mt-5 grid gap-5 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg lg:grid-cols-2">
                  <p>
                    Las prendas reales aparecen integradas dentro de tres
                    escenarios visuales diferentes. Cada variante conserva su
                    identidad cromática y se presenta como una viñeta
                    independiente, pero todas forman parte de una misma
                    composición comercial.
                  </p>

                  <p>
                    TrendyMan rompe la cuarta pared mediante un globo de diálogo,
                    mientras las onomatopeyas y líneas de acción aportan energía.
                    La maqueta funciona como una guía conceptual: muestra cómo
                    producto, personaje, fondo e interacción podrán convivir en
                    la tienda final.
                  </p>
                </div>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Escaparate interactivo */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-9 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />

              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-center text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                Escaparate conceptual
              </span>

              <span className="h-1 flex-1 rounded-full bg-turquoise" />
            </div>
          </Reveal>

          <Reveal direction="scale" delay={70}>
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-card p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-orange px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Pasa el cursor por cada producto
                </span>

                <h3 className="text-comic mt-6 max-w-4xl text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Tres camisetas reales, tres atmósferas gráficas y una misma
                  lógica de interacción.
                </h3>

                <p className="mt-4 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  Cada pieza responde al movimiento del cursor: la tarjeta se
                  eleva, la imagen se acerca y el llamado a la acción gana
                  protagonismo. Esta microinteracción aporta reacción y
                  profundidad sin obligar al usuario a abandonar el catálogo.
                </p>
              </div>

              <div className="relative mt-9 grid gap-8 lg:grid-cols-3">
                {PRODUCTS.map((product, index) => (
                  <Reveal
                    key={product.title}
                    direction={
                      index === 0 ? "left" : index === 2 ? "right" : "scale"
                    }
                    delay={90 + index * 70}
                    className="h-full"
                  >
                    <ProductInteractionCard {...product} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Cuarta pared */}
        <div className="mt-16 grid items-center gap-9 lg:grid-cols-12">
          <Reveal direction="left" delay={80} className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg px-8">
              <span
                aria-hidden
                className="halftone-yellow absolute left-0 top-20 h-52 w-52 rounded-full opacity-75"
              />

              <span
                aria-hidden
                className="action-lines absolute right-0 top-0 h-64 w-64 rounded-full opacity-35"
              />

              <Image
                src="/images/origen-trendyman/origen_trendyman_04_trendyman.png"
                alt="TrendyMan como anfitrión interactivo del catálogo."
                width={1094}
                height={1641}
                quality={94}
                sizes="(max-width: 1024px) 85vw, 40vw"
                className="relative z-10 h-auto max-h-[740px] w-full object-contain drop-shadow-[10px_12px_0_rgba(0,0,0,0.24)]"
              />

              <div className="absolute right-0 top-[22%] z-20 max-w-[220px] rotate-[3deg] rounded-[44%] border-[3px] border-ink bg-paper px-5 py-5 text-center shadow-[6px_6px_0_0_var(--color-ink)]">
                <p className="text-comic text-sm leading-tight text-navy sm:text-base">
                  ¡ANÍMATE!
                  <br />
                  ELIGE TU COLOR
                  <br />
                  FAVORITO.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={140} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-red p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0 opacity-20"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Ruptura de la cuarta pared
                </span>

                <h3 className="text-comic mt-7 text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  TrendyMan no observa la tienda desde afuera: conversa
                  directamente con quien la recorre.
                </h3>

                <p className="mt-6 text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                  Mediante globos de diálogo, gestos y apariciones dentro de las
                  composiciones, la mascota puede recomendar una variante,
                  presentar una colección o motivar un llamado a la acción. Esta
                  cercanía convierte al personaje en anfitrión y no simplemente
                  en una ilustración decorativa.
                </p>

                <p className="mt-4 text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                  La intervención debe ser breve y útil. TrendyMan acompaña,
                  orienta y aporta humor, pero la prenda conserva el centro de
                  la escena y la decisión final siempre pertenece al usuario.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Microinteracciones explicadas en un solo panel */}
        <div className="mt-16">
          <Reveal direction="scale">
            <div className="comic-panel relative overflow-hidden rounded-2xl bg-card p-7 sm:p-9 lg:p-11">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-navy px-4 py-1 text-sm uppercase tracking-wider text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                  Microinteracciones
                </span>

                <h3 className="text-comic mt-6 max-w-5xl text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Pequeñas reacciones harán que la interfaz se sienta viva,
                  fluida y conectada con la estética de una historieta.
                </h3>

                <div className="mt-8 grid gap-7 md:grid-cols-3">
                  <InteractionColumn title="Reacción inmediata">
                    Al pasar el cursor, la tarjeta puede elevarse, inclinarse
                    suavemente o aumentar el tamaño de la prenda para confirmar
                    que el elemento es interactivo.
                  </InteractionColumn>

                  <InteractionColumn title="Información progresiva">
                    El llamado a la acción y ciertos detalles pueden aparecer
                    con una transición breve, evitando llenar la pantalla con
                    toda la información desde el primer momento.
                  </InteractionColumn>

                  <InteractionColumn title="Continuidad narrativa">
                    Onomatopeyas, líneas de acción y expresiones de TrendyMan
                    pueden reaccionar junto con el producto, reforzando la
                    sensación de estar recorriendo un cómic abierto.
                  </InteractionColumn>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Cierre */}
        <Reveal direction="scale" delay={180}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-navy p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="action-lines pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-20"
            />

            <div className="relative grid items-center gap-7 lg:grid-cols-[auto_1fr]">
              <span className="text-comic flex h-24 w-24 rotate-[-7deg] items-center justify-center rounded-full border-4 border-ink bg-yellow text-center text-xl leading-tight text-ink shadow-[6px_6px_0_0_var(--color-ink)]">
                ¡WHAM!
              </span>

              <div>
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-turquoise px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Estructura de exhibición
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-yellow sm:text-4xl">
                  Fotografías reales, escenarios de cómic y reacciones sutiles
                  formarán una experiencia comercial reconocible y propia.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                  Esta propuesta constituye la estructura primaria para la
                  futura tienda. Su valor está en equilibrar identidad e
                  interacción: los productos llaman la atención, TrendyMan
                  acompaña el recorrido y las microanimaciones responden al
                  usuario sin volver la navegación pesada o confusa.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

interface EditorialPanelProps {
  eyebrow: string
  title: string
  accentClass: string
  children: ReactNode
}

function EditorialPanel({
  eyebrow,
  title,
  accentClass,
  children,
}: EditorialPanelProps) {
  return (
    <article className="comic-panel relative h-full overflow-hidden rounded-2xl bg-card p-7 sm:p-9">
      <span
        aria-hidden
        className="halftone pointer-events-none absolute inset-0"
      />

      <div className="relative">
        <span
          className={`text-comic inline-flex rounded-full border-2 border-ink px-4 py-1 text-sm uppercase tracking-wider shadow-[3px_3px_0_0_var(--color-ink)] ${accentClass}`}
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

interface ProductInteractionCardProps {
  src: string
  alt: string
  width: number
  height: number
  eyebrow: string
  title: string
  description: string
  accentClass: string
  actionClass: string
}

function ProductInteractionCard({
  src,
  alt,
  width,
  height,
  eyebrow,
  title,
  description,
  accentClass,
  actionClass,
}: ProductInteractionCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-4 border-ink bg-card shadow-[8px_8px_0_0_var(--color-ink)] transition duration-500 hover:-translate-y-3 hover:rotate-[-0.5deg] hover:shadow-[12px_14px_0_0_var(--color-ink)] focus-within:-translate-y-3">
      <div className="relative aspect-[3/5] overflow-hidden border-b-[3px] border-ink bg-paper-soft">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={94}
          sizes="(max-width: 1024px) 92vw, 31vw"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
        />

        <span
          className={`text-comic absolute left-4 top-4 rounded-full border-2 border-ink px-4 py-2 text-xs uppercase tracking-wide shadow-[4px_4px_0_0_var(--color-ink)] transition duration-300 group-hover:rotate-[-4deg] ${accentClass}`}
        >
          {eyebrow}
        </span>

        <span
          className={`text-comic absolute bottom-4 right-4 translate-y-4 rounded-full border-2 border-ink px-5 py-3 text-sm uppercase tracking-wide opacity-0 shadow-[4px_4px_0_0_var(--color-ink)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${actionClass}`}
        >
          Ver camiseta
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-comic text-3xl leading-tight text-navy">
          {title}
        </h4>

        <p className="mt-4 flex-1 text-base leading-relaxed text-navy/75">
          {description}
        </p>

        <p className="text-comic mt-6 text-sm uppercase tracking-[0.16em] text-red">
          Hover · reacción visual
        </p>
      </div>
    </article>
  )
}

interface InteractionColumnProps {
  title: string
  children: ReactNode
}

function InteractionColumn({ title, children }: InteractionColumnProps) {
  return (
    <div className="border-t-2 border-dashed border-ink/25 pt-6 first:border-t-0 first:pt-0 md:border-l-2 md:border-t-0 md:pl-7 md:pt-0 md:first:border-l-0 md:first:pl-0">
      <h4 className="text-comic text-2xl leading-tight text-navy">
        {title}
      </h4>

      <p className="mt-4 text-base leading-relaxed text-navy/75">
        {children}
      </p>
    </div>
  )
}
