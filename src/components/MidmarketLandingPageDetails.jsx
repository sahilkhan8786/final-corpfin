import React from 'react'

const MidmarketLandingPageDetails = ({ toShow1 = true, toShow2 = true, toShow3 = true }) => {
    return (
        <div className='w-full max-w-[1270px] mx-auto my-12'>
            {toShow1 && <article className='flex  gap-14 p-12 flex-col-reverse md:flex-row'>
                <img src="/Image 1.png" alt="" className='w-full md:w-[45%] h-full' />
                <div className='w-full lg:w-[540px] flex flex-col items-center justify-center'>
                    <h1 className='uppercase text-[28px] lg:text-[48px] font-semibold text-[#0D0D0D]'>Why Choose CorpFin for Your Business Needs?</h1>
                    <p className='text-[#3B3B3B] text-[16px]'>Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Sagittis orci a scelerisque purus semper eget duis at. Justo nec ultrices dui sapien eget mi proin sed libero. Massa eget egestas purus viverra accumsan in nisl.</p>
                </div>
            </article>}
            {toShow2 && <article className='flex  gap-14 p-12 flex-col-reverse md:flex-row-reverse '>
                <img src="/Image 1.png" alt="" className='w-full md:w-[45%] h-full' />
                <div className='w-full lg:w-[540px] flex flex-col items-center justify-center'>
                    <h1 className='uppercase text-[28px] lg:text-[48px] font-semibold text-[#0D0D0D]'>BUY side BUSINESS</h1>
                    <p className='text-[#3B3B3B] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                </div>
            </article>}
            {toShow3 && <article className='flex  gap-14 p-12 flex-col-reverse md:flex-row'>
                <img src="/Image 1.png" alt="" className='w-full md:w-[45%] h-full' />
                <div className='w-full lg:w-[540px] flex flex-col items-center justify-center'>
                    <h1 className='uppercase text-[28px] lg:text-[48px] font-semibold text-[#0D0D0D]'>Sell Side BUSINESS</h1>
                    <p className='text-[#3B3B3B] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                </div>
            </article>}
        </div>
    )
}

export default MidmarketLandingPageDetails