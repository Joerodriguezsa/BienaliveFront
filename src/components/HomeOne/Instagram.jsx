import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import InstagramImage1 from '../../assets/images/instagram/instagram-image1.jpg';
import InstagramImage2 from '../../assets/images/instagram/instagram-image2.jpg';
import InstagramImage3 from '../../assets/images/instagram/instagram-image3.jpg';
import InstagramImage4 from '../../assets/images/instagram/instagram-image4.jpg';
import InstagramImage5 from '../../assets/images/instagram/instagram-image5.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 0,
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

function Instagram({ className }) {
    return (
        <div className={`instagram-section ${className || ''}`}>
            <Swiper {...swiperOptions} className="swiper instagram-slider">
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide instagram-block">
                        <Link to="#0" className="inner-box">
                            <img src={InstagramImage1} alt="image"/>
                            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide instagram-block">
                        <Link to="#0" className="inner-box">
                            <img src={InstagramImage2} alt="image"/>
                            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide instagram-block">
                        <Link to="#0" className="inner-box">
                            <img src={InstagramImage3} alt="image"/>
                            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide instagram-block">
                        <Link to="#0" className="inner-box">
                            <img src={InstagramImage4} alt="image"/>
                            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide instagram-block">
                        <Link to="#0" className="inner-box">
                            <img src={InstagramImage5} alt="image"/>
                            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide instagram-block">
                        <Link to="#0" className="inner-box">
                            <img src={InstagramImage2} alt="image"/>
                            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide instagram-block">
                        <Link to="#0" className="inner-box">
                            <img src={InstagramImage3} alt="image"/>
                            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                        </Link>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}

export default Instagram;
