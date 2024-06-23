"use client"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const page = () => {
    const [state, handleSubmit] = useForm("mjkbbryr");

    return (
        <div className='w-2/3 md:w-[90%]  m-auto'>
            <p className='text-gray-700 mb-5 md:mb-2 font-bold text-end'>Investment Partner <span className='text-primary'>/Sign up</span></p>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 md:flex md:flex-col gap-5 border-2 border-gray-300 rounded-2xl p-10 md:p-5 form-container">
                <div>
                    <p>Name <sup>*</sup></p>
                    <input type="text" name="name" />
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
                    <p>Company/Organization (If Applicable)<sup>*</sup></p>
                    <input type="text" name="company" />
                </div>

                <div className='col-span-2'>
                    <p>Investment Interest (Briefly describe your investment focus and experience)</p>
                    <textarea name="investmentInterest" />
                </div>

                <div className='col-span-2'>
                    <p>How did you hear about Eexily?<sup>*</sup></p>
                    <textarea name="source" />
                </div>

                <div className='col-span-2'>
                    <p className='md:text-xs'>
                        By submitting this form, you agree to receive updates and information about Eexily and our investment opportunities. We respect your privacy and will never share your information with third parties without your consent.
                    </p>
                </div>

                <button type="submit" className='col-span-2 w-fit font-bold text-white px-5 py-2 rounded-md bg-primary' >
                    Submit
                </button>

                <div className='col-span-2'>
                    <p className='md:text-xs'>
                        (We'll be in touch shortly to schedule a personalized discussion about how you can become part of the Eexily success story)
                    </p>
                </div>
            </form>
        </div>
    )
}

export default page