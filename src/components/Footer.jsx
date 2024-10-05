import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-black py-16 text-white'>
            <article className='max-w-5xl mx-auto flex   justify-between flex-col items-center lg:items-start px-2 md:flex-row'>
                <div className='flex flex-col gap-16 ' >
                    <div className='flex flex-col gap-4'>
                        <img src="/Corpfin_logo_Dark 4.png" alt="" />
                        <p className='text-[16px] w-full sm:w-[325px]'>Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. </p>
                    </div>

                    <div className='w-full sm:w-[350px]  flex-col gap-4 p-2 hidden md:flex'>
                        <h1 className='font-bold text-[19px] text-primary'>Wir halten dich auf dem laufenden</h1>
                        <div className='flex w-full border-b border-white   gap-4' >

                            <input type="email" placeholder='E-mail Address' className='outline-none focus:outline-none bg-transparent w-full pb-4' />
                            <img src="/Group 6.png" alt="" className='size-[16px]' />
                        </div>
                    </div>
                </div>
                <div className='flex  md:hidden w-full px-4 '>
                    <div className='flex flex-col justify-between w-full'>

                        <div className='flex flex-col gap-2 mt-12'>
                            <h1 className='font-bold text-primary text-[16px]'>The Hub</h1>
                            <p className='font-normal opacity-80 text-[12px] whites'>Pricing</p>
                            <p className='font-normal opacity-80 text-[12px] whites'>Referral </p>
                            <p className='font-normal opacity-80 text-[12px] whites'>FAQ</p>
                        </div>
                        <div className='flex flex-col gap-2 mt-12'>
                            <h1 className='font-bold text-primary text-[16px]'>Company </h1>
                            <p className='font-normal opacity-80 text-[12px] whites'>About</p>
                            <p className='font-normal opacity-80 text-[12px] whites'>Contact</p>
                            <p className='font-normal opacity-80 text-[12px] whites'>Careers</p>
                            <p className='font-normal opacity-80 text-[12px] whites'>Terms</p>
                            <p className='font-normal opacity-80 text-[12px] whites'>Privacy</p>
                        </div>

                    </div>
                    <div className='flex flex-col gap-4 mt-12'>
                        <h1 className='font-bold text-primary text-[14px] whitespace-nowrap'>Who we serve? </h1>
                        <p className='font-normal opacity-80 text-[12px] whites'>Private Equity</p>
                        <p className='font-normal opacity-80 text-[12px] whites'>Private Credit </p>
                        <p className='font-normal opacity-80 text-[12px] whites'>Corporates</p>
                        <p className='font-normal opacity-80 text-[12px] whites'>CFO/Business Owners</p>
                        <p className='font-normal opacity-80 text-[12px] whites'>Family Offices</p>
                        <p className='font-normal opacity-80 text-[12px] whites'>Institutional Investors</p>
                        <p className='font-normal opacity-80 text-[12px] whites'>Investment Banks</p>
                        <p className='font-normal opacity-80 text-[12px] whites'>Mid Market Boutiques</p>
                        <p className='font-normal opacity-80 text-[12px] whites'>PE Portfolio Companies</p>
                    </div>
                </div>
                <div className=' flex-col gap-4 mt-12 hidden md:flex'>
                    <h1 className='font-bold text-primary text-[16px]'>The Hub</h1>
                    <p >Pricing</p>
                    <p>Referral </p>
                    <p>FAQ</p>
                </div>
                <div className='hidden md:flex flex-col gap-4 mt-12'>
                    <h1 className='font-bold text-primary text-[16px]'>Who we serve? </h1>
                    <p >Private Equity</p>
                    <p>Private Credit </p>
                    <p>Corporates</p>
                    <p>CFO/Business Owners</p>
                    <p>Family Offices</p>
                    <p>Institutional Investors</p>
                </div>
                <div className='hidden md:flex flex-col gap-4 mt-12'>
                    <h1 className='font-bold text-primary text-[16px]'>Company </h1>
                    <p >About</p>
                    <p >Contact</p>
                    <p >Careers</p>
                    <p >Terms</p>
                    <p >Privacy</p>

                </div>
                <div className='w-full sm:w-[350px] flex flex-col gap-4 p-2 mt-6 md:hidden'>
                    <h1 className='font-bold text-[19px] text-primary'>Wir halten dich auf dem laufenden</h1>
                    <div className='flex w-full border-b border-white   gap-4' >

                        <input type="email" placeholder='E-mail Address' className='outline-none focus:outline-none bg-transparent w-full pb-4' />
                        <img src="/Group 6.png" alt="" className='size-[16px]' />
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Footer