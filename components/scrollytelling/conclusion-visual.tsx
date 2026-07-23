import Image from "next/image"

import { Reveal } from "./reveal"

const ACCENT = "var(--color-navy)"

export function ConclusionVisual() {
  return (
    <section
      id="conclusion"
      data-section={14}
      aria-labelledby="conclusion-visual-title"
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
        <span className="absolute -left-24 top-20 h-80 w-80 rounded-full halftone-yellow opacity-70" />
        <span className="absolute -right-32 top-[28%] h-[430px] w-[430px] rounded-full action-lines opacity-40" />
        <span className="absolute -left-28 bottom-24 h-96 w-96 rounded-full halftone-red opacity-45" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-10 lg:mb-14">
          <Reveal direction="left">
            <div className="flex items-center gap-3">
              <span className="text-comic inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-ink bg-navy px-2 text-sm text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                14
              </span>

              <span className="text-comic text-sm uppercase tracking-[0.2em] text-navy/70">
                Cierre de la propuesta
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="conclusion-visual-title"
              className="text-comic mt-4 text-balance text-4xl leading-[0.95] text-navy sm:text-6xl lg:text-7xl"
            >
              Conclusión Visual
            </h2>
          </Reveal>

          <Reveal delay={140} direction="scale">
            <span className="mt-5 block h-1.5 w-24 rounded-full bg-navy" />
          </Reveal>
        </header>

        {/* Gran composición de cierre */}
        <Reveal direction="scale" delay={180}>
          <div className="group relative overflow-hidden rounded-2xl border-4 border-ink bg-navy shadow-[10px_10px_0_0_var(--color-ink)]">
            <span
              aria-hidden
              className="action-lines pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full opacity-20"
            />

            <span
              aria-hidden
              className="halftone-yellow pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full opacity-45"
            />

            <div className="relative grid min-h-[760px] items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-12 lg:py-14">
              <div className="relative z-10">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  La esencia de TrendyCom
                </span>

                <div className="mt-9 space-y-2">
                  <p className="text-comic text-5xl leading-none text-red drop-shadow-[4px_4px_0_var(--color-ink)] sm:text-6xl lg:text-7xl">
                    DINÁMICA
                  </p>

                  <p className="text-comic text-5xl leading-none text-yellow drop-shadow-[4px_4px_0_var(--color-ink)] sm:text-6xl lg:text-7xl">
                    NARRATIVA
                  </p>

                  <p className="text-comic text-5xl leading-none text-turquoise drop-shadow-[4px_4px_0_var(--color-ink)] sm:text-6xl lg:text-7xl">
                    AUTÉNTICA
                  </p>
                </div>

                <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                  Tres palabras resumen la dirección definida para la marca:
                  movimiento en la interfaz, una experiencia que se cuenta como
                  una historieta y una identidad propia que no depende de copiar
                  sus referentes.
                </p>
              </div>

              <div className="relative flex min-h-[620px] items-end justify-center">
                <div className="absolute left-0 top-8 z-20 max-w-[285px] rotate-[-3deg] rounded-[46%] border-[3px] border-ink bg-paper px-6 py-6 text-center shadow-[7px_7px_0_0_var(--color-ink)] sm:left-6">
                  <p className="text-comic text-base leading-tight text-navy sm:text-lg">
                    ¡LAS TENDENCIAS CAMBIAN,
                    <br />
                    PERO NUESTRA HISTORIA
                    <br />
                    APENAS COMIENZA!
                  </p>

                  <span
                    aria-hidden
                    className="absolute -bottom-5 right-12 h-10 w-10 rotate-45 border-b-[3px] border-r-[3px] border-ink bg-paper"
                  />
                </div>

                <Image
                  src="/images/conclusion-visual/trendyman_cierre_camisetas.png"
                  alt="TrendyMan sosteniendo dos camisetas de TrendyCom como imagen final de la propuesta visual."
                  width={1024}
                  height={1536}
                  quality={95}
                  sizes="(max-width: 1024px) 92vw, 52vw"
                  className="relative z-10 h-auto max-h-[720px] w-full object-contain drop-shadow-[12px_15px_0_rgba(0,0,0,0.30)] transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.015]"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Declaración visual */}
        <Reveal direction="scale" delay={120}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-red p-7 text-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9 lg:p-11">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0 opacity-20"
            />

            <div className="relative">
              <span className="text-comic inline-flex rounded-full border-2 border-ink bg-yellow px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                Declaración visual de marca
              </span>

              <h3 className="text-comic mt-7 max-w-5xl text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
                TrendyCom es una experiencia de comercio electrónico pensada
                para la comunidad geek, donde la interfaz cobra vida y comprar
                se siente como explorar las páginas de una historieta.
              </h3>

              <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-paper/85 sm:text-lg">
                La propuesta no busca colocar adornos de cómic sobre una tienda
                convencional. Su objetivo es construir una experiencia donde la
                navegación, el catálogo, las animaciones, TrendyMan y cada
                llamado a la acción pertenezcan al mismo universo narrativo.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Resumen editorial amplio */}
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-12">
          <Reveal direction="left" delay={70} className="lg:col-span-7">
            <article className="comic-panel relative h-full overflow-hidden rounded-2xl bg-card p-7 sm:p-9 lg:p-11">
              <span
                aria-hidden
                className="halftone pointer-events-none absolute inset-0"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-turquoise px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Una dirección definida
                </span>

                <h3 className="text-comic mt-6 text-balance text-3xl leading-tight text-navy sm:text-4xl">
                  La identidad visual, la mascota y la experiencia de compra ya
                  hablan el mismo idioma.
                </h3>

                <div className="mt-7 space-y-6 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  <div>
                    <h4 className="text-comic text-2xl text-red">
                      Estilo visual
                    </h4>

                    <p className="mt-2">
                      El Pop Art, el entintado tradicional, las tramas de medios
                      tonos, los contornos gruesos y las viñetas interactivas
                      construyen una interfaz expresiva sin abandonar el orden
                      ni la legibilidad.
                    </p>
                  </div>

                  <div className="border-t-2 border-dashed border-ink/25 pt-6">
                    <h4 className="text-comic text-2xl text-orange">
                      Mascota y anfitrión
                    </h4>

                    <p className="mt-2">
                      TrendyMan funciona como hilo conductor de toda la
                      experiencia. Presenta, orienta, rompe la cuarta pared y
                      conecta el mundo de las historietas con la compra, el
                      pedido y la entrega.
                    </p>
                  </div>

                  <div className="border-t-2 border-dashed border-ink/25 pt-6">
                    <h4 className="text-comic text-2xl text-turquoise">
                      Paleta y tipografía
                    </h4>

                    <p className="mt-2">
                      Los colores heroicos se equilibran con fondos de descanso
                      visual, mientras el sistema tipográfico de cómic mantiene
                      coherencia entre títulos, botones, mensajes y contenido
                      editorial.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal direction="right" delay={140} className="lg:col-span-5">
            <article className="relative flex h-full min-h-[560px] flex-col justify-between overflow-hidden rounded-2xl border-4 border-ink bg-yellow p-7 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-9">
              <span
                aria-hidden
                className="action-lines pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-25"
              />

              <div className="relative">
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-navy px-4 py-1 text-sm uppercase tracking-wider text-paper shadow-[3px_3px_0_0_var(--color-ink)]">
                  Síntesis
                </span>

                <h3 className="text-comic mt-7 text-balance text-4xl leading-tight text-navy sm:text-5xl">
                  La tienda deja de ser un catálogo estático y se convierte en
                  una historia que el usuario puede recorrer.
                </h3>

                <p className="mt-6 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  Cada sección desarrollada aporta una pieza del sistema:
                  referencias, color, tipografía, logotipo, mascota, productos,
                  interacción y navegación. Juntas forman una propuesta
                  consistente, presentable y preparada para avanzar hacia la
                  fase de diseño y desarrollo.
                </p>
              </div>

              <div className="relative mt-10 border-t-4 border-ink pt-7">
                <p className="text-comic text-2xl leading-tight text-red sm:text-3xl">
                  No es una tienda disfrazada de cómic.
                </p>

                <p className="text-comic mt-3 text-3xl leading-tight text-navy sm:text-4xl">
                  Es un cómic que también se puede comprar.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Gran cierre con logotipo */}
        <Reveal direction="scale" delay={180}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border-4 border-ink bg-paper-soft p-6 shadow-[10px_10px_0_0_var(--color-ink)] sm:p-9 lg:p-12">
            <span
              aria-hidden
              className="halftone pointer-events-none absolute inset-0"
            />

            <span
              aria-hidden
              className="action-lines pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
            />

            <div className="relative grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="text-comic inline-flex rounded-full border-2 border-ink bg-orange px-4 py-1 text-sm uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
                  Cierre de la propuesta
                </span>

                <h3 className="text-comic mt-7 text-balance text-4xl leading-tight text-navy sm:text-5xl">
                  TrendyCom ya tiene una voz, un rostro y una manera propia de
                  contar su historia.
                </h3>

                <p className="mt-6 text-pretty text-base leading-relaxed text-navy/80 sm:text-lg">
                  Esta conclusión no representa el final del proyecto, sino el
                  punto desde el cual la identidad puede transformarse en una
                  interfaz funcional. La siguiente etapa será convertir estas
                  decisiones visuales en componentes, recorridos y experiencias
                  reales para la comunidad.
                </p>

                <div className="mt-8 inline-flex rotate-[-2deg] rounded-[44%] border-[3px] border-ink bg-paper px-7 py-5 text-center shadow-[6px_6px_0_0_var(--color-ink)]">
                  <p className="text-comic text-xl leading-tight text-red sm:text-2xl">
                    ¡NOS VEMOS EN LA PRÓXIMA VIÑETA!
                  </p>
                </div>
              </div>

              <div className="relative flex min-h-[600px] items-center justify-center">
                <Image
                  src="/images/evolucion-logotipo/evolucion_logo_04_final.png"
                  alt="Logotipo oficial de TrendyCom como cierre de la propuesta visual."
                  width={1633}
                  height={2048}
                  quality={95}
                  sizes="(max-width: 1024px) 94vw, 48vw"
                  className="relative z-10 h-auto max-h-[700px] w-full object-contain drop-shadow-[12px_14px_0_rgba(0,0,0,0.22)] transition duration-700 hover:scale-[1.025]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
