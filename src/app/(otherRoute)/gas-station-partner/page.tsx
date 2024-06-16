import CategoryOverview from '@/components/CategoryOverview'
import React from 'react'

const page = () => {
  return (
    <div>
        <CategoryOverview
            title='Gas Station Partner'
            header='Boost Your Sales with Eexily'
            description='Partner with Eexily to increase your LPG sales, streamline your operations, and get valuable insights. Sign up to access our partner portal'
            buttonText='Join our Network'
            link='/gas-station-partner/sign-up'
            img='./gas.png'
        />
    </div>
  )
}

export default page