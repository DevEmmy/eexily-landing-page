import Link from 'next/link';
import React from 'react'

interface Props{
    title: string;
    header: string;
    description: string;
    link: string;
    buttonText: string
    img: string
}

const CategoryOverview = ({title, header, description, link, buttonText, img}: Props) => {
  return (
    <div className='flex flex-col gap-10'>
        <div className='relative flex items-center justify-center w-full'>
            <button className='w-fit h-[40px] rounded-lg gradient text-white px-5 font-bold'>{title}</button>
            <div className="line" />
        </div>

        <div className='flex flex-col gap-8'>
            <p className='text-[30px] font-semibold text-center text-primary'>{header}</p>
            <p className='text-[20px] m-auto text-center w-2/3'>{description}</p>
            <img src={img} alt="" className='mx-auto w-[80%]' />
            <Link href={link} className='text-center'>
                <button className='bg-primary text-white font-semibold px-5 py-2 rounded-lg'>{buttonText}</button>
            </Link>
        </div>
    </div>
  )
}

export default CategoryOverview