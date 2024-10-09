import React from 'react'
import PricingPlans from '../landing_pages/PricingPlans'

const MidmarketBuyerSubscription = () => {
    return (
        <div className='flex-1'>
            <h1 className='font-semibold text-center text-primary  mt-4 md:hidden'>Plans & Pricing</h1>
            <h1 className='my-8 font-medium text-[20px] text-primary  py-3 text-center bg-[#00958026]  mx-2'>You haven't subscribed yet! Please subscribe and take a step forward</h1>
            <PricingPlans isShwoing={false} isLink={true} />

        </div>
    )
}

export default MidmarketBuyerSubscription