import Image from "next/image"

/**
 * Section 1 — Portada (cover).
 * Full-height, high-impact opening of the scrollytelling piece.
 *
 * DOM order is authored for mobile (logo → title/data → TrendyMan → phrase →
 * scroll cue). On large screens the same elements are re-placed with explicit
 * grid coordinates into two columns (text left, TrendyMan right).
 * Intro animations run a single time and finish fully visible.
 */
export function Portada() {
  return (
    <section
      id="portada"
      data-section={1}
      aria-labelledby="portada-title"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-5 py-20 sm:px-8 lg:px-16"
    >
      {/* Decorative background — subtle, always behind content */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <span className="intro intro-fade absolute inset-0 halftone" style={{ ["--intro-delay" as string]: "0ms" }} />
        <span
          className="intro intro-fade absolute -left-24 top-16 h-72 w-72 rounded-full halftone-red"
          style={{ ["--intro-delay" as string]: "120ms" }}
        />
        <span
          className="intro intro-fade absolute -right-16 bottom-10 h-64 w-64 rounded-full halftone-yellow"
          style={{ ["--intro-delay" as string]: "160ms" }}
        />
      </div>

      {/* Accent bar to match the other sections */}
      <span aria-hidden className="absolute left-0 top-0 h-full w-2 bg-red sm:w-3" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_auto_auto] lg:items-center lg:gap-x-8 lg:gap-y-6">
        {/* 1. Logo on a near-black comic panel — the logo's black bg blends in */}
        <div
          className="intro intro-pop relative flex w-full max-w-[260px] items-center justify-center overflow-hidden rounded-xl border-4 border-ink bg-ink px-4 py-2 shadow-[8px_8px_0_0_var(--color-ink)] lg:col-start-1 lg:row-start-1"
          style={{ ["--intro-delay" as string]: "120ms" }}
        >
          <span aria-hidden className="absolute inset-0 rounded-xl action-lines" />
          <Image
            src="/images/logo-trendycom.png"
            alt="Logotipo oficial de TrendyCom"
            width={320}
            height={480}
            priority
            className="relative h-auto max-h-[152px] w-auto object-contain"
          />
        </div>

        {/* 2. Title + credits */}
        <div className="flex flex-col items-start lg:col-start-1 lg:row-start-2">
          <h1
            id="portada-title"
            className="intro intro-up text-balance text-comic text-4xl leading-[0.95] text-navy sm:text-5xl lg:text-6xl"
            style={{ ["--intro-delay" as string]: "260ms" }}
          >
            Propuesta gráfica e identidad visual
          </h1>

          <div
            className="intro intro-up mt-5 flex flex-wrap items-center gap-x-3 gap-y-2"
            style={{ ["--intro-delay" as string]: "340ms" }}
          >
            <span className="text-comic rounded-full border-2 border-ink bg-turquoise px-4 py-1 text-base text-ink shadow-[3px_3px_0_0_var(--color-ink)] sm:text-lg">
              Fabián Enrique Ferro Valbuena
            </span>
            <span className="text-comic rounded-full border-2 border-ink bg-yellow px-4 py-1 text-base text-ink shadow-[3px_3px_0_0_var(--color-ink)] sm:text-lg">
              2025–2026
            </span>
          </div>
        </div>

        {/* 3. TrendyMan — full body, never cropped */}
        <div className="flex justify-center lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:justify-end">
          <div
            className="intro intro-hero relative flex w-full max-w-[300px] items-end justify-center sm:max-w-[360px] lg:max-w-[440px]"
            style={{ ["--intro-delay" as string]: "360ms" }}
          >
            {/* Explosion / burst glow behind the hero */}
            <span
              aria-hidden
              className="absolute inset-x-4 top-1/2 -z-10 aspect-square -translate-y-1/2 rounded-full bg-orange/15"
            />
            <span aria-hidden className="absolute inset-0 -z-10 halftone" />
            <Image
              src="/images/trendyman-portada.png"
              alt="TrendyMan, mascota oficial de TrendyCom"
              width={520}
              height={780}
              priority
              className="h-auto max-h-[66vh] w-auto object-contain drop-shadow-[6px_10px_0_rgba(0,0,0,0.22)]"
            />
          </div>
        </div>

        {/* 4. Brand phrase as a comic dialogue balloon */}
        <div
          className="intro intro-up relative w-full max-w-md lg:col-start-1 lg:row-start-3"
          style={{ ["--intro-delay" as string]: "440ms" }}
        >
          <div className="comic-panel relative rounded-2xl bg-card p-5 sm:p-6">
            <p className="text-pretty text-base font-medium leading-relaxed text-navy sm:text-lg">
              {"“TrendyCom sube de nivel tu estilo. Lo último de la cultura geek, para tu día a día”."}
            </p>
          </div>
          {/* Balloon tail */}
          <span
            aria-hidden
            className="absolute -bottom-3 left-10 h-6 w-6 rotate-45 border-b-[3px] border-r-[3px] border-ink bg-card"
          />
        </div>
      </div>

      {/* 5. Scroll cue */}
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
