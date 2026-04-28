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
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-10 px-4 md:px-0">
      <motion.div
        variants={leftslide3}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <div className="bg-neutral-800 rounded-[25px] relative overflow-hidden">
          <div className="px-6 pb-12 pt-32 md:px-[30px] md:pb-[70px] md:pt-[180px] relative">
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
            <div className="absolute top-[50%] right-[-20%] md:top-[100px] md:right-auto md:w-full flex md:justify-center z-10 w-[200px] md:w-auto opacity-50 md:opacity-100 pointer-events-none">
              <Image
                src="/earphonee-removebg-preview.png"
                width={800}
                height={800}
                className="w-full h-auto md:w-auto"
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
        <div className="bg-yellow-400 rounded-[25px] relative overflow-hidden">
          <div className="px-6 pb-12 pt-32 md:px-[30px] md:pb-[70px] md:pt-[180px] relative">
            <p className="text-white text-xl">New</p>
            <p className="text-white text-3xl font-bold mt-2">Wear</p>
            <p className="text-yellow-200 text-5xl font-black mt-2">GADGET</p>
            <div className="mt-8">
              <a className="text-[15px] bg-white py-3 px-9 text-yellow-400 rounded-[30px] transform transition hover:text-white hover:bg-yellow-300 relative z-30">
                Browse
              </a>
            </div>
            <Image
              className="absolute top-[40%] right-[-20%] md:top-[70px] md:right-auto z-10 w-[200px] md:w-[800px] h-auto opacity-50 md:opacity-100 pointer-events-none"
              src="/Hublot-Big-Bang-Unico-Yellow-Magic-Ceramic-Chronograph-2021-Watch-6-removebg-preview.png"
              width={800}
              height={800}
              alt="Yellow_watch"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="col-span-1 md:col-span-2"
        variants={leftslide1}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <div className="col-span-1 md:col-span-2 bg-red-600 rounded-[25px] relative overflow-hidden">
          <div className="px-6 pb-12 pt-32 md:px-[90px] md:pb-[70px] md:pt-[180px] relative">
            <p className="text-white text-xl">Trend</p>
            <p className="text-white text-3xl font-bold mt-2">Devices</p>
            <p className="text-red-400 text-5xl font-black mt-2">LAPTOP</p>
            <div className="mt-8">
              <a className="text-[15px] bg-white py-3 px-9 text-red-600 rounded-[30px] transform transition hover:text-white hover:bg-red-500 relative z-30">
                Browse
              </a>
            </div>
            <Image
              className="absolute top-[20%] right-[-10%] md:top-[0px] md:right-[15px] z-10 w-[250px] md:w-[450px] h-auto opacity-50 md:opacity-100 pointer-events-none"
              src="/view-3d-laptop-device-with-screen-keyboard-removebg-preview.png"
              width={450}
              height={800}
              alt="Red_laptop"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={rightslide1}
        initial="initial"
        whileInView="whileInView"
        whileHover="hover"
        className="col-span-1 md:col-span-2"
        viewport={{ once: true }}
      >
        <div className="col-span-1 md:col-span-2 bg-gray-200 rounded-[25px] z-0 relative overflow-hidden">
          <div className="px-6 pb-12 pt-32 md:px-[90px] md:pb-[125px] md:pt-[125px] relative">
            <p className="text-black text-xl">Best</p>
            <p className="text-black text-3xl font-bold mt-2">Gaming</p>
            <p className="text-white text-5xl font-black mt-2">CONSOLE</p>
            <div className="mt-8">
              <a className="text-[15px] bg-red-600 py-3 px-9 text-white rounded-[30px] transform transition hover:text-red-600 hover:bg-white relative z-30">
                Browse
              </a>
              <Image
                className="absolute top-[30%] right-[-10%] md:top-[30px] md:left-[180px] md:right-auto z-10 w-[250px] md:w-[700px] h-auto opacity-50 md:opacity-100 pointer-events-none"
                src="/ps5-product-thumbnail-01-en-14sep21.webp"
                width={700}
                height={800}
                alt="PS5"
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
        <div className="bg-green-500 rounded-[25px] z-0 relative overflow-hidden">
          <div className="px-6 pb-32 pt-12 md:px-[30px] md:pb-[180px] md:pt-[70px] relative">
            <p className="text-white text-xl">Play</p>
            <p className="text-white text-3xl font-bold mt-2">Game</p>
            <p className="text-green-300 text-5xl font-black mt-2">OCULUS</p>
            <div className="mt-8">
              <a className="text-[15px] bg-white py-3 px-9 text-green-500 rounded-[30px] transform transition hover:text-white hover:bg-green-400 relative z-30">
                Browse
              </a>
            </div>
            <Image
              className="absolute bottom-[10%] right-[-10%] md:top-[220px] md:bottom-auto md:left-[60px] md:right-auto z-10 w-[150px] md:w-[300px] h-auto pointer-events-none"
              src="/section3b-headset.webp"
              width={300}
              height={100}
              alt="VR"
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
        <div className="bg-sky-500 rounded-[25px] z-0 relative overflow-hidden">
          <div className="px-6 pb-32 pt-12 md:px-[30px] md:pb-[180px] md:pt-[70px] relative">
            <p className="text-white text-xl">New</p>
            <p className="text-white text-3xl font-bold mt-2">Amazon</p>
            <p className="text-sky-300 text-5xl font-black mt-2">SPEAKER</p>
            <div className="mt-8">
              <a className="text-[15px] bg-white py-3 px-9 text-sky-500 rounded-[30px] transform transition hover:text-white hover:bg-sky-400 relative z-30">
                Browse
              </a>
            </div>
            <Image
              className="absolute bottom-[10%] right-[-10%] md:top-[150px] md:bottom-auto md:left-[0px] md:right-auto z-10 w-[200px] md:w-[400px] h-auto pointer-events-none"
              src="/2_JBL_FLIP6_3_4_RIGHT_BLUE_30192_x1-706491_4a9616e9-33a8-4bfe-b027-e433ca41e189-756422.webp"
              width={400}
              height={100}
              alt="Blue_jbl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Two;
