import Image from 'next/image'
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
          link: "/about"
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
    <div className='bg-primary relative mt-48 text-white grid md:flex md:flex-col grid-cols-5 md:grid-cols-none gap-10 items-start justify-between px-[5.6%] pt-44 pb-10'>

      <div className="absolute -top-20 w-2/3 md:w-[90%] bg-white shadow-custom rounded-3xl pr-10 flex gap-5 justify-between text-black items-center py-3 left-[16.67%] md:left-[5%]">
        <Image unoptimized width={0} height={0} src="/./mp.png" alt="" className='size-[100px] object-cover' />

        <div className="flex gap-5 md:flex-col ">
          <div className="flex flex-col gap-2 md:gap-0">
            <p className="font-bold text-[30px] md:text-[20px] text-primary">Subscribe</p>
            <p className="text-sm">Subscribe to get timely updates and newsletter </p>
          </div>

          <div className='flex md:flex-col md:gap-3'>
            <input
              type="email"
              name=""
              placeholder="E-mail address"
              id=""
              className="bg-input p-3 text-lg md:text-sm rounded-l-xl focus:outline-none md:rounded-xl md:w-full"
            />
            <button className='bg-primary text-white font-semibold px-3 py-2 rounded-r-xl md:rounded-xl md:px-3 md:w-fit'>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {
        items.map((item, i) => {
          return (
            <div className='flex flex-col gap-3'>
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

      <div className='md:border-t w-full pt-5 md:border-t-white col-span-5 grid grid-cols-5 md:grid-cols-2 md:text-center md:justify-center md:items-center justify-between md:gap-5'>
        <p>Terms & Condition</p>
        <p>Privacy Notice</p>
        <p>Cookie settings</p>
        <p>&copy;{new Date().getFullYear()} Eexily.</p>
      </div>
    </div>
  )
}

export default Footer