import CategoryOverview from '@/components/CategoryOverview'
import React from 'react'

const page = () => {
  return (
    <div>
        <CategoryOverview
            title='Driver Partner'
            header='Partner with Eexily and Grow Your Business'
            description='Use your truck or bus to help us deliver LPG and earn a steady income. Flexible schedule, competitive rates'
            buttonText='Apply now'
            link='/driver-partner/sign-up'
            img='./driver.png'
        />
    </div>
  )
}

export default page