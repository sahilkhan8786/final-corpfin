import React from 'react'
import InputBox from '../../components/InputBox'
import InputPhone from '../../components/InputPhone'
import InputPassword from '../../components/InputPassword'
import SubscriptionCurrentPlan from '../../components/SubscriptionCurrentPlan'
import SubscriptionPlanBenefits from '../../components/SubscriptionPlanBenefits'

const MidmarketOverviewPage = () => {
    return (
        <article className='flex-[6] px-4 flex flex-col gap-8'>

            <h1 className='font-semibold text-center text-primary  mt-6 md:hidden'>Buy Side Dashboard</h1>
            <div className='border-b-[1px] w-full flex '>
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
                <form>

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
                    <div className='w-full flex items-center justify-center '>

                        <button className='bg-primary text-white  hover:opacity-85 w-full md:w-1/2   py-3'>Edit Details</button>
                    </div>
                </form>
            </div>

            <div className=' flex flex-col gap-3 mb-12'>
                <h1 className='text-primary font-medium text-[18px]'>Current Subscription</h1>

                <article className='flex gap-6 flex-col md:flex-row'>
                    <SubscriptionCurrentPlan />
                    <SubscriptionPlanBenefits />
                </article>
            </div>


        </article>
    )
}

export default MidmarketOverviewPage