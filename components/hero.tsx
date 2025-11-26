"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js";
    script.onload = function () {
      // @ts-ignore
      if (!window.UnicornStudio || !window.UnicornStudio.isInitialized) {
        // @ts-ignore
        UnicornStudio.init();
        // @ts-ignore
        window.UnicornStudio.isInitialized = true;
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-black" id="home">
      {/* Unicorn Studio Background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.20]"
        data-us-project="9BpNOKEzQM0nIggFwAV3" 
        style={{ width: "1440px", height: "900px" }}
      ></div>

      <div className="z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-[1.1]">
            Criando <br />
            <span className="text-zinc-400">Experiências</span> que impactam.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
            Designer especializado em sistemas complexos e interfaces B2B.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex gap-6 justify-center"
        >
          <Button
            as={Link}
            href="#projects"
            className="bg-white text-black font-semibold px-8 py-6 text-lg rounded-full hover:bg-zinc-200 transition-colors"
          >
            Ver projetos
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};
