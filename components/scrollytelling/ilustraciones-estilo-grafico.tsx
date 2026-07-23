import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-red)"

const VISUAL_RESOURCES = [
  {
    number: "01",
    title: "Ilustración con carácter",
    label: "Línea y color",
    description:
      "TrendyCom utilizará un lenguaje vectorial y caricaturesco, con colores planos, saturados y contornos negros gruesos que recuerdan el entintado tradicional de las historietas.",
    colorClass: "bg-red text-paper",
  },
  {
    number: "02",
    title: "Texturas halftone",
    label: "Profundidad",
    description:
      "Las tramas de puntos aparecerán en fondos, tarjetas y módulos para aportar textura visual sin llenar toda la pantalla de elementos pesados.",
    colorClass: "bg-yellow text-ink",
  },
  {
    number: "03",
    title: "Estrellas de impacto",
    label: "Destacar",
    description:
      "Las explosiones y formas dentadas servirán para promociones, ofertas, novedades y llamados a la acción que necesiten sobresalir inmediatamente.",
    colorClass: "bg-orange text-ink",
  },
  {
    number: "04",
    title: "Líneas de acción",
    label: "Movimiento",
    description:
      "Los rayos y líneas convergentes dirigirán la mirada hacia el producto principal y darán dinamismo a banners y composiciones promocionales.",
    colorClass: "bg-turquoise text-ink",
  },
  {
    number: "05",
    title: "Expresividad gráfica",
    label: "Conversar",
    description:
      "Globos de diálogo y onomatopeyas como WOW!, COOL! u OOOH! permitirán que la interfaz se comunique con una voz fresca, cercana y enérgica.",
    colorClass: "bg-navy text-paper",
  },
]

export function IlustracionesEstiloGrafico() {
  return (
    <section
      id="ilustraciones"
      data-section={8}
      aria-labelledby="ilustraciones-title"
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
        <span className="absolute -left-28 top-20 h-80 w-80 rounded-full halftone-red opacity-60" />
        <span className="absolute -right-28 top-[32%] h-80 w-80 rounded-full action-lines opacity-45" />
        <span className="absolute -left-24 bottom-28 h-72 w-72 rounded-full halftone-yellow opacity-70" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-red px-2 text-sm text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                08
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Lenguaje gráfico
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="ilustraciones-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Ilustraciones y Estilo Gráfico
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
                Una tienda con energía de cómic
              </span>

              <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                El estilo visual acompañará la experiencia de compra sin quitarle
                protagonismo a los productos.
              </h3>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                Para consolidar el universo de TrendyCom se definió un lenguaje
                gráfico influenciado por el Pop Art y la estética clásica de los
                cómics impresos. La intención es construir un entorno dinámico,
                vibrante y lleno de energía, pero también ordenado y fácil de
                recorrer.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Referencia principal */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={60} className="lg:col-span-7">
            <ReferencePanel
              src="/images/ilustraciones-estilo-grafico/ilustracion_estilo_01.png"
              alt="Referencia de una tienda de productos cosméticos con composición inspirada en paneles de cómic, tramas de puntos y explosiones gráficas."
              width={1061}
              height={1214}
              label="Referencia visual · Comercio y cómic"
              badge="Producto protagonista"
              caption="La composición combina fotografías de producto con paneles, líneas, tramas y formas de impacto. TrendyCom toma esta lógica para convertir la vitrina comercial en una experiencia gráfica sin ocultar la información esencial."
              accent="turquoise"
            />
          </Reveal>

          <div className="grid gap-7 lg:col-span-5">
            <Reveal direction="right" delay={120}>
              <NarrativeCard
                number="01"
                title="Diseño al servicio del producto"
                accent="yellow"
              >
                Los recursos de cómic no funcionarán como adornos aislados.
                Enmarcarán productos, promociones y categorías para orientar al
                usuario y ayudarle a reconocer lo más importante.
              </NarrativeCard>
            </Reveal>

            <Reveal direction="right" delay={190}>
              <NarrativeCard
                number="02"
                title="Impacto sin saturación"
                accent="red"
              >
                Los colores fuertes y las formas expresivas se alternarán con
                fondos oscuros y neutros. Así la página conservará su energía sin
                cansar la vista durante la navegación.
              </NarrativeCard>
            </Reveal>
          </div>
        </div>

        {/* Recursos gráficos */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-9 flex items-center gap-4">
              <span className="h-1 flex-1 rounded-full bg-red" />
              <span className="text-comic rounded-full border-2 border-ink bg-card px-4 py-1 text-center text-sm uppercase tracking-wider text-navy shadow-[3px_3px_0_0_var(--color-ink)]">
                Gramática visual de TrendyCom
              </span>
              <span className="h-1 flex-1 rounded-full bg-yellow" />
            </div>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-5">
            {VISUAL_RESOURCES.map((resource, index) => (
              <Reveal
                key={resource.number}
                direction={
                  index === 0
                    ? "left"
                    : index === VISUAL_RESOURCES.length - 1
                      ? "right"
                      : "scale"
                }
                delay={60 + index * 60}
                className="h-full"
              >
                <ResourceCard {...resource} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Laboratorio de onomatopeyas */}
        <div className="mt-16">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-red p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0 opacity-20"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Laboratorio gráfico
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight sm:text-4xl">
                  La interfaz también puede hablar con imágenes.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                  Estas expresiones se utilizarán como acentos visuales en
                  promociones, mensajes de éxito, lanzamientos y llamados
                  especiales. Cada una comunica una emoción distinta sin
                  necesidad de añadir párrafos extensos.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
            <Reveal direction="left" delay={60} className="h-full">
              <GraphicSample
                src="/images/ilustraciones-estilo-grafico/ilustracion_estilo_02.png"
                alt="Onomatopeya COOL con letras amarillas sobre un globo rojo y trama de puntos."
                width={528}
                height={528}
                title="COOL!"
                caption="Para destacar novedades, productos recomendados y selecciones con una personalidad fresca."
                backgroundClass="bg-yellow"
              />
            </Reveal>

            <Reveal direction="scale" delay={120} className="h-full">
              <GraphicSample
                src="/images/ilustraciones-estilo-grafico/ilustracion_estilo_03.png"
                alt="Onomatopeya WOW dentro de una explosión azul, naranja y amarilla."
                width={592}
                height={590}
                title="WOW!"
                caption="Para momentos de sorpresa, promociones especiales y productos que merecen máxima atención."
                backgroundClass="bg-turquoise"
              />
            </Reveal>

            <Reveal direction="scale" delay={180} className="h-full">
              <GraphicSample
                src="/images/ilustraciones-estilo-grafico/ilustracion_estilo_04.png"
                alt="Cartela de cómic con el texto Todos nuestros productos."
                width={618}
                height={303}
                title="Cartelas"
                caption="Para introducir categorías, colecciones y bloques importantes sin perder la estética narrativa."
                backgroundClass="bg-orange"
              />
            </Reveal>

            <Reveal direction="right" delay={240} className="h-full">
              <GraphicSample
                src="/images/ilustraciones-estilo-grafico/ilustracion_estilo_05.png"
                alt="Onomatopeya OOOH dentro de una explosión roja y azul."
                width={649}
                height={649}
                title="¡OOOH!"
                caption="Para comunicar lanzamientos, descuentos inesperados y llamados de gran impacto."
                backgroundClass="bg-red"
              />
            </Reveal>
          </div>
        </div>

        {/* Dos referencias comerciales */}
        <div className="mt-16 grid items-start gap-8 xl:grid-cols-2">
          <Reveal direction="left" delay={80} className="h-full">
            <ReferencePanel
              src="/images/ilustraciones-estilo-grafico/ilustracion_estilo_06.png"
              alt="Referencia comercial con productos cosméticos, paneles de cómic, globos de diálogo y colores rosados."
              width={773}
              height={1020}
              label="Referencia · Narrativa comercial"
              badge="Paneles y diálogo"
              caption="Los productos se presentan dentro de una secuencia visual que combina promociones, diálogos y módulos de compra. Esto inspira una tienda que informa mientras mantiene una narrativa gráfica constante."
              accent="red"
            />
          </Reveal>

          <Reveal direction="right" delay={140} className="h-full">
            <ReferencePanel
              src="/images/ilustraciones-estilo-grafico/ilustracion_estilo_07.png"
              alt="Referencia comercial de electrodomésticos con fondos rojos, tramas de puntos, paneles azules y globos de diálogo."
              width={993}
              height={1879}
              label="Referencia · Catálogo de impacto"
              badge="Orden dentro del caos"
              caption="Aunque la pieza contiene numerosos productos, los paneles, colores y marcos permiten dividir la información. TrendyCom tomará esta organización para construir catálogos expresivos sin mezclarlo todo."
              accent="yellow"
            />
          </Reveal>
        </div>

        {/* Aplicación en TrendyCom */}
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={80} className="lg:col-span-4">
            <NarrativeCard
              number="03"
              title="De la referencia a la tienda"
              accent="turquoise"
            >
              TrendyCom adaptará estos recursos a su propia identidad cromática,
              a TrendyMan y a sus colecciones. La referencia orienta el lenguaje,
              pero el resultado final pertenecerá al universo original de la
              marca.
            </NarrativeCard>
          </Reveal>

          <Reveal direction="right" delay={140} className="lg:col-span-8">
            <TrendyComPreview />
          </Reveal>
        </div>

        {/* Cierre */}
        <Reveal direction="scale" delay={180}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-card p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0"
            />

            <div className="relative grid items-center gap-7 lg:grid-cols-[auto_1fr]">
              <span className="text-comic flex h-24 w-24 rotate-[-7deg] items-center justify-center rounded-full border-4 border-ink bg-yellow text-center text-2xl text-ink shadow-[6px_6px_0_0_var(--color-ink)]">
                ¡POW!
              </span>

              <div>
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-red px-4 py-1 text-sm uppercase tracking-wider text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                  Resultado visual
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  Una experiencia comercial que parece abrir las páginas de un
                  cómic, pero sigue siendo clara, funcional y fácil de comprar.
                </h3>

                <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  La combinación de ilustración, textura, movimiento y
                  expresividad permitirá que TrendyCom tenga una personalidad
                  reconocible. Cada recurso se aplicará con intención para
                  acompañar al producto, orientar al usuario y conservar la
                  comodidad durante todo el recorrido.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
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

interface ResourceCardProps {
  number: string
  title: string
  label: string
  description: string
  colorClass: string
}

function ResourceCard({
  number,
  title,
  label,
  description,
  colorClass,
}: ResourceCardProps) {
  return (
    <article className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-5">
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

        <h3 className="text-comic mt-3 text-2xl leading-tight text-navy">
          {title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/75">
          {description}
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
  accent: "yellow" | "red" | "turquoise"
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
  const headerClass = {
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
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="relative z-10 h-auto max-h-[920px] w-full rounded-lg border-2 border-ink object-contain"
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

interface GraphicSampleProps {
  src: string
  alt: string
  width: number
  height: number
  title: string
  caption: string
  backgroundClass: string
}

function GraphicSample({
  src,
  alt,
  width,
  height,
  title,
  caption,
  backgroundClass,
}: GraphicSampleProps) {
  return (
    <figure className="comic-panel relative flex h-full flex-col overflow-hidden rounded-2xl bg-card">
      <div
        className={`relative flex h-72 items-center justify-center border-b-[3px] border-ink p-5 ${backgroundClass}`}
      >
        <span
          aria-hidden
          className="halftone pointer-events-none absolute inset-0 opacity-25"
        />

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={92}
          sizes="(max-width: 768px) 90vw, 24vw"
          className="relative z-10 h-full w-full object-contain drop-shadow-[7px_8px_0_rgba(0,0,0,0.25)]"
        />
      </div>

      <figcaption className="flex flex-1 flex-col p-5">
        <h4 className="text-comic text-2xl text-navy">{title}</h4>
        <p className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-base">
          {caption}
        </p>
      </figcaption>
    </figure>
  )
}

function TrendyComPreview() {
  return (
    <div className="comic-panel relative h-full overflow-hidden rounded-2xl bg-navy p-5 sm:p-7">
      <span
        aria-hidden
        className="action-lines pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-20"
      />

      <div className="relative overflow-hidden rounded-xl border-[3px] border-ink bg-paper-soft">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-yellow px-5 py-4">
          <span className="text-comic text-xl text-ink">
            Colección en tendencia
          </span>

          <span className="text-comic rotate-[-4deg] rounded-full border-2 border-ink bg-red px-4 py-2 text-sm text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
            ¡NUEVO!
          </span>
        </div>

        <div className="relative grid gap-5 overflow-hidden bg-[#EDEDED] p-5 sm:grid-cols-[1.1fr_0.9fr] sm:p-7">
          <span
            aria-hidden
            className="halftone-red pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-50"
          />

          <div className="relative rounded-xl border-[3px] border-ink bg-card p-4 shadow-[5px_5px_0_0_var(--color-ink)]">
            <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-ink bg-turquoise">
              <span className="text-comic rotate-[-6deg] text-center text-5xl leading-none text-paper drop-shadow-[4px_4px_0_var(--color-ink)] sm:text-6xl">
                TRENDY
                <br />
                DROP
              </span>
            </div>
          </div>

          <div className="relative flex flex-col justify-center">
            <span className="text-comic text-sm uppercase tracking-[0.18em] text-red">
              Lanzamiento especial
            </span>

            <h4 className="text-comic mt-4 text-3xl leading-tight text-navy sm:text-4xl">
              Diseños inspirados en las historias del momento.
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-navy/75 sm:text-base">
              Los recursos gráficos conducen la mirada, refuerzan la promoción y
              dejan que el producto conserve el centro de la composición.
            </p>

            <span className="text-comic mt-6 inline-flex w-fit rounded-full border-2 border-ink bg-orange px-5 py-3 text-sm uppercase tracking-wide text-ink shadow-[4px_4px_0_0_var(--color-ink)]">
              Explorar colección
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
