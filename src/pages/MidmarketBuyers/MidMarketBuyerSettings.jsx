import React from 'react'
import InputPassword from '../../components/InputPassword'
import InputPhone from '../../components/InputPhone'
import InputBox from '../../components/InputBox'
import InputSelect from '../../components/InputSelect'

const MidMarketBuyerSettings = () => {
    return (
        <article className='flex-[6] px-4 flex flex-col gap-8'>
            <h1 className='font-semibold text-center text-primary  mt-4 md:hidden'>Settings</h1>
            <div className='border-b-[1px] w-full  flex '>
                <p className=' flex gap-2 font-semibold text-[14px] cursor-pointer p-3 hover:text-primary text-primary border-b border-primary'>
                    <img src="/User.png" alt="" />
                    <span>
                        Personal
                    </span>
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
                            <InputPassword
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
                            <InputPassword
                                name={'Re-Enter Password'}
                                label={'Re-Enter Password'}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-end'>

                    <button className='bg-primary text-white w-1/2 hover:opacity-85   py-3'>Save Details</button>
                </div>
            </div>
            <div className='border-b-[1px] w-full mt-12 flex '>

                <p className=' flex gap-2 font-semibold text-[14px] cursor-pointer p-3 hover:text-primary text-primary border-b border-primary'>
                    <img src="/UserCircle (1).png" alt="" />
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
                                name={'Company Name'}
                                label={'Company Name'}
                            />
                        </div>
                        <div className='w-full flex-1'>
                            <InputBox
                                name={'Position in Company'}
                                label={'Position in Company'}
                            />
                        </div>
                        <div className='w-full flex-1 '>
                            <InputSelect
                                name={'Platform'}
                                id={'Platform'} />

                        </div>
                        <div className='w-full flex-1 '>
                            <InputSelect
                                name={'Reason to Join'}
                                id={'Reason to Join'} />

                        </div>
                    </div>
                    <div className='flex w-full flex-col flex-1 gap-4'>
                        <div className='w-full flex-1'>
                            <InputSelect
                                name={'Company Type'}
                                id={'Company Type'} />
                        </div>
                        <div className='w-full flex-1'>
                            <InputSelect
                                name={'Company Location'}
                                id={'Company Location'} />
                        </div>
                        <div className='w-full flex-1'>
                            <InputSelect
                                name={'Industry Preference'}
                                id={'Industry Preference'} />
                        </div>
                        <div className='w-full flex-1 '>
                            <InputSelect
                                name={'How did you hear about us?'}
                                id={'How did you hear about us?'} />
                        </div>

                    </div>
                </div>
                <div className='w-full flex items-center justify-end'>

                    <button className='bg-primary text-white w-1/2 hover:opacity-85   py-3'>Save Details</button>
                </div>
            </div>
            <div className='text-primary font-semibold text-[16px] mb-16'>
                <h1>To Close Your Account</h1>
                <div className='flex justify-between w-full items-center flex-col sm:flex-row gap-4'>
                    <div className='flex-1 w-full sm:w-fit'>

                        <InputSelect
                            name={'How did you hear about us?'}
                            id={'How did you hear about us?'} />
                    </div>
                    <div className='flex-1 w-full flex justify-center  sm:justify-end'>
                        <button className='bg-[#7B7B7B] text-white font-medium text-[14px] py-3 px-5' disabled>Confirm</button>
                    </div>
                </div>
            </div>




        </article>
    )
}

export default MidMarketBuyerSettings