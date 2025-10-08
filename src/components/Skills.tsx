"use client";
import { motion } from "framer-motion";
import BrandIcon from "./BrandIcon";
import { useLang } from "@/app/providers";
import { BRAND } from "@/data/brandColors";

const items = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React", slug: "react" },
  { name: "Vue", slug: "vue" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "PHP", slug: "php" },
  { name: "Laravel", slug: "laravel" },
  { name: "Express", slug: "express" },
  { name: "WordPress", slug: "wordpress" },
  { name: "MySQL", slug: "mysql" },
  { name: "MariaDB", slug: "mariadb" },
  { name: "SQLite", slug: "sqlite" },
  { name: "Supabase", slug: "supabase" },
  { name: "phpMyAdmin", slug: "phpmyadmin" },
  { name: "Photoshop", slug: "adobephotoshop" },
  { name: "Illustrator", slug: "adobeillustrator" },
];

function tint(hex: string, alpha = 0.12) {
  const a = Math.round(alpha * 255).toString(16).padStart(2, "0");
  return hex.replace("#", "#") + a; // simple rgba via hex8
}

export default function Skills() {
  const { lang } = useLang();
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="card"
    >
      <h2 className="text-xl font-semibold mb-4">
        {lang === "es" ? "Habilidades" : "Skills"}
      </h2>

      <ul className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        {items.map((it) => {
          const brand = BRAND[it.slug] || "#999999";
          return (
            <li
              key={it.name}
              className="skill py-2.5 relative overflow-hidden"
              title={it.name}
              style={{
                // tinte suave según marca
                background: `linear-gradient(0deg, ${tint(brand, 0.14)}, ${tint(
                  brand,
                  0.06
                )})`,
                borderColor: "var(--chip-border)",
              }}
            >
              <BrandIcon slug={it.slug} size={18} color={brand} />
              <span className="text-sm">{it.name}</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-20 transition"
                style={{ background: brand }}
              />
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
}
