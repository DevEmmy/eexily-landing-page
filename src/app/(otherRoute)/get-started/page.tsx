import Banner2 from '@/components/Banner/Banner2'
import React from 'react'
import { RiAppStoreFill, RiGooglePlayFill } from 'react-icons/ri'

const page = () => {

    const items = [
        {
            text: "Easy Ordering",
            icon: "ic1.png"
        },
        {
            text: "Usage Tracking",
            icon: "ic2.png"
        },
        {
            text: "Reminders",
            icon: "ic3.png"
        },
        {
            text: "AI Cooking assistant",
            icon: "ic4.png"
        },
    ]
    return (
        <div className='flex flex-col gap-32'>

            <div className='flex flex-col gap-3 items-center justify-center text-center'>
                <h2 className='text-primary font-bold text-[30px] leading-10'> Ready to Make Cooking and Power Generation Easier?</h2>
                <div className=' flex gap-10 flex-col p-3 w-2/3'>
                    <p>Download the Eexily app and enjoy hassle-free gas refills delivered right to your door. Track your usage, get reminders, and never run out again!
                    </p>

                </div>

                <div className='grid grid-cols-2 gap-10 items-center justify-center text-white download'>
                    <div className='bg-primary'>
                        <RiGooglePlayFill size={30}/>
                        <div>
                            <p>Download on</p>
                            <p className='font-bold'>Google Play</p>
                        </div>
                    </div>

                    <div className='bg-primary'>
                        <RiAppStoreFill size={30}/>
                        <div>
                            <p>Get it on</p>
                            <p>the <span className='font-bold'>App store</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-[1fr_1.5fr] gap-10 px-[11%]'>
                <ul className='!list-disc flex flex-col gap-5'>
                    {
                        items.map((item, i)=>{
                            return(
                                <li className='flex gap-2 list-disc items-center font-medium'>
                                    - {item.text}
                                    <img src={item.icon} alt="" className='size-[30px] object-cover'/>
                                </li>
                            )
                        })
                    }
                </ul>

                <img src="./s6.png" className='rounded-[20px]' alt="" />
            </div>

        </div>
    )
}

export default page