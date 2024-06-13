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
          img: "./pp3.png"
        },
    ]
  return (
    <div className='bg-primary px-[10%] flex flex-col gap-10 text-white my-20'>
        <p className='mt-20 text-center text-[24px] font-bold'>How it Works</p>
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-10 items-end">
          {
            methods.map((item, i)=>{
              return(
                <div key={i} className='flex justify-center items-center flex-col gap-2'>
                  <p className='p-2 font-bold w-fit rounded-full text-black size-[20px] text-[10px] flex justify-center items-center bg-white'>{i+1}</p>
                  <p className='text-center'>{item.text}</p>

                  {
                    i == 1 ? 
                    <div className="grid grid-cols-2 gap-2">
                      <img src="./p1.png" alt="" className='h-[300px] object-cover'/>
                      <img src="./p2.png" alt="" className='h-[300px] object-cover'/>
                    </div>
                    :

                    <img src={item.img} alt="" className='h-[300px] object-cover' />
                  }
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default HowItWorks