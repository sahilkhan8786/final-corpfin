import React from 'react';
import { Link } from 'react-router-dom';

// Constants for all sections and links
const footerLinks = {
    hub: [
        { text: 'Pricing', path: '/pricing' },
        { text: 'Referral', path: '/referral' },
        { text: 'FAQ', path: '/faq' }
    ],
    company: [
        { text: 'About', path: '/about' },
        { text: 'Contact', path: '/contact' },
        { text: 'Careers', path: '/careers' },
        { text: 'Terms', path: '/terms' },
        { text: 'Privacy', path: '/privacy' }
    ],
    whoWeServe: [
        { text: 'Private Equity', path: '/private-equity' },
        { text: 'Private Credit', path: '/private-credit' },
        { text: 'Corporates', path: '/corporates' },
        { text: 'CFO/Business Owners', path: '/cfo-business-owners' },
        { text: 'Family Offices', path: '/family-offices' },
        { text: 'Institutional Investors', path: '/institutional-investors' },
        { text: 'Investment Banks', path: '/investment-banks' },
        { text: 'Mid Market Boutiques', path: '/mid-market-boutiques' },
        { text: 'PE Portfolio Companies', path: '/pe-portfolio-companies' }
    ]
};

const Footer = () => {
    return (
        <div className='w-full bg-black py-16 text-white'>
            <article className='max-w-5xl mx-auto flex justify-between flex-col items-center lg:items-start px-2 md:flex-row'>

                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col gap-4'>
                        <Link to='/'>
                            <img src="/Corpfin_logo_Dark 4.png" alt="Logo" />
                        </Link>
                        <p className='text-[16px] w-full sm:w-[325px]'>
                            Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
                        </p>
                    </div>

                    {/* Email Subscription Section */}
                    <div className='w-full sm:w-[350px] flex-col gap-4 p-2 hidden md:flex'>
                        <h1 className='font-bold text-[19px] text-primary'>Wir halten dich auf dem laufenden</h1>
                        <div className='flex w-full border-b border-white gap-4'>
                            <input type="email" placeholder='E-mail Address' className='outline-none bg-transparent w-full pb-4' />
                            <img src="/Group 6.png" alt="Submit" className='size-[16px]' />
                        </div>
                    </div>
                </div>

                {/* Responsive Section for Small Screens */}
                <div className='flex md:hidden w-full px-4 justify-center items-start gap-4 max-w-[500px]    my-6 '>
                    <div className='flex flex-col justify-between w-full my-6 gap-6 h-full '>
                        {/* Hub Section */}
                        <FooterSection title="The Hub" links={footerLinks.hub} className='flex flex-col' />
                        {/* Company Section */}
                        <FooterSection title="Company" links={footerLinks.company} className='flex flex-col' />
                    </div>
                    {/* Who We Serve Section */}
                    <FooterSection title="Who we serve?" links={footerLinks.whoWeServe} className='flex flex-col' />
                </div>
                <div className='flex justify-between w-full px-6'>

                    {/* The Hub (for large screens) */}
                    <FooterSection title="The Hub" links={footerLinks.hub} className="hidden md:flex flex-col gap-4 mt-12 " />

                    {/* Who We Serve (for large screens) */}
                    <FooterSection title="Who we serve?" links={footerLinks.whoWeServe} className="hidden md:flex flex-col gap-4 mt-12" />

                    {/* Company (for large screens) */}
                    <FooterSection title="Company" links={footerLinks.company} className="hidden md:flex flex-col gap-4 mt-12" />

                </div>
                {/* Email Subscription Section (for small screens) */}
                <div className='w-full sm:w-[350px] flex flex-col gap-4 p-2 mt-6 md:hidden'>
                    <h1 className='font-bold text-[19px] text-primary'>Wir halten dich auf dem laufenden</h1>
                    <div className='flex w-full border-b border-white gap-4'>
                        <input type="email" placeholder='E-mail Address' className='outline-none bg-transparent w-full pb-4' />
                        <img src="/Group 6.png" alt="Submit" className='size-[16px]' />
                    </div>
                </div>
            </article>
        </div>
    );
};

// FooterSection component to generate each section
const FooterSection = ({ title, links, className = '' }) => (
    <div className={className}>
        <h1 className='font-bold text-primary text-[16px] whitespace-nowrap'>{title}</h1>
        {links.map((link, index) => (
            <Link key={index} to={link.path} className='font-normal opacity-80 text-[12px]'>
                {link.text}
            </Link>
        ))}
    </div>
);

export default Footer;
