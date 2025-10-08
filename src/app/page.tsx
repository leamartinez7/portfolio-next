import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <section className="grid gap-8">
      <Hero />
      <About />
      <Timeline />
      <Skills />
    </section>
  );
}
