"use client";
import { useState } from "react";

export default function Contacto() {
  const [ok, setOk] = useState(false);

  return (
    <main className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Contacto</h1>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          setOk(true);
        }}
      >
        <input className="w-full border rounded p-2" placeholder="Tu email" />
        <textarea className="w-full border rounded p-2" placeholder="Mensaje" rows={5} />
        <button className="px-4 py-2 rounded bg-black text-white">Enviar</button>
      </form>
      {ok && <p className="text-green-600">¡Gracias! Te responderé por escrito.</p>}
    </main>
  );
}
