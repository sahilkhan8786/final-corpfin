import React from 'react'
import InputBox from '../../components/InputBox'
import InputPhone from '../../components/InputPhone'
import InputPhoto from '../../components/InputPhoto'
import { Link } from 'react-router-dom'
import { Li } from 'react-flags-select'

const SignPersonalDetails = () => {
    return (
        <section className=' bg-white md:bg-primary w-full min-h-screen flex flex-col '>
            <div className=' flex w-full flex-col   md:flex-row p-4 md:p-0'>
                {/* LEFT */}
                <div className='text-black md:text-white flex-1 flex items-center justify-center flex-col md:relative mt-8 md:mt-0 px-3 md:px-0'>
                    <h1 className='font-semibold text-4xl md:text-[48px] leading-tight w-full md:w-[360px]'>Welcome to CorpFin Hub</h1>
                    <p className='text-[14px] w-full my-3 md:my-12 md:w-[360px]'>You are 2 step away to list your business.
                        Fill the personal details and then business details.</p>


                    <p className='md:absolute md:bottom-12 my-6 md:my-0 hidden  md:block'>Having troubles?
                        <span className='underline px-1 cursor-pointer'>Get Help</span>

                    </p>

                    <div className='flex gap-2 items-center md:mt-16 mb-4 md:mb-0'>
                        <img src="/business-icon.png" alt="" />
                        <p>3k+ people benefitted from CorpFin.</p>
                    </div>
                </div>

                {/* RIGHT */}
                <form className='bg-white  flex-1 rounded-tl-3xl  md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none flex justify-center items-center flex-col gap-3   w-full px-4 md:px-0 md:w-[393px] relative h-screen py-12 md:py-0 pb-24 md:pb-0 border border-primary  md:border-transparent rounded-b-3xl md:rounded-br-none'>
                    <div className='w-full md:w-[393px] flex items-center justify-between gap-2 px-6 sm:px-8'>
                        <select name="role" id="role" className='border px-4 py-2 rounded-sm text-primary outline-none focus:outline-none'>
                            <option value="Title">Title</option>
                            <option value="Title">Title</option>
                        </select>

                        <InputPhoto />
                    </div>
                    <div className=' w-[100%] md:w-[393px] flex gap-3 px-6 sm:px-8'>
                        <InputBox label="First name" name='First name' />
                        <InputBox label="Last name" name='Last name' />
                    </div>
                    <div className='px-6 sm:px-8  w-full md:w-[393px] '>
                        <InputBox label="Email address" name='email' />
                    </div>
                    <div className='px-6 sm:px-8  w-full md:w-[393px]  '>
                        <InputPhone label="Phone number" name='Phone number' />

                    </div>
                    <Link to='/sign-in-business-details'>
                        <div className='flex w-full md:w-[393px] px-6 sm:px-8'>
                            <button className='text-white bg-primary w-full p-3 hover:opacity-85 rounded-xl'>Update Details</button>
                        </div>
                    </Link>
                    <p className='absolute bottom-12 hidden md:block'>
                        <span className='text-[#A8A8A8] text-[12px]'>Copyright © 2024 All Rights Reserved</span>

                    </p>
                </form>
                <Link to={'/contact'}>
                    <p className='md:absolute md:bottom-12 my-6 md:my-0 block  md:hidden text-center'>Having troubles?
                        <span className='underline px-1 cursor-pointer text-primary'>Get Help</span>

                    </p>
                </Link>


            </div>
        </section >
    )
}

export default SignPersonalDetails