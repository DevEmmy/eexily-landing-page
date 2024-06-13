import Link from 'next/link'
import React from 'react'
import { RiAppStoreFill, RiAppStoreLine, RiFacebookBoxLine, RiFacebookCircleFill, RiGooglePlayFill, RiGooglePlayLine, RiInstagramFill, RiInstagramLine, RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
    const items = [
        {
            title: "Company",
            sub: [
                {
                    title: "About",
                    link: "/"
                },
                {
                    title: "Services",
                    link: "/"
                },
                {
                    title: "Blog",
                    link: "/"
                }
            ]
        },
        {
            title: 'Partner with us',
            sub: [
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
        },
        {
            title: "Support",
            sub: [
                {
                    title: "FAQ",
                    link: "/"
                },
                {
                    title: "Search Guide",
                    link: "/"
                }
            ]
        },
        {
            title: "Get in Touch",
            sub: [
                {
                    title: "Help Center",
                    link: "/"
                },
                {
                    title: "Contact",
                    link: "/"
                }
            ]
        }
    ]
    return (
        <div className='bg-primary relative mt-48 text-white grid grid-cols-5 gap-10 items-start justify-between px-[5.6%] pt-32 pb-10'>

            <div className='absolute -top-20 w-2/3 bg-white rounded-3xl shadow-lg flex gap-5 text-black items-center py-5 left-[16.67%]'>
                <img src="./mp.png" alt="" />
                <div >
                    <p className='font-bold text-[24px] text-primary'>Subscribe</p>    
                    <p>Subscribe to get timely updates and newsletter </p>
                </div>    

                <input type="email" name="" placeholder='email' id="" className='border border-gray-600 p-3 text-sm rounded-xl' />
            </div>

            {
                items.map((item, i) => {
                    return (
                        <div key={i} className='flex flex-col gap-3'>
                            <p className='text-white font-bold'>{item.title}</p>
                            <div className='flex flex-col gap-3'>
                                {
                                    item.sub.map((linkItem, i) => {
                                        return (
                                            <Link href={linkItem.link} className='text-sm'>
                                                {linkItem.title}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>Connect With Us</p>
                    <div className="flex text-[24px]">
                        <RiFacebookCircleFill />
                        <RiTwitterXFill />
                        <RiInstagramFill />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>Download the App</p>
                    <div className='flex text-[24px]'>
                        <RiGooglePlayFill />
                        <RiAppStoreFill />
                    </div>

                </div>
            </div>

            <div className='col-span-5 flex gap-20'>
                <p>Terms & Condition</p>
                <p>Privacy Notice</p>
                <p>Cookie settings</p>
                <p>&copy;{new Date().getFullYear()} Eexily.</p>
            </div>
        </div>
    )
}

export default Footer