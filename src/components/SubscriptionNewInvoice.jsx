import React from 'react'

const SubscriptionNewInvoice = () => {
    return (
        <div className='border flex-1 p-6 rounded-2xl flex flex-col gap-7 h-fit w-full'>
            <h2 className='text-[#18191C] font-medium text-[16px]'>Next Inovices</h2>
            <h2 className='font-medium text-[32px] font-inter text-primary'>Next Inovices</h2>
            <p className='text-[#18191C] font-inter font-medium text-[18px]'>Aug 30, 2024</p>
            <p className='flex'>
                <span className='text-[#767F8C] font-inter text-[14px]'>
                    Package started:
                </span>
                <span className='text-[#18191C] trext-[14px] font-inter'>
                    Aug 31, 2025
                </span>
            </p>
            <p className='text-[#767F8C] font-inter text-[16px]'>You have to pay this amount of money every month.</p>
            <aside className='w-full'>
                <button className='text-white font-semibold text-[16px] bg-primary px-3 py-2 w-full'>Pay Now &rarr;</button>
            </aside>
        </div>
    )
}

export default SubscriptionNewInvoice