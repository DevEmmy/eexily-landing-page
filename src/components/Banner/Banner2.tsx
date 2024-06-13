"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const Banner2 = () => {
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
        }
    ]

    const [showDrop, setShowDrop] = useState(false);
    return (
        <div className='h-[400px] relative border-b-8 border-b-secondary'>
            <div className='absolute top-0 left-0 -z-10'>
                <div className="overlay" />
                <img src="./b2.png" alt="" className=' w-full h-[400px] object-cover' />
            </div>

            <div className="flex items-center justify-between z-30 px-[5.7%] py-10">
                <Link href={"/"}>
                    <div>
                        <p className='text-[32px] text-white font-extrabold'>Eexily.</p>
                    </div>
                </Link>

                <div className='flex gap-5'>

                    <div onClick={() => setShowDrop(!showDrop)} className='flex relative text-white bg-transparent gap-2 border-2 border-white px-5 py-2 rounded-full cursor-pointer'>
                        <p>Partner with us</p>
                        <HiChevronDown />

                        {
                            showDrop &&
                            <div className="absolute top-12 bg-[#7db5ff51] rounded-md p-3 w-full -left-0 flex flex-col gap-3">
                                {
                                    dropDown.map((item, i) => {
                                        return (
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

            <div className='flex flex-col items-center justify-center text-center mt-20'>
                <p className='text-[24px] font-extrabold text-white'>Life made Easy for <span className='text-secondary'>You</span></p>
            </div>
        </div>
    )
}

export default Banner2