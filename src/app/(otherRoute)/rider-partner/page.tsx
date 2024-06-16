import CategoryOverview from '@/components/CategoryOverview'
import React from 'react'

const page = () => {
  return (
    <div>
        <CategoryOverview
            title='Rider Partner'
            header='Earn Extra Income with Eexily'
            description='Join our network of delivery riders and get paid for every LPG cylinder you deliver. Flexible hours, easy to get started'
            buttonText='Sign Up'
            link='/rider-partner/sign-up'
            img='./rider.png'
        />
    </div>
  )
}

export default page