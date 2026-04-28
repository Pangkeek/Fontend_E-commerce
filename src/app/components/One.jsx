"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function One() {
  return (
    <div className="container mx-auto px-4 md:px-0 mt-4 md:mt-0">
      <div className="bg-gray-200 w-full h-auto rounded-[25px] relative overflow-hidden">
        <div className="px-6 py-12 md:px-[160px] md:py-[150px]">
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-4xl font-medium relative z-10">Best Solo</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 2, type: "spring", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-5xl md:text-7xl font-bold mt-[5px] md:mt-[15px] relative z-10">Wireless</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 2, type: "spring", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-[70px] sm:text-[100px] md:text-[190px] font-black mt-0 md:mt-[-30px] relative z-10 leading-none">
              HEADPHONE
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }} // Start off-screen to the left
            animate={{ opacity: 1, y: 0 }} // Slide to the right (x: 0)
            transition={{ duration: 2 }} // Animation duration
            viewport={{ once: true }}
          >
            <motion.div // Inner motion.div for hover effect
              whileHover={{ scale: 1.2, x: 20 }} // Hover animation
              whileTap={{ scale: 0.9, x: -10 }}
              className="relative z-10 mt-6 md:mt-0"
            >
              <a className="text-[15px] bg-red-600 py-3 md:py-5 px-6 md:px-10 text-white rounded-[30px] transform transition hover:text-red-600 hover:bg-white inline-block">
                Shop by Category
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0, y: 200 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 2, type: "spring", delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 mt-10 md:mt-0">
              <p className="text-left md:text-right font-bold">Description</p>
              <p className="text text-left md:text-right text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur
                <br className="hidden md:block" />
                adipiscing elit, sed do eiusmod tempor
                <br className="hidden md:block" />
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 4, type: "spring" }}
            viewport={{ once: true }}
            className="absolute top-[30%] right-[-30%] w-[300px] md:top-[15%] md:right-[15%] lg:right-[30%] md:w-[400px] lg:w-[500px] opacity-40 md:opacity-100 z-0 rotate-[12deg]"
          >
            <Image
              src="/61Xvn9KUgYL._AC_SL1500___95106-removebg-preview.png"
              width={500}
              height={100}
              alt="Headphone"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default One;
