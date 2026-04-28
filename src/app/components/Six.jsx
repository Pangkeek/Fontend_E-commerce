"use client";

import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

function Six() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="bg-green-500 rounded-[25px] flex flex-col md:flex-row justify-between mt-32 md:mt-72 relative overflow-hidden md:overflow-visible">
        <motion.div
          initial={{ opacity: 0, x: -300, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
          transition={{ duration: 3, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="py-8 md:py-16 px-6 md:px-0 md:ml-32 relative z-10">
            <p className="text-white">20 % OFF</p>
            <p className="text-white text-5xl md:text-8xl font-extrabold">HAPPY</p>
            <p className="text-white text-5xl md:text-8xl font-extrabold">HOURS!</p>
            <p className="text-white mt-2">15 Nov To 7 Dec</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
          transition={{ duration: 3, type: "spring" }}
          style={{alignContent : "center"}}
          viewport={{ once: true }}
        >
        <div className="content-center px-6 pb-12 pt-8 md:px-0 md:pb-0 md:pt-0 md:mr-48 relative z-10">
          <p className="text-white">Beats Solo Air</p>
          <p className="text-white text-3xl md:text-5xl font-bold mt-4">Summer Sale</p>
          <p className="text-white mt-4">
            Company that&apos;s grown from 270 to 480 employees in
          </p>
          <p className="text-white mb-12">the last 12 months.</p>
          <a className="text-[15px] text-green-500 py-3 px-9 bg-white rounded-[30px] transform transition hover:bg-green-400 hover:text-white">
            Shop
          </a>
        </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300, y: 0,rotateZ:90}}
          whileInView={{ opacity: 1, x: 0, y: 0 ,rotateZ:0}} // Animate to the target position without jump
          transition={{ duration: 1.5}}
          viewport={{ once: true }}
          className="absolute top-[20%] right-[-30%] md:top-[-144px] md:left-[384px] md:right-auto z-0 opacity-30 md:opacity-100 flex items-center"
        >
        <Image
          className="w-[300px] md:w-[450px] h-auto"
          src="/SB05G104_sa200_er005.avif"
          width={450}
          height={100}
          alt="Green_watch"
        />
        </motion.div>
      </div>
    </div>
  );
}

export default Six;
