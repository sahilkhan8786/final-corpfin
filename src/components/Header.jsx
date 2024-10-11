import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [hubOpen, setHubOpen] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);
    const toggleHub = () => setHubOpen(!hubOpen);

    const activeImage = <img src="/Play-arrow.png" alt="Active" className="inline-block mr-2" />;

    return (
        <header className="w-full mb-4 md:mb-0">
            <nav className="max-w-[1440px] mx-auto md:py-4 uppercase flex items-center justify-between px-6">
                <div>
                    <NavLink to="/">
                        <img src="/logoDark.png" alt="Logo" className="cursor-pointer" />
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <ul className="custom-md:flex items-center gap-4 hidden z-50">
                    <li>
                        <NavLink
                            to="/"

                            className="nav-link"

                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? activeImage : null}
                                    <span className={`${isActive ? 'active-link' : ' '}`}>
                                        Home
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="nav-link"

                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? activeImage : null}
                                    <span className={`${isActive ? 'active-link' : ' '}`}>
                                        About Us
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>

                    <li className="relative">
                        <button onClick={toggleHub} className="flex items-center" onMouseEnter={toggleHub}>
                            THE Hub
                            <img
                                src="/Arrow down sign to navigate.png"
                                alt="Arrow"
                                className={`ml-2 transition-transform ${hubOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {hubOpen && (
                            <ul className="absolute bg-white mt-2 shadow-lg rounded z-50 min-w-fit px-4" onMouseLeave={toggleHub}>
                                <li>
                                    <NavLink to="/buyside-landing-page" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>
                                        {({ isActive }) => (isActive ? activeImage : null)}
                                        Grow your Business
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/buyside-landing-page" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>
                                        {({ isActive }) => (isActive ? activeImage : null)}
                                        Invest in Business
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sellside-landing-page" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>
                                        {({ isActive }) => (isActive ? activeImage : null)}
                                        Execute Transaction
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sellside-landing-page" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>
                                        {({ isActive }) => (isActive ? activeImage : null)}
                                        Exit your Business
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sellside-landing-page" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>
                                        {({ isActive }) => (isActive ? activeImage : null)}
                                        Raise Funds
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <NavLink
                            to="/pricing"
                            className="nav-link"

                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? activeImage : null}
                                    <span className={`${isActive ? 'active-link' : ' '}`}>

                                        Pricing
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faq"
                            className="nav-link"

                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? activeImage : null}
                                    <span className={`${isActive ? 'active-link' : ' '}`}>

                                        FAQ
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="nav-link"

                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? activeImage : null}
                                    <span className={`${isActive ? 'active-link' : ' '}`}>

                                        Contact Us
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className="gap-3 hidden custom-md:flex ">
                    <NavLink to="/sign-in">
                        <button className="bg-primary text-white hover:opacity-85 px-4 py-2 border border-primary font-medium uppercase">Login</button>
                    </NavLink>
                    <NavLink to="/sign-up">
                        <button className="uppercase border border-primary px-4 py-2 text-primary font-medium hover:opacity-85">Sign up</button>
                    </NavLink>
                </div>

                {/* Mobile Menu Icon */}
                <img
                    src="/menu.png"
                    alt="Menu"
                    className="pr-4 cursor-pointer block custom-md:hidden z-50"
                    onClick={toggleNav}
                />

                {/* Mobile Menu */}
                {navOpen && (
                    <ul className="block custom-md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
                        <li className="p-4">
                            <NavLink to="/" onClick={toggleNav}>
                                {({ isActive }) => (
                                    <>
                                        {isActive ? activeImage : null}
                                        Home
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink to="/about" onClick={toggleNav}>
                                {({ isActive }) => (
                                    <>
                                        {isActive ? activeImage : null}
                                        About Us
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <button onClick={toggleHub} className="flex justify-between items-center w-full">
                                The Hub
                                <img
                                    src="/Arrow down sign to navigate.png"
                                    alt="Arrow"
                                    className={`ml-2 transition-transform ${hubOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {hubOpen && (
                                <ul className="mt-2">
                                    <li className="p-2">
                                        <NavLink to="/buyside-landing-page" onClick={toggleNav}>
                                            {({ isActive }) => (isActive ? activeImage : null)}
                                            Grow your Business
                                        </NavLink>
                                    </li>
                                    <li className="p-2">
                                        <NavLink to="/buyside-landing-page" onClick={toggleNav}>
                                            {({ isActive }) => (isActive ? activeImage : null)}
                                            Invest in Business
                                        </NavLink>
                                    </li>
                                    <li className="p-2">
                                        <NavLink to="/sellside-landing-page" onClick={toggleNav}>
                                            {({ isActive }) => (isActive ? activeImage : null)}
                                            Execute Transaction
                                        </NavLink>
                                    </li>
                                    <li className="p-2">
                                        <NavLink to="/sellside-landing-page" onClick={toggleNav}>
                                            {({ isActive }) => (isActive ? activeImage : null)}
                                            Exit your Business
                                        </NavLink>
                                    </li>
                                    <li className="p-2">
                                        <NavLink to="/sellside-landing-page" onClick={toggleNav}>
                                            {({ isActive }) => (isActive ? activeImage : null)}
                                            Raise Funds
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="p-4">
                            <NavLink to="/pricing" onClick={toggleNav}>
                                {({ isActive }) => (
                                    <>
                                        {isActive ? activeImage : null}
                                        Pricing
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink to="/faq" onClick={toggleNav}>
                                {({ isActive }) => (
                                    <>
                                        {isActive ? activeImage : null}
                                        FAQ
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink to="/contact" onClick={toggleNav}>
                                {({ isActive }) => (
                                    <>
                                        {isActive ? activeImage : null}
                                        Contact Us
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink to="/sign-in" onClick={toggleNav}>
                                {({ isActive }) => (
                                    <>
                                        {isActive ? activeImage : null}
                                        Login
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink to="/sign-up" onClick={toggleNav}>
                                {({ isActive }) => (
                                    <>
                                        {isActive ? activeImage : null}
                                        Sign up
                                    </>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
