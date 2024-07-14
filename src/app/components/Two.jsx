"use client";

import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

function Two() {
  const leftslide1 = {
    initial: { opacity: 0, x: "-50%" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 2 },
    },
    hover: { scale: 1.1 },
    viewport : { once: true }
  };
  const leftslide2 = {
    initial: { opacity: 0, x: "-50%" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 2, delay: 0.2 },
    },
    hover: { scale: 1.1 },
  };
  const leftslide3 = {
    initial: { opacity: 0, x: "-50%" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 2, delay: 0.4 },
    },
    hover: { scale: 1.1 },
  };
  const rightslide1 = {
    initial: { opacity: 0, x: "50%" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 2, delay: 0 },
    },
    hover: { scale: 1.1 },
  };
  const rightslide2 = {
    initial: { opacity: 0, x: "50%" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 2, delay: 0.2 },
    },
    hover: { scale: 1.1 },
  };
  const rightslide3 = {
    initial: { opacity: 0, x: "50%" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 2, delay: 0.4 },
    },
    hover: { scale: 1.1 },
  };

  return (
    <div className="container mx-auto grid grid-cols-4 gap-8 mt-10">
      <motion.div
        variants={leftslide3}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <div className="bg-neutral-800 rounded-[25px] relative">
          <div className="px-[30px] pb-[70px] pt-[180px] relative">
            <p className="text-white text-xl z-30 relative">Enjoy</p>
            <p className="text-white text-3xl font-bold mt-2 z-30 relative">
              With
            </p>
            <p className="text-neutral-600 text-5xl font-black mt-2 z-30 relative">
              EARPHONE
            </p>
            <div className="mt-8 z-30 relative">
              <a className="text-[15px] bg-red-600 py-3 px-9 text-white rounded-[30px] transform transition hover:text-red-600 hover:bg-white z-30 relative">
                Browse
              </a>
            </div>
            <div className="absolute top-[100px] w-full flex justify-center z-10">
              <Image
                src="/earphonee-removebg-preview.png"
                width={800}
                height={800}
                className="w-auto"
                alt="Earphone Image"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={leftslide2}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <div className="bg-yellow-400 rounded-[25px]">
          <div className="px-[30px] pb-[70px] pt-[180px] relative">
            <p className="text-white text-xl">New</p>
            <p className="text-white text-3xl font-bold mt-2">Wear</p>
            <p className="text-yellow-200 text-5xl font-black mt-2">GADGET</p>
            <div className="mt-8">
              <a className="text-[15px] bg-white py-3 px-9 text-yellow-400 rounded-[30px] transform transition hover:text-white hover:bg-yellow-300 relative z-30">
                Browse
              </a>
            </div>
            <Image
              className="absolute top-[70px] z-10"
              src="/Hublot-Big-Bang-Unico-Yellow-Magic-Ceramic-Chronograph-2021-Watch-6-removebg-preview.png"
              width={800}
              height={800}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="col-span-2"
        variants={leftslide1}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <div className="col-span-2 bg-red-600 rounded-[25px]">
          <div className="px-[90px] pb-[70px] pt-[180px] relative">
            <p className="text-white text-xl">Trend</p>
            <p className="text-white text-3xl font-bold mt-2">Devices</p>
            <p className="text-red-400 text-5xl font-black mt-2">LAPTOP</p>
            <div className="mt-8">
              <a className="text-[15px] bg-white py-3 px-9 text-red-600 rounded-[30px] transform transition hover:text-white hover:bg-red-500 relative z-30">
                Browse
              </a>
            </div>
            <Image
              className="absolute top-[0px] right-[15px] z-10"
              src="/view-3d-laptop-device-with-screen-keyboard-removebg-preview.png"
              width={450}
              height={800}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={rightslide1}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        className="col-span-2"
        viewport={{ once: true }}
      >
        <div className="col-span-2 bg-gray-200 rounded-[25px] z-0">
          <div className="px-[90px] pb-[125px] pt-[125px] relative">
            <p className="text-black text-xl">Best</p>
            <p className="text-black text-3xl font-bold mt-2">Gaming</p>
            <p className="text-white text-5xl font-black mt-2">CONSOLE</p>
            <div className="mt-8">
              <a className="text-[15px] bg-red-600 py-3 px-9 text-white rounded-[30px] transform transition hover:text-red-600 hover:bg-white relative z-30">
                Browse
              </a>
              <Image
                className="absolute top-[30px] left-[180px] z-10"
                src="/ps5-product-thumbnail-01-en-14sep21.webp"
                width={700}
                height={800}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={rightslide2}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <div className="bg-green-500 rounded-[25px] z-0">
          <div className="px-[30px] pb-[180px] pt-[70px] relative">
            <p className="text-white text-xl">Play</p>
            <p className="text-white text-3xl font-bold mt-2">Game</p>
            <p className="text-green-300 text-5xl font-black mt-2">OCULUS</p>
            <div className="mt-8">
              <a className="text-[15px] bg-white py-3 px-9 text-green-500 rounded-[30px] transform transition hover:text-white hover:bg-green-400 relative z-30">
                Browse
              </a>
            </div>
            <Image
              className="absolute top-[220px] left-[60px] z-10"
              src="/section3b-headset.webp"
              width={300}
              height={100}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={rightslide3}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <div className="bg-sky-500 rounded-[25px] z-0">
          <div className="px-[30px] pb-[180px] pt-[70px] relative">
            <p className="text-white text-xl">New</p>
            <p className="text-white text-3xl font-bold mt-2">Amazon</p>
            <p className="text-sky-300 text-5xl font-black mt-2">SPEAKER</p>
            <div className="mt-8">
              <a className="text-[15px] bg-white py-3 px-9 text-sky-500 rounded-[30px] transform transition hover:text-white hover:bg-sky-400 relative z-30">
                Browse
              </a>
            </div>
            <Image
              className="absolute top-[150px] left-[0px] z-10"
              src="/2_JBL_FLIP6_3_4_RIGHT_BLUE_30192_x1-706491_4a9616e9-33a8-4bfe-b027-e433ca41e189-756422.webp"
              width={400}
              height={100}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Two;
