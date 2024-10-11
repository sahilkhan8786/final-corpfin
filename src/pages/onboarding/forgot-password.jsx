import React from 'react'
import { signUpList } from '../../constant'
import InputBox from '../../components/InputBox'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <section className=' md:bg-primary w-full min-h-screen flex flex-col '>
            <div className=' flex w-full flex-col   md:flex-row p-4 md:p-0'>
                {/* LEFT */}
                <div className='md:text-white flex-1 flex items-center justify-center flex-col md:relative mt-8 md:mt-0 px-3 md:px-0'>
                    <h1 className='font-semibold text-4xl md:text-[48px] leading-tight w-full md:w-[360px]'>Forgot Password</h1>
                    <p className='text-[14px] w-full md:w-[360px] my-4'>We provide lorem ipsum team dolor sit amet, consectetur adipiscing performance.</p>
                    <div className='md:flex flex-col gap-5 mt-8 hidden'>
                        {signUpList.map(list => (
                            <article key={list.id} className='flex items-start gap-5'>
                                <img src={list.icon} alt={list.heading} className='object-contain' />
                                <div>
                                    <h3 className='font-medium text-[14px]'>{list.heading}</h3>
                                    <p className='text-[14px] font-light opacity-80'>{list.description}</p>
                                </div>
                            </article>

                        ))}
                    </div>

                    <p className='md:absolute md:bottom-12 my-6 md:my-0 hidden md:block'>Having troubles?
                        <span className='underline px-1 cursor-pointer'>Get Help</span>

                    </p>
                </div>

                {/* RIGHT */}
                <form className='bg-white  flex-1 rounded-tl-3xl  md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none flex justify-center items-center flex-col gap-3   w-full px-4 md:px-0 md:w-[393px] relative h-screen py-12 md:py-0 pb-24 md:pb-0 border border-primary  md:border-transparent rounded-b-3xl md:rounded-br-none mt-6 md:mt-0'>
                    <h3 className='w-full md:w-[393px] text-3xl font-medium px-6 sm:px-8'>Forgot password?</h3>
                    <p className='w-full md:w-[393px] text-[12px] sm:text-[14px] text-[#47464A] px-6 sm:px-8'>No worriest! Just enter your email and we’ll send you a reset password link.</p>
                    <div className='  w-full md:w-[393px] px-6 sm:px-8'>
                        <InputBox label="Email address" name='email' />
                    </div>


                    <div className='flex w-full md:w-[393px] items-center gap-6 px-6 sm:px-8'>

                        <button className='text-white bg-primary w-full p-3 hover:opacity-85'>Send Recovery Email</button>
                    </div>


                    <div className='  w-full md:w-[393px] text-center'>

                        <article className='  w-full md:w-[393px] flex items-center justify-between mt-6 flex-wrap mb-6 gap-2'>



                            <p className='text-[14px] font-medium flex items-center justify-center w-full mt-6 flex-row '>Just remember?
                                <Link to={'/sign-in'}>
                                    <span className='text-primary hover:cursor-pointer hover:underline'>Sign in</span>
                                </Link>
                            </p>
                        </article>
                    </div>
                    <p className='absolute bottom-12 hidden md:block'>
                        <span className='text-[#A8A8A8] text-[12px]'>Copyright © 2024 All Rights Reserved</span>

                    </p>
                </form>
                <p className='md:absolute md:bottom-12 my-6 md:my-0 block md:hidden text-center'>Having troubles?
                    <span className='underline px-1 cursor-pointer text-primary'>Get Help</span>

                </p>
            </div>
        </section>
    )
}

export default ForgotPassword