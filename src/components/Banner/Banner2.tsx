"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

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
    <div className="h-[400px] relative border-b-8 border-b-secondary">
      <div className="absolute top-0 left-0 -z-10 w-full">
        <div className="overlay2" />
        <img src="./b2.png" alt="" className=" w-full h-[400px] object-cover" />
      </div>

      <div className="flex items-center justify-between z-30 px-[5.7%] py-10">
        <Link href={"/"}>
          <div className="flex gap-3 w-fit items-center">
            <img src="./logo.png" alt="" />
            <p className="text-[42px] text-white font-semibold">Eexily.</p>
          </div>
        </Link>

        {/* <div className="flex gap-5">
          <div
            ref={dropdownRef}
            onClick={() => setShowDrop(!showDrop)}
            className="flex relative text-white bg-transparent gap-1 border-2 border-white px-5 py-2 rounded-full cursor-pointer"
          >
            <p className="">Partner with us</p>
            <HiChevronDown
              className={`size-[24px] transition-all duration-300 ease-out ${
                showDrop ? "rotate-180" : "rotate-0"
              }`}
            />

            <div
              className={`absolute transition-all duration-300 ease-out top-12 bg-[#7db5ff51] rounded-md ${
                showDrop ? "opacity-100 p-3" : "opacity-0 p-0"
              } w-full -left-0 flex flex-col gap-3`}
            >
              {showDrop &&
                dropDown.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={item.link}
                      className="text-md hover:font-semibold hover:text-lg transition-all duration-100 ease-out"
                    >
                      {item.title}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div> */}

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
                  <Link href={item.link} className="text-[20px]" key={i}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-20">
        <p className="text-[30px] font-semibold text-white">
          Life made Easy for <span className="text-secondary">You</span>
        </p>
      </div>
    </div>
  );
};

export default Banner2;
