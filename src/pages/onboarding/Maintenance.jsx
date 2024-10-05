import React from 'react'
import Header from '../../components/Header'

const Maintenance = () => {
    return (
        <section className='min-h-[90vh] w-full relative px-2 md:p-0 '>
            <Header />
            <div className='w-full max-w-[1400px] mx-auto flex items-center justify-center h-full px-4 md:flex-col gap-4 lg:flex-row flex-col-reverse'>
                <div className='flex flex-col gap-3  w-full md:w-[585px]'>
                    <h1 className='font-medium text-3xl sm:text-[48px] text-[#18181C] leading-snug'>  Our website is under Maintenance</h1>
                    <p className='text-[#474C54] font-normal text-[14px] sm:text-[18px]'>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum. Curabitur luctus sapien .</p>
                    <div className='flex gap-2 pr-6 items-center justify-between flex-row w-full'>
                        <article className='flex-[2] flex items-center gap-2  border px-3 w-full'>
                            <img src="/Envelope.png" alt="" />
                            <input type="email" className='bg-transparent py-4 w-full outline-none focus:outline-none'
                                placeholder='Email Address'
                            />
                        </article>
                        <button className='bg-primary flex-1 w-full text-white py-4 border border-primary'>Subscribe &rarr;</button>
                    </div>
                </div>
                <img src="/maintenance-image.png" alt="" className='w-full sm:w-[60%] xl:w-full' />
            </div>

            <div className=' gap-4 flex-col md:absolute md:-bottom-10 md:left-24 hidden md:flex'>
                <p>Follow Us</p>
                <article className='flex gap-4 '>

                    <img src="/Social Icons.png" alt="" className='border p-3 border-[#8DF5E780] rounded-sm bg-[#8DF5E780] hover:opacity-85 cursor-pointer' />
                    <img src="/Social Icons (1).png" alt="" className='border p-3 border-primary rounded-sm hover:opacity-85 cursor-pointer' />
                </article>
            </div>
            <p className='font-normal text-[#767F8C] text-[14px] md:absolute md:right-24 md:-bottom-10 hidden md:block'>@ 2024 All rights Reserved - Chasvi Co</p>
        </section>
    )
}

export default Maintenance