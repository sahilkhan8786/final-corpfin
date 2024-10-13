import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Buy_SellHero = () => {
    return (
        <div className='overflow-hidden h-[90vh]'>
            <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#A8A8A8] px-3 md:px-0`}>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    autoplay={{
                        delay: 2500,
                        dynamicBullets: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper w-full"
                >
                    <SwiperSlide className='bg-red-500 w-full'>
                        <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#A8A8A8] px-3 md:px-0`}>
                            <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full  relative px-6 sm:px-8" >
                                <h1 className="z-20 font-bold text-[28px] md:text-[46px] w-6/7 max-w-[512px]">
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                                </h1>
                                <p className="z-20 text-[12px] md:text-[14px] text-[#F8F8F8] w-3/4 max-w-[375px]">
                                    Blandit cursus risus at ultrices. Viverra mauris in aliquam sem fringilla. Turpis egestas sed tempus urna et pharetra pharetra massa.
                                </p>
                                <div className="z-20  flex-col md:flex-row gap-3">
                                    <Link to='/static-landing-page'>
                                        <button className="uppercase flex gap-3 items-center justify-center text-[13px]   bg-primary px-3 py-5 rounded-md hover:opacity-85">
                                            <span>board now</span>

                                        </button>
                                    </Link>

                                </div>

                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide className='bg-green-300'>
                        <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#A8A8A8] px-3 md:px-0`}>
                            <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full  relative px-6 sm:px-8" >
                                <h1 className="z-20 font-bold text-[28px] md:text-[46px] w-6/7 max-w-[512px]">
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                                </h1>
                                <p className="z-20 text-[12px] md:text-[14px] text-[#F8F8F8] w-3/4 max-w-[375px]">
                                    Blandit cursus risus at ultrices. Viverra mauris in aliquam sem fringilla. Turpis egestas sed tempus urna et pharetra pharetra massa.
                                </p>
                                <div className="z-20  flex-col md:flex-row gap-3">
                                    <Link to='/static-landing-page'>
                                        <button className="uppercase flex gap-3 items-center justify-center text-[13px]   bg-primary px-3 py-5 rounded-md hover:opacity-85">
                                            <span>board now</span>

                                        </button>
                                    </Link>

                                </div>

                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#A8A8A8] px-3 md:px-0`}>
                            <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full  relative px-6 sm:px-8" >
                                <h1 className="z-20 font-bold text-[28px] md:text-[46px] w-6/7 max-w-[512px]">
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                                </h1>
                                <p className="z-20 text-[12px] md:text-[14px] text-[#F8F8F8] w-3/4 max-w-[375px]">
                                    Blandit cursus risus at ultrices. Viverra mauris in aliquam sem fringilla. Turpis egestas sed tempus urna et pharetra pharetra massa.
                                </p>
                                <div className="z-20  flex-col md:flex-row gap-3">
                                    <Link to='/static-landing-page'>
                                        <button className="uppercase flex gap-3 items-center justify-center text-[13px]   bg-primary px-3 py-5 rounded-md hover:opacity-85">
                                            <span>board now</span>

                                        </button>
                                    </Link>

                                </div>

                            </div>
                        </article>
                    </SwiperSlide>

                </Swiper>
            </article>
        </div>
    )
}

export default Buy_SellHero