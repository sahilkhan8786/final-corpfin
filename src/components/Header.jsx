import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false); // State to control mobile menu visibility
    const [hubOpen, setHubOpen] = useState(false); // State to control Hub submenu visibility

    const toggleNav = () => setNavOpen(!navOpen); // Toggles mobile menu
    const toggleHub = () => setHubOpen(!hubOpen); // Toggles Hub submenu

    return (
        <header className="w-full mb-4 md:mb-0">
            <nav className="max-w-[1440px] mx-auto md:py-4 uppercase flex items-center justify-between px-2">
                <div>
                    <Link to="/">
                        <img src="/logoDark.png" alt="Logo" className="cursor-pointer" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="md:flex items-center gap-4 hidden z-50">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="relative">
                        <button onClick={toggleHub} className="flex items-center" onMouseEnter={toggleHub} >
                            The Hub
                        </button>
                        {hubOpen && (
                            <ul className="absolute bg-white mt-2 shadow-lg rounded z-50 min-w-fit px-4 " onMouseLeave={toggleHub}>
                                <li>
                                    <Link to="/buyside-landing-page" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>Buyside Landing page</Link>
                                </li>
                                <li>
                                    <Link to="/sellside-landing-page" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>SellSide Landing page</Link>
                                </li>
                                <li>
                                    <Link to="/start-up-landing-page" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>Start Up Landing page</Link>
                                </li>
                                <li>
                                    <Link to="/investor-landing-page-early-stage" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={toggleHub}>Investor Landing Page</Link>
                                </li>

                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className="gap-3 hidden md:flex">
                    <Link to="/sign-in">
                        <button className="bg-primary text-white hover:opacity-85 px-4 py-2 border border-primary font-medium uppercase">Login</button>
                    </Link>
                    <Link to="/sign-up">
                        <button className="uppercase border border-primary px-4 py-2 text-primary font-medium hover:opacity-85">Sign up</button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <img
                    src="/menu.png"
                    alt="Menu"
                    className="pr-4 cursor-pointer block md:hidden z-50"
                    onClick={toggleNav}
                />

                {/* Mobile Menu */}
                {navOpen && (
                    <ul className="block md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 ">
                        <li className="p-4">
                            <Link to="/" onClick={toggleNav}>Home</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/about" onClick={toggleNav}>About Us</Link>
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
                                        <Link to="/hub/option1" onClick={toggleNav}>Option 1</Link>
                                    </li>
                                    <li className="p-2">
                                        <Link to="/hub/option2" onClick={toggleNav}>Option 2</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="p-4">
                            <Link to="/pricing" onClick={toggleNav}>Pricing</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/sign-in" onClick={toggleNav}>Login</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/sign-up" onClick={toggleNav}>Sign up</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
