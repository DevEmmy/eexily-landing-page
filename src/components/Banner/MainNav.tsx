import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { HiChevronDown, HiX } from 'react-icons/hi';
import { RiMenuLine } from 'react-icons/ri';
import Nav from './Nav';
import Image from 'next/image';

interface Props{
    showGetStarted?: boolean;
}

const MainNav = ({showGetStarted = false}: Props) => {
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
        {
          title: "Investment Partner",
          link: "/investment-partner"
        },
      ];
    
      const [showDrop, setShowDrop] = useState(false);
    
      const slideRef = useRef(null);
    
      const [showNav, setShowNav] = useState(false)

  return (
    <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex gap-3 w-fit items-center"><div className="flex items-center md:gap-2 gap-1">
  <Image
    unoptimized
    width={0}
    height={0}
    src="/./logo.png"
    alt=""
    className="md:w-[29px] w-[40px] h-[40px] object-cover"
  />
  <p className="text-[42px] md:text-[20px] text-white font-semibold">Eexily</p>
</div>

            </div>
          </Link>

          <div className="flex gap-5 md:hidden items-center">
            {
                showGetStarted
                &&
                <Link href={"/get-started"}>
              <button className="bg-white font-semibold text-primary px-4 py-3 text-[20px] rounded-full">
                Get Started
              </button>
            </Link>
            }
            
            <div
              onClick={() => setShowDrop(!showDrop)}
              className="flex relative  text-white bg-transparent gap-2 border-2 border-white px-4 py-2 rounded-full cursor-pointer"
            >
              <p className="text-[20px] p-0 font-semibold">Partner with us</p>
              <HiChevronDown size={24} />

              {showDrop && (
                <div className="absolute top-14 border-[rgba(255,255,255,0.5)] border-2 bg-[#7db5ff51] rounded-md p-3 w-full -left-0 flex flex-col gap-3 z-[99]">
                  {dropDown.map((item, i) => {
                    return (
                      <Link href={item.link} className="text-[16px] " key={i}>
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <div onClick={()=> setShowNav(!showNav)}>
              {
                !showNav
                  ?
                  <RiMenuLine className="text-white" size={30} />
                  :
                  <HiX className="text-white" size={30} />
              }
            </div>

            {
              showNav
              &&
              <>
                <Nav setShowNav={setShowNav}/>
                <div className="overlay__nav" onClick={()=> setShowNav(false)}/>
              </>
            }


          </div>

        </div>
  )
}

export default MainNav