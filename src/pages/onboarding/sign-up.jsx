import React from 'react'
import { signUpList } from '../../constant'
import InputBox from '../../components/InputBox'
import { Link } from 'react-router-dom'
import InputPassword from '../../components/InputPassword'

const SignUp = () => {
    return (
        <section className='md:bg-primary w-full min-h-screen flex flex-col p-4 md:p-0'>
            <div className=' flex w-full flex-col   md:flex-row'>
                {/* LEFT */}
                <div className='text-black md:text-white flex-1 flex items-center justify-center flex-col md:relative mt-8 md:mt-0 px-3 md:px-0'>
                    <h1 className='font-semibold text-4xl md:text-[48px] leading-tight w-full md:w-[360px]'>Create an account</h1>
                    <p className='text-[14px] w-full md:w-[360px]'>We provide lorem ipsum team dolor sit amet, consectetur adipiscing performance.</p>
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
                        <span className='underline px-1 cursor-pointer'>Get Help</span>

                    </p>
                </div>

                {/* RIGHT */}
                <div className='bg-white  flex-1 rounded-tl-3xl  md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none flex justify-center items-center flex-col gap-3   w-full px-4 md:px-0 md:w-[393px] relative h-screen py-12 md:py-0 pb-24 md:pb-0 border border-primary  md:border-transparent rounded-b-3xl md:rounded-br-none'>
                    <div className='  w-full md:w-[393px] '>
                        <InputBox label="Email address" name='email' />
                    </div>
                    <div className=' w-[100%] md:w-[393px] flex gap-3'>
                        <InputBox label="First name" name='First name' />
                        <InputBox label="Last name" name='Last name' />
                    </div>
                    {/* <div className='  w-full md:w-[393px]  '>
                        <InputPhone label="Phone number" name='Phone number' />

                    </div> */}
                    <div className='  w-full md:w-[393px]  '>
                        <InputPassword label="Password" name='Password' />
                    </div>
                    <div className='  w-full md:w-[393px]  '>
                        <InputPassword label="Confirm Password" name='Confirm Password' />
                    </div>
                    <div className='flex w-full md:w-[393px]'>
                        <button className='text-white bg-primary w-full p-3 hover:opacity-85'>Sign Up</button>
                    </div>

                    <div className='  w-full md:w-[393px] text-center'>
                        <h3 className='text-[#202020] font-medium text-[14px]' >Sign up with</h3>
                        <article className='  w-full md:w-[393px] flex items-center justify-between mt-6 flex-wrap mb-6 gap-2'>
                            <div className='flex items-center gap-5 border p-3 hover:bg-gray-200 cursor-pointer  min-w-[120px]w-full flex-1  justify-center'>
                                <img src='/google logo.png' alt="" />
                                <p >Google</p>
                            </div>

                            <div className='flex items-center gap-5 border p-3 hover:bg-gray-200 cursor-pointer  min-w-[120px] w-full flex-1  justify-center'>
                                <img src='/linkedIn.png' alt="" />
                                <p >LinkedIn</p>
                            </div>

                            <div className='flex gap-4 px-3 text-left font-normal text-[10px] text-[#84818A] mt-6 sm:text-[12px]'>
                                <input type="checkbox" />
                                <Link to='/desktop'>
                                    <p>By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.</p>
                                </Link>
                            </div>
                            <p className='sm:text-[14px] font-medium flex items-center justify-center w-full md:mt-6 flex-row whitespace-nowrap text-[10px]'>Already have a CorpFin Hub account?
                                <Link to={'/sign-in'}>
                                    <span className='text-primary hover:cursor-pointer hover:underline'>Sign In</span>
                                </Link>
                            </p>

                        </article>
                    </div>
                    <p className='absolute bottom-2 md:bottom-12 hidden md:block'>
                        <span className='text-[#A8A8A8] text-[12px]'>Copyright © 2024 All Rights Reserved</span>

                    </p>
                </div>

            </div>
        </section>
    )
}

export default SignUp