import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";


export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
