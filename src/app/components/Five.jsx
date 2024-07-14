"use client";

import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

function Five() {
  const pop1 = {
    initial: { opacity: 0, x: 0, y: 30 },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1},
    },
    hover: { scale: 1.1 },
  };
  const pop2 = {
    initial: { opacity: 0, x: 0, y: 30 },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, delay: 0.2 },
    },

    hover: { scale: 1.1 },
  };
  const pop3 = {
    initial: { opacity: 0, x: 0, y: 30 },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, delay: 0.4 },
    },
    hover: { scale: 1.1 },
  };
  const pop4 = {
    initial: { opacity: 0, x: 0, y: 30 },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, delay: 0.6 },
    },
    hover: { scale: 1.1 },
  };
  return (
    <div className="container mx-auto mt-40">
      <div className="text-center">
        <p className="text-5xl font-bold">Best Seller Products</p>
        <p className="text-gray-500 mt-6">
          speakerThere are many variations passages
        </p>
      </div>
      <div className="grid grid-cols-4 gap-14 my-24">
        <motion.div
          variants={pop1}
          initial={"initial"}
          whileInView={"whileInView"}
          whileHover={"hover"}
          viewport={{ once: true }}
        >
          <div>
            <div className="bg-gray-200 flex justify-center items-center py-10 rounded-[25px]">
              <Image
                className="self-start absolute mr-56"
                src="/sale-svgrepo-com (2).svg"
                width={60}
                height={100}
                alt="Discount"
              />
              <Image
                className=""
                src="/Background (4).png"
                width={150}
                height={100}
                alt="Black_headphone"
              />
            </div>
            <p className="mt-6 font-medium">Beats black noir</p>
            <div className="flex mt-2">
              <p className="font-bold font-serif line-through text-gray-400">
                $995
              </p>
              <p className="font-bold font-serif ml-2">795$</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={pop2}
          initial={"initial"}
          whileInView={"whileInView"}
          whileHover={"hover"}
          viewport={{ once: true }}
        >
          <div>
            <div className="bg-gray-200 flex justify-center items-center py-10 rounded-[25px]">
              <Image
                className="self-start absolute mr-56"
                src="/sale-svgrepo-com (2).svg"
                width={60}
                height={100}
                alt="Discount"
              />
              <Image
                className="place-content-center"
                src="/360_F_581813566_e4ywdbkTYvxMbcDOL6ejx5WcYdySQeZj-removebg-preview.png"
                width={180}
                height={100}
                alt="Black_headpohne"
              />
            </div>
            <p className="mt-6 font-medium">Beadsound black tiger</p>
            <div className="flex mt-2">
              <p className="font-bold font-serif line-through text-gray-400">
                $795
              </p>
              <p className="font-bold font-serif ml-2">595$</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={pop3}
          initial={"initial"}
          whileInView={"whileInView"}
          whileHover={"hover"}
          viewport={{ once: true }}
        >
          <div>
            <div className="bg-gray-200 flex justify-center items-center py-10 rounded-[25px]">
              <Image
                className="place-content-center"
                src="/virtual-reality-or-vr-headset-isolated-on-transparent-background-vr-glasses-for-360-environment-games-or-simulation-training-generative-ai-free-png (1).webp"
                width={180}
                height={100}
                alt="VR"
              />
            </div>
            <p className="mt-6 font-medium">Vision wanda</p>
            <p className="mt-2 font-bold font-serif">$1195</p>
          </div>
        </motion.div>
        <motion.div
          variants={pop4}
          initial={"initial"}
          whileInView={"whileInView"}
          whileHover={"hover"}
          viewport={{ once: true }}
        >
          <div>
            <div className="bg-gray-200 flex justify-center items-center py-10 rounded-[25px]">
              <Image
                className="place-content-center"
                src="/laptoppng.parspng.com-5.png"
                width={300}
                height={100}
                alt="Macbook"
              />
            </div>
            <p className="mt-6 font-medium">Apple newton</p>
            <p className="mt-2 font-bold font-serif">$1200</p>
          </div>
        </motion.div>
        <motion.div
          variants={pop1}
          initial={"initial"}
          whileInView={"whileInView"}
          whileHover={"hover"}
          viewport={{ once: true }}
        >
          <div>
            <div className="bg-gray-200 flex justify-center items-center py-10 rounded-[25px]">
              <Image
                className="place-content-center"
                src="/pngimg.com - headphones_PNG101920.png"
                width={185}
                height={100}
                alt="Blue_headphone"
              />
            </div>
            <p className="mt-6 font-medium">JBL aquaman</p>
            <p className="mt-2 font-bold font-serif">$590</p>
          </div>
        </motion.div>
        <motion.div
          variants={pop2}
          initial={"initial"}
          whileInView={"whileInView"}
          whileHover={"hover"}
          viewport={{ once: true }}
        >
          <div>
            <div className="bg-gray-200 flex justify-center items-center py-10 rounded-[25px]">
              <Image
                className="place-content-center"
                src="/Background (5).png"
                width={230}
                height={100}
                alt="Marshall"
              />
            </div>
            <p className="mt-6 font-medium">Marshall big ass</p>
            <p className="mt-2 font-bold font-serif">$1995</p>
          </div>
        </motion.div>
        <motion.div
          variants={pop3}
          initial={"initial"}
          whileInView={"whileInView"}
          whileHover={"hover"}
          viewport={{ once: true }}
        >
          <div>
            <div className="bg-gray-200 flex justify-center items-center py-10 rounded-[25px]">
              <Image
                className="place-content-center"
                src="/beats-dre-headphones-speakers-and-accessories-currys-25.png"
                width={215}
                height={100}
                alt="BlackGold_headphone"
              />
            </div>
            <p className="mt-6 font-medium">Beats luxury gold</p>
            <p className="mt-2 font-bold font-serif">$495</p>
          </div>
        </motion.div>
        <motion.div
          variants={pop4}
          initial={"initial"}
          whileInView={"whileInView"}
          whileHover={"hover"}
          viewport={{ once: true }}
        >
          <div>
            <div className="bg-gray-200 flex justify-center items-center py-10 rounded-[25px]">
              <Image
                className="place-content-center"
                src="/pngtree-the-smartwatch-banner-png-image_11919210.png"
                width={180}
                height={100}
                alt="Smartwatch"
              />
            </div>
            <p className="mt-6 font-medium">Apple watch time</p>
            <p className="mt-2 font-bold font-serif">$995</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Five;
