import React, { FC, useRef } from "react";

import { motion, useInView } from "framer-motion";

const Hero = () => {
  const items = [
    {
      image: "./smile.png",
      text: "Happy Mom is a Happy Home!",
    },
    {
      image: "./noGas.png",
      text: "No Gas? No Stress",
    },
    {
      image: "./peace.png",
      text: "Phew! Peace of Mind!",
    },
    {
      image: "./wing.png",
      text: "Cooking gas, Minus the drama",
    },
  ];

  const ref1 = React.useRef(null);
  const isItem1InView = useInView(ref1, { amount: "all" });

  const ref2 = React.useRef(null);
  const isItem2InView = useInView(ref2, { amount: "all" });

  const ref3 = React.useRef(null);
  const isItem3InView = useInView(ref3, { amount: "all" });

  const ref4 = React.useRef(null);
  const isItem4InView = useInView(ref4, { amount: "all" });

  return (
    <div className="bg-[#F2F8FF] px-[10%] grid grid-cols-4 py-10 justify-center items-center">
      {items.map((item, i) => {
        return (
          <HeroItem key={i} image={item.image} text={item.text} index={i} />
        );
      })}
    </div>
  );
};

const HeroItem: FC<{ image: string; text: string; index: number }> = ({
  image,
  text,
  index,
}) => {
  const ref = useRef(null);
  const isItemInView = useInView(ref, { amount: "all" });

  return (
    <motion.div
      ref={ref}
      animate={{
        y: isItemInView ? "0%" : "20%",
        opacity: isItemInView ? 1 : 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.2,
        },
      }}
      className="flex flex-col items-center justify-center"
    >
      <img src={image} alt="" />
      <p className="w-1/2 text-center">{text}</p>
    </motion.div>
  );
};

export default Hero;
