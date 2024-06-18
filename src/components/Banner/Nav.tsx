import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiBikeLine, RiCarLine, RiGasStationLine, RiHome2Line } from 'react-icons/ri'

const Nav = () => {

    const navItems = [
        {
            title: "Home",
            icon: <RiHome2Line />,
            link: "/"
        },
        {
            title: "Rider Partner",
            icon: <RiBikeLine />,
            link: "/rider-partner"
        },
        {
            title: "Driver Partner",
            icon: <RiCarLine />,
            link: "/driver-partner"
        },
        {
            title: "Gas Station Partner",
            icon: <RiGasStationLine />,
            link: "/gas-station-partner"
        }
    ]
    return (
        <div className='hidden md:block absolute top-0 left-0 bg-white z-[100]  w-1/2 rounded-r-3xl'>
            <div className='p-5'>
                <div className="logo">
                    <Image src={"/./logo2.png"} width={30} height={30} alt='logo' />
                    <p className='text-[32px] font-semibold'>Eexily</p>
                </div>

                <div className='flex flex-col gap-3 py-10'>
                    {
                        navItems.map((item, i) => {
                            return (
                                <Link href={item.link} key={i}  className='flex gap-3 items-center text-[20px] hover:text-primary'>
                                    {item.icon}
                                    <p>{item.title}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex bg-[#BFDBFF] items-center justify-center py-16 rounded-br-3xl'>
                <button className='py-3 px-5 rounded-md text-white font-bold text-[20px] bg-primary'>Get Started</button>
            </div>

        </div>
    )
}

export default Nav