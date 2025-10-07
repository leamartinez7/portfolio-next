export default function Home() {
  return (
    <section className="grid gap-8">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">Leandro — Desarrollador Web Jr.</h1>
        <p className="mt-2 text-neutral-600">
          Argentina · 21 años · Inglés B2 (Cambridge). Estudiante de Tecnicatura Superior en Diseño y
          Desarrollo Web (Escuela Da Vinci). Prefiero comunicación escrita y asincrónica.
        </p>

        <div className="mt-4 flex gap-3">
          <a href="/proyectos" className="rounded-lg border px-4 py-2">Ver proyectos</a>
          <a href="/contacto" className="rounded-lg bg-neutral-900 px-4 py-2 text-white">Contacto</a>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Habilidades</h2>
        <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-neutral-700">
          <li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Vue</li>
          <li>React</li><li>Tailwind</li><li>PHP</li><li>Laravel</li>
          <li>Express</li><li>WordPress</li><li>MySQL/MariaDB</li><li>SQLite</li>
          <li>Supabase</li><li>phpMyAdmin</li><li>PWA (opcional)</li>
          <li>Photoshop/Illustrator</li>
        </ul>
      </div>
    </section>
  );
}
