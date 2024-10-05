import React from 'react'


const PricingPlans = () => {
    return (
        <>

            <div className="w-full h-[70vh] ">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#D8D8D8] bg-cover bg-center px-3 md:px-0 `}>
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full px-2 items-start justify-end bg- h-full " >


                        <h1 className='  bg-white text-black font-semibold text-[40px] md:text-[72px] px-2 md:pr-16   text-left'>Pricing Plans</h1>
                    </div>
                </article>
            </div>
            <div className='w-full max-w-[1440px] mx-auto  my-24 flex gap-4 items-center justify-center flex-col'>
                <article className='border w-[312px] px-4 py-6 rounded-xl '>
                    <h1 className='font-semibold text-[16px] text-[#18191C] my-4'>Basic</h1>
                    <p className='text-[14px] text-[#767F8C]'>Praesent eget pulvinar orci. Duis ut pellentesque ligula convalis.</p>
                    <p className='mb-3'>
                        <span className='font-medium text-[36px] text-primary font-inter'>£19</span>
                        <span className='font-inter text-[16px] text-[#9199A3]'>/Account</span>
                    </p>
                    <div className='border-t flex flex-col gap-3 py-4'>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Upto 10 Business Views</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Predefined Process</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Only verified Businesses Display</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Access & Saved 10 Businesses </p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Upto 14days Free Trial</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>24/7 Support</p>
                        </article>
                    </div>
                    <button className='flex w-full py-3 bg-[#8DF5E780] text-primary font-semibold text-[16px] items-center justify-center'>
                        Choose Plan &rarr;
                    </button>
                </article>
                <article className='border border-primary w-[312px] px-4 py-6 rounded-xl relative mt-8'>
                    <h1 className='absolute -top-8 rounded-t-xl -translate-x-1/2 left-1/2 bg-primary text-white px-3 py-1'>Recommendation</h1>
                    <h1 className='font-semibold text-16px text-[#18191C] my-4'>PREMIUM</h1>
                    <p className='text-[14px] text-[#767F8C]'>Praesent eget pulvinar orci. Duis ut pellentesque ligula convalis.</p>
                    <p className='mb-3'>
                        <span className='font-medium text-[36px] text-primary font-inter'>£39</span>
                        <span className='font-inter text-[16px] text-[#9199A3]'>/Account</span>
                    </p>
                    <div className='border-t flex flex-col gap-3 py-4'>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Upto 20 Business Views</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Predefined Process</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Only verified Businesses Display</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Access & Saved 10 Businesses </p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Upto 14days Free Trial</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>24/7 Support</p>
                        </article>
                    </div>
                    <button className='flex w-full py-3 bg-primary text-white font-semibold text-[16px] items-center justify-center'>
                        Choose Plan &rarr;
                    </button>
                </article>
                <article className='border w-[312px] px-4 py-6 rounded-xl '>
                    <h1 className='font-semibold text-16px text-[#18191C] my-4'>PREMIUM</h1>
                    <p className='text-[14px] text-[#767F8C]'>Praesent eget pulvinar orci. Duis ut pellentesque ligula convalis.</p>
                    <p className='mb-3'>
                        <span className='font-medium text-[36px] text-primary font-inter'>£59</span>
                        <span className='font-inter text-[16px] text-[#9199A3]'>/Account</span>
                    </p>
                    <div className='border-t flex flex-col gap-3 py-4'>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Upto 35 Business Views</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Predefined Process</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Only verified Businesses Display</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Access & Saved 10 Businesses </p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>Upto 14days Free Trial</p>
                        </article>
                        <article className='flex gap-4 items-center'>
                            <img src="/Icon.png" alt="" />
                            <p className=' w-[264px] text-[#474C54] text-[14px]'>24/7 Support</p>
                        </article>
                    </div>
                    <button className='flex w-full py-3 bg-[#8DF5E780] text-primary font-semibold text-[16px] items-center justify-center'>
                        Choose Plan &rarr;
                    </button>
                </article>
            </div>
        </>
    )
}

export default PricingPlans;  