"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [showSuccess, setShowSuccess] = useState(false)

    const [state, handleSubmit] = useForm("mdknnzad");
    
    useEffect(()=>{
        if (state.succeeded) {
            setShowSuccess(true)
        }
    }, [state])


    return (
        <>
            <div className='bg-white p-10 flex flex-col items-center justify-center gap-2 text-center md:w-[90%]'>
                {
                    !showSuccess

                        ?

                        <>
                            <p className='font-bold text-[20px] text-primary'>Join Waitlist</p>

                            <form onSubmit={handleSubmit} className='grid grid-cols-2 md:flex flex-col waitlist-form gap-5'>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" name="name" />
                                </div>

                                <div>
                                    <label htmlFor="number">Phone Number</label>
                                    <input id="number" type="number" name="number" />
                                </div>

                                <div className='col-span-2'>
                                    <label htmlFor="email">E-mail Address</label>
                                    <input id="email" type="email" name="email" />
                                </div>
                                <button className='bg-primary py-2 px-3 rounded-md text-white col-span-2' type='submit'>Join Waitlist</button>
                            </form>

                            
                        </>

                        :

                        <>
                            <img src="./success.png" alt="" />
                            <p className='font-bold text-[20px] text-primary'>Successful</p>
                            <p className='w-2/3 md:w-full'>You have been succssfully added to our waitlist and would be notified once the app is available to download</p>
                            <p><Link href="/" className='text-primary'>Click here</Link> to go back home</p>
                        </>
                }
            </div>
        </>
    )
}

export default Form