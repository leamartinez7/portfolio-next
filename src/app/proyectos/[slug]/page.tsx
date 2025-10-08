import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>

      <div className="rounded-lg border bg-white p-2 dark:bg-neutral-900">
        {project.kind === "image" && (
          <Image src={project.src} alt={project.title} width={1280} height={720} className="w-full h-auto rounded" />
        )}

        {project.kind === "pdf" && (
          <iframe
            src={project.src}
            className="w-full h-[75vh] rounded"
            title={project.title}
          />
        )}

        {project.kind === "ai" && (
          <div className="p-6 text-sm">
            <p>Este es un archivo de Adobe Illustrator (.ai). No puede previsualizarse en el navegador.</p>
            <a
              href={project.src}
              download
              className="mt-3 inline-block rounded-md bg-neutral-900 px-4 py-2 text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
            >
              Descargar archivo .ai
            </a>
          </div>
        )}
      </div>

      <Link href="/proyectos" className="text-sm underline">← Volver a proyectos</Link>
    </main>
  );
}
