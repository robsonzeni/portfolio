"use client";

import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Transformando Dados em Defesa Contra o Tráfico Internacional",
    category: "UX/UI Design",
    image: "/images/hero-image-creatus.png",
    link: "#",
  },
  {
    title: "Aproximando Equipes, Processos e Clientes",
    category: "Product Design",
    image: "/images/hero-image-r2pharma.png",
    link: "#",
  },
  {
    title: "Conectando Forças para Garantir Respostas Mais Rápidas e Humanas",
    category: "Sistema Web e Mobile App",
    image: "/images/hero-image-dgt.png",
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
              {/* Mobile Card */}
              <div className="flex flex-col gap-2 md:hidden w-full">
                {/* Main Card */}
                <Card className="w-full h-[450px] border-none relative" radius="lg">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                    <Image
                      alt={project.title}
                      className="object-cover w-full h-full"
                      src={project.image}
                      removeWrapper
                    />
                  </div>

                  {/* Internal Title Container */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 bg-zinc-900/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex justify-between items-center gap-4">
                    <h3 className="text-sm font-bold text-white leading-tight flex-1">{project.title}</h3>
                    <Button
                      className="bg-white text-black font-bold text-xs px-4 h-8 min-w-fit"
                      radius="lg"
                      size="sm"
                      variant="solid"
                    >
                      Ver projeto
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Desktop Card */}
              <Card className="hidden md:block h-[720px] w-full max-w-[1200px] group relative border-none bg-transparent shadow-none overflow-hidden rounded-3xl">
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
                <CardFooter className="absolute bottom-0 z-20 justify-between items-center border-t border-white/10 bg-black/40 backdrop-blur-2xl p-8 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex flex-col gap-2 max-w-3xl">
                    <p className="text-sm text-white/80 uppercase font-semibold tracking-widest">{project.category}</p>
                    <h3 className="text-3xl font-bold text-white leading-tight">{project.title}</h3>
                  </div>
                  <Button 
                    className="text-sm font-semibold bg-white text-black hover:bg-zinc-200 border-none px-8 py-6" 
                    radius="full" 
                    size="lg" 
                  >
                    Ver case
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
