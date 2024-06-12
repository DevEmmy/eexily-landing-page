import React from 'react'

const Hero = () => {
    const items = [
        {
            img: "./smile.png",
            text: "Happy Mom is a Happy Home!"
        },
        {
            img: "./noGas.png",
            text: "No Gas? No Stress"
        },
        {
            img: "./peace.png",
            text: "Phew! Peace of Mind!"
        },
        {
            img: "./wing.png",
            text: "Cooking gas,Minus the drama"
        }
    ]
  return (
    <div className='bg-[#F2F8FF] px-[10%] grid grid-cols-4 py-10 justify-center items-center'>
        {
            items.map((item, i)=>{
                return(
                    <div className='flex flex-col items-center justify-center'>
                        <img src={item.img} alt="" />
                        <p className='w-1/2 text-center'>{item.text}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Hero