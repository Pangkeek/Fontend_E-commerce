"use client";

import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

function Six() {
  return (
    <div className="container mx-auto">
      <div className="bg-green-500 rounded-[25px] flex justify-between mt-72 relative">
        <motion.div
          initial={{ opacity: 0, x: -300, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to the target position without jump
          transition={{ duration: 3, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="py-16 ml-32">
            <p className="text-white">20 % OFF</p>
            <p className="text-white text-8xl font-extrabold">HAPPY</p>
            <p className="text-white text-8xl font-extrabold">HOURS!</p>
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
        <div className="content-center mr-48">
          <p className="text-white">Beats Solo Air</p>
          <p className="text-white text-5xl font-bold mt-4">Summer Sale</p>
          <p className="text-white mt-4">
            Company that's grown from 270 to 480 employees in
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
          style={{
            alignContent : "center",
            position: "absolute",
            top: "-144px",
            left: "384px",
          }}
        >
        <Image
          className=""
          src="/SB05G104_sa200_er005.avif"
          width={450}
          height={100}
        />
        </motion.div>
      </div>
    </div>
  );
}

export default Six;
