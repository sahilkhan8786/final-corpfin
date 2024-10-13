import React from 'react'
import { Link } from 'react-router-dom'

const SignupCompleted = () => {
    return (
        <section className='flex items-center justify-center w-full md:w-[556px] h-screen flex-col gap-7 md:mx-auto px-4'>
            <img src="/completed.png" alt="" />
            <h1 className='text-[#18191c] font-medium text-[16px] px-2 md:px-0 text-center'>🎉 Congratulations, Your sign up is complete!</h1>
            <p className='text-center text-[#5E6670] text-[16px]'>Donec hendrerit, ante mattis pellentesque eleifend, tortor urna malesuada ante, eget aliquam nulla augue hendrerit ligula. Nunc mauris arcu, mattis sed sem vitae.</p>
            <div className='flex items-center justify-center w-full  md:w-[410px] md:gap-4   flex-col gap-4'>
                <div className='flex flex-wrap gap-3 items-center justify-center w-full'>

                    <Link to={'/mid-market-seller-overview'} className='w-full'>
                        <button className='text-primary p-3 hover:opacity-85 bg-[#8DF5E780]  mx-4 whitespace-nowrap'>View Dashboard</button>
                    </Link>


                    <Link to={'/start-up-seller-overview'} className='w-full'>
                        <button className='text-primary p-3 hover:opacity-85 bg-[#8DF5E780]  mx-4 whitespace-nowrap'>Startup seller dashboard</button>
                    </Link>
                    <Link to={'/dashboard'} className='w-full'>
                        <button className='text-primary p-3 hover:opacity-85 bg-[#8DF5E780]  mx-4 whitespace-nowrap'>Midmarket Buyer dashboard</button>
                    </Link>
                    <Link to={'/dashboard'} className='w-full'>
                        <button className='text-primary p-3 hover:opacity-85 bg-[#8DF5E780]  mx-4 whitespace-nowrap'>Startup investor dashboard</button>
                    </Link>
                </div>

                <div className='flex flex-wrap gap-3 items-center justify-center w-full'>
                    <Link to={'/mid-market-buyer-dashboard'} className='w-full'>
                        <button className='text-white    p-3 hover:opacity-85 bg-primary  mx-4 whitespace-nowrap'>View Dashboard</button>
                    </Link>


                    <Link to={'/startup-seller-dashbaord'} className='w-full'>
                        <button className='text-white p-3 hover:opacity-85  bg-primary  mx-4 whitespace-nowrap'>Startup seller dashboard</button>
                    </Link>
                    <Link to={'/mid-market-buyer-dashboard'} className='w-full'>
                        <button className='text-white p-3 hover:opacity-85  bg-primary  mx-4 whitespace-nowrap'>Midmarket Buyer dashboard</button>
                    </Link>
                    <Link to={'/start-up-investor-dashboard'} className='w-full'>
                        <button className='text-white p-3 hover:opacity-85  bg-primary  mx-4 whitespace-nowrap'>Startup investor dashboard</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SignupCompleted