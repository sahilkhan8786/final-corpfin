import React from 'react'
import MidmarketSellerHeader from '../../components/MidmarketSellerHeader'

const StartUpInvestorDashboard = () => {
    return (
        <section>
            <MidmarketSellerHeader />
            <div className='max-w-[1440px] mx-auto'>
                <div className='pt-4 mt-6 relative'>

                    <img src="/Group 78.png" alt="" className='w-full' />

                </div>
            </div>

            <div className='w-full flex justify-between gap-3 my-6 max-w-[1440px] mx-auto'>
                <article className=' w-full  flex items-center gap-2 px-3 py-2 border'>
                    <img src="/fi_search (1).png" alt="" />
                    <input type="text" placeholder='Search by anything...' className='w-full outline-none focus:outline-none  bg-transparent' />
                </article>
                <article className=' w-full  flex items-center gap-2 px-3 py-2 border'>
                    <img src="/fi_layers.png" alt="" />
                    <select type="text" className='w-full outline-none focus:outline-none  bg-transparent' >
                        <option>industry</option>
                    </select>
                </article>
                <button className=' text-white bg-primary px-4 py-3'>Search</button>
                <article className=' w-full  flex items-center gap-2 px-3 py-2 border'>
                    <img src="/fi_layers.png" alt="" />
                    <select type="text" className='w-full outline-none focus:outline-none  bg-transparent' >
                        <option>Sort by</option>
                    </select>
                </article>
                <article className=' w-full  flex items-center gap-2 px-3 py-2 border'>
                    <img src="/fi_layers.png" alt="" />
                    <select type="text" className='w-full outline-none focus:outline-none  bg-transparent' >
                        <option>12 per page</option>
                    </select>
                </article>
            </div>

            <div className='max-w-[1440px] mx-auto px-4 w-full flex gap-4'>
                <div className='flex-1 w-full'>
                    <h1 className='text-primary font-semibold text-[16px]'>Filter</h1>

                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>Revenue</option>
                        </select>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>Revenue Growth</option>
                        </select>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>EBITDA</option>
                        </select>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>EBITDA Margin</option>
                        </select>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>Enterprise Value</option>
                        </select>
                    </article>
                    <article className=' w-full  flex  gap-2 py-2 flex-col items-start  justify-start'>

                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="amount"
                                value="<£1.0m"
                                className="form-radio text-primary bg-red-300 h-5 w-5"
                                defaultChecked
                            />
                            <span className="text-gray-500">£1.0m or less</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="amount"
                                value="£1.1m - £3.5m"
                                className="form-radio text-primary h-5 w-5"
                            />
                            <span className="text-gray-500">£1.1m - £3.5m</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="amount"
                                value="£3.6m - £5.0m"
                                className="form-radio text-primary h-5 w-5"
                            />
                            <span className="text-gray-500">£3.6m - £5.0m</span>
                        </label>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>EV/Revenue</option>
                        </select>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>EV/EBITDA</option>
                        </select>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>Industry</option>
                        </select>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <select className='w-full outline-none focus:outline-none  bg-transparent text-gray-600' >
                            <option>Transaction Type</option>
                        </select>
                    </article>
                    <article className=' w-full  flex items-center gap-2 py-2 '>

                        <button className='px-3 py-2 text-primary border-2 border-primary font-medium whitespace-nowrap'>Clear All</button>
                        <button className='px-3 py-2 text-white bg-primary border-2 border-primary font-medium whitespace-nowrap'>Apply</button>
                    </article>
                </div>
                <div className='flex-[6]'>

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
                                    <div className='absolute right-0 -bottom-16 bg-[#8DF5E780] w-[50px] h-[96px] rounded-full justify-center hidden md:flex'>
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

                                <article className='flex flex-col justify-center gap-4 items-center relative '>
                                    <div className='absolute right-0 top-0'>
                                        <img src="/Rectangle 510.png" alt="" />
                                    </div>
                                    <div className='absolute right-2 -top-1'>
                                        <span className='text-white text-[10px]'>New Lisiting</span>
                                    </div>

                                    <div className='flex items-center justify-center w-full'>

                                        <button className='bg-primary text-white p-4 hover:opacity-80 w-fit md:w-full'>Sign NDA &
                                            request access to VDR</button>
                                    </div>
                                </article>

                                <div className='absolute right-1/2 translate-x-1/2 -bottom-16 bg-[#8DF5E780] w-[50px] h-[96px] rounded-full flex justify-center md:hidden'>
                                    <img src="/Arrow down sign to navigate.png" alt="" className='w-fit  h-fit py-2 ' />
                                </div>
                            </div>

                        </article><article className='flex w-full flex-col gap-4 my-2 border  p-3 shadow-lg'>
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
                                    <div className='absolute right-0 -bottom-16 bg-[#8DF5E780] w-[50px] h-[96px] rounded-full justify-center hidden md:flex'>
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

                                <article className='flex flex-col justify-center gap-4 items-center relative '>
                                    <div className='absolute right-0 top-0'>
                                        <img src="/Rectangle 510.png" alt="" />
                                    </div>
                                    <div className='absolute right-2 -top-1'>
                                        <span className='text-white text-[10px]'>New Lisiting</span>
                                    </div>

                                    <div className='flex items-center justify-center w-full'>

                                        <button className='bg-primary text-white p-4 hover:opacity-80 w-fit md:w-full'>Sign NDA &
                                            request access to VDR</button>
                                    </div>
                                </article>

                                <div className='absolute right-1/2 translate-x-1/2 -bottom-16 bg-[#8DF5E780] w-[50px] h-[96px] rounded-full flex justify-center md:hidden'>
                                    <img src="/Arrow down sign to navigate.png" alt="" className='w-fit  h-fit py-2 ' />
                                </div>
                            </div>

                        </article><article className='flex w-full flex-col gap-4 my-2 border  p-3 shadow-lg'>
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
                                    <div className='absolute right-0 -bottom-16 bg-[#8DF5E780] w-[50px] h-[96px] rounded-full justify-center hidden md:flex'>
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

                                <article className='flex flex-col justify-center gap-4 items-center relative '>
                                    <div className='absolute right-0 top-0'>
                                        <img src="/Rectangle 510.png" alt="" />
                                    </div>
                                    <div className='absolute right-2 -top-1'>
                                        <span className='text-white text-[10px]'>New Lisiting</span>
                                    </div>

                                    <div className='flex items-center justify-center w-full'>

                                        <button className='bg-primary text-white p-4 hover:opacity-80 w-fit md:w-full'>Sign NDA &
                                            request access to VDR</button>
                                    </div>
                                </article>

                                <div className='absolute right-1/2 translate-x-1/2 -bottom-16 bg-[#8DF5E780] w-[50px] h-[96px] rounded-full flex justify-center md:hidden'>
                                    <img src="/Arrow down sign to navigate.png" alt="" className='w-fit  h-fit py-2 ' />
                                </div>
                            </div>

                        </article>




                    </div>
                </div>
            </div>

        </section>
    )
}

export default StartUpInvestorDashboard