import React from 'react'
import InputBox from '../../components/InputBox'
import InputSelect from '../../components/InputSelect'
import MidmarketSellerHeader from '../../components/MidmarketSellerHeader'

const SellerListingDetailsPage = () => {
    return (
        <section className='bg-[#fefefe] my-6'>
            <MidmarketSellerHeader />
            <div className='max-w-[1440px] mx-auto bg-white shadow-lg p-4'>

                <article className=''>
                    <h1 className='text-primary font-semibold text-[16px]'>Create Your listing</h1>
                    <p className='text-[14px]'>Please enter the mandatory fields</p>
                </article>

                <div className='relative'>
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
                    <button className='border-2 border-primary flex gap-2 items-center bg-primary text-white p-3 hover:opacity-85 w-full   justify-center md:w-fit'>
                        Create Listing
                    </button>
                </div>
                <article className='block md:hidden text-center my-10 '>
                    <p className='font-medium text-[#202020] text-[16px]'>Need help?</p>
                    <span className='text-primary text-[12px] underline cursor-pointer whitespace-nowrap'>Talk to our advisors </span>
                </article>
            </div>

        </section>
    )
}

export default SellerListingDetailsPage