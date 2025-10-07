export default function Proyectos() {
  const items = [
    { titulo: "Landing con Tailwind", desc: "Responsive + Lighthouse básico", link: "#" },
    { titulo: "CRUD (Laravel/Express + MySQL)", desc: "ABM simple + rutas REST", link: "#" },
    { titulo: "Sitio WordPress", desc: "Theme + páginas informativas", link: "#" },
  ];

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Proyectos</h1>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map((p) => (
          <li key={p.titulo} className="p-4 rounded-xl border bg-white shadow-sm">
            <h2 className="font-semibold">{p.titulo}</h2>
            <p className="text-sm text-neutral-600">{p.desc}</p>
            <a href={p.link} className="text-sm underline">Ver</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
