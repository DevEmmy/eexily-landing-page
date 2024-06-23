"use client"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const page = () => {
    const [state, handleSubmit] = useForm("xvgpprko");
    return (
        <div className='w-2/3 md:w-[90%] m-auto'>
            <p className='text-gray-700 mb-5  md:mb-2  font-bold text-end'>Driver Partner <span className='text-primary'>/Sign up</span></p>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 md:flex md:flex-col gap-5 border-2 border-gray-300 rounded-2xl p-10 md:p-5 form-container">
                <div>
                    <p>Full Name <sup>*</sup></p>
                    <input type="text" name="fullName" />
                </div>

                <div>
                    <p>Phone Number <sup>*</sup></p>
                    <input type="tel" name="phoneNumber" />
                </div>

                <div className='col-span-2'>
                    <p>Email Address (optional)</p>
                    <input type="text" name="email" />
                </div>

                <div>
                    <p>Valid Driver's License Number<sup>*</sup></p>
                    <input type="text" name="licenseNumber" />
                </div>

                <div>
                    <p>Expiry Date<sup>*</sup></p>
                    <input type="text" name="expiryDate" />
                </div>

                <p className='col-span-2 font-bold'>
                    Vehicle Information
                </p>

                <div>
                    <p>Type <sup>*</sup></p>
                    <input type="text" name="vehicleType" />
                </div>

                <div>
                    <p>Model <sup>*</sup></p>
                    <input type="text" name="vehicleModel" />
                </div>

                <div>
                    <p>Year <sup>*</sup></p>
                    <input type="number" name="vehicleYear" />
                </div>

                <div>
                    <p>License Plate Number<sup>*</sup></p>
                    <input type="text" name="licensePlate" />
                </div>

                <div className='col-span-2'>
                    <div className='flex gap-2 items-center justify-start'>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms" className='text-gray-500 text-sm'>I have read and agreed to all terms and conditions.</label>
                    </div>
                </div>

                <button type="submit" className='col-span-2 w-fit font-bold text-primary'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default page