import React from 'react'

const page = () => {
  return (
    <div className='w-2/3 m-auto'>
        <p className='text-gray-700 mb-5 font-bold text-end'>Gas Station Partner <span className='text-primary'>/Sign up</span></p>
        <div className="grid grid-cols-2 gap-5 border-2 border-gray-300 rounded-2xl p-10  form-container">
            <div>
                <p>Gas Station Name <sup>*</sup></p>
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

            <div className='col-span-2'>
                <p>Gas Station Address<sup>*</sup></p>
                <input type="text" />
            </div>

            <div>
                <p>Contact Person Name <sup>*</sup></p>
                <input type="text" />
            </div>

            <div>
                <p>Title <sup>*</sup></p>
                <input type="text" />
            </div>

            <div>
                <p>LPG Storage Capacity <sup>*</sup></p>
                <input type="number" />
            </div>

            <div>
                <p>Tax Iddentification Number (TIN) <sup>*</sup></p>
                <input type="text" />
            </div>

            <button>
                Sign Up
            </button>
        </div>
    </div>
  )
}

export default page