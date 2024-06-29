import React from 'react';
import { motion } from 'framer-motion';
import MainNav from './MainNav';
import '../Reusables/flip.css'

const Banner: React.FC = () => {
  return (
    <div className="bg-primary relative h-[105vh] md:h-[540px]">
      <img
        src="./wirl.png"
        alt=""
        className="absolute w-full opacity mix-blend-soft-light md:h-[540px] object-cover"
      />
      <img
        src="./girls.png"
        alt=""
        className="absolute w-[80%] md:hidden left-[10%] z-[99] bottom-0 object-cover"
      />
      <img
        src="./girls-mobile.png"
        alt=""
        className="absolute h-[270px] hidden md:block w-[100%] left-0 bottom-0 object-cover"
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
        className="absolute top-[45vh] md:top-[35vh] left-[8%] md:size-[30px]"
      >
        <img src="./star.png" alt="" className="" />
      </motion.div>
      <motion.div
        animate={{
          opacity: [1, 0.6, 1],
          rotateZ: [0, 360],
          scale: [1, 1.2, 1],
          transition: {
            duration: 4,
            ease: "easeIn",
            repeat: Infinity,
          },
        }}
        className="absolute z-[99] top-[70vh] md:top-[13vh] md:size-[30px] right-[10%]"
      >
        <img src="./star.png" alt="" className="" />
      </motion.div>
      <div className="absolute z-10 w-full px-[5.7%] py-10">
        <div>
        <MainNav showGetStarted={true} />
        </div>
        <div className="flex flex-col mt-[10vh] md:mt-[5vh] w-full m-auto gap-32">
          <div className="text-white flex items-center justify-center flex-col text-center m-auto font-bold md:gap-2">
            <p className="text-[30px] md:text-[14px]">Are you tired of gas hassles too?</p>
            <h2 className="text-[72px] md:text-[22px]">
              Skip the line, Order <span className="text-secondary">Online!</span>
            </h2>
            <p className="font-normal text-[16px] md:text-xs w-2/3 md:w-full">
              With Eexily, you can now stay at home, know how much gas you have left, and order for a refill when you're running low without hassle or extra fees! Tell your neighbors!
            </p>
          </div>
          <div className="text-center font-bold text-white text-[30px] flex gap-2 items-center justify-center md:hidden">
  {/* <p className="text-[30px] md:hidden">Life made Easy for </p> */}

      <div className="text-center font-bold text-white text-[30px] flex gap-2 items-center justify-center">
        <p className="text-[30px]">Life made Easy for </p>
          <div id="flip">
          <div className="wrapper">
          <div className="words">
            <p>You</p>
            <p>Your Family</p>
            <p>Your Business</p>
            <p>You</p>
            <p>Your Business</p>
          </div>
        </div>
          </div>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
