"use client";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";

const items = [
  {
    dateES: "2017–2021",
    dateEN: "2017–2021",
    title_es: "Bachiller en Economía y Administración",
    title_en: "High School Diploma (Economy & Management)",
    place: "",
    desc_es: "Formación secundaria.",
    desc_en: "Secondary education.",
  },
  {
    dateES: "Actual",
    dateEN: "Current",
    title_es: "Tecnicatura Superior en Diseño y Desarrollo Web",
    title_en: "Higher Technical Degree in Web Design & Dev",
    place: "Escuela Da Vinci (AR)",
    desc_es: "Estudiante.",
    desc_en: "Student.",
  },
  {
    dateES: "Certificados",
    dateEN: "Certificates",
    title_es: "UTN FRBA — 67 hs c/u",
    title_en: "UTN FRBA — 67h each",
    place: "",
    desc_es: "Desarrollo Web en HTML5 y CSS3 · Desarrollo Web con JavaScript",
    desc_en: "Web Dev with HTML5 & CSS3 · Web Dev with JavaScript",
  },
];

export default function Timeline() {
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
        {lang === "es" ? "Formación" : "Education"}
      </h2>

      <ol className="space-y-6">
        {items.map((it, i) => (
          <li
            key={i}
            className="grid grid-cols-[7rem_1px_1fr] gap-4 items-start relative"
          >
            {/* Columna fecha */}
            <div className="text-xs opacity-70 text-right pr-2 leading-6 select-none">
              {lang === "es" ? it.dateES : it.dateEN}
            </div>

            {/* Columna línea */}
            <div className="relative">
              <div className="absolute left-1/2 top-1 bottom-1 -translate-x-1/2 w-px bg-[color:var(--panel-border)]" />
              {/* Punto */}
              <span className="absolute left-1/2 top-1.5 -translate-x-1/2 size-3 rounded-full bg-white dark:bg-neutral-900 border border-[color:var(--panel-border)] shadow" />
            </div>

            {/* Columna contenido */}
            <div className="min-w-0">
              <div className="font-medium">
                {lang === "es" ? it.title_es : it.title_en}
                {it.place ? <span className="opacity-70"> — {it.place}</span> : null}
              </div>
              <p className="text-sm opacity-80">
                {lang === "es" ? it.desc_es : it.desc_en}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}
