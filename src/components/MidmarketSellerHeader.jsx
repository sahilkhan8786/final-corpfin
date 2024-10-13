import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MidmarketSellerHeader = () => {
    // Define state to track if mobile menu is open
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='bg-white w-full border-b border-primary '>
            <nav className='max-w-[1440px] mx-auto flex items-center justify-between py-4 px-2'>
                {/* Logo */}
                <div>
                    <Link to='/'>
                        <img src="/logoDark.png" alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
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
                        <img src="/bell-icon.png" alt="Notifications" />
                    </li>
                    <li className='relative'>
                        <span className='size-2 bg-red-500 rounded-full absolute top-0 right-0'></span>
                        <img src="/image 4.png" alt="User Avatar" className='rounded-full' />
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <img
                    src="/menu.png"
                    alt="Menu"
                    className='pr-4 cursor-pointer block md:hidden'
                    onClick={toggleMobileMenu}
                />

                {/* Mobile Navigation (toggle with state) */}
                {isMobileMenuOpen && (
                    <ul className='block md:hidden absolute top-16 left-0 w-full bg-white border-t border-primary py-4 px-6 z-50'>
                        <Link to={'/about'}>
                            <li className='font-medium text-[14px] hover:text-primary cursor-pointer mb-4'>
                                About Us
                            </li>
                        </Link>
                        <li className='font-medium text-[14px] hover:text-primary cursor-pointer mb-4'>
                            The Hub
                        </li>
                        <li className='font-medium text-[14px] hover:text-primary cursor-pointer mb-4 text-primary'>
                            Switch to Buy Side
                        </li>
                        <li className='mb-4'>
                            <img src="/bell-icon.png" alt="Notifications" />
                        </li>
                        <li className='relative'>
                            <span className='size-2 bg-red-500 rounded-full absolute top-0 right-0'></span>
                            <img src="/image 4.png" alt="User Avatar" className='rounded-full' />
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default MidmarketSellerHeader
