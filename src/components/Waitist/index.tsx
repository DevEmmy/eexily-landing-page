import React, { useState } from 'react'
import Form from './Form'

const WaitlistModal = () => {
    const [showForm, setShowForm] = useState(false)

    
    return (
        <div className='modal__overlay'>
            {
                !showForm

                    ?

                    <div className='bg-white p-5 flex flex-col items-center justify-center gap-2 text-center'>
                        <img src="./waitlist.png" alt="" />
                        <p className='font-bold text-[20px]'>Our Super app will be live soon</p>
                        <p className='w-2/3'>
                            <span className='text-primary'>Join</span> the waitlist and be the first to get notified once available for download
                        </p>
                        <button className='bg-primary py-2 px-3 rounded-md text-white' onClick={() => setShowForm(true)}>Join Waitlist</button>
                    </div>

                    :

                    <Form />
        }
        </div>
    )
}

export default WaitlistModal