import React from 'react'
import MidmarketSellerHeader from '../../components/MidmarketSellerHeader'
import InputBox from '../../components/InputBox'
import InputPhone from '../../components/InputPhone'
import InputSelect from '../../components/InputSelect'

const MidmarketSellerOverview = () => {
    return (
        <section>
            <MidmarketSellerHeader />

            <div className='flex gap-2 max-w-[1440px] mx-auto'>
                {/* LEFT */}
                <article className='flex-2 border-r  pr-12 mt-4 hidden xl:block'>
                    <h1 className='text-primary font-semibold text-[16px] cursor-pointer my-4'>Business Side Dashboard</h1>
                    <ul className='flex flex-col gap-4'>
                        <li className='cursor-pointer flex gap-3'>
                            <img src="/Stack.png" alt="" />
                            <span className='font-medium text-[14px] text-[#767F8C]'>Overview</span>
                        </li>
                        <li className='cursor-pointer flex gap-3'>
                            <img src="/Gear.png" alt="" />
                            <span className='font-medium text-[14px] text-[#767F8C]'>Settings</span>
                        </li>
                        <li className='cursor-pointer flex gap-3'>
                            <img src="/SignOut.png" alt="" />
                            <span className='font-medium text-[14px] text-[#767F8C]'>Log-out</span>
                        </li>
                    </ul>

                </article>

                {/* RIGHT */}
                <article className='flex-[6] px-4 flex flex-col gap-10'>

                    <div className='border-b-[1px] w-full mt-12 flex '>
                        <p className=' flex gap-2 font-semibold text-[14px] cursor-pointer p-3 hover:text-primary text-primary border-b border-primary'>
                            <img src="/User.png" alt="" />
                            <span>
                                Personal
                            </span>
                        </p>
                        <p className=' flex gap-2 font-semibold text-[14px] cursor-pointer p-3 hover:text-primary text-[#767F8C] border-b hover:border-primary'>
                            <img src="/UserCircle.png" alt="" />
                            <span>Business</span>
                        </p>
                    </div>
                    <div>

                        <div className='flex flex-1 gap-4 my-6 flex-col md:flex-row' >
                            <div className='flex items-center w-full justify-center md:flex-1'>

                                <img src="/Group 65.png" alt="" className=' w-fit ' />
                            </div>
                            <div className='flex w-full flex-col  gap-4 md:flex-1  '>
                                <div className='w-full flex-1'>
                                    <InputBox
                                        name={'first name'}
                                        label={'first name'}
                                    />
                                </div>
                                <div className='w-full flex-1'>
                                    <InputBox
                                        name={'Email address'}
                                        label={'Email address'}
                                    />
                                </div>
                                <div className='w-full flex-1'>
                                    <InputBox
                                        name={'Change Password'}
                                        label={'Change Password'}
                                    />
                                </div>
                            </div>
                            <div className='flex w-full flex-col flex-1 gap-4'>
                                <div className='w-full flex-1'>
                                    <InputBox
                                        name={'Last name'}
                                        label={'Last name'}
                                    />
                                </div>
                                <div className='w-full flex-1'>
                                    <InputPhone label="Phone number" name='Phone number' />
                                </div>
                                <div className='w-full flex-1'>
                                    <InputBox
                                        name={'Re-Enter Password'}
                                        label={'Re-Enter Password'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-end'>

                            <button className='bg-primary text-white w-1/2 hover:opacity-85   py-3'>Edit Details</button>
                        </div>
                    </div>
                    <div className='mb-16'>

                        <article className=''>
                            <h1 className='text-primary font-semibold text-[16px]'>Create Your listing</h1>
                            <p className='text-[14px]'>Please enter the mandatory fields</p>
                        </article>

                        <div>
                            <article className='flex w-full mt-6 gap-3 flex-col md:flex-row flex-wrap'>
                                <div className='w-full flex-1'>
                                    <InputBox
                                        label={'Transaction overview'}
                                        name={'Transaction overview'} />

                                </div>
                                <div className='w-full flex-1'>
                                    <InputBox
                                        label={'Transaction details'}
                                        name={'Transaction details'} />

                                </div>
                                <div className='w-full flex-1'>

                                    <InputBox
                                        label={'Transaction objective'}
                                        name={'Transaction objective'} />
                                </div>
                            </article>
                        </div>
                        <div className='flex w-full my-4 gap-3 flex-col md:flex-row'>
                            <article className='flex-1 w-full flex flex-col gap-3'>
                                <div className='flex gap-4 items-center '>
                                    <InputSelect name={'Transaction type'} id={'Transaction type'} />
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='flex gap-4 items-center '>

                                    <InputSelect name={'Industry'} id={'Industry'} />
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='flex gap-4 items-center '>

                                    <InputSelect name={'Country'} id={'Country '} />
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='   items-center w-full flex gap-4'>
                                    <div className='flex-1 w-full'>

                                        <InputBox
                                            label={'Revenue'}
                                            name={'Revenue '} />
                                    </div>
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='   items-center w-full flex gap-4'>
                                    <div className='flex-1 w-full'>

                                        <InputBox
                                            label={'Revenue Growth'}
                                            name={'Revenue Growth '} />
                                    </div>
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='   items-center w-full flex gap-4'>
                                    <div className='flex-1 w-full'>

                                        <InputBox
                                            label={'Enterprise Value'}
                                            name={'Enterprise Value '} />
                                    </div>
                                    <img src="/info.png" alt="" />
                                </div>
                            </article>
                            <article className='flex-1 w-full flex flex-col gap-3'>
                                <div className='flex gap-4 items-center '>
                                    <InputSelect name={'Preferred Investor'} id={'Preferred Investor'} />
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='flex gap-4 items-center '>

                                    <InputSelect name={'Sun Industry'} id={'Sun Industry'} />
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='flex gap-4 items-center '>

                                    <InputSelect name={'Country'} id={'Country '} />
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='   items-center w-full flex gap-4'>
                                    <div className='flex-1 w-full'>

                                        <InputBox
                                            label={'EBITDA'}
                                            name={'EBITDA '} />
                                    </div>
                                    <img src="/info.png" alt="" />
                                </div>
                                <div className='   items-center w-full flex gap-4'>
                                    <div className='flex-1 w-full'>

                                        <InputBox
                                            label={'EBIDTA Margin'}
                                            name={'EBIDTA Margin '} />
                                    </div>
                                    <img src="/info.png" alt="" />
                                </div>

                            </article>
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="6" placeholder='Any other details ' className='border w-full p-4'></textarea>
                        </div>
                        <article className='block md:hidden text-center my-6'>
                            <p className='font-medium text-[#202020] text-[16px]'>Need help?</p>
                            <span className='text-primary text-[12px] underline cursor-pointer'>Talk to our advisors </span>
                        </article>
                        <div className='flex justify-between  my-6 flex-col md:flex-row '>
                            <article className='flex gap-4 w-full'>
                                <button className='border-2 border-primary flex gap-2 items-center p-3 hover:opacity-85 text-primary justify-center   w-full md:w-fit'>
                                    <img src="/upload.png" alt="" />
                                    <span>Upload Teaser</span>
                                </button>
                                <button className='border-2 border-primary flex gap-2 items-center bg-primary text-white p-3 hover:opacity-85 justify-center w-full md:w-fit'>
                                    <img src="/file-plus.png" alt="" />
                                    <span>Upload NDA</span>
                                </button>
                            </article>
                            <article className='hidden md:block '>
                                <p className='font-medium text-[#202020] text-[16px]'>Need help?</p>
                                <span className='text-primary text-[12px] underline cursor-pointer whitespace-nowrap'>Talk to our advisors </span>
                            </article>
                        </div>
                        <div className='flex items-center justify-center w-2/3 md:w-full mx-auto  gap-4'>
                            <button className='border-2 border-primary flex gap-2 items-center p-3 hover:opacity-85 text-primary w-full  justify-center md:w-fit'>
                                Cancel
                            </button>
                            <button className='border-2 border-primary flex gap-2 items-center bg-primary text-white p-3 hover:opacity-85 w-full   justify-center md:w-fit whitespace-nowrap'>
                                Create Listing
                            </button>
                        </div>

                    </div>

                </article>

            </div>


        </section>
    )
}

export default MidmarketSellerOverview