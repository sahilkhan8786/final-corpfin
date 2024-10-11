import React from 'react'
import MidmarketLandingPageDetails from '../../components/MidmarketLandingPageDetails'

const StaticLandingPage = () => {
    return (
        <>
            <div className="w-full h-[90vh]">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[url('/bgs.png')] bg-center bg-cover bg-no-repeat`}>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-with-gradient  z-10"></div>

                    {/* Content */}
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full relative z-20 px-6 sm:px-8">
                        <h1 className="font-bold text-[28px] md:text-[46px] w-full max-w-[512px]">
                            Worem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h1>
                        <p className="text-[14px] text-[#F8F8F8] w-full max-w-[375px]">
                            Blandit cursus risus at ultrices. Viverra mauris in aliquam sem fringilla. Turpis egestas sed tempus urna et pharetra pharetra massa.
                        </p>
                    </div>
                </article>
            </div>

            <div className='max-w-[1440px] mx-auto my-6 px-6 sm:px-8'>

                <h1 className='font-inter text-center font-bold text-[28px] md:text-[58px]'>We Help You to Find
                    <br />
                    <span className='text-primary px-1'>
                        Best Business
                    </span>
                    Deals
                </h1>

                <article className='px-6 flex gap-3 my-12 flex-col md:flex-row'>
                    <div>
                        <aside className='flex border-l  relative pb-4 pl-4'>
                            <h1 className='size-8 rounded-full flex items-center justify-center  bg-primary text-white absolute top-0 -left-4'>1</h1>
                            <div className='pl-6'>
                                <p className='font-inter text-[#0E0A20] text-[36px]'>Apply free of charge & without obligation</p>
                                <p className='text-[#6C6969] text-[18px] w-full md:w-[414px]'>You submit one application. It only takes a few minutes. We then obtain offers from the banks for you.</p>
                            </div>
                        </aside>
                        <aside className='flex border-l  relative pb-4 pl-4'>
                            <h1 className='size-8 rounded-full flex items-center justify-center  bg-[#96959A] text-white absolute top-3 -left-4'>2</h1>
                            <div className='pl-6'>
                                <p className='font-inter text-[#716D6D] text-[36px]'>Compare The Offer You Choose on Platfrom</p>
                                <p className='text-[#6C6969] text-[18px] w-full md:w-[414px]'>You submit one application. It only takes a few minutes. We then obtain offers from the banks for you.</p>
                            </div>
                        </aside>
                        <aside className='flex border-l  relative pl-4'>
                            <h1 className='size-8 rounded-full flex items-center justify-center  bg-[#96959A] text-white absolute top-3 -left-4'>3</h1>
                            <div className='pl-6'>
                                <p className='font-inter text-[#716D6D] text-[36px]'>Apply free of charge & without obligation</p>
                                <p className='text-[#6C6969] text-[18px] w-full md:w-[414px]'>You submit one application. It only takes a few minutes. We then obtain offers from the banks for you.</p>
                            </div>
                        </aside>


                    </div>

                    <img src="/Frame 427322771.png" alt=""
                        className='w-full px-2 md:w-1/2' />
                </article>

            </div>
            <div className='max-w-[1440px] mx-auto px-2 my-6  justify-between flex flex-col md:flex-row px-6 sm:px-8'>
                <article className='flex-1 flex justify-center flex-col'>


                    <h1 className='font-inter  font-bold md:text-[44px] lg:text-[58px] text-center md:text-start text-[23px]'> What Can
                        <span className='text-primary px-1'>
                            We Do
                        </span>
                        <br />
                        for Your Business
                    </h1>
                    <p className='text-[14px] md:text-[18px] font-light text-[#898888]'>
                        We’re on a mission to transform how businesses pay for large invoices, from SaaS and cloud to professional and marketing expenses. We provides payment flexibility to buyers and suppliers.
                    </p>
                </article>

                <article className='px-6  my-12 z-10 grid-cols-2 grid gap-8 flex-1'>
                    <div className='w-full h-full relative'>
                        {/* Background Div */}
                        <div className='absolute z-10'>
                            <img src="/Rectangle 57 (1).png" alt="" />
                        </div>

                        {/* Image on Top */}
                        <div className='z-20 relative -left-8 '>
                            <img src="/Frame 427322772 (1).png" alt="" className='scale-[1.10] h-full ' />
                        </div>
                    </div>
                    <div className='w-full h-full relative'>


                        {/* Image on Top */}
                        <div className='z-20 relative -left-3 '>
                            <img src="/f-2.png" alt="" className=' ' />
                        </div>
                    </div>
                    <div className='w-full h-full relative'>


                        {/* Image on Top */}
                        <div className='z-20 relative -left-3 '>
                            <img src="/f-3.png" alt="" className=' ' />
                        </div>
                    </div>
                    <div className='w-full h-full relative'>


                        {/* Image on Top */}
                        <div className='z-20 relative -left-3 '>
                            <img src="/f-4.png" alt="" className=' ' />
                        </div>
                    </div>
                </article>



            </div>
            <div className='max-w-[1440px] mx-auto px-2   justify-between flex flex-col my-12  sm:px-8'>
                <h1 className='font-inter  font-bold md:text-[58px] text-center md:text-start text-[23px]'>What Should We
                    <span className='text-primary px-1'>
                        Help
                    </span>
                    <br />
                    You With?
                </h1>

                <article className='px-6  my-12 z-10 md:grid-cols-2 grid gap-8 flex-1 grid-cols-1'>
                    <div className='w-full h-full relative'>
                        {/* Background Div */}
                        <div className='absolute z-10'>
                            <img src="/Rectangle 57 (2).png" alt=""
                                className='px-2 w-full md:w-1/2'
                            />
                        </div>

                        {/* Image on Top */}
                        <div className='z-20 relative top-4 md:top-0 md:-left-8 '>
                            <img src="/Group 190.png" alt="" className='scale-[1.10] h-full ' />
                        </div>
                    </div>
                    <div className='w-full h-full relative'>


                        {/* Image on Top */}
                        <div className='z-20 relative -left-3 '>
                            <img src="/Frame 427322777.png" alt="" className='px-2 w-full md:w-1/2'
                            />
                        </div>
                    </div>

                </article>
            </div>

            <MidmarketLandingPageDetails toShow1={false} />
        </>
    )
}

export default StaticLandingPage

// 