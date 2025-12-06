"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

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
    <section className="relative flex flex-col items-start justify-start pt-24 md:justify-center md:pt-0 h-screen overflow-hidden bg-black" id="home">
      {/* Profile Image Background */}
      <div 
        className="absolute right-0 bottom-0 md:right-[-10%] md:bottom-[-10%] z-10 pointer-events-none select-none h-full w-full md:w-auto flex items-end justify-end overflow-hidden"
        style={{
          maskImage: "linear-gradient(to top, transparent 0%, black 25%)",
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 25%)"
        }}
      >
        <img 
          src="/images/profile-bg.png" 
          alt="" 
          className="object-contain max-h-[70%] md:max-h-[110%] w-auto translate-x-[20%] md:translate-x-0 opacity-80 md:scale-95"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 25%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 55%)"
          }}
        />
      </div>

      {/* Unicorn Studio Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.30]"
        data-us-project="9BpNOKEzQM0nIggFwAV3" 
        style={{ 
          width: "100%", 
          height: "140%",
          maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 60%, transparent 100%)"
        }}
      ></div>

      {/* Side Vignette to hide horizontal cuts */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{ background: "linear-gradient(to right, #000 20%, transparent 40%, transparent 90%, #000 100%)" }}
      />

      {/* Global Hero Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black z-10 pointer-events-none" />

      <motion.div 
        style={{ opacity, scale }} 
        className="z-10 text-left max-w-4xl px-6 w-[70%] md:w-full container mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8 text-white leading-[1.1]">
            Escalando <span className="text-blue-600">negócios</span> <br />
            que impactam
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-lg font-light">
            Designer especializado em sistemas complexos e interfaces B2B.
          </p>
        </motion.div>
      </motion.div>

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
