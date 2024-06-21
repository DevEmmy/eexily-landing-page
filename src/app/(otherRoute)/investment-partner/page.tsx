import CategoryOverview from '@/components/CategoryOverview'
import React from 'react'

const page = () => {
  return (
    <div>
        <CategoryOverview
            title='Investment Partner'
            header='Join the LPG Revolution in Africa'
            description='Partner with Eexily and Invest in a Proven, High-Growth Opportunity'
            buttonText='Join our Network'
            link='/investment-partner/sign-up'
            img='./investment.png'
        />
    </div>
  )
}

export default page