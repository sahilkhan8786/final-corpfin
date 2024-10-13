import React from 'react'
import FAQCARDS from '../../components/FAQCARDS'

const FAQ = () => {
    return (
        <>

            <div className="w-full h-[70vh] relative">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#D8D8D8] bg-cover bg-center px-3 md:px-0 `}>
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full px-2 items-start justify-end  h-full " >
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] flex  gap-4 flex-col px-4 md:flex-row'>
                            <article className='flex bg-white items-center p-4 gap-4 w-full'>
                                <img src="/fi_search.png" alt="" />
                                <input type="text" placeholder='Search by anything...' className='w-full bg-transparent' />
                            </article>
                            <button className='bg-primary px-6 py-2' >Search</button>
                        </div>


                        <h1 className='ml-6 md:ml-20  bg-white text-black font-semibold text-[40px] md:text-[72px] px-2 md:pr-16   text-left whitespace-nowrap'>Find Answers</h1>
                    </div>
                </article>
            </div>
            <div className='flex flex-col w-full max-w-[1440px] mx-auto my-16 px-2'>
                <article className='flex gap-2 md:gap-10  flex-wrap'>
                    <p className='bg-primary text-white px-4 py-3 cursor-pointer hover:bg-primary hover:text-white whitespace-nowrap'>Account</p>
                    <p className=' px-4 py-3 cursor-pointer hover:bg-primary hover:text-white whitespace-nowrap'>Mid-Market</p>
                    <p className=' px-4 py-3 cursor-pointer hover:bg-primary hover:text-white whitespace-nowrap'>Early-Stage Business</p>

                </article>
            </div>
            <div className='w-full max-w-[1440px] mx-auto my-6 flex gap-12 flex-col md:flex-row  px-6 sm:px-8'>
                <article>
                    <ul className='flex  gap-3 flex-wrap flex-row md:flex-col '>
                        <li className='hover:text-primary cursor-pointer whitespace-nowrap'>Create Account</li>
                        <li className='hover:text-primary cursor-pointer text-primary whitespace-nowrap'>Subscription</li>
                        <li className='hover:text-primary cursor-pointer  whitespace-nowrap'>Business Listing</li>
                    </ul>
                </article>
                <article className='w-full'>
                    <FAQCARDS />
                </article>
            </div>

            <div className='bg-[#F8F8F8] py-16'>

                <div className='max-w-[1440px] mx-auto flex items-center justify-center flex-col-reverse md:flex-row  my-12 px-4 gap-6 '>
                    <article className='flex-1 w-full'>
                        <h1 className='font-semibold text-[#0D0D0D] text-[28px] md:text-[50px] text-center'>Questions?
                            <br />
                            We’re here to help
                        </h1>
                        <form className='flex items-center justify-center w-full  xl:w-[848px] my-12 flex-col gap-12 '>
                            <div className='w-full flex justify-between items-center gap-4 flex-col sm:flex-row'>
                                <input type="text" placeholder='Full Name' className=' outline-none focus:outline-none border-b  flex-1 w-full bg-transparent' />
                                <input type="email" placeholder='Email'
                                    className=' outline-none focus:outline-none border-b  w-full flex-1 bg-transparent' />
                            </div>
                            <div className='w-full flex justify-between items-center gap-4 flex-col sm:flex-row'>
                                <input type="number" placeholder='Phone Number' className=' outline-none focus:outline-none border-b  flex-1 w-full bg-transparent' />
                                <select type="number" placeholder='' className=' outline-none focus:outline-none border-b  flex-1 w-full text-gray-400 bg-transparent my-4' >
                                    <option value="You registered as?">
                                        You registered as?
                                    </option>
                                </select>
                            </div>
                            <div className='w-full flex'>
                                <textarea name="" id="" rows={5} className=' outline-none focus:outline-none border-b  flex-1 bg-transparent' placeholder='Additional Requirements or Questions'></textarea>
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <button className='uppercase bg-primary py-4 px-6 text-white font-bold text-[17px]'>submit now</button>

                            </div>
                        </form>
                    </article>
                    <article className='bg-[#D8D8D8]   flex-1'>
                        <img src="/Map.png" alt="" /> </article>
                </div>
            </div>
        </>
    )
}

export default FAQ
