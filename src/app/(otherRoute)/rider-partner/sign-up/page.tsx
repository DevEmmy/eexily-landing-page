import React from 'react'

const page = () => {
    return (
        <div className='w-2/3 m-auto'>
            <p className='text-gray-700 mb-5 font-bold text-end'>Rider Partner <span className='text-primary'>/Sign up</span></p>
            <div className="grid grid-cols-2 gap-5 border-2 border-gray-300 rounded-2xl p-10  form-container">
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
                    <p>National ID card<sup>*</sup></p>
                    <textarea name="" id="" />
                </div>

                <div>
                    <p>Driver's License<sup>*</sup></p>
                    <textarea name="" id="" />
                </div>

                <p className='col-span-2 font-bold'>
                    Motorcycle Information
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

                <div className='col-span-2'>
                    <p>Do you own a Smartphone</p>
                    <div className="flex gap-5">
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Yes</label>
                        </div>

                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">No</label>
                        </div>
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