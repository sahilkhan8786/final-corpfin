import React from 'react'
import { Link } from 'react-router-dom'
const BuysideLandingPage = () => {
    return (
        <>
            <div className="w-full h-[90vh] ">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#A8A8A8] px-3 md:px-0`}>
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full  relative px-6 sm:px-8" >
                        <h1 className="z-20 font-bold text-[24px] md:text-[46px] w-3/4 max-w-[512px]">
                            Worem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h1>
                        <p className="z-20 text-[12px] md:text-[14px] text-[#F8F8F8] w-3/4 max-w-[375px]">
                            Blandit cursus risus at ultrices. Viverra mauris in aliquam sem fringilla. Turpis egestas sed tempus urna et pharetra pharetra massa.
                        </p>
                        <div className="z-20  flex-col md:flex-row gap-3">
                            <Link to='/static-landing-page'>
                                <button className="uppercase flex gap-3 items-center justify-center text-[13px]   bg-primary px-3 py-5 rounded-md hover:opacity-85">
                                    <span>board now</span>

                                </button>
                            </Link>

                        </div>
                        <article className='h-full bg-[#D3D0D0] w-1 absolute right-0 mx-4'>

                        </article>
                        <article className='h-1/3 top-1/2 -translate-y-1/2 bg-white w-2 absolute -right-[2px] mx-4'>

                        </article>
                    </div>
                </article>
            </div>
            <div className='w-full bg-[#F8F8F8] py-12 px-6 sm:px-8'>

                <article className={`w-full mx-auto max-w-[1440px]  px-4 md:p-0 mb-12  `}>
                    <h1 className='font-semibold text-[#0D0D0D] text-[30px] text-center my-6 sm:my-0 sm:text-[50px] p t-12'>
                        Helping Buyers
                    </h1>
                    <p className='text-[13px] md:text-[16px] text-[#3B3B3B] text-center w-full xl:w-[1181px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <div className='flex items-center justify-center gap-4 md:my-8 flex-col md:flex-row'>
                        <article className='md:my-12 my-2'>
                            <h1 className='font-medium text-center text-[18px] text-[#0D0D0D]'>Worem</h1>
                            <p className='text-[12px] text-[#3B3B3B] w-[202px] text-center'>All the services available in the CorpFin platform are reliable</p>
                        </article>
                        <article className='md:my-12 my-2'>
                            <h1 className='font-medium text-[18px] text-[#0D0D0D] text-center'>Worem</h1>
                            <p className='text-[12px] text-[#3B3B3B] w-[202px]'>All the services available in the CorpFin platform are reliable</p>
                        </article>
                        <article className='md:my-12 my-2'>
                            <h1 className='font-medium text-[18px] text-[#0D0D0D] text-center'>Worem</h1>
                            <p className='text-[12px] text-[#3B3B3B] w-[202px]'>All the services available in the CorpFin platform are reliable</p>
                        </article>
                    </div>
                </article>
            </div>
            <div className='bg-[#F8F8F8] py-12 px-6 sm:px-8'>

                <article className={`w-full mx-auto max-w-[1440px]  px-4 md:p-0 mb-12   flex items-center justify-between border-b border-b-[#D8D8D8] flex-col md:flex-row `} >

                    <h1 className='text-primary text-[50px] font-semibold py-12 w-full sm:w-[550px] text-center'>Evaluation
                        Process</h1>
                    <p className='text-[#3B3B3B] sm:text-[18px] w-full  sm:w-[306px] text-center'>Committed to Minimizing Risks and Fostering Enterprise Growth for a Confident and Secure Future</p>
                </article>
                <article className={`w-full mx-auto max-w-[1440px]  px-4 md:p-0 mb-12    flex items-center justify-between flex-col gap-4 md:flex-row md:gap-0 text-center md:text-start`}>
                    <div className='flex flex-col gap-4 w-full px-4 '>

                        <div className='flex flex-col gap-2 md:block '>
                            <h1 className='text-[25px] font-medium text-[#0D0D0D]'>Versatile Solutions</h1>
                            <p className='text-[14px] md:text-[16px] text-[#3B3B3B] w-full md:w-[395px]'>Elit pellentesque habitant morbi tristique senectus et. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus</p>
                        </div>
                        <div className='flex flex-col gap-2 md:block '>
                            <h1 className='text-[25px] font-medium text-[#0D0D0D]'>Versatile Solutions</h1>
                            <p className='text-[14px] md:text-[16px] text-[#3B3B3B] w-full md:w-[395px]'>Elit pellentesque habitant morbi tristique senectus et. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-full px-4'>

                        <div className='flex flex-col gap-2 md:block '>
                            <h1 className='text-[25px] font-medium text-[#0D0D0D]'>Versatile Solutions</h1>
                            <p className='text-[14px] md:text-[16px] text-[#3B3B3B] w-full md:w-[395px]'>Elit pellentesque habitant morbi tristique senectus et. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus</p>
                        </div>
                        <div className='flex flex-col gap-2 md:block '>
                            <h1 className='text-[25px] font-medium text-[#0D0D0D]'>Versatile Solutions</h1>
                            <p className='text-[14px] md:text-[16px] text-[#3B3B3B] w-full md:w-[395px]'>Elit pellentesque habitant morbi tristique senectus et. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus</p>
                        </div>
                    </div>
                </article>
            </div>
            <div className='w-full flex max-w-[1440px] mx-auto md:my-12 my-6 flex-col-reverse  md:flex-row px-6 sm:px-8'>
                <article className='flex w-full flex-col items-start justify-around
                md:mt-16 gap-6 md:gap-0 px-2'>
                    <div>

                        <h1 className='font-semibold text-[#0D0D0D] text-[48px] md:text-[68px]'>Trusted NDA</h1>
                        <p className='text-[#3B3B3B] md:text-[18px]'>Explore our tailored insurance solutions and experience the peace of mind that comes with knowing you're covered.</p>
                    </div>
                    <button className='uppercase bg-primary text-white px-3 py-4 font-bold text-[17px]'>SIGNUP NOW</button>
                </article>
                <img src="/home-and-family-insurance-concept-2023-11-27-04-50-01-utc .png" alt="" className='p-4 2xl:p-0  md:w-1/2' />
            </div>
        </>
    )
}

export default BuysideLandingPage