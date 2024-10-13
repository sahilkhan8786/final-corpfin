import React from 'react'
import { Link } from 'react-router-dom'
import Buy_SellHero from '../../components/Buy_SellHero'

const SellSideLandingPage = () => {
    return (
        <>

            <div className="w-full h-[90vh] ">
                <Buy_SellHero />
            </div>
            <div className='w-full bg-[#F8F8F8] py-12 px-6 sm:px-8'>

                <article className={`w-full mx-auto max-w-[1440px]  px-4 md:p-0 mb-12  `}>
                    <h1 className='font-semibold text-[#0D0D0D] text-[32px] text-left pb-4 my-6 sm:my-0 sm:text-[50px] p t-12 '>
                        Helping Sellers
                    </h1>
                    <p className='text-[13px] md:text-[16px] text-[#3B3B3B]  w-full text-left'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <div className='flex items-center justify-center gap-4 md:my-8 flex-col md:flex-row'>
                        <article className='md:my-12 my-2'>
                            <h1 className='font-medium text-left text-[18px] text-[#0D0D0D]'>Worem</h1>
                            <p className='text-[12px] text-[#3B3B3B] w-[202px] text-left'>All the services available in the CorpFin platform are reliable</p>
                        </article>
                        <article className='md:my-12 my-2'>
                            <h1 className='font-medium text-left text-[18px] text-[#0D0D0D]'>Worem</h1>
                            <p className='text-[12px] text-[#3B3B3B] w-[202px] text-left'>All the services available in the CorpFin platform are reliable</p>
                        </article>
                        <article className='md:my-12 my-2'>
                            <h1 className='font-medium text-left text-[18px] text-[#0D0D0D]'>Worem</h1>
                            <p className='text-[12px] text-[#3B3B3B] w-[202px] text-left'>All the services available in the CorpFin platform are reliable</p>
                        </article>
                    </div>
                </article>
            </div>

            <div className='max-w-[1440px] mx-auto w-full flex justify-center md:my-12 px-6 sm:px-8'>
                <img src="/Pdf Viewer.png" alt="" />
            </div>
            <div className='flex w-full max-w-[1440px] mx-auto justify-between  gap-16 py-4 md:py-12 flex-col md:flex-row px-6 sm:px-8'>
                <img src="/home-and-family-insurance-concept-2023-11-27-04-50-01-utc.png" alt="" className='p-4 2xl:p-0  md:w-1/2' />
                <article className='flex-1  w-full flex flex-col justify-evenly items-start'>
                    <h1 className='font-semibold text-[38px] text-[#0D0D0D] text-center md:text-start'>Off-market</h1>
                    <div>
                        <h1 className='font-medium text-[26px] text-[#0D0D0D] '>Lorem Ipsum</h1>
                        <p className='w-full  xl:w-[544px] text-[#3B3B3B] text-[13px] md:text-[16px] text-center md:text-start'>Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Sagittis orci a scelerisque purus semper eget duis at. Justo nec ultrices dui sapien eget mi proin sed libero. Massa eget egestas purus viverra accumsan in nisl.</p>
                    </div>
                    <div className='w-full xl:w-[545px] flex items-center justify-center my-4 md:my-0'>
                        <Link to={'/contact'}>
                            <button className='text-white bg-primary uppercase px-3 py-2 font-bold text-[17px]'>contact us</button>
                        </Link>
                    </div>
                </article>
            </div>
            <div className='bg-[#F8F8F8] py-12 px-6 sm:px-8'>

                <article className={`w-full mx-auto max-w-5xl  px-4 md:p-0 mb-12   flex items-center justify-between border-b border-b-[#D8D8D8] flex-col md:flex-row `} >

                    <h1 className='text-primary text-[50px] font-semibold py-12 w-full sm:w-[550px] text-left'>Evaluation
                        <br /> Process</h1>
                    <p className='text-[#3B3B3B] sm:text-[18px] w-full  sm:w-[306px] text-left'>Committed to Minimizing Risks and Fostering Enterprise Growth for a Confident and Secure Future</p>
                </article>
                <article className={`w-full mx-auto max-w-5xl  px-4 md:p-0 mb-12   flex items-center justify-between  flex-col md:flex-row  gap-4 md:gap-32`} >
                    <div className='flex flex-col gap-8 w-full px-4 '>

                        <div className='flex flex-col gap-8 md:block '>
                            <h1 className='text-[25px] font-medium text-[#0D0D0D]'>Versatile Solutions</h1>
                            <p className='text-[14px] md:text-[16px] text-[#3B3B3B] w-full md:w-[395px]'>Elit pellentesque habitant morbi tristique senectus et. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus</p>
                        </div>
                        <div className='flex flex-col gap-2 md:block justify-end'>
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

export default SellSideLandingPage