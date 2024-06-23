"use client"
import React, { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react';

const page = () => {
    const [state, handleSubmit] = useForm("xyzggjkl");

    useEffect(()=>{
        if (state.succeeded) {
            
        }
    }, [state])
    return (
        <div className='w-2/3 md:w-[90%] m-auto'>
            <p className='text-gray-700 mb-5 md:mb-2 font-bold text-end'>Rider Partner <span className='text-primary'>/Sign up</span></p>
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
        <p>National ID card<sup>*</sup></p>
        <textarea name="nationalId" />
      </div>

      <div>
        <p>Driver's License<sup>*</sup></p>
        <textarea name="driversLicense" />
      </div>

      <p className='col-span-2 font-bold'>
        Motorcycle Information
      </p>

      <div>
        <p>Type <sup>*</sup></p>
        <input type="text" name="type" />
      </div>

      <div>
        <p>Model <sup>*</sup></p>
        <input type="text" name="model" />
      </div>

      <div>
        <p>Year <sup>*</sup></p>
        <input type="number" name="year" />
      </div>

      <div>
        <p>License Plate Number<sup>*</sup></p>
        <input type="text" name="licensePlate" />
      </div>

      <div className='col-span-2'>
        <p>Do you own a Smartphone</p>
        <div className="flex gap-5">
          <div className='flex gap-2'>
            <input type="radio" name="smartphone" id="smartphoneYes" value="yes" />
            <label htmlFor="smartphoneYes">Yes</label>
          </div>

          <div className='flex gap-2'>
            <input type="radio" name="smartphone" id="smartphoneNo" value="no" />
            <label htmlFor="smartphoneNo">No</label>
          </div>
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