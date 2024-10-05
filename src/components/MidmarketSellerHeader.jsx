import React from 'react'
import { Link } from 'react-router-dom'

const MidmarketSellerHeader = () => {
    return (
        <header className='bg-white w-full border-b border-primary'>
            <nav className='max-w-[1440px] mx-auto flex items-center justify-between py-4 px-2'>
                <div >
                    <img src="/logoDark.png" alt="" />
                </div>
                <ul className='md:flex items-center gap-8 hidden px-2'>
                    <Link to={'/about'}>
                        <li className='font-medium text-[14px] hover:text-primary cursor-pointer'>
                            About Us
                        </li>
                    </Link>
                    <li className='font-medium text-[14px] hover:text-primary cursor-pointer'>
                        The Hub
                    </li>
                    <li className='font-medium text-[14px] hover:text-primary cursor-pointer text-primary'>
                        Switch to Buy Side
                    </li>
                    <li>
                        <img src="/bell-icon.png" alt="" />
                    </li>
                    <li className='relative'>
                        <span className='size-2 bg-red-500 rounded-full absolute top-0 right-0'></span>
                        <img src="/image 4.png" alt="" className='rounded-full' />
                    </li>
                </ul>
                <img src="/menu.png" alt="" className='pr-4 cursor-pointer block md:hidden' />

            </nav>
        </header >
    )
}

export default MidmarketSellerHeader