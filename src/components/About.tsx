"use client";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";

export default function About() {
  const { lang } = useLang();
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="card"
    >
      <h2 className="text-xl font-semibold mb-3">
        {lang === "es" ? "Sobre mí" : "About me"}
      </h2>
      <p className="opacity-85">
        {lang === "es"
          ? "Desarrollador web jr. con foco en front y bases de datos. Prefiero colaborar de forma escrita y asincrónica. Busco proyectos remotos y tareas claras (bugs, maquetado, componentes, pequeños CRUDs)."
          : "Junior web dev focused on front-end and databases. I prefer written, async collaboration. Looking for remote, well-scoped tasks (UI bugs, markup, components, small CRUDs)."}
      </p>
    </motion.section>
  );
}
