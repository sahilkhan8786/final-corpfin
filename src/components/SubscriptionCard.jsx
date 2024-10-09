import React from 'react'

const SubscriptionCard = () => {
    return (
        <div className='border flex-1 p-6 rounded-2xl flex flex-col gap-7 h-fit w-full'>
            <article className='flex justify-between w-full '>
                <h2 className='text-[#18191C] font-medium text-[16px]'>Payment Card</h2>
                <p className='text-[#767F8C] text-[14px] flex items-center gap-3'>
                    <img src="/fi_edit.png" alt="" />
                    <span>
                        Edit Card
                    </span>
                </p>
            </article>
            <article className='flex w-full justify-between items-end'>
                <aside className='flex items-center gap-3'>
                    <img src="/Frame 51.png" alt="" />
                    <div className='flex flex-col'>
                        <span className='font-inter text-[#767F8C] text-[12px]'>Name on Card</span>
                        <h1 className='font-medium text-[16px] text-[#18191C]'>Bharath Reddy</h1>
                    </div>
                </aside>
                <aside>

                    <div className='flex flex-col'>
                        <span className='font-inter text-[#767F8C] text-[12px]'>Expiry date</span>
                        <h1 className='font-medium text-[16px] text-[#18191C]'>12/29</h1>
                    </div>
                </aside>
            </article>
            <article className='flex w-full justify-between items-end py-6 border-t'>
                <h1 className='text-[#18191C] font-inter text-[24px]'>6714 **** **** ****</h1>
            </article>

        </div>
    )
}

export default SubscriptionCard