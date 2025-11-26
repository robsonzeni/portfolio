"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-default-500">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="glass p-8">
            <CardBody>
              <form className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    variant="bordered"
                  />
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                  />
                </div>
                <Input
                  label="Subject"
                  placeholder="What is this about?"
                  variant="bordered"
                />
                <Textarea
                  label="Message"
                  placeholder="Tell me about your project"
                  minRows={4}
                  variant="bordered"
                />
                <Button color="primary" size="lg" className="w-full md:w-auto self-end font-semibold shadow-lg">
                  Send Message
                </Button>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
