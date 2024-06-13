"use client";

import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Hero />

      <div className='grid grid-cols-[1fr_1fr] mx-[11%] my-32 gap-20'>
        <div className='flex flex-col gap-8'>
          <p className='text-primary font-bold text-[36px] leading-10'>We Know the Struggle!</p>
          <div className='bg-[#6782a534] flex  gap-3 flex-col p-3 w-2/3'>
            <p>Running out of gas is the worst! The stress, the wasted food,the scrambling to find a refill.</p>
            <p>We&apos;ve all been there, watching our neighbors struggle with the same issues.</p>
            <p>“That&apos;s why we created Eexily”</p>
          </div>
        </div>

        <img src="./s1.png" alt="" className='w-full object-cover h-[400px] rounded-[20px]' />
      </div>

      <div className='grid grid-cols-[1fr_1fr] mx-[11%] my-32 gap-20'>
        <img src="./s2.png" alt="" className='w-full object-cover h-[400px] rounded-[20px]' />

        <div className='flex flex-col gap-8'>
          <p className='text-primary font-bold text-[36px] leading-10'>Eexily is your personal kitchen assistant</p>
          <div className='bg-[#6782a534] flex gap-3 flex-col p-3 w-2/3'>
            <p>We deliver your gas before it runs out, so you can cook without worry.
            </p>
            <p>Plus, our app makes iteasy to track your usage,schedule refills, and get cooking inspiration. It even saves you from burning your food!"</p>

          </div>
        </div>
      </div>

      <div className='flex flex-col gap-8 items-center justify-center text-center'>
        <h2 className='text-primary font-bold text-[36px] leading-10'>Eexily powers businesses!</h2>
        <div className=' flex gap-10 flex-col p-3 w-2/3'>
          <p>Never worry about running out of gas during peak hours for your kitchen, generators, or any other needs. Get reliable refills, track usage across multiple locations, and streamline your operations.
          </p>
          <p><span className='text-primary font-bold'>Contact us</span> to learn more about our special business packages.</p>

        </div>

        <div className='grid grid-cols-2 gap-20 items-center justify-center'>
          <img src="./s3.png" alt="" className='rounded-[20px]' />
          <img src="./s4.png" alt="" className='rounded-[20px]' />
        </div>
      </div>

      <HowItWorks />

      <div className='grid grid-cols-[1fr_1.5fr] mx-[11%] my-32 gap-10'>
        <div className='flex flex-col gap-3'>
          <p className='text-primary font-bold text-[36px] leading-10'>Eexily is closer to you than you can imagine</p>
          <div className='flex  gap-3 flex-col w-2/3'>
            <p>Visit any of our outlet and experience the difference.</p>
          </div>
        </div>

        <img src="./map.png" alt="" className='w-full object-cover h-[400px] rounded-[20px]' />
      </div>

      <div className='flex flex-col gap-5 items-center justify-center text-center'>
        <h2 className='text-primary font-bold text-[36px] leading-10'>Ready to make cooking and life easy? </h2>
          <p>“Join the Eexily family and experience the difference. Download the app today!"
          </p>
        <img src="./s5.png" alt="" />
      </div>

      <Footer />

    </div>
  )
}

export default page