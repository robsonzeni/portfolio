"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { CompaniesTicker } from "./companies-ticker";

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
            className="md:col-span-1 md:row-span-2 h-[425px]"
          >
            <Card className="glass bg-white/5 backdrop-blur-xl border-white/10 h-full">
              <CardBody className="p-0 overflow-hidden h-full">
                <Image
                  alt="Profile picture"
                  className="object-cover w-full h-[425px]"
                  src="/images/profile-orange.png"
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
              <Card className="glass bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader className="p-6 pb-0">
                   <p className="text-sm text-default-400 font-semibold">Quem sou</p>
                </CardHeader>
                <Divider className="my-4 bg-white/5" />
                <CardBody className="p-6 pt-0">
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
              <Card className="glass w-full bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader className="p-6 pb-0">
                  <p className="text-sm text-default-400 font-semibold">Desenhando experiências para</p>
                </CardHeader>
                <Divider className="my-4 bg-white/5" />
                <CardBody className="py-6 pt-2">
                  <CompaniesTicker />
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
