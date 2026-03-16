"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Rahul Kushwaha
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-xl text-gray-400"
      >
        React & React Native Developer
      </motion.p>

      <p className="mt-4 max-w-xl text-gray-500">
        I build modern web and mobile applications and love exploring
        new technologies.
      </p>

    </section>
  );
}