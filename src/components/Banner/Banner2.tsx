"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import MainNav from "./MainNav";

const Banner2 = () => {
  const dropDown = [
    {
      title: "Driver Partner",
      link: "/driver-partner",
    },
    {
      title: "Rider Partner",
      link: "/rider-partner",
    },
    {
      title: "Gas Station Partner",
      link: "/gas-station-partner",
    },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [showDrop, setShowDrop] = useState(false);
  return (
    <div className="h-[400px] md:h-[237px] relative border-b-8 border-b-secondary">
      <div className="absolute top-0 left-0 -z-10 w-full">
        <div className="overlay2  md:h-[237px]" />
        <Image unoptimized width={0} height={0} src="/./b2.png" alt="" className=" w-full h-full md:h-[237px] object-cover" />
      </div>

      <div className="py-10 px-[5.7%]">
      <MainNav showGetStarted={false}/>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-20 md:mt-5">
        <p className="text-[30px] md:text-[20px] font-semibold text-white">
          Life made Easy for <span className="text-secondary">You</span>
        </p>
      </div>
    </div>
  );
};

export default Banner2;
