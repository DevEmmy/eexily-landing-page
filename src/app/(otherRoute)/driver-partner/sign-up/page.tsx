import React from 'react'

const page = () => {
    return (
        <div className='w-2/3 md:w-[90%] m-auto'>
            <p className='text-gray-700 mb-5  md:mb-2  font-bold text-end'>Driver Partner <span className='text-primary'>/Sign up</span></p>
            <div className="grid grid-cols-2  md:flex md:flex-col gap-5 border-2 border-gray-300 rounded-2xl p-10   md:p-5  form-container">
                <div>
                    <p>Full Name <sup>*</sup></p>
                    <input type="text" />
                </div>

                <div>
                    <p>Phone Number <sup>*</sup></p>
                    <input type="tel" />
                </div>

                <div className='col-span-2'>
                    <p>Email Address (optional)</p>
                    <input type="text" />
                </div>

                <div>
                    <p>Valid Driver's License Number<sup>*</sup></p>
                    <input type="text" />
                </div>

                <div>
                    <p>Expiry Date<sup>*</sup></p>
                    <input type="text" />
                </div>

                <p className='col-span-2 font-bold'>
                    Vehicle Information
                </p>

                <div>
                    <p>Type <sup>*</sup></p>
                    <input type="text" />
                </div>

                <div>
                    <p>Model <sup>*</sup></p>
                    <input type="text" />
                </div>

                <div>
                    <p>Year <sup>*</sup></p>
                    <input type="number" />
                </div>

                <div>
                    <p>License Plate Number<sup>*</sup></p>
                    <input type="text" />
                </div>

                <div className='col-span-2 '>
                    <div className='flex gap-2 items-center justify-start !flex-row'>

                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='text-gray-500 text-sm'>I have read and agreed to all terms and conditions.</label>
                    </div>

                </div>

                <button className='col-span-2 w-fit font-bold text-primary'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default page