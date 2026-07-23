import Image from "next/image"

/**
 * Section 1 — Portada.
 * Composición principal con TrendyMan, logotipo oficial transparente y
 * globo de diálogo conectado visualmente con la mascota.
 */
export function Portada() {
  return (
    <section
      id="portada"
      data-section={1}
      aria-labelledby="portada-title"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-5 py-16 sm:px-8 lg:px-16"
    >
      {/* Fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <span
          className="intro intro-fade absolute inset-0 halftone"
          style={{ ["--intro-delay" as string]: "0ms" }}
        />

        <span
          className="intro intro-fade absolute -left-24 top-16 h-72 w-72 rounded-full halftone-red opacity-50"
          style={{ ["--intro-delay" as string]: "100ms" }}
        />

        <span
          className="intro intro-fade absolute -right-24 bottom-10 h-96 w-96 rounded-full action-lines opacity-30"
          style={{ ["--intro-delay" as string]: "160ms" }}
        />
      </div>

      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-2 bg-red sm:w-3"
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Título y créditos centrados */}
        <header className="relative z-30 text-center">
          <h1
            id="portada-title"
            className="intro intro-up mx-auto max-w-4xl text-balance text-comic text-4xl leading-[0.92] text-navy sm:text-6xl lg:text-7xl"
            style={{ ["--intro-delay" as string]: "180ms" }}
          >
            Propuesta gráfica
            <br />
            e identidad visual
          </h1>

          <div
            className="intro intro-up mt-6 flex flex-wrap items-center justify-center gap-3"
            style={{ ["--intro-delay" as string]: "280ms" }}
          >
            <span className="text-comic rounded-full border-2 border-ink bg-turquoise px-5 py-2 text-sm uppercase tracking-wide text-ink shadow-[4px_4px_0_0_var(--color-ink)] sm:text-base">
              Fabián Enrique Ferro Valbuena
            </span>

            <span className="text-comic rounded-full border-2 border-ink bg-yellow px-5 py-2 text-sm uppercase tracking-wide text-ink shadow-[4px_4px_0_0_var(--color-ink)] sm:text-base">
              2025–2026
            </span>
          </div>
        </header>

        {/* Globo en móvil */}
        <div
          className="intro intro-pop relative z-30 mx-auto mt-9 w-full max-w-md lg:hidden"
          style={{ ["--intro-delay" as string]: "380ms" }}
        >
          <DialogueBalloon />
        </div>

        {/* Escena principal */}
        <div className="relative mt-5 grid min-h-[590px] items-end gap-5 lg:mt-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
          {/* Globo en escritorio: ubicado al lado izquierdo de TrendyMan */}
          <div
            className="intro intro-pop absolute left-[-10%] top-[-15%] z-40 hidden w-[320px] lg:block xl:left-[-8%] xl:top-[-14%] xl:w-[345px]"
            style={{ ["--intro-delay" as string]: "400ms" }}
          >
            <DialogueBalloon />
          </div>

          {/* TrendyMan */}
          <div className="relative flex min-h-[520px] items-end justify-center lg:min-h-[650px] lg:justify-end">
            <span
              aria-hidden
              className="absolute bottom-[5%] left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-orange/15"
            />

            <span
              aria-hidden
              className="absolute bottom-[4%] left-1/2 h-[86%] w-[86%] -translate-x-1/2 halftone-yellow opacity-55"
            />

            <div
              className="intro intro-hero relative z-20 flex w-full max-w-[470px] items-end justify-center sm:max-w-[540px] lg:max-w-[610px] lg:translate-x-7"
              style={{ ["--intro-delay" as string]: "340ms" }}
            >
              <Image
                src="/images/trendyman-portada.png"
                alt="TrendyMan señalando el logotipo oficial de TrendyCom"
                width={520}
                height={780}
                priority
                sizes="(max-width: 1024px) 92vw, 48vw"
                className="h-auto max-h-[76vh] w-auto object-contain drop-shadow-[10px_14px_0_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>

          {/* Logo oficial transparente */}
          <div className="relative flex min-h-[470px] items-start justify-center lg:min-h-[650px] lg:pt-8">
            <span
              aria-hidden
              className="absolute left-1/2 top-[36%] h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full action-lines opacity-20"
            />

            <span
              aria-hidden
              className="absolute left-1/2 top-[35%] h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow/15"
            />

            <div
              className="intro intro-pop relative z-20 flex w-full max-w-[520px] -translate-y-8 items-start justify-center sm:max-w-[600px] sm:-translate-y-10 lg:max-w-[650px] lg:-translate-y-24 xl:-translate-y-28"
              style={{ ["--intro-delay" as string]: "500ms" }}
            >
              <Image
                src="/images/portada/logo_trendycom_portada_transparente.png"
                alt="Logotipo oficial de TrendyCom sin fondo"
                width={1633}
                height={2048}
                priority
                sizes="(max-width: 1024px) 90vw, 48vw"
                className="h-auto max-h-[66vh] w-auto object-contain drop-shadow-[12px_15px_0_rgba(0,0,0,0.18)] transition duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de desplazamiento */}
      <div
        className="intro intro-fade pointer-events-none absolute inset-x-0 bottom-5 flex flex-col items-center gap-1"
        style={{ ["--intro-delay" as string]: "760ms" }}
      >
        <span className="text-comic text-sm uppercase tracking-[0.25em] text-navy/70">
          Desliza para explorar
        </span>

        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-5 w-5 animate-bounce text-red"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}

function DialogueBalloon() {
  return (
    <div className="relative aspect-[1024/771] w-full">
      <Image
        src="/images/portada/burbuja_dialogo.png"
        alt=""
        fill
        sizes="(max-width: 1024px) 92vw, 390px"
        className="object-contain"
      />

      <div className="absolute inset-x-[13%] top-[18%] z-10 flex h-[46%] items-center justify-center px-3 text-center">
        <p className="text-comic text-[clamp(0.95rem,1.05vw,1.14rem)] leading-[1.04] text-navy">
          TRENDYCOM SUBE DE NIVEL
          <br />
          TU ESTILO.
          <br />
          LO ÚLTIMO DE LA CULTURA GEEK
          <br />
          PARA TU DÍA A DÍA.
        </p>
      </div>
    </div>
  )
}
