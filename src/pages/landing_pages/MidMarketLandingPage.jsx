import React from 'react'
import MidmarketLandingPageDetails from '../../components/MidmarketLandingPageDetails'

const MidMarketLandingPage = () => {
    return (
        <>
            <div className="w-full h-[90vh]">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[url('/hero-midmarker-landingpage.png')] bg-center bg-cover bg-no-repeat`}>
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full px-2">
                        <h1 className="z-20 font-bold text-[32px] md:text-[46px] w-full max-w-[512px]">
                            Worem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h1>
                        <p className="z-20 text-[14px] text-[#F8F8F8] w-full max-w-[375px]">
                            Blandit cursus risus at ultrices. Viverra mauris in aliquam sem fringilla. Turpis egestas sed tempus urna et pharetra pharetra massa.
                        </p>
                        <div className="z-20 flex  gap-3 ">
                            <button className="uppercase flex gap-3 items-center justify-center text-[18px] md:text-4xl bg-primary px-3 py-3  rounded-md hover:opacity-95 w-1/2 md:w-fit   ">
                                <span className='whitespace-nowrap'>Buy side</span>
                                <div className='w-full flex justify-end md:justify-center'>

                                    <img src="/Arrow.png" alt="Arrow icon" className='' />
                                </div>
                            </button>
                            <button className="uppercase flex gap-3 items-center justify-center text-[18px] md:text-4xl bg-[#022D67] px-3  py-3 rounded-md hover:opacity-95 w-1/2 md:w-fit   ">
                                <span className='whitespace-nowrap'>Sell side</span>
                                <div className='w-full flex '>

                                    <img src="/Arrow.png" alt="Arrow icon" className='w-fit' />
                                </div>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <MidmarketLandingPageDetails />

        </>
    )
}

export default MidMarketLandingPage

