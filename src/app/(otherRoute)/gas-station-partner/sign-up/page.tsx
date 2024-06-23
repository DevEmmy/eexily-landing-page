"use client"
import React, { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';

const page = () => {
    const [state, handleSubmit] = useForm("mblrrygg");

    useEffect(()=>{
        if (state.succeeded) {
            toast.success("Thanks for signing up")
        }
    }, [state])

    return (
        <div className='w-2/3 md:w-[90%]  m-auto'>
            <p className='text-gray-700 mb-5 md:mb-2 font-bold text-end'>Gas Station Partner <span className='text-primary'>/Sign up</span></p>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 md:flex md:flex-col gap-5 border-2 border-gray-300 rounded-2xl p-10 md:p-5 form-container">
                <div>
                    <p>Gas Station Name <sup>*</sup></p>
                    <input type="text" name="gasStationName" />
                </div>

                <div>
                    <p>Phone Number <sup>*</sup></p>
                    <input type="tel" name="phoneNumber" />
                </div>

                <div className='col-span-2'>
                    <p>Email Address (optional)</p>
                    <input type="text" name="email" />
                </div>

                <div className='col-span-2'>
                    <p>Gas Station Address<sup>*</sup></p>
                    <input type="text" name="address" />
                </div>

                <div>
                    <p>Contact Person Name <sup>*</sup></p>
                    <input type="text" name="contactPersonName" />
                </div>

                <div>
                    <p>Title <sup>*</sup></p>
                    <input type="text" name="title" />
                </div>

                <div>
                    <p>LPG Storage Capacity <sup>*</sup></p>
                    <input type="number" name="storageCapacity" />
                </div>

                <div>
                    <p>Tax Identification Number (TIN) <sup>*</sup></p>
                    <input type="text" name="tin" />
                </div>

                <button type="submit" className='col-span-2 w-fit font-bold text-primary'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default page