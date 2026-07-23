import Image from "next/image"
import type { ReactNode } from "react"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-red)"

export function HeaderBannerPrincipal() {
  return (
    <section
      id="app-header"
      data-section={13}
      aria-labelledby="header-banner-title"
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
        <span className="absolute -left-24 top-24 h-72 w-72 rounded-full halftone-red opacity-55" />
        <span className="absolute -right-32 top-[34%] h-96 w-96 rounded-full action-lines opacity-40" />
        <span className="absolute -left-24 bottom-24 h-80 w-80 rounded-full halftone-yellow opacity-65" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado de la sección */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-red px-2 text-sm text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                13
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Aplicación de la identidad
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="header-banner-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Header y Banner Principal
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
                Primer contacto con la tienda
              </span>

              <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight text-yellow sm:text-4xl lg:text-5xl">
                El encabezado orienta; el banner presenta la personalidad de
                TrendyCom y da inicio al recorrido.
              </h3>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                Como propuesta preliminar para la página de inicio, se definió
                una estructura que combina reconocimiento de marca, navegación
                rápida y una bienvenida visual de alto impacto. El usuario debe
                entender desde el primer momento dónde se encuentra, qué puede
                explorar y cuál es el tono narrativo de la tienda.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Imagen principal de la maqueta */}
        <div className="mt-16">
          <Reveal direction="scale">
            <figure className="comic-panel relative overflow-hidden rounded-2xl bg-card">
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-yellow px-5 py-4 text-ink">
                <span className="text-comic text-base uppercase tracking-wide sm:text-lg">
                  Maqueta inicial de la página de inicio
                </span>

                <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
                  Jerarquía visual
                </span>
              </figcaption>

              <div className="relative overflow-hidden bg-paper-soft p-3 sm:p-5 lg:p-7">
                <span
                  aria-hidden
                  className="halftone pointer-events-none absolute inset-0"
                />

                <Image
                  src="/images/header-banner/header_banner_01_inicio.png"
                  alt="Propuesta visual del header y banner principal de TrendyCom con logotipo, botones de acceso, barra de franquicias, TrendyMan y el logotipo principal."
                  width={2048}
                  height={1569}
                  quality={94}
                  sizes="(max-width: 1024px) 100vw, 88vw"
                  className="relative z-10 h-auto w-full rounded-xl border-[3px] border-ink object-contain"
                />
              </div>

              <div className="border-t-2 border-dashed border-ink/30 bg-card p-6 sm:p-8">
                <h3 className="text-comic text-3xl leading-tight text-navy sm:text-4xl">
                  La composición establece una lectura clara de arriba hacia
                  abajo.
                </h3>

                <div className="mt-5 grid gap-5 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg lg:grid-cols-2">
                  <p>
                    En la parte superior se ubican el logotipo oficial y las
                    acciones de usuario. Debajo aparece una franja dedicada a
                    las franquicias, pensada para filtrar rápidamente el
                    catálogo por universos como DC Comics, Marvel o
                    videojuegos.
                  </p>

                  <p>
                    El banner ocupa el mayor peso visual. TrendyMan recibe al
                    visitante mediante un globo de diálogo, mientras el fondo
                    Pop Art, la silueta urbana y el logotipo principal construyen
                    una bienvenida reconocible y coherente con toda la identidad
                    de la marca.
                  </p>
                </div>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Explicación editorial amplia */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal direction="left" delay={70}>
            <EditorialPanel
              eyebrow="Encabezado superior"
              title="Reconocimiento inmediato y navegación sencilla"
              accentClass="bg-red text-paper"
            >
              <p>
                El logotipo se sitúa en la esquina superior izquierda porque es
                el primer punto de reconocimiento de la marca. En el extremo
                contrario aparecen las acciones de iniciar sesión y
                registrarse, manteniendo una convención de navegación familiar
                para el usuario.
              </p>

              <p>
                La barra de franquicias funciona como un acceso directo al
                catálogo. Al seleccionar uno de sus módulos, la tienda podrá
                mostrar únicamente los productos relacionados con ese universo.
                Su posición, justo debajo de la cabecera, la vuelve visible sin
                competir con el banner principal.
              </p>
            </EditorialPanel>
          </Reveal>

          <Reveal direction="right" delay={140}>
            <EditorialPanel
              eyebrow="Banner de bienvenida"
              title="La identidad entra en escena desde el primer desplazamiento"
              accentClass="bg-turquoise text-ink"
            >
              <p>
                El banner fue diseñado como el primer impacto visual de la
                página. TrendyMan actúa como anfitrión, se dirige directamente
                al usuario y presenta la tienda con una voz cercana, enérgica y
                ligada al lenguaje de las historietas.
              </p>

              <p>
                La composición combina un fondo Pop Art, tramas de medios tonos,
                líneas convergentes y una ciudad estilizada. Estos elementos no
                solo decoran: organizan la mirada alrededor del logotipo y
                permiten que la bienvenida se sienta como la apertura de una
                historia.
              </p>
            </EditorialPanel>
          </Reveal>
        </div>

        {/* Prototipo interactivo conceptual */}
        <div className="mt-16">
          <Reveal direction="scale">
            <HeaderConceptDemo />
          </Reveal>
        </div>

        {/* Extensión narrativa */}
        <div className="mt-16">
          <Reveal direction="scale">
            <figure className="comic-panel relative overflow-hidden rounded-2xl bg-card">
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-turquoise px-5 py-4 text-ink">
                <span className="text-comic text-base uppercase tracking-wide sm:text-lg">
                  El recorrido continúa después del banner
                </span>

                <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
                  Compra y entrega
                </span>
              </figcaption>

              <div className="relative overflow-hidden bg-paper-soft p-3 sm:p-5 lg:p-7">
                <span
                  aria-hidden
                  className="halftone pointer-events-none absolute inset-0"
                />

                <Image
                  src="/images/header-banner/header_banner_02_recorrido.png"
                  alt="Secuencia de cómic donde TrendyMan compra una camiseta, atraviesa una viñeta y entrega el pedido en la puerta de una casa."
                  width={1440}
                  height={821}
                  quality={94}
                  sizes="(max-width: 1024px) 100vw, 88vw"
                  className="relative z-10 h-auto w-full rounded-xl border-[3px] border-ink object-contain"
                />
              </div>

              <div className="border-t-2 border-dashed border-ink/30 bg-card p-6 sm:p-8">
                <h3 className="text-comic text-3xl leading-tight text-navy sm:text-4xl">
                  El banner presenta una promesa que el resto de la experiencia
                  debe cumplir.
                </h3>

                <p className="mt-5 max-w-5xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  La secuencia muestra cómo la narrativa puede acompañar todo el
                  proceso: explorar el catálogo, escoger una camiseta y recibir
                  el pedido. TrendyMan conecta esos momentos y ayuda a que la
                  identidad no desaparezca después de la página de inicio. El
                  personaje mantiene el hilo conductor desde la bienvenida
                  hasta la entrega.
                </p>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Cierre */}
        <Reveal direction="scale" delay={180}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-red p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0 opacity-20"
            />

            <div className="relative">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                Guía para el desarrollo final
              </span>

              <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
                El prototipo define la jerarquía de la página de inicio sin
                convertirla todavía en una solución rígida.
              </h3>

              <p className="mt-5 max-w-4xl text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                Esta propuesta establece la distribución básica del header, la
                navegación por franquicias y el banner de bienvenida. Durante la
                fase de maquetación podrá ajustarse su proporción, su
                comportamiento responsive y sus microinteracciones, conservando
                siempre el mismo principio: reconocimiento inmediato, recorrido
                sencillo y una entrada visualmente memorable al universo de
                TrendyCom.
              </p>
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

function HeaderConceptDemo() {
  return (
    <div className="comic-panel relative overflow-hidden rounded-2xl bg-card">
      <div className="flex flex-wrap items-center justify-between gap-5 border-b-[3px] border-ink bg-navy px-5 py-4 text-paper sm:px-7">
        <div className="relative h-20 w-24 shrink-0 sm:h-24 sm:w-28">
          <Image
            src="/images/header-banner/logo_trendycom_oficial.png"
            alt="Logotipo oficial de TrendyCom."
            fill
            sizes="112px"
            className="object-contain object-left drop-shadow-[3px_4px_0_rgba(0,0,0,0.28)]"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="text-comic rounded-full border-2 border-ink bg-red px-4 py-2 text-xs uppercase tracking-wide text-paper shadow-[3px_3px_0_0_var(--color-ink)] transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-[5px_5px_0_0_var(--color-ink)]"
          >
            Iniciar
          </button>

          <button
            type="button"
            className="text-comic rounded-full border-2 border-ink bg-yellow px-4 py-2 text-xs uppercase tracking-wide text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition duration-300 hover:-translate-y-1 hover:rotate-[1deg] hover:shadow-[5px_5px_0_0_var(--color-ink)]"
          >
            Registrarse
          </button>
        </div>
      </div>

      <nav
        aria-label="Ejemplo de navegación visual por franquicias"
        className="border-b-[3px] border-ink bg-ink px-5 py-5"
      >
        <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-5 sm:gap-7">
          <FranchiseLogoButton
            src="/images/header-banner/franquicia_dc.png"
            alt="Logotipo de DC Comics."
            label="DC Comics"
            width={838}
            height={838}
            imageClass="object-contain"
          />

          <FranchiseLogoButton
            src="/images/header-banner/franquicia_marvel.png"
            alt="Logotipo de Marvel."
            label="Marvel"
            width={600}
            height={600}
            imageClass="object-contain"
          />

          <FranchiseLogoButton
            src="/images/header-banner/franquicia_videojuegos.png"
            alt="Icono de un control de videojuegos."
            label="Videojuegos"
            width={1024}
            height={1024}
            imageClass="object-contain"
          />

          <FranchiseLogoButton
            src="/images/header-banner/franquicia_cine.png"
            alt="Icono de un carrete de película."
            label="Cine y series"
            width={512}
            height={512}
            imageClass="object-contain"
          />
        </div>
      </nav>

      <div className="relative grid min-h-[520px] items-center overflow-hidden bg-turquoise p-6 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
        <span
          aria-hidden
          className="action-lines pointer-events-none absolute right-0 top-0 h-full w-2/3 opacity-25"
        />

        <span
          aria-hidden
          className="halftone-yellow pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full opacity-75"
        />

        <div className="relative flex items-end justify-center">
          <Image
            src="/images/origen-trendyman/origen_trendyman_04_trendyman.png"
            alt="TrendyMan como anfitrión del banner conceptual."
            width={1094}
            height={1641}
            quality={92}
            sizes="(max-width: 1024px) 80vw, 36vw"
            className="relative z-10 h-auto max-h-[510px] w-full object-contain drop-shadow-[9px_11px_0_rgba(0,0,0,0.24)]"
          />
        </div>

        <div className="relative z-10">
          <span className="text-comic inline-flex rotate-[-3deg] rounded-full border-2 border-ink bg-paper px-5 py-3 text-sm leading-tight text-navy shadow-[5px_5px_0_0_var(--color-ink)]">
            ¡BIENVENIDO AL UNIVERSO TRENDYCOM!
          </span>

          <h3 className="text-comic mt-7 text-balance text-5xl leading-[0.9] text-yellow drop-shadow-[5px_5px_0_var(--color-ink)] sm:text-6xl lg:text-7xl">
            DESCUBRE
            <br />
            TU PRÓXIMA
            <br />
            TENDENCIA
          </h3>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
            Este prototipo muestra cómo el header, la navegación temática y el
            banner pueden trabajar como una sola entrada visual, manteniendo
            acciones claras y una personalidad de cómic desde el primer vistazo.
          </p>

          <button
            type="button"
            className="text-comic mt-7 rounded-full border-[3px] border-ink bg-orange px-6 py-3 text-sm uppercase tracking-wide text-ink shadow-[5px_5px_0_0_var(--color-ink)] transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-[8px_8px_0_0_var(--color-ink)]"
          >
            Explorar colecciones
          </button>
        </div>
      </div>
    </div>
  )
}

interface FranchiseLogoButtonProps {
  src: string
  alt: string
  label: string
  width: number
  height: number
  imageClass: string
}

function FranchiseLogoButton({
  src,
  alt,
  label,
  width,
  height,
  imageClass,
}: FranchiseLogoButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Explorar productos de ${label}`}
      title={label}
      className="group relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-paper/80 bg-paper shadow-[3px_3px_0_0_var(--color-turquoise)] transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[5px_5px_0_0_var(--color-red)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-yellow sm:h-18 sm:w-18"
    >
      <span
        aria-hidden
        className="absolute inset-1 rounded-full border border-ink/10"
      />

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="72px"
        className={`relative z-10 h-[68%] w-[68%] transition duration-300 group-hover:scale-110 ${imageClass}`}
      />
    </button>
  )
}
