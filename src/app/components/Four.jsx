"use client";

import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

function Four() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="bg-red-600 rounded-[25px] flex flex-col md:flex-row justify-between mt-32 md:mt-52 relative overflow-hidden md:overflow-visible">
        <div className="py-8 md:py-16 px-6 md:px-0 md:ml-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-white">20 % OFF</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-white text-5xl md:text-8xl font-extrabold">FINE</p>
            <p className="text-white text-5xl md:text-8xl font-extrabold">SMILE</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-white mt-2">15 Nov To 7 Dec</p>
          </motion.div>
        </div>
        <div className="content-center px-6 pb-12 pt-8 md:px-0 md:pb-0 md:pt-0 md:mr-48 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-white">Beats Solo Air</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-white text-3xl md:text-5xl font-bold mt-4">Summer Sale</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-white mt-4">
              Company that&apos;s grown from 270 to 480 employees in
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-white mb-12">the last 12 months.</p>
          </motion.div>
          <a className="text-[15px] text-red-600 py-3 px-9 bg-white rounded-[30px] transform transition hover:bg-red-500 hover:text-white">
            Shop
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 0, y: 200 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
          transition={{ duration: 3, type: "spring" }}
          viewport={{ once: true }}
          className="absolute top-[20%] right-[-30%] md:top-[-112px] md:left-[256px] md:right-auto z-0 opacity-30 md:opacity-100"
        >
          <Image
            src="/headphones-isolated-background-3d-rendering-illustration_494250-111255-removebg-preview.png"
            width={600}
            height={100}
            alt="Red_heaphone"
            className="w-[400px] md:w-[600px] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Four;
