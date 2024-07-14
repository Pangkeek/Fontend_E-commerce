"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function One() {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-200 w-full h-auto rounded-[25px]">
        <div className="px-[160px] py-[150px]">
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="text-4xl font-medium">Best Solo</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 2, type: "spring", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-7xl font-bold mt-[15px]">Wireless</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 2, type: "spring", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-[190px] font-black mt-[-30px]">
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
              whileHover={{ scale: 1.2,x:100 }} // Hover animation
              whileTap={{scale:0.9,x:-50}}
            >
              <a className="text-[15px] bg-red-600 py-5 px-10 text-white rounded-[30px] transform transition hover:text-red-600 hover:bg-white">
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
            <div>
              <p className="text-right font-bold">Description</p>
              <p className="text text-right">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit, sed do eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
            transition={{ duration: 4, type: "spring" }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: "200px",
              right: "700px",
              rotate: "12deg",
            }} // Set styles directly
          >
            <Image
              src="/61Xvn9KUgYL._AC_SL1500___95106-removebg-preview.png"
              width={500}
              height={100}
              alt="Headphone"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default One;
