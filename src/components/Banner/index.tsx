import Link from "next/link";
import React, { useState, useRef } from "react";
import { HiChevronDown } from "react-icons/hi";

import { motion, useInView, useScroll } from "framer-motion";

const Banner = () => {
  const dropDown = [
    {
      title: "Driver Partner",
      link: "/",
    },
    {
      title: "Rider Partner",
      link: "/",
    },
    {
      title: "Gas Station Partner",
      link: "/",
    },
  ];

  const [showDrop, setShowDrop] = useState(false);

  const slideRef = useRef(null);

  return (
    <div className="bg-primary relative h-[100vh]">
      <img
        src="./banner-mask.png"
        alt=""
        className="absolute w-full h-[100vh]   object-cover"
      />
      <motion.div
        animate={{
          x: ["10%", "0%", "10%"],
          y: ["-10%", "0%", "-10%"],
          transition: {
            duration: 2,
            ease: "easeIn",
            repeat: Infinity,
          },
        }}
        className="absolute z-10 top-[40vh] left-[20%]"
      >
        <img src="./star.png" alt="" className="" />
      </motion.div>
      <motion.div
        animate={{
          opacity: [1, 0.6, 1],
          rotateZ: [0, 360],
          scale: [1, 1.5, 1],
          transition: {
            duration: 4,
            ease: "easeIn",
            repeat: Infinity,
          },
        }}
        className="absolute z-10 top-[70vh] right-[10%]"
      >
        <img src="./star.png" alt="" className="" />
      </motion.div>

      <div className="absolute z-10 w-full px-[5.7%] py-10">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div>
              <p className="text-[32px] text-white font-extrabold">Eexily.</p>
            </div>
          </Link>

          <div className="flex gap-5">
            <Link href={"/get-started"}>
              <button className="bg-white text-primary px-3 py-2 rounded-full">
                Get Started
              </button>
            </Link>
            <div
              onClick={() => setShowDrop(!showDrop)}
              className="flex relative text-white bg-transparent gap-2 border-2 border-white px-5 py-2 rounded-full cursor-pointer"
            >
              <p>Partner with us</p>
              <HiChevronDown />

              {showDrop && (
                <div className="absolute top-12 bg-[#7db5ff51] rounded-md p-3 w-full -left-0 flex flex-col gap-3">
                  {dropDown.map((item, i) => {
                    return (
                      <Link href={item.link} className="text-sm " key={i}>
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[20vh] w-4/6 m-auto gap-32">
          <div className="text-white flex items-center justify-center flex-col  text-center m-auto font-bold">
            <p>Are you tired of gas hassles too?</p>
            <motion.h2
              animate={{
                scale: [1.0, 1.05, 1.0],
                transition: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
              className="text-[50px]"
            >
              Skip the line, Order{" "}
              <span className="text-secondary">Online!</span>
            </motion.h2>
            <p className="font-normal w-4/5">
              With Eexily, you can now stay at home, know how much gas you have
              left,and order for a refill when you're running low without hassle
              or extra fees! Tell your neighbors!
            </p>
          </div>

          <motion.p
            animate={{
              // rotateX: [0, 360],
              transition: {
                duration: 5,
                ease: "easeIn",
                repeat: Infinity,
                type: "spring",
                bounce: 0.9,
              },
            }}
            className="text-center font-bold text-white text-[30px]"
          >
            Life made Easy for <span className="text-secondary">You</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
