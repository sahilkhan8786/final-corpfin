import React from 'react'
import MidmarketLandingPageDetails from '../../components/MidmarketLandingPageDetails'
import { Link } from 'react-router-dom'

const MasterLandingpage = () => {
    return (
        <>
            <div className="w-full h-[90vh]">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[url('/hero-midmarker-landingpage.png')] bg-center bg-cover bg-no-repeat`}>
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-3 sm:gap-6 w-full px-6 sm:px-8">
                        <h1 className="z-20 font-bold text-[24px] md:text-[46px] w-full max-w-[512px]">
                            Worem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h1>
                        <p className="z-20 text-[14px] text-[#F8F8F8] w-full max-w-[375px]">
                            Blandit cursus risus at ultrices. Viverra mauris in aliquam sem fringilla. Turpis egestas sed tempus urna et pharetra pharetra massa.
                        </p>
                        <div className="z-20 flex  gap-3">
                            <Link to={'/mid-market-landing-page'} className=''>
                                <button className="uppercase flex gap-3 items-center justify-between flex-col text-[18px] md:text-4xl  px-3 py-5 rounded-md hover:opacity-85 h-[150px] md:h-[200px] bg-gradient-to-b from-[#FF9A00] to-[#8A5300] whitespace-nowrap">
                                    <span>Mid-MARKET</span>
                                    <div className='w-full flex items-center justify-end'>

                                        <img src="/Arrow.png" alt="Arrow icon" />
                                    </div>
                                </button>
                            </Link>
                            <Link to={'/start-up-landing-page'} >
                                <button className="uppercase flex gap-3 items-center  w-[130px] sm:w-full  justify-between flex-col text-[18px] md:text-4xl  px-3 py-5 rounded-md hover:opacity-85  h-[150px] md:h-[200px] bg-gradient-to-b from-[#1076FF] to-[#022D67] whitespace-nowrap">
                                    <span>START-UP</span>
                                    <div className='w-full flex items-center justify-end'>

                                        <img src="/Arrow.png" alt="Arrow icon" />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </article>
            </div >
            <div className='max-w-[1440px] mx-auto  flex items-center justify-center w-full'>

                <img src="/051j (1).png" alt="" className='w-full  my-12' />
            </div>
            <MidmarketLandingPageDetails toShow2={false} toShow3={false} />
        </>
    )
}

export default MasterLandingpage