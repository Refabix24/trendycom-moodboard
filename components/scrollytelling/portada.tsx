import Image from "next/image"

/**
 * Section 1 — Portada.
 *
 * TrendyMan y su globo de diálogo ahora forman una sola imagen PNG.
 * Esto evita que ambos elementos se separen o deformen al cambiar
 * el tamaño de la pantalla.
 */
export function Portada() {
  return (
    <section
      id="portada"
      data-section={1}
      aria-labelledby="portada-title"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-5 py-16 sm:px-8 lg:px-16"
    >
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

        <div className="relative mt-5 grid min-h-[590px] items-end gap-5 lg:mt-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
          {/* TrendyMan y el globo son una sola pieza responsive */}
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
              className="intro intro-hero relative z-20 flex w-full max-w-[560px] items-end justify-center sm:max-w-[650px] lg:max-w-[735px] lg:translate-x-7"
              style={{ ["--intro-delay" as string]: "340ms" }}
            >
              <Image
                src="/images/portada/trendyman_portada_con_dialogo.png"
                alt="TrendyMan señalando el logotipo de TrendyCom y presentando la propuesta mediante un globo de diálogo."
                width={1239}
                height={1724}
                priority
                sizes="(max-width: 1024px) 96vw, 52vw"
                className="h-auto max-h-[78vh] w-full object-contain drop-shadow-[10px_14px_0_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* Logotipo oficial transparente */}
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
