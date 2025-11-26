import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MarqueeImage1 from '../../assets/images/brand/brand-image1.png';
import MarqueeImage2 from '../../assets/images/brand/brand-image2.png';
import MarqueeImage3 from '../../assets/images/brand/brand-image3.png';
import MarqueeImage4 from '../../assets/images/brand/brand-image4.png';
import MarqueeImage5 from '../../assets/images/brand/brand-image5.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    },
};

function MarqueeSwiper() {
    return (
        <div className="marqueeSwiper-area brand-area">
            <div className="container">
                <Swiper {...swiperOptions} dir="rtl" className="swiper marqueeSwiper__slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src={MarqueeImage1} alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src={MarqueeImage2} alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src={MarqueeImage1} alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src={MarqueeImage4} alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src={MarqueeImage2} alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src={MarqueeImage1} alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src={MarqueeImage2} alt="icon"/>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default MarqueeSwiper;
