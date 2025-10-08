"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useLang } from "./providers";

const links = [
  { href: "/", label: { es: "Inicio", en: "Home" } },
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
  { href: "/contacto", label: { es: "Contacto", en: "Contact" } },
];

export default function Nav() {
  const pathname = usePathname();
  const { lang } = useLang();

  const items = useMemo(
    () =>
      links.map((l) => {
        const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
        return { ...l, active };
      }),
    [pathname]
  );

  const base =
    "btn btn-ghost px-3 py-1.5"; // pill ghost (borde + hover sutil)
  const active =
    "bg-black text-white border-transparent dark:bg-white dark:text-black"; // estado activo

  return (
    <ul className="flex gap-2">
      {items.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            aria-current={l.active ? "page" : undefined}
            className={`${base} ${l.active ? active : ""}`}
          >
            {l.label[lang]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
