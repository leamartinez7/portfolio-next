import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Proyectos() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Proyectos</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <li key={p.slug} className="p-3 rounded-xl border bg-white shadow-sm dark:bg-neutral-900">
            <Link href={`/proyectos/${p.slug}`}>
              <div className="aspect-video overflow-hidden rounded-lg border bg-neutral-100 dark:bg-neutral-800">
                {p.thumb ? (
                  <Image src={p.thumb} alt={p.title} width={640} height={360} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-neutral-500">Sin preview</div>
                )}
              </div>
              <h2 className="mt-2 font-semibold">{p.title}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
