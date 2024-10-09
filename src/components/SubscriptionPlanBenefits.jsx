import React from 'react'

const SubscriptionPlanBenefits = () => {
    return (
        <div className='flex-[2]'>
            <div className='border flex-1 p-6 rounded-2xl flex flex-col gap-8 '>
                <h2 className='text-[#18191C] font-medium text-[16px]'>Current Plan</h2>
                <p className='text-[#767F8C] font-inter text-[16px]'>Proin porta enim sit amet placerat finibus. Sed eget laoreet lorem.</p>
                <aside className='w-full flex flex-wrap gap-4 border-b pb-8'>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/Checks.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>Upto 30 Business Views</span>
                    </p>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/Checks.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>Predefined Process</span>
                    </p>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/Checks.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>verified Businesses Display</span>
                    </p>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/Checks.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>Access & Saved 20 Businesses </span>
                    </p>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/Checks.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>15 Proposals </span>
                    </p>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/Checks.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>24/7 Critical Support </span>
                    </p>
                </aside>
                <p className='text-[#767F8C] font-inter text-[16px]'>Remaining</p>
                <aside className='w-full flex flex-wrap gap-4 '>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/XCircle.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>5 Business Views</span>
                    </p>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/XCircle.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>1 save business remaining</span>
                    </p>
                    <p className='flex gap-3 items-center w-fit min-w-[238px]'>
                        <img src="/XCircle.png" alt="" />
                        <span className='text-[#474C54] font-inter text-[14px]'>5 Proposals</span>
                    </p>

                </aside>
            </div>

        </div>
    )
}

export default SubscriptionPlanBenefits