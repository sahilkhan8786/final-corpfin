import React from 'react'
import { signUpList } from '../../constant'
import InputBox from '../../components/InputBox'

const ResetPassword = () => {
    return (
        <section className='md:bg-primary w-full min-h-screen flex flex-col p-2'>
            <div className=' flex w-full flex-col   md:flex-row'>
                {/* LEFT */}
                <div className='md:text-white flex-1 flex items-center justify-center flex-col md:relative mt-8 md:mt-0 px-3 md:px-0'>
                    <h1 className='font-semibold text-6xl md:text-[48px] leading-tight w-full md:w-[360px]'>Reset Password</h1>
                    <p className='text-[14px] w-full md:w-[360px]'>We provide lorem ipsum team dolor sit amet, consectetur adipiscing performance.</p>
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
                <div className='bg-white  flex-1 rounded-tl-3xl  md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none flex justify-center items-center flex-col gap-3   w-full px-4 md:px-0 md:w-[393px] relative h-screen py-12 md:py-0 pb-24 md:pb-0 border border-primary  md:border-transparent rounded-b-3xl md:rounded-br-none mt-6 md:mt-0'>
                    <h3 className='w-full md:w-[393px] text-3xl font-medium'>Create new password</h3>
                    <p className='w-full md:w-[393px] text-[14px] text-[#47464A]'>Please create a new password that you don’t use on any other site.</p>
                    <div className='  w-full md:w-[393px] '>
                        <InputBox label="Create new password" name='Create new password' />
                    </div>
                    <div className='  w-full md:w-[393px] '>
                        <InputBox label="Confirm new password" name='Confirm new password' />
                    </div>


                    <div className='flex w-full md:w-[393px] items-center gap-6'>

                        <button className='text-white bg-primary w-full p-3 hover:opacity-85'>Change Password</button>
                    </div>


                    <div className='  w-full md:w-[393px] text-center'>

                        <article className='  w-full md:w-[393px] flex items-center justify-between mt-6 flex-wrap mb-0 md:mb-6 gap-2'>



                            <p className='text-[14px] font-medium  items-center justify-center w-full mt-6 flex-col sm:flex-row hidden md:flex'>Just remember?
                                <span className='text-primary hover:cursor-pointer hover:underline'>Sign in</span>
                            </p>
                        </article>
                    </div>
                    <p className='absolute bottom-12 hidden md:block'>
                        <span className='text-[#A8A8A8] text-[12px]'>Copyright © 2024 All Rights Reserved</span>

                    </p>
                </div>
                <p className='md:absolute md:bottom-12 my-6 md:my-0 block md:hidden text-center'>Having troubles?
                    <span className='underline px-1 cursor-pointer text-primary'>Get Help</span>

                </p>
            </div>
        </section>
    )
}

export default ResetPassword