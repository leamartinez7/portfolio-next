export type ProjectKind = "image" | "pdf" | "ai";

export type Project = {
  slug: string;
  title: string;
  description: string;
  kind: ProjectKind;
  src: string;      // ruta en /public (p.ej. /proyectos/landing.pdf o .jpg)
  thumb?: string;   // opcional: miniatura (para PDF/AI podés poner una imagen)
};

export const projects: Project[] = [
  {
    slug: "landing-tailwind",
    title: "Landing con Tailwind",
    description: "Responsive + Lighthouse básico.",
    kind: "image",
    src: "/proyectos/landing.jpg",
    thumb: "/proyectos/landing.jpg",
  },
  {
    slug: "crud-laravel",
    title: "CRUD (Laravel + MySQL)",
    description: "ABM simple + rutas REST.",
    kind: "pdf",
    src: "/proyectos/crud-laravel.pdf",
    thumb: "/proyectos/crud-thumb.jpg",
  },
  {
    slug: "branding-ai",
    title: "Branding (AI)",
    description: "Archivo Illustrator (descarga).",
    kind: "ai",
    src: "/proyectos/branding.ai",
    thumb: "/proyectos/branding-thumb.jpg",
  },
];
