export type BrandColor =
  | "navy"
  | "red"
  | "turquoise"
  | "yellow"
  | "orange"
  | "ink"

export interface SectionMeta {
  /** Section number 1–14 */
  n: number
  /** Anchor id used for navigation */
  id: string
  /** Short kicker shown above the title */
  kicker: string
  /** Section title (exactly the names defined by the brief) */
  title: string
  /** Accent color for the section's comic accents */
  accent: BrandColor
  /** Chapter this section belongs to (1–8) */
  chapter: number
}

export interface ChapterMeta {
  /** Chapter number 1–8 */
  n: number
  /** Short label for the discrete navigation */
  label: string
  /** First section id in the chapter (nav jump target) */
  targetId: string
}

/**
 * The 14 narrative sections. Titles come directly from the brief and must not
 * be altered. Content for each section is provided later, section by section.
 */
export const SECTIONS: SectionMeta[] = [
  { n: 1, id: "portada", kicker: "Capítulo 01", title: "Portada", accent: "red", chapter: 1 },
  {
    n: 2,
    id: "concepto",
    kicker: "Capítulo 02",
    title: "Concepto e Inspiración",
    accent: "yellow",
    chapter: 2,
  },
  {
    n: 3,
    id: "ref-comic",
    kicker: "Referencias Visuales",
    title: "Interfaz como Cómic",
    accent: "turquoise",
    chapter: 3,
  },
  {
    n: 4,
    id: "ref-navegacion",
    kicker: "Referencias Visuales",
    title: "Navegación Narrativa",
    accent: "orange",
    chapter: 3,
  },
  {
    n: 5,
    id: "ref-catalogos",
    kicker: "Referencias Visuales",
    title: "Catálogos y Personalidad Gráfica",
    accent: "red",
    chapter: 3,
  },
  {
    n: 6,
    id: "paleta",
    kicker: "Capítulo 04",
    title: "Paleta de Colores",
    accent: "turquoise",
    chapter: 4,
  },
  {
    n: 7,
    id: "tipografias",
    kicker: "Capítulo 05",
    title: "Tipografías",
    accent: "navy",
    chapter: 5,
  },
  {
    n: 8,
    id: "ilustraciones",
    kicker: "Identidad Gráfica",
    title: "Ilustraciones y Estilo Gráfico",
    accent: "yellow",
    chapter: 6,
  },
  {
    n: 9,
    id: "origen",
    kicker: "Identidad Gráfica",
    title: "Origen de TrendyMan",
    accent: "red",
    chapter: 6,
  },
  {
    n: 10,
    id: "logotipo",
    kicker: "Identidad Gráfica",
    title: "Evolución del Logotipo",
    accent: "orange",
    chapter: 6,
  },
  {
    n: 11,
    id: "app-referentes",
    kicker: "Aplicación de la Identidad",
    title: "Referentes Comerciales",
    accent: "turquoise",
    chapter: 7,
  },
  {
    n: 12,
    id: "app-productos",
    kicker: "Aplicación de la Identidad",
    title: "Productos e Interacción",
    accent: "yellow",
    chapter: 7,
  },
  {
    n: 13,
    id: "app-header",
    kicker: "Aplicación de la Identidad",
    title: "Header y Banner Principal",
    accent: "red",
    chapter: 7,
  },
  {
    n: 14,
    id: "conclusion",
    kicker: "Capítulo 08",
    title: "Conclusión Visual",
    accent: "navy",
    chapter: 8,
  },
]

/** The 8 principal chapters shown in the discrete navigation. */
export const CHAPTERS: ChapterMeta[] = [
  { n: 1, label: "Portada", targetId: "portada" },
  { n: 2, label: "Concepto", targetId: "concepto" },
  { n: 3, label: "Referencias", targetId: "ref-comic" },
  { n: 4, label: "Paleta", targetId: "paleta" },
  { n: 5, label: "Tipografías", targetId: "tipografias" },
  { n: 6, label: "Identidad", targetId: "ilustraciones" },
  { n: 7, label: "Aplicación", targetId: "app-referentes" },
  { n: 8, label: "Conclusión", targetId: "conclusion" },
]

/** Maps a brand color key to its CSS custom property token. */
export const COLOR_VAR: Record<BrandColor, string> = {
  navy: "var(--color-navy)",
  red: "var(--color-red)",
  turquoise: "var(--color-turquoise)",
  yellow: "var(--color-yellow)",
  orange: "var(--color-orange)",
  ink: "var(--color-ink)",
}
