"use client";

import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Coluna Esquerda: Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-1 md:row-span-2 h-[465px]"
          >
            <Card className="glass bg-white/5 backdrop-blur-xl border-white/10 h-full">
              <CardBody className="p-0 overflow-hidden h-full">
                <Image
                  alt="Profile picture"
                  className="object-cover w-full h-[465px]"
                  src="/images/profile-picture.jpeg"
                  radius="none"
                  removeWrapper
                  isBlurred
                />
              </CardBody>
            </Card>
          </motion.div>

          {/* Coluna Direita: Texto e Logos */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Card Superior: Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="glass p-6 bg-white/5 backdrop-blur-xl border-white/10">
                <CardBody>
                  <h3 className="text-2xl font-semibold mb-4">Quem sou</h3>
                  <p className="text-default-500 mb-4">
                    Ajudo empresas a entregar experiências melhores, aumentando seu ROE.
                  </p>
                  <p className="text-default-500">
                    Sou um Designer de Produto com experiência em B2B. Possuo sólidas habilidades em design visual e sou especializado em soluções completas que impulsionam o negócio e experiências sólidas. Atualmente, trabalho em uma startup que atende a demanda de grandes empresas.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Card Inferior: Logos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass p-4 bg-white/5 backdrop-blur-xl border-white/10">
                <CardBody className="flex flex-col justify-around items-left gap-0">
                  <h3 className="text-xl font-semibold mb-4">Ferramentas</h3>
                  <div className="flex flex-row justify-center items-center gap-24">
                  {/* Figma Logo */}
                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <svg width="48" height="48" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
                      <path d="M19 28.5C13.7533 28.5 9.5 32.7533 9.5 38C9.5 43.2467 13.7533 47.5 19 47.5V28.5Z" fill="#0ACF83"/>
                      <path d="M9.5 19C9.5 13.7533 13.7533 9.5 19 9.5V19H9.5Z" fill="#F24E1E"/>
                      <path d="M19 9.5C24.2467 9.5 28.5 13.7533 28.5 19C28.5 24.2467 24.2467 28.5 19 28.5V9.5Z" fill="#FF7262"/>
                      <path d="M9.5 28.5H19V38C19 43.2467 14.7533 47.5 9.5 47.5C4.24671 47.5 0 43.2467 0 38C0 32.7533 4.24671 28.5 9.5 28.5Z" fill="#1ABCFE"/>
                      <path d="M19 19H9.5C4.24671 19 0 14.7533 0 9.5C0 4.24671 4.24671 0 9.5 0H19V19Z" fill="#A259FF"/>
                    </svg>
                    <span className="text-sm text-default-400 font-medium">Figma</span>
                  </div>

                  {/* Claude Logo (Placeholder/Stylized) */}
                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#D97757] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-default-400 font-medium">Claude</span>
                  </div>

                  {/* Gemini Logo (Placeholder/Stylized) */}
                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-tr from-[#4E71F2] to-[#D65445] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="white"/>
                      </svg>
                    </div>
                    <span className="text-sm text-default-400 font-medium">Gemini</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
