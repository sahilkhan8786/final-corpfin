import React from 'react'
import InputBox from '../../components/InputBox'
import InputSelect from '../../components/InputSelect'
import { Link } from 'react-router-dom'

const SignBusinessDetails = () => {
    return (
        <section className='bg-white md:bg-primary w-full min-h-screen flex flex-col p-2 md:p-0'>
            <div className=' flex w-full flex-col   md:flex-row'>
                {/* LEFT */}
                <div className='md:text-white flex-1 flex items-center justify-center flex-col md:relative mt-8 md:mt-0 px-3 md:px-0'>
                    <h1 className='font-semibold text-4xl md:text-[48px] leading-tight w-full md:w-[360px]'>Step Away
                        to list with Us.</h1>
                    <p className='text-[14px] w-full my-3 md:my-12 md:w-[360px]'>Please provide all the details correctly
                        to get more responses from the buyers..</p>


                    <p className='md:absolute md:bottom-12 my-6 md:my-0 hidden md:block'>Having troubles?
                        <span className='underline px-1 cursor-pointer'>Get Help</span>

                    </p>

                    <div className='flex gap-2 items-center mt-4 md:mt-16 mb-4 md:mb-0'>
                        <img src="/business-icon.png" alt="" />
                        <p>3k+ people benefitted from CorpFin.</p>
                    </div>
                </div>

                {/* RIGHT */}
                <form className='bg-white  flex-1 rounded-tl-3xl  md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none flex justify-center items-center flex-col gap-3   w-full px-4 md:px-0 md:w-[393px] relative h-screen py-12 md:py-0 pb-24 md:pb-0 border border-primary  md:border-transparent rounded-b-3xl md:rounded-br-none'>


                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputBox label="Company Name" name='Company Name' />
                    </div>
                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputSelect name="Company Type" id='Company Type' options={["Company Type", 'Government', 'Private']} />
                    </div>
                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputBox label="Position in Company" name='Position in Company' />
                    </div>
                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputSelect name="Company Location" id='Company Location' />
                    </div>
                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputSelect name="Platform" id='Platform' options={['Platform', 'Mid Market', 'Early State Business']} />
                    </div>
                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputSelect name="Industry Preference" id='Industry Preference' options={['Industry Preference', 'Automobile', 'Oil & Petroleum', 'Design']} />
                    </div>
                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputSelect name="Reason to join" id='Reason to join' />
                    </div>
                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputSelect name="How did you hear about us?" id='How did you hear about us?' />
                    </div>
                    <Link to={'/signup-completed'}>
                        <div className='flex w-full md:w-[393px] px-6 sm:px-8'>
                            <button className='text-white bg-primary w-full p-3 hover:opacity-85'>Join CorpFin Hub</button>
                        </div>
                    </Link>
                    <p className='absolute bottom-6 hidden md:block'>
                        <span className='text-[#A8A8A8] text-[12px]'>Copyright © 2024 All Rights Reserved</span>

                    </p>
                </form>
                <p className='md:absolute md:bottom-12 my-6 md:my-0 block md:hidden text-center'>Having troubles?
                    <span className='underline px-1 cursor-pointer text-primary '>Get Help</span>

                </p>


            </div>
        </section>
    )
}

export default SignBusinessDetails