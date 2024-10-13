import React, { useState } from 'react'
import MidmarketSellerHeader from '../../components/MidmarketSellerHeader'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
const MyListingStartupSeller = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };
    return (
        <section>
            <MidmarketSellerHeader />
            <div className='max-w-[1440px] mx-auto'>

                <div className='pt-4 mt-6'>
                    <img src="/banner 2.png" alt="" className='w-full' />
                </div>

            </div>
            <Link to={'/startup-seller-listing-detail-page'}>
                <h1 className='max-w-[1440px] mx-auto px-4 w-full'>Go to My Listing Page</h1>
            </Link>
            <div className='max-w-[1440px] mx-auto px-4 w-full '>
                <h1 className='text-primary font-semibold text-[16px]'>My Lisiting</h1>
                <div className='flex flex-col gap-3 w-full ' >
                    <article className='flex w-full flex-col gap-4 my-2 border  p-3 shadow-lg'>
                        {/* top */}
                        <div className='flex justify-between w-full'>
                            <article className='flex justify-between gap-2 flex-col  md:flex-row md:gap-0'>
                                <span>Transaction Headlines:</span>
                                <h1 className=' font-medium text-[16px] text-primary flex items-center gap-2'>
                                    <img src="/Location.png" alt="" />
                                    <span>
                                        London, UK
                                    </span>
                                </h1>
                            </article>
                            <article>
                                <span className='text-[#8B5400] font-light italic text-[10px]'>This business is in draft state </span>
                            </article>
                        </div>
                        {/* bottom */}
                        <div className='flex justify-between w-full gap-4 flex-col md:flex-row relative md:static overflow-hidden pb-12 md:pb-0'>
                            <div className='w-full  gap-2 flex md:hidden'>

                                <img src="/Group 45.png" alt="" />
                                <div className='flex flex-col gap-2'>
                                    <div className='block md:hidden'>
                                        <span className='text-[12px] text-[#000000B2] '>Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only.</span>
                                        <div className='flex gap-3 flex-col sm:flex-row md:flex-col lg:flex-row'>
                                            <button className='bg-primary p-3 text-white flex items-center gap-2 md:flex-1 min-w-fit'>
                                                <img src="/square-pen.png" alt="" />
                                                <span>Edit</span>
                                            </button>
                                            <select className='text-[8px] font-medium border border-primary p-1'>
                                                <option value="Change Business Status">Change Business Status</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/Group 45.png" alt="" className='hidden md:block' />
                            <article className='flex flex-row justify-between relative overflow-hidden md:flex-col'>
                                <div className='absolute right-0 -bottom-16 bg-[#8DF5E780] w-[50px] h-[96px] rounded-full justify-center hidden md:flex cursor-pointer' onClick={toggleExpand} >
                                    <img src="/Arrow down sign to navigate.png" alt="" className='w-fit  h-fit py-2 ' />
                                </div>

                                <span className='text-[12px] text-[#000000B2] hidden md:block'>Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only.</span>
                                <div className='flex justify-between flex-col gap-3 md:flex-row '>


                                    <aside className='flex-1 '>
                                        <h1 className='font-medium text-[14px]'>Revenue</h1>
                                        <p className='text-primary text-[12px] font-medium'>54.2</p>
                                    </aside>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>EBITDA</h1>
                                        <p className='text-primary text-[12px] font-medium'>76.2</p>
                                    </aside>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>Industry</h1>
                                        <p className='text-primary text-[12px] font-medium'>Petroleum, Earth Works</p>
                                    </aside>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>Enterprise Value</h1>
                                        <p className='text-primary text-[12px] font-medium'>£2.84 m</p>
                                    </aside>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>EV/ EBITDA</h1>
                                        <p className='text-primary text-[12px] font-medium'>76.2</p>
                                    </aside>
                                </div>
                                <div className='flex justify-between flex-col gap-3 md:flex-row '>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>Revenue Growth </h1>
                                        <p className='text-primary text-[12px] font-medium'>99.3</p>
                                    </aside>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>EBITDA Margin</h1>
                                        <p className='text-primary text-[12px] font-medium'>76.2</p>
                                    </aside>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>Sub Industry</h1>
                                        <p className='text-primary text-[12px] font-medium'>Petroleum, Earth Works</p>
                                    </aside>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>Transaction</h1>
                                        <p className='text-primary text-[12px] font-medium'>762.2</p>
                                    </aside>
                                    <aside className='flex-1'>
                                        <h1 className='font-medium text-[14px]'>EV/ Revenue</h1>
                                        <p className='text-primary text-[12px] font-medium'>762.2</p>
                                    </aside>
                                </div>
                            </article>

                            <article className='flex flex-col justify-between gap-4  '>
                                <div className=' gap-3 flex-row  hidden md:flex w-full' >
                                    <button className='bg-primary p-3 text-white flex items-center gap-2 md:flex-1 min-w-fit'>
                                        <img src="/square-pen.png" alt="" />
                                        <span>Edit</span>
                                    </button>
                                    <select className='text-[12px] font-medium border border-primary p-1 md:p-3'>
                                        <option value="Change Business Status">Change Business Status</option>
                                    </select>
                                </div>

                                <div className='flex items-center justify-center w-full'>
                                    <Link to={'/startp-seller-dashbaord'}>
                                        <button className='bg-primary text-white p-4 hover:opacity-80 w-fit md:w-full'>Evaluate Investors</button>
                                    </Link>
                                </div>
                            </article>

                            <div className='absolute right-1/2 translate-x-1/2 -bottom-16 bg-[#8DF5E780] w-[50px] h-[96px] rounded-full flex justify-center md:hidden'>
                                <img src="/Arrow down sign to navigate.png" alt="" className='w-fit  h-fit py-2 ' />
                            </div>
                        </div>
                        <AnimatePresence>

                            {isExpanded && <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{ overflow: 'hidden' }}
                                className='  flex flex-wrap w-full p-4 flex-col md:flex-row'>
                                <div className='flex flex-col md:flex-row'>

                                    <div className='flex-1'>
                                        <h1 className='font-semibold'>Business Overview:</h1>
                                        <p className='text-gray-500 w-full  md:w-1/2 text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi itaque, in aliquid amet ipsa fugit! Modi, veniam. Perspiciatis modi magnam a accusantium ex, minus numquam.</p>
                                    </div>
                                    <div className='flex-1'>
                                        <h1 className='font-semibold'>Business Overview:</h1>
                                        <p className='text-gray-500  w-full  md:w-1/2 text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi itaque, in aliquid amet ipsa fugit! Modi, veniam. Perspiciatis modi magnam a accusantium ex, minus numquam.</p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row'>

                                    <div className='flex-1'>
                                        <h1 className='font-semibold'>Business Overview:</h1>
                                        <p className='text-gray-500  w-full  md:w-1/2  text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi itaque, in aliquid amet ipsa fugit! Modi, veniam. Perspiciatis modi magnam a accusantium ex, minus numquam.</p>
                                    </div>
                                    <div className='flex-1'>
                                        <h1 className='font-semibold'>Business Overview:</h1>
                                        <p className='text-gray-500  w-full  md:w-1/2 text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi itaque, in aliquid amet ipsa fugit! Modi, veniam. Perspiciatis modi magnam a accusantium ex, minus numquam.</p>
                                    </div>
                                </div>
                            </motion.div>}
                        </AnimatePresence>
                    </article>




                </div>
            </div>

        </section>
    )

}

export default MyListingStartupSeller