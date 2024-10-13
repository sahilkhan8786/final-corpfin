import React from 'react'

const Contacts = () => {
    return (
        <>

            <div className="w-full h-[70vh] ">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#D8D8D8] bg-cover bg-center px-3 md:px-0 `}>
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full px-2 items-start justify-end bg- h-full " >


                        <h1 className='ml-6 md:ml-20  bg-white text-black font-semibold text-[40px] md:text-[72px] px-2 md:pr-16   text-left whitespace-nowrap'>Contact</h1>
                    </div>
                </article>
            </div>
            <div className='max-w-[1440px] mx-auto w-full flex my-12 flex-col md:flex-row  px-6 sm:px-8'>
                <article className='flex flex-col gap-3'>
                    <h1 className='w-full md:w-[528px] font-semibold text-[28px]  md:text-[50px] text-[#0D0D0D]'>Get in Touch: Ways to Contact Us</h1>
                    <div className='flex flex-col w-full gap-4'>
                        <p className='flex gap-6'>
                            <span className='text-[16px] text-[#6A6A6A] border-b  md:w-[298px]'> We're here if you need support </span>
                            <span className='text-[16px] text-[#6A6A6A] border-b' >Call Us if you need support</span>
                        </p>

                        <p className='flex gap-6'>
                            <article className=''>
                                <div className='size-[24px] rounded-full  border'></div>
                                <h1 className='font-medium text-[17px] text-[#0D0D0D]  md:w-[298px]'>208 Glen Ridge Rd.
                                    <br />
                                    London, UK 85021</h1>
                            </article>
                            <article>
                                <div className='size-[24px] rounded-full border'></div>
                                <span className='font-medium text-[17px] text-[#0D0D0D]'>+44 172 722 5814</span>
                            </article>
                        </p>
                        <p className='flex gap-6'>
                            <h1 className='text-[16px] text-[#6A6A6A] border-b md:w-[298px]'>Write to us and we will respond as soon as possible</h1>
                            <h1 className='text-[16px] text-[#6A6A6A] border-b ' >For inquiries about career <br /> opportunities</h1>
                        </p>

                        <p className='flex gap-12 flex-col sm:flex-row'>
                            <article>
                                <div className='size-[24px] rounded-full border'></div>
                                <h1 className='font-medium text-[17px] text-[#0D0D0D] md:w-[298px] '>hello@corpfin.co.uk</h1>
                            </article>
                            <article>
                                <div className='size-[24px] rounded-full border'></div>
                                <h1 className='font-medium text-[17px] text-[#0D0D0D] md:w-[298px]'>career@corpfin.co.uk</h1>
                            </article>
                        </p>
                        <p className='flex gap-6'>
                            <h1 className='text-[16px] text-[#6A6A6A] border-b md:w-[298px] uppercase'>We are on social <br /> networks</h1>


                        </p>
                        <p className='flex gap-4 items-center'>
                            <img src="/Social Icons (2).png" alt="" />
                            <img src="/Social Icons (3).png" alt="" />
                        </p>

                    </div>
                </article>
                <article className='w-full bg-[#D8D8D8] h-[300px] md:h-[500px]'></article>
            </div>
            <div className='max-w-[1440px] mx-auto flex items-center justify-center flex-col my-12  px-6 sm:px-8'>
                <h1 className='font-semibold text-[#0D0D0D] text-[28px] md:text-[50px] text-center'>You have something to
                    <br />
                    discuss with us?</h1>
                <p className='w-full md:w-[605px] text-center text-[14px] sm:text-[18px] text-[#3B3B3B]'>We want to hear from you, what your concerns are. Submit form. We'll get back to you as soon as possible.</p>

                <form className='flex items-center justify-center w-full  xl:w-[848px] my-12 flex-col gap-12 '>
                    <div className='w-full flex justify-between items-center gap-4 flex-col sm:flex-row'>
                        <input type="text" placeholder='Full Name' className=' outline-none focus:outline-none border-b  flex-1 w-full' />
                        <input type="email" placeholder='Email'
                            className=' outline-none focus:outline-none border-b  w-full flex-1' />
                    </div>
                    <div className='w-full flex justify-between items-center gap-4 flex-col sm:flex-row'>
                        <input type="number" placeholder='Phone Number' className=' outline-none focus:outline-none border-b  flex-1 w-full' />
                        <input type="text" placeholder='Address'
                            className=' outline-none focus:outline-none border-b  flex-1 w-full' />
                    </div>
                    <div className='w-full flex'>
                        <textarea name="" id="" rows={5} className=' outline-none focus:outline-none border-b  flex-1' placeholder='Additional Requirements or Questions'></textarea>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <button className='uppercase bg-primary py-4 px-6 text-white font-bold text-[17px]'>submit now</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Contacts