import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiBikeLine, RiCarLine, RiGasStationLine, RiHome2Line, RiShakeHandsLine } from 'react-icons/ri'
import logo from "@/../public/blue-logo.png"
import { title } from 'process'

const Nav = ({setShowNav}: any) => {

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
        },
        {
            title: "Investment Partner",
            icon: <RiShakeHandsLine />,
            link: "/investment-partner"
        }
    ]
    return (
        <div className='hidden md:flex flex-col justify-between absolute top-0 left-0 bg-white z-[100] shadow-xl min-w-[50%] rounded-r-3xl h-[100vh]'>
            <div className='p-5'>
                <div className="logo">
                    <Image src={logo} width={20} height={20} alt='logo' />
                    <p className='text-[20px] font-semibold'>Eexily</p>
                </div>

                <div className='flex flex-col gap-3 py-10'>
                    {
                        navItems.map((item, i) => {
                            return (
                                <Link href={item.link} onClick={()=> setShowNav(false)} key={i} className='flex gap-3 items-center text-[12px] hover:text-primary'>
                                    {item.icon}
                                    <p>{item.title}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex bg-[#FFF] items-center justify-center pb-20 rounded-br-3xl px-5'>
                <Link href={"/get-started"}>
                    <button className='py-3 px-10 rounded-md text-white font-bold text-[12px] bg-primary w-full'>Get Started</button>
                </Link>
            </div>

        </div>
    )
}

export default Nav