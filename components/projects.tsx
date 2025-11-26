"use client";

import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Transformando Dados em Defesa Contra o Tráfico Internacional",
    category: "UX/UI Design",
    image: "/portfolio/images/hero-image-creatus.png",
    link: "#",
  },
  {
    title: "Aproximando Equipes, Processos e Clientes",
    category: "Product Design",
    image: "/portfolio/images/hero-image-r2pharma.png",
    link: "#",
  },
  {
    title: "Conectando Forças para Garantir Respostas Mais Rápidas e Humanas",
    category: "Sistema Web e Mobile App",
    image: "/portfolio/images/hero-image-dgt.png",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <>
      <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Projetos em Destaque</h2>
        </motion.div>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="w-full flex justify-center"
            >
              <Card className="h-[720px] w-full max-w-[1200px] group relative border-none bg-transparent shadow-none overflow-hidden rounded-3xl">
                <CardHeader className="absolute z-20 top-6 left-6 flex-col !items-start">
                  <p className="text-sm text-white/90 uppercase font-bold tracking-[0.2em] mb-2">{project.category}</p>
                  <h4 className="text-white font-bold text-3xl leading-tight max-w-2xl">{project.title}</h4>
                </CardHeader>
                
                {/* Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10 transition-opacity duration-500 group-hover:opacity-90" />
                  <Image
                    removeWrapper
                    alt={project.title}
                    className="z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                  />
                </div>

                {/* Footer with Blur and Button */}
                <CardFooter className="absolute bottom-0 z-20 justify-between border-t border-white/10 bg-black/40 backdrop-blur-2xl p-8 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div>
                    <p className="text-base text-white/80 font-light">Em breve...</p>
                  </div>
                  <Button 
                    className="text-sm font-semibold bg-white text-black hover:bg-zinc-200 border-none px-8 py-6" 
                    radius="full" 
                    size="lg" 
                  >
                    Em breve...
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};
