import React from 'react'
import MidmarketSellerHeader from '../components/MidmarketSellerHeader'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <section>
            <MidmarketSellerHeader />
            <div className='max-w-[1440px] mx-auto flex gap-6'>
                <article className='flex-2 border-r  pr-12 mt-4 hidden xl:block '>
                    <h1 className='text-primary font-semibold text-[16px] cursor-pointer my-4'>Buyer Dashboard</h1>
                    <ul className='flex flex-col gap-4'>
                        <Link to={'/dashboard'}>
                            <li className='cursor-pointer flex gap-3 bg-[#03887514] text-primary px-3 py-3'>
                                <img src="/Stack-white.png" alt="" />
                                <span className='font-medium text-[14px]  '>Overview</span>
                            </li>
                        </Link>
                        <Link to={'/'}>
                            <li className='cursor-pointer flex gap-3 px-3 py-3 hover:bg-[#03887514]'>
                                <img src="/BookmarkSimple.png" alt="" />
                                <span className='font-medium text-[14px] text-[#767F8C]'>Saved Businesses</span>
                            </li>
                        </Link>
                        <Link to='/dashboard/subscription'>
                            <li className='cursor-pointer flex gap-3 px-3 py-3 hover:bg-[#03887514]'>
                                <img src="/Notebook.png" alt="" />
                                <span className='font-medium text-[14px] text-[#767F8C]'>Plans & Billing</span>
                            </li>
                        </Link>
                        <Link>
                            <li className='cursor-pointer flex gap-3 px-3 py-3 hover:bg-[#03887514]'>
                                <img src="/Gear.png" alt="" />
                                <span className='font-medium text-[14px] text-[#767F8C]'>Settings</span>
                            </li>
                        </Link>
                        <li className='cursor-pointer flex gap-3 px-3 py-3 hover:bg-[#03887514]'>
                            <img src="/SignOut.png" alt="" />
                            <span className='font-medium text-[14px] text-[#767F8C]'>Log-out</span>
                        </li>
                    </ul>

                </article>

                <Outlet />


            </div>
        </section>
    )
}

export default DashboardLayout