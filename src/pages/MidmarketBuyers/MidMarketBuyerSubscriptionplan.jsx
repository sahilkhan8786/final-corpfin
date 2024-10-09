import React from 'react'
import SubscriptionCurrentPlan from '../../components/SubscriptionCurrentPlan'
import SubscriptionPlanBenefits from '../../components/SubscriptionPlanBenefits'
import SubscriptionNewInvoice from '../../components/SubscriptionNewInvoice'
import SubscriptionCard from '../../components/SubscriptionCard'

const MidMarketBuyerSubscriptionplan = () => {
    return (
        <div className='flex my-12 flex-1  gap-4 flex-col '>
            <h1 className='font-semibold text-center text-primary  mt-4 md:hidden'>Plans & Billing</h1>
            <article className='flex gap-4 flex-col md:flex-row mx-6'>

                <div className='flex gap-4 flex-col'>

                    <SubscriptionCurrentPlan />
                    <SubscriptionNewInvoice />
                </div>
                <div className='w-full flex gap-4 flex-col'>
                    <SubscriptionPlanBenefits />
                    <SubscriptionCard />
                </div>
            </article>
            <article className='border rounded-2xl text-[#5E6670] font-inter'>
                <h1 className='font-medium font-inter text-[16px] text-[#18191C] p-3'>Latest Invoices</h1>
                <div className='flex w-full justify-between bg-[#F1F2F4] px-4 py-2'>
                    <span className='flex-1'>#ID</span>
                    <span className='flex-1'>DATE</span>
                    <span className='flex-1'>PLAN</span>
                    <span className='flex-1'>AMOUNT</span>
                </div>
                <div className='flex w-full justify-between border-b px-4 py-2'>
                    <span className='flex-1 text-[#18191C] font-medium text-[14px]'>#487441</span>
                    <span className='flex-1'>July 7, 2024 23:26</span>
                    <span className='flex-1'>Premium</span>
                    <span className='flex-1 flex items-center justify-between '>
                        £59.00 GBP
                        <img src="/DownloadSimple.png" alt="" className='cursor-pointer' />
                    </span>
                </div>
                <div className='flex w-full justify-between border-b px-4 py-2'>
                    <span className='flex-1 text-[#18191C] font-medium text-[14px]'>#487441</span>
                    <span className='flex-1'>July 7, 2024 23:26</span>
                    <span className='flex-1'>Premium</span>
                    <span className='flex-1 flex items-center justify-between '>
                        £59.00 GBP
                        <img src="/DownloadSimple.png" alt="" className='cursor-pointer' />
                    </span>
                </div>
                <div className='flex w-full justify-between border-b px-4 py-2'>
                    <span className='flex-1 text-[#18191C] font-medium text-[14px]'>#487441</span>
                    <span className='flex-1'>July 7, 2024 23:26</span>
                    <span className='flex-1'>Premium</span>
                    <span className='flex-1 flex items-center justify-between '>
                        £59.00 GBP
                        <img src="/DownloadSimple.png" alt="" className='cursor-pointer' />
                    </span>
                </div>
                <div className='flex w-full justify-between border-b px-4 py-2'>
                    <span className='flex-1 text-[#18191C] font-medium text-[14px]'>#487441</span>
                    <span className='flex-1'>July 7, 2024 23:26</span>
                    <span className='flex-1'>Premium</span>
                    <span className='flex-1 flex items-center justify-between '>
                        £59.00 GBP
                        <img src="/DownloadSimple.png" alt="" className='cursor-pointer' />
                    </span>
                </div>

                <article className='flex gap-4 items-center my-8 justify-center'>
                    <span className='cursor-pointer'>&larr;</span>
                    <span className='size-12 bg-primary flex items-center justify-center rounded-full text-white cursor-pointer hover:bg-[#F1F2F4] hover:text-black'>01</span>
                    <span className='size-12 flex items-center justify-center rounded-full text-black cursor-pointer hover:bg-[#F1F2F4] hover:text-black'>02</span>
                    <span className='size-12 flex items-center justify-center rounded-full text-black cursor-pointer hover:bg-[#F1F2F4] hover:text-black'>03</span>
                    <span className='size-12 flex items-center justify-center rounded-full text-black cursor-pointer hover:bg-[#F1F2F4] hover:text-black'>04</span>
                    <span className='size-12 flex items-center justify-center rounded-full text-black cursor-pointer hover:bg-[#F1F2F4] hover:text-black'>05</span>
                    <span className='cursor-pointer'>&rarr;</span>
                </article>
            </article>
        </div>
    )
}

export default MidMarketBuyerSubscriptionplan