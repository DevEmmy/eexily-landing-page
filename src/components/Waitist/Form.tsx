"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Form = () => {
    const [showSuccess, setShowSuccess] = useState(false)

    return (
        <>
            <div className='bg-white p-10 flex flex-col items-center justify-center gap-2 text-center md:w-[90%]'>
                {
                    !showSuccess

                        ?

                        <>
                            <p className='font-bold text-[20px] text-primary'>Join Waitlist</p>

                            <form action="" className='grid grid-cols-2 md:grid-cols-none waitlist-form gap-5'>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" />
                                </div>

                                <div>
                                    <label htmlFor="number">Phone Number</label>
                                    <input type="number" />
                                </div>

                                <div className='col-span-2'>
                                    <label htmlFor="email">E-mail Address</label>
                                    <input type="email" />
                                </div>
                            </form>

                            <button className='bg-primary py-2 px-3 rounded-md text-white' onClick={()=> setShowSuccess(true)}>Join Waitlist</button>
                        </>

                        :

                        <>
                            <img src="./success.png" alt="" />
                            <p className='font-bold text-[20px] text-primary'>Successful</p>
                            <p className='w-2/3'>You have been succssfully added to our waitlist and would be notified once the app is available to download</p>
                            <p><Link href="/" className='text-primary'>Click here</Link> to go back home</p>
                        </>
            }
            </div>
        </>
    )
}

export default Form