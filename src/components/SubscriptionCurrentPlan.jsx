import React from 'react'

const SubscriptionCurrentPlan = () => {
    return (
        <div className='border flex-1 p-6 rounded-2xl flex flex-col gap-7 h-fit'>
            <h2 className='text-[#18191C] font-medium text-[16px]'>Current Plan</h2>
            <h2 className='text-[#18191C] font-medium text-[32px]'>Premium</h2>
            <p className='text-[#767F8C] font-inter text-[16px]'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
            <aside className='w-full'>
                <button className='text-primary font-semibold text-[16px] bg-[#F1F2F4] px-3 py-2'>Change Plans</button>
                <button className='text-[#767F8C] font-semibold text-[16px]  px-3 py-2'>Cancel Plans</button>
            </aside>
        </div>
    )
}

export default SubscriptionCurrentPlan