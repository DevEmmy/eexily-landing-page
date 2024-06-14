import Link from "next/link";
import React, { useState, useRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import Typewriter from 'typewriter-effect';

import { motion, useInView, useScroll } from "framer-motion";
import { RiMenu2Line, RiMenuLine } from "react-icons/ri";

const Banner = () => {
  const dropDown = [
    {
      title: "Driver Partner",
      link: "/driver-partner"
    },
    {
      title: "Rider Partner",
      link: "/rider-partner",
    },
    {
      title: "Gas Station Partner",
      link: "/gas-station-partner"
    },
  ];

  const [showDrop, setShowDrop] = useState(false);

  const slideRef = useRef(null);

  return (
    <div className="bg-primary relative h-[150vh] md:h-[100vh]">
      <img
        src="./banner-mask.png"
        alt=""
        className="absolute w-full h-[150vh] md:h-[100vh]  object-cover"
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
        className="absolute z-10 top-[55vh] left-[8%]"
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
        className="absolute z-10 top-[70vh] md:top-[20vh] right-[10%]"
      >
        <img src="./star.png" alt="" className="" />
      </motion.div>

      <div className="absolute z-10 w-full px-[5.7%] py-10">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex gap-3 w-fit items-center">
              <img src="./logo.png" alt="" className="md:w-[24px] object-cover"/>
              <p className="text-[42px] md:text-[20px] text-white font-semibold">Eexily</p>
            </div>
          </Link>

          <div className="flex gap-5 md:hidden">
            <Link href={"/get-started"}>
              <button className="bg-white font-semibold text-primary px-4 py-3 text-[20px] rounded-full">
                Get Started
              </button>
            </Link>
            <div
              onClick={() => setShowDrop(!showDrop)}
              className="flex relative  text-white bg-transparent gap-2 border-2 border-white px-6 py-3 rounded-full cursor-pointer"
            >
              <p className="text-[24px] font-semibold">Partner with us</p>
              <HiChevronDown size={24} />

              {showDrop && (
                <div className="absolute top-14 border-[rgba(255,255,255,0.5)] border-2 bg-[#7db5ff51] rounded-md p-3 w-full -left-0 flex flex-col gap-3">
                  {dropDown.map((item, i) => {
                    return (
                      <Link href={item.link} className="text-[20px] " key={i}>
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <RiMenuLine className="text-white" size={30} />
          </div>

        </div>

        <div className="flex flex-col mt-[35vh] md:mt-[30vh] w-full m-auto gap-32">
          <div className="text-white flex items-center justify-center flex-col  text-center m-auto font-bold">
            <p className="text-[30px] md:text-[16px]">Are you tired of gas hassles too?</p>
            <h2

              className="text-[72px] md:text-[24px]"
            >
              Skip the line, Order{" "}
              <span className="text-secondary">Online!</span>
            </h2>
            <p className="font-normal text-sm">
              With Eexily, you can now stay at home, know how much gas you have
              left,and order for a refill when you're running low without hassle
              or extra fees! Tell your neighbors!
            </p>
          </div>

          <div
           
            className="text-center font-bold text-white text-[30px] flex gap-2 items-center justify-center md:hidden"
          >
            <p className="text-[30px] md:hidden">Life made Easy for </p>

            <div className="text-secondary">
              <Typewriter
                options={{
                  strings: ['You', 'Your Family', 'Your Business'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
