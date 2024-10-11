import React from 'react'
import { signUpList, signUpOptionsList } from '../../constant'
import InputBox from '../../components/InputBox'
import { Link } from 'react-router-dom'
import InputPassword from '../../components/InputPassword'

const SignIn = () => {
    return (
        <section className='md:bg-primary w-full min-h-screen flex flex-col p-4 md:p-0'>
            <div className=' flex w-full flex-col   md:flex-row'>
                {/* LEFT */}
                <div className='text-black md:text-white flex-1 flex items-center justify-center flex-col md:relative mt-8 md:mt-0 px-3 md:px-0'>
                    <h1 className='font-semibold text-4xl md:text-[48px] leading-tight w-full md:w-[360px]'>Sign In</h1>
                    <p className='mt-6 md:0 text-[14px] w-full md:w-[360px]'>We provide lorem ipsum team dolor sit amet, consectetur adipiscing performance.</p>
                    <div className=' flex-col  md:gap-5 md:mt-8 hidden md:flex'>
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
                        <Link to={'/contact'}>

                            <span className='underline px-1 cursor-pointer'>Get Help</span>
                        </Link>

                    </p>
                </div>

                {/* RIGHT */}
                <div className='bg-white  flex-1 rounded-tl-3xl  md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none flex justify-center items-center flex-col gap-3   w-full px-4 md:px-0 md:w-[393px] relative h-screen py-12 md:py-0 pb-24 md:pb-0 border border-primary  md:border-transparent rounded-b-3xl md:rounded-br-none mt-6 md:mt-0'>
                    <div className='  w-full md:w-[393px] px-6 sm:px-8'>
                        <InputBox label="Email address" name='email' />
                    </div>

                    <div className='  w-full md:w-[393px]  px-6 sm:px-8'>
                        <InputPassword label="Password" name='Password' />
                    </div>
                    <div className='flex w-full md:w-[393px] items-center gap-6 px-6 sm:px-8'>
                        <Link to={'/forgot-password'}>
                            <p className='font-normal text-[14px]
                        text-[#47464A] w-fit whitespace-nowrap'>Forgot password ?</p>
                        </Link>
                        <Link to={'/personal-signin-details'} className='w-full'>
                            <button className='text-white bg-primary w-full p-3 hover:opacity-85'>Sign In</button>
                        </Link>
                    </div>
                    <div className='w-full md:w-[393px] relative my-3 px-6 sm:px-8' >
                        <p className='w-full  bg-gray-300 h-[1px]'></p>
                        <span className='px-2 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>or</span>
                    </div>

                    <div className='  w-full md:w-[393px] text-center '>
                        <h3 className='text-[#202020] font-medium text-[14px]' >Sign in with</h3>
                        <article className='  w-full md:w-[393px] flex items-center justify-between mt-6 flex-wrap mb-6 gap-2 px-6 sm:px-8'>
                            <article className='  w-full md:w-[393px] flex items-center justify-between mt-6 flex-wrap mb-6 gap-2'>
                                <div className='flex items-center gap-5 border p-3 hover:bg-gray-200 cursor-pointer  min-w-[120px]w-full flex-1  justify-center'>
                                    <img src='/google logo.png' alt="" />
                                    <p >Google</p>
                                </div>
                                <div className='flex items-center gap-5 border p-3 hover:bg-gray-200 cursor-pointer  min-w-[120px] w-full flex-1  justify-center'>
                                    <img src='/linkedIn.png' alt="" />
                                    <p >LinkedIn</p>
                                </div>



                            </article>


                            <p className='sm:text-[14px] font-medium flex items-center justify-center w-full md:mt-6 flex-row whitespace-nowrap text-[10px] px-6 sm:px-8 gap-3'>Don’t have a CorpFin Hub account?
                                <Link to={'/sign-up'}>
                                    <span className='text-primary hover:cursor-pointer hover:underline'>Create an account</span>
                                </Link>
                            </p>
                        </article>
                    </div>
                    <p className='absolute bottom-12 hidden md:block'>
                        <span className='text-[#A8A8A8] text-[12px]'>Copyright © 2024 All Rights Reserved</span>

                    </p>
                </div>
                <p className='md:absolute md:bottom-12 my-6 md:my-0 block  md:hidden text-center'>Having troubles?
                    <Link to={'/contact'}>
                        <span className='underline px-1 cursor-pointer text-primary'>Get Help</span>
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default SignIn