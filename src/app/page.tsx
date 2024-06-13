"use client";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import React, { useRef } from "react";

import { motion, useInView, useScroll, useTransform } from "framer-motion";

const page = () => {
  const struggleRef = useRef(null);
  const isStruggleInView = useInView(struggleRef, { amount: "some" });

  const assistantRef = useRef(null);
  const isAssistantInView = useInView(assistantRef, { amount: "some" });

  const businessTextRef = useRef(null);
  const isBusinessTextInView = useInView(businessTextRef, { amount: "some" });

  const businessImagesRef = useRef(null);
  const isBusinessImagesInView = useInView(businessImagesRef, {
    amount: "some",
  });

  const closerRef = useRef(null);
  const isCloserInView = useInView(closerRef, { amount: "some" });

  const slideTextRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: slideTextRef,
    offset: ["start end", "end start"],
  });

  const slideInFromLeftHeader = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "50%"]
  );

  const slideImageRef = useRef(null);
  const { scrollYProgress: imageYProgress } = useScroll({
    target: slideImageRef,
    offset: ["start end", "end start"],
  });

  const slideInFromBottom = useTransform(imageYProgress, [0, 1], ["5%", "0%"]);

  return (
    <div>
      <Banner />
      <Hero />

      <div className="grid grid-cols-[1fr_1fr] mx-[11%] my-32 gap-20">
        <motion.div
          ref={struggleRef}
          animate={{
            x: isStruggleInView ? "0%" : "-20%",
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          className="flex flex-col gap-8"
        >
          <p className="text-primary font-bold text-[36px] leading-10">
            We Know the Struggle!
          </p>
          <div className="bg-[#6782a534] flex  gap-3 flex-col p-3 w-2/3">
            <p>
              Running out of gas is the worst! The stress, the wasted food,the
              scrambling to find a refill.
            </p>
            <p>
              We&apos;ve all been there, watching our neighbors struggle with
              the same issues.
            </p>
            <p>“That&apos;s why we created Eexily”</p>
          </div>
        </motion.div>

        <motion.div
          animate={{
            x: isStruggleInView ? "0%" : "20%",
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          ref={struggleRef}
          className="w-full  h-[400px] rounded-[20px] overflow-hidden"
        >
          <img src="./s1.png" alt="" className="object-cover w-full h-full" />
        </motion.div>
      </div>

      <div className="grid grid-cols-[1fr_1fr] mx-[11%] my-32 gap-20">
        <motion.div
          ref={assistantRef}
          animate={{
            y: isAssistantInView ? "0%" : "-20%",
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          className="w-full h-[400px] rounded-[20px] overflow-hidden"
        >
          <img src="./s2.png" alt="" className="object-cover w-full h-full" />
        </motion.div>

        <motion.div
          ref={assistantRef}
          animate={{
            y: isAssistantInView ? "0%" : "20%",
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          className="flex flex-col gap-8"
        >
          <p className="text-primary font-bold text-[36px] leading-10">
            Eexily is your personal kitchen assistant
          </p>
          <div className="bg-[#6782a534] flex gap-3 flex-col p-3 w-2/3">
            <p>
              We deliver your gas before it runs out, so you can cook without
              worry.
            </p>
            <p>
              Plus, our app makes iteasy to track your usage,schedule refills,
              and get cooking inspiration. It even saves you from burning your
              food!"
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center text-center">
        <motion.h2
          // style={{ x: slideInFromLeftHeader }}
          className="text-primary font-bold text-center text-[36px] leading-10"
        >
          Eexily powers businesses!
        </motion.h2>
        <div className=" flex gap-10 flex-col p-3 w-2/3">
          <motion.p
            ref={businessTextRef}
            
          >
            Never worry about running out of gas during peak hours for your
            kitchen, generators, or any other needs. Get reliable refills, track
            usage across multiple locations, and streamline your operations.
          </motion.p>
          <p>
            <span className="text-primary font-bold">Contact us</span> to learn
            more about our special business packages.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20 items-center justify-center">
          <motion.div
            ref={businessImagesRef}
            animate={{
              opacity: isBusinessImagesInView ? 1 : 0.8,
              scale: isBusinessImagesInView ? 1 : 0.5,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            }}
          >
            <img src="./s3.png" alt="" className="rounded-[20px]" />
          </motion.div>
          <motion.div
            ref={businessImagesRef}
            animate={{
              opacity: isBusinessImagesInView ? 1 : 0.8,
              scale: isBusinessImagesInView ? 1 : 0.5,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            }}
          >
            <img src="./s4.png" alt="" className="rounded-[20px]" />
          </motion.div>
        </div>
      </div>

      <HowItWorks />

      <div className="grid grid-cols-[1fr_1.5fr] mx-[11%] my-32 gap-10">
        <motion.div
          ref={closerRef}
          animate={{
            rotateZ: isCloserInView ? 0 : 20,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          className="flex flex-col gap-3"
        >
          <p className="text-primary font-bold text-[36px] leading-10">
            Eexily is closer to you than you can imagine
          </p>
          <div className="flex  gap-3 flex-col w-2/3">
            <p>Visit any of our outlet and experience the difference.</p>
          </div>
        </motion.div>

        <motion.div
          ref={closerRef}
          animate={{
            rotateZ: isCloserInView ? 0 : -20,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
        >
          <img
            src="./map.png"
            alt=""
            className="w-full object-cover h-[400px] rounded-[20px]"
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center text-center">
        <h2 className="text-primary font-bold text-[36px] leading-10">
          Ready to make cooking and life easy?{" "}
        </h2>
        <p>
          “Join the Eexily family and experience the difference. Download the
          app today!"
        </p>
        <motion.div ref={slideImageRef} style={{ y: slideInFromBottom }}>
          <img src="./s5.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
