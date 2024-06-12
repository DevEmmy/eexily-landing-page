import React from 'react'

const HowItWorks = () => {

    const methods = [
        {
            text: "Download:  Get the Eexily app (iOS or Android)",
            img: "./pp1.png"
        },
        {
          text: "Order: Select your cylinder size and schedule a delivery.",
          img: "./p1.png"
        },
        {
          text: "Relax: We'll handle the rest! Get reminders and track your gas level right from your phone",
          img: "./p2.png"
        },
    ]
  return (
    <div className='bg-primary px-[10%] flex flex-col gap-10 text-white my-20'>
        <p className='my-10 text-center text-[24px] font-bold'>How it Works</p>
        <div className="grid grid-cols-3 gap-10">
          {
            methods.map((item, i)=>{
              return(
                <div className='flex justify-center items-center flex-col gap-2'>
                  <p className='p-2 font-bold w-fit rounded-full text-black size-[20px] text-[10px] flex justify-center items-center bg-white'>{i+1}</p>
                  <p>{item.text}</p>

                  <img src={item.img} alt="" />
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default HowItWorks