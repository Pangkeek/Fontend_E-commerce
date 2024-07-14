"use client";

import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

function Three() {
  const show1 = {
    initial: { opacity: 0},
    whileInView: {
      opacity: 1,
      transition: { delay: 0.0, duration: 1 },
      scale:1
    },
  };
  const show2 = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { delay: 0.4, duration: 1 },
    },
  };
  const show3 = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { delay: 0.6, duration: 1 },
    },
  };
  const show4 = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { delay: 0.8, duration: 1 },
    },
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-evenly mt-16">
        <motion.div
          variants={show1}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="flex">
            <Image
              className="mr-8"
              src="/shipping-fast-solid-svgrepo-com (1).svg"
              width={60}
              height={100}
              alt="Shipping"
            />
            <div className="content-center">
              <p className="font-bold">Free Shipping</p>
              <p className="text-gray-400 text-sm">
                Free Shipping On All Order
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={show2}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="flex justify-evenly">
            <Image
              className="mr-8"
              src="/guarantee-svgrepo-com (1).svg"
              width={60}
              height={100}
              alt="Guarantee"
            />
            <div className="content-center">
              <p className="font-bold">Free Shipping</p>
              <p className="text-gray-400 text-sm">
                Free Shipping On All Order
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={show3}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="flex justify-evenly">
            <Image
              className="mr-8"
              src="/support-svgrepo-com (1).svg"
              width={60}
              height={100}
              alt="Support"
            />
            <div className="content-center">
              <p className="font-bold">Free Shipping</p>
              <p className="text-gray-400 text-sm">
                Free Shipping On All Order
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={show4}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="flex justify-evenly">
            <Image
              className="mr-8"
              src="/payment-card-svgrepo-com (1).svg"
              width={60}
              height={100}
              alt="Payment"
            />
            <div className="content-center">
              <p className="font-bold">Free Shipping</p>
              <p className="text-gray-400 text-sm">
                Free Shipping On All Order
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Three;
