"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();

  const items = useMemo(
    () =>
      links.map((l) => {
        const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
        return { ...l, active };
      }),
    [pathname]
  );

  return (
    <ul className="flex gap-4">
      {items.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className={`px-2 py-1 rounded-md transition-colors ${
              l.active ? "bg-neutral-900 text-white" : "hover:bg-neutral-200"
            }`}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
