import React from 'react'
import MidmarketSellerHeader from '../../components/MidmarketSellerHeader'

const BuyersEvaluation = () => {
    return (
        <section>
            <MidmarketSellerHeader />
            <div className='max-w-[1440px] mx-auto'>
                <div className='pt-4 mt-6'>
                    <img src="/banner 2.png" alt="" className='w-full' />
                </div>

            </div>

            <div className='max-w-[1440px] mx-auto px-4 w-full '>
                <div className='w-full flex items-center justify-between px-4 py-3 my-4  gap-3 '>

                    <h1 className='text-primary font-semibold text-[10px] sm:text-[16px] whitespace-nowrap'>Evaluate Buyers</h1>
                    <ul className='flex items-center gap-3'>
                        <li className='hover:text-primary cursor-pointer underline text-[10px] border border-primary rounded-full px-2 md:px-0 md:border-0 md:text-primary sm:text-[16px] font-medium text-white bg-primary'>All</li>
                        <li className='hover:text-primary cursor-pointer text-[10px] border border-primary rounded-full px-2 md:px-0 md:border-0 md:text-[#707070] sm:text-[16px] font-medium text-primary'>Accepted</li>
                        <li className='hover:text-primary cursor-pointer text-[10px] border border-primary rounded-full px-2 md:px-0 md:border-0 md:text-[#707070] sm:text-[16px] font-medium text-primary'>Rejected</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 w-full ' >
                    <article className='flex w-full flex-col gap-4  border   shadow-lg items-center my-4 p-4' >

                        <div className='flex justify-between w-full items-center gap-4 flex-col lg:flex-row '>

                            <div className='flex  md:hidden w-full'>
                                <img src="/Rectangle 509.png" alt="" className='w-1/2  ' />
                                <div className='flex-1 flex flex-col justify-center px-4 gap-1 md:hidden w-full'>
                                    <h1 className='font-semibold text-[16px]'>Himanshu Singh</h1>
                                    <p className='font-medium text-[10px] text-primary whitespace-nowrap'>XYZ Solution Pvt Ltd</p>
                                    <p className='font-medium text-[10px] text-primary whitespace-nowrap'>Hyderabad, India</p>
                                    <p className='font-medium text-[10px] text-primary whitespace-nowrap'>Chief Executive Officer</p>
                                    <article className='flex gap-1'>
                                        <div className='flex flex-col'>

                                            <h1 className='text-primary font-medium text-[10px]  whitespace-nowrap  text-left'>Download NDA</h1>
                                            <p className='text-[#707070] text-[8px]  text-left'  >Any Concerns?</p>
                                        </div>
                                        <button className='bg-primary   hover:opacity-85 text-white flex items-center gap-2 w-full  justify-center '>
                                            <img src="/upload-white.png" alt="" className='w-[20px]' />

                                        </button>


                                    </article>
                                </div>

                            </div>
                            <img src="/Rectangle 509.png" alt="" className='w-full  hidden md:w-fit md:block' />

                            <div className='flex-1 hidden md:flex flex-col justify-center px-4 gap-1 '>
                                <h1 className='font-semibold text-[20px]'>Himanshu Singh</h1>
                                <p className='font-medium text-[14px] text-primary'>XYZ Solution Pvt Ltd</p>
                                <p className='font-medium text-[14px] text-primary'>Hyderabad, India</p>
                                <p className='font-medium text-[14px] text-primary'>Chief Executive Officer</p>
                            </div>
                            <div className='w-[1px] h-[120px] bg-[#D8D8D8]  items-center justify-center hidden lg:block'>

                            </div>
                            <article className='flex flex-col gap-6  flex-[3] justify-center'>
                                <h1 className='font-semibold text-[16px]'>Industry Preference : </h1>

                                <div className='flex gap-4 w-full flex-wrap px-3 md:px-0'>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>AutoMobile</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>AutoMobile</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>Oil & Gas</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>Oil & Gas</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>Health</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>Health</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>Real Estate</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>Real Estate</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>Agriculture</span>
                                    <span className='text-primary font-medium text-[12px] border border-primary p-3'>Agriculture</span>
                                </div>

                            </article>
                            <div className='w-[1px] h-[120px] bg-[#D8D8D8]  items-center justify-center hidden lg:block'>

                            </div>

                            <article className='flex flex-col gap-2 md:gap-4 md:pr-12  px-4 items-start flex-1 justify-start  w-full'>
                                <h1 className='text-primary font-medium text-[16px ]   text-left'>Download NDA</h1>
                                <p className='text-[#707070] text-[12px]  text-left'  >Any Concerns?</p>
                                <button className='bg-primary px-3 py-2 hover:opacity-85 text-white flex items-center gap-2'>
                                    <img src="/upload-white.png" alt="" />
                                    <span>Download</span>
                                </button>
                                <div className='flex gap-3 items-center w-full'>
                                    <button className='border border-primary hover:opacity-85 px-2 py-1 bg-primary text-white '>Accept</button>
                                    <button className='border border-primary hover:opacity-85 px-2 py-1 bg-white text-primary '>Reject</button>
                                </div>

                            </article>
                        </div>

                    </article>





                </div>
            </div>

        </section>
    )
}

export default BuyersEvaluation