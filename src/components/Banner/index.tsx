"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const Banner = () => {

  const dropDown = [
    {
      title: "Driver Partner",
      link: "/"
    },
    {
      title: "Rider Partner",
      link: "/"
    },
    {
      title: "Gas Station Partner",
      link: "/"
    }
  ]

  const [showDrop, setShowDrop] = useState(false);

  return (
    <div className='bg-primary relative h-[100vh]'>
      <img src="./banner-mask.png" alt="" className='absolute w-full h-[100vh] object-cover' />
      <img src="./star.png" alt="" className='absolute z-10 top-[40vh] left-[20%]'/>
      <img src="./star.png" alt="" className='absolute z-10 top-[70vh] right-[10%]'/>
      <div className='absolute z-10 w-full px-[5.7%] py-10'>
        <div className="flex items-center justify-between">
          <div>
            <p className='text-[32px] text-white font-extrabold'>Eexily.</p>
          </div>

          <div className='flex gap-5'>
            <button className='bg-white text-primary px-3 py-2 rounded-full'>Get Started</button>
            <div onClick={()=> setShowDrop(!showDrop)} className='flex relative text-white bg-transparent gap-2 border-2 border-white px-5 py-2 rounded-full cursor-pointer'>
              <p>Partner with us</p>
              <HiChevronDown />

              {
                showDrop &&
                <div className="absolute top-12 bg-[#7db5ff51] rounded-md p-3 w-full -left-0 flex flex-col gap-3">
                {
                  dropDown.map((item, i)=>{
                    return(
                      <Link href={item.link} className='text-sm '>
                        {item.title}
                      </Link>
                    )
                  })
                }
              </div>
              }

            </div>
          </div>
        </div>

        <div className='flex flex-col mt-[20vh] w-4/6 m-auto gap-32'>
          <div className="text-white flex items-center justify-center flex-col  text-center m-auto font-bold">
            <p>Are you tired of gas hassles too?</p>
            <h2 className='text-[50px]'>Skip the line, Order <span className='text-secondary'>Online!</span></h2>
            <p className='font-normal w-4/5'>With Eexily, you can now stay at home, know how much gas you have left, and order for a refill when you're running low without hassle or extra fees! Tell your neighbors!</p>
          </div>

          <p className='text-center font-bold text-white text-[30px]'>Life made Easy for <span className='text-secondary'>You</span></p>
        </div>
      </div>
    </div>
  )
}

export default Banner