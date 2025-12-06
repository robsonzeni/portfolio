"use client";

import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("rzeniantunes@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <p className="font-bold text-xl tracking-tighter text-white">
            ROBSON ZENI
          </p>
          <p className="text-xs text-white/40 uppercase tracking-widest">
            © {currentYear} - Robson Zeni
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-6">
          <Tooltip content={isCopied ? "Copiado com sucesso!" : "Copiar email"} placement="top">
            <Link
              href="mailto:rzeniantunes@gmail.com"
              className="group"
              onClick={handleCopyEmail}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/svg/mail-alt-3-svgrepo-com.svg"
                  alt="Email"
                  fill
                  className="object-contain invert"
                />
              </motion.div>
            </Link>
          </Tooltip>
          <Link
            href="https://www.linkedin.com/in/robson-zeni/" // Placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
            >
              <Image
                src="/svg/linkedin-svgrepo-com.svg"
                alt="LinkedIn"
                fill
                className="object-contain invert" // Invert to make it white if the SVG is black
              />
            </motion.div>
          </Link>
        </div>

        {/* Right: Badge */}
        <div className="flex items-center">
          <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-500 tracking-wide uppercase">
              Agenda Aberta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
