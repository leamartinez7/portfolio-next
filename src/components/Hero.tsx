"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";

export default function Hero() {
  const { lang } = useLang();
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="card-soft"
    >
      <div className="flex items-center gap-5">
        <Image src="/profile.jpg" alt="Leandro" width={96} height={96} className="rounded-full border" />
        <div className="min-w-0">
          <h1 className="text-3xl font-extrabold tracking-tight">
            {lang === "es" ? "Leandro — Desarrollador Web Jr." : "Leandro — Junior Web Developer"}
          </h1>
          <p className="mt-2 muted">
            {lang === "es"
              ? "Argentina · 21 años · Inglés B2 (Cambridge). Estudiante de Tecnicatura en Diseño y Desarrollo Web (Escuela Da Vinci). Prefiero comunicación escrita y asincrónica."
              : "Argentina · 21 y/o · English B2 (Cambridge). Web Design & Dev student (Escuela Da Vinci). I prefer written, asynchronous communication."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/proyectos" className="btn btn-ghost">{lang === "es" ? "Ver proyectos" : "See projects"}</a>
            <a href="/contacto" className="btn btn-primary">{lang === "es" ? "Contacto" : "Contact"}</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
