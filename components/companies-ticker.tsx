"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  { name: "Honda", logo: "/logos/honda-logo.png", className: "scale-120" }, // Increased size
  { name: "LSL", logo: "/logos/lsl-logo.png", className: "p-4 scale-65" }, // Further reduced size
  { name: "VMI", logo: "/logos/vmi-logo.png", className: "p-1 scale-90" },
  { name: "R2Pharma", logo: "/logos/r2pharma-logo.png", className: "scale-125" }, // Increased size
  { name: "DGT", logo: "/logos/dgt-logo.png", className: "p-1 scale-105" },
  { name: "Orni", logo: "/logos/orni-logo.png", className: "p-1 scale-90" },
  { name: "Flutterando", logo: "/logos/flutter-logo.png", className: "scale-140" }, // Increased size
  { name: "Fun-Photo", logo: "/logos/fun-logo.png", className: "p-1 scale-90" },
];

export const CompaniesTicker = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full overflow-hidden mask-linear-fade">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/0 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/0 to-transparent z-10" />

        <motion.div
          className="flex items-center w-max"
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div 
              key={`${company.name}-${index}`} 
              className={`relative w-28 h-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mr-16 ${company.className || ""}`}
            >
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
