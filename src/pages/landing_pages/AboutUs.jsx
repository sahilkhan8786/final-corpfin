import React from 'react'
import TeamCard from '../../components/TeamCard'

const AboutUs = () => {
    return (
        <>
            <div className="w-full h-[70vh] ">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#D8D8D8] bg-cover bg-center px-3 md:px-0 `}>
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full px-2 items-start justify-end bg- h-full " >


                        <h1 className='  bg-white text-black font-semibold text-[40px] md:text-[72px] px-2 md:pr-16   text-left whitespace-nowrap'>About Us</h1>
                    </div>
                </article>
            </div>
            <div className='w-full max-w-[1440px] mx-auto my-16 flex flex-col gap-4'>
                <p className='text-[13px] md:text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <p className='text-[13px] md:text-[16px]'>

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='w-full max-w-[1440px] mx-auto my-16 ' >
                <h1 className='text-[#222] font-bold text-[48px]'>Our Team</h1>
                <article className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4'>
                    <TeamCard name={'William Clark'} post={' Chief Executive Officer'} />
                    <TeamCard name={'Emma Nelson'} post={'Claims Adjuster'} isShown={true} />
                    <TeamCard name={'Alexander Rodriguez'} post={'Risk Analyst'} />
                    <TeamCard name={'Ava Brown'} post={'Claims Adjuster'} />
                    <TeamCard name={'Liam Smith'} post={'Risk Analyst'} />
                    <TeamCard name={'Isabella Ross'} post={'Compliance Officer'} />
                </article>
            </div>
            <div className='w-full max-w-[1440px] mx-auto my-16 flex flex-col gap-12 '>
                <h1 className='text-[#222] font-bold text-[48px]'>Our Partners</h1>
                <article className='flex justify-between items-center flex-wrap w-full'>
                    <img src="/Logo.png" alt="" className='h-fit' />
                    <img src="/Logo (1).png" alt="" className='h-fit' />
                    <img src="/Logo (2).png" alt="" className='h-fit' />
                    <img src="/Logo (3).png" alt="" className='h-fit' />
                    <img src="/Logo (4).png" alt="" className='h-fit' />


                </article>
            </div>
            <div className='w-full max-w-[1440px] mx-auto my-16 flex flex-col gap-12'>
                <h1 className='text-[#222] font-bold text-[48px]'>Why Us</h1>
                <article className='flex justify-between items-center flex-col md:flex-row'>
                    <div className='flex flex-col gap-4'>

                        <span className='p-4 bg-primary w-fit rounded-tl-2xl rounded-br-2xl'>01</span>
                        <div>

                            <h1 className='text-[24px] text-[#222222] font-bold'>Discovery</h1>
                            <p className='text-[16px] text-[#636363]w-[268px]'>Uncover opportunities and <br /> challenges for strategic planning.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <span className='p-4 bg-[#D0E2E4] w-fit rounded-tl-2xl rounded-br-2xl'>02</span>
                        <div>

                            <h1 className='text-[24px] text-[#222222] font-bold'>Analysis</h1>
                            <p className='text-[16px] text-[#636363]w-[268px]'>Thoroughly examine data and <br /> market trends for informed <br /> decision-making.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <span className='p-4 bg-primary w-fit rounded-tl-2xl rounded-br-2xl'>03</span>
                        <div>

                            <h1 className='text-[24px] text-[#222222] font-bold'>Strategy</h1>
                            <p className='text-[16px] text-[#636363]w-[268px]'>Craft tailored strategies aligned <br /> with your business objectives.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <span className='p-4 bg-[#D0E2E4] w-fit rounded-tl-2xl rounded-br-2xl'>04</span>
                        <div>

                            <h1 className='text-[24px] text-[#222222] font-bold'>Discovery</h1>
                            <p className='text-[16px] text-[#636363]w-[268px]'>Execute plans with precision, <br /> integrating technology for <br /> optimal results.</p>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default AboutUs