import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import TestimonialImage1 from '../../assets/images/shape/testimonial-two-shape-left.png';
import TestimonialImage2 from '../../assets/images/shape/testimonial-two-shape-right.png';
import TestimonialImage3 from '../../assets/images/shape/testimonial-two-shape-center.png';
import TestiThumb1 from '../../assets/images/testimonial/testimonial-two-image1.png';
import TestiThumb2 from '../../assets/images/testimonial/testimonial-two-image2.png';
import TestiThumb3 from '../../assets/images/testimonial/testimonial-two-image3.png';

function Testimonial() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null); // State to store the thumbs swiper
    const swiperOptions = {
        modules: [Autoplay, Thumbs, Pagination],
        slidesPerView: 1,
        autoplay: {
            delay: 50000,
            disableOnInteraction: false,
        },
        loop: true,
        thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined, 
    };
    return (

        <section className="testimonial-section-two section__decoration-top section__decoration-bottom pt-170 pb-170">
            <div className="shape1">
                <img className="animation__arryUpDown" src={TestimonialImage1} alt="image"/>
            </div>
            <div className="shape2">
                <img className="animation__arryLeftRight" src={TestimonialImage2} alt="image"/>
            </div>
            <div className="shape3">
                <img className="bobble__animation" src={TestimonialImage3} alt="image"/>
            </div>
            <div className="container">
                <div className="outer-box">
                    <Swiper
                        onSwiper={setThumbsSwiper} // Set the swiper instance
                        direction="horizontal"
                        slidesPerView={3}
                        spaceBetween={0}
                        breakpoints={{
                            0: {
                            direction: "horizontal"
                            },
                            768: {
                            direction: "horizontal"
                            }
                        }} 
                        className="swiper testimonial-slider-thumb-two wow fadeInUp" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <img src={TestiThumb1} alt="image"/>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={TestiThumb2} alt="image"/>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={TestiThumb3} alt="image"/>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={TestiThumb1} alt="image"/>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <Swiper {...swiperOptions} className="swiper testimonial-slider-two wow fadeInDown" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon">
                                        <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M55.125 14.1875C55.125 17.8317 54.4211 21.3452 53.0342 24.6281C48.69 35.08 42.5634 39.356 31.8977 39.375C31.8957 39.375 31.8957 39.375 31.8938 39.375C30.9704 39.375 30.1758 38.7242 29.9941 37.8198C29.8123 36.9134 30.295 36.0053 31.1482 35.6496C36.2607 33.5191 37.797 31.0234 39.5965 25.8127H35.75C32.5448 25.8127 29.9375 23.2054 29.9375 20.0002V6.4375C29.9375 3.23229 32.5448 0.625 35.75 0.625H49.216C49.8744 0.625 50.4893 0.959994 50.8451 1.51431C53.4297 5.53114 55.125 8.58309 55.125 14.1875ZM20.1535 0.625H6.6875C3.48229 0.625 0.875 3.23229 0.875 6.4375V20C0.875 23.2052 3.48229 25.8125 6.6875 25.8125H10.5342C8.73486 31.0234 7.19842 33.5189 2.08594 35.6494C1.23266 36.0051 0.750031 36.9132 0.931769 37.8196C1.11331 38.7242 1.90807 39.375 2.83149 39.375H2.83536C13.5011 39.356 19.6277 35.08 23.9719 24.6281C25.3586 21.3452 26.0625 17.8317 26.0625 14.1875C26.0625 8.58309 24.3672 5.53114 21.7826 1.51431C21.4268 0.959994 20.8119 0.625 20.1535 0.625Z"
                                                fill="#E7A391" />
                                        </svg>
                                    </div>
                                    <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                        consectetur ligula,
                                        eget egestas
                                        magna mi ut arcu.
                                        Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.</p>
                                    <div className="info">
                                        <h4 className="title">Wade Warren</h4>
                                        <span>Happy Client</span>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon">
                                        <svg width="56" height="40" viewBox="0 0 56 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M55.125 14.1875C55.125 17.8317 54.4211 21.3452 53.0342 24.6281C48.69 35.08 42.5634 39.356 31.8977 39.375C31.8957 39.375 31.8957 39.375 31.8938 39.375C30.9704 39.375 30.1758 38.7242 29.9941 37.8198C29.8123 36.9134 30.295 36.0053 31.1482 35.6496C36.2607 33.5191 37.797 31.0234 39.5965 25.8127H35.75C32.5448 25.8127 29.9375 23.2054 29.9375 20.0002V6.4375C29.9375 3.23229 32.5448 0.625 35.75 0.625H49.216C49.8744 0.625 50.4893 0.959994 50.8451 1.51431C53.4297 5.53114 55.125 8.58309 55.125 14.1875ZM20.1535 0.625H6.6875C3.48229 0.625 0.875 3.23229 0.875 6.4375V20C0.875 23.2052 3.48229 25.8125 6.6875 25.8125H10.5342C8.73486 31.0234 7.19842 33.5189 2.08594 35.6494C1.23266 36.0051 0.750031 36.9132 0.931769 37.8196C1.11331 38.7242 1.90807 39.375 2.83149 39.375H2.83536C13.5011 39.356 19.6277 35.08 23.9719 24.6281C25.3586 21.3452 26.0625 17.8317 26.0625 14.1875C26.0625 8.58309 24.3672 5.53114 21.7826 1.51431C21.4268 0.959994 20.8119 0.625 20.1535 0.625Z"
                                                fill="#E7A391" />
                                        </svg>
                                    </div>
                                    <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                        consectetur ligula,
                                        eget egestas
                                        magna mi ut arcu.
                                        Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.</p>
                                    <div className="info">
                                        <h4 className="title">Jane William</h4>
                                        <span>Happy Client</span>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon">
                                        <svg width="56" height="40" viewBox="0 0 56 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M55.125 14.1875C55.125 17.8317 54.4211 21.3452 53.0342 24.6281C48.69 35.08 42.5634 39.356 31.8977 39.375C31.8957 39.375 31.8957 39.375 31.8938 39.375C30.9704 39.375 30.1758 38.7242 29.9941 37.8198C29.8123 36.9134 30.295 36.0053 31.1482 35.6496C36.2607 33.5191 37.797 31.0234 39.5965 25.8127H35.75C32.5448 25.8127 29.9375 23.2054 29.9375 20.0002V6.4375C29.9375 3.23229 32.5448 0.625 35.75 0.625H49.216C49.8744 0.625 50.4893 0.959994 50.8451 1.51431C53.4297 5.53114 55.125 8.58309 55.125 14.1875ZM20.1535 0.625H6.6875C3.48229 0.625 0.875 3.23229 0.875 6.4375V20C0.875 23.2052 3.48229 25.8125 6.6875 25.8125H10.5342C8.73486 31.0234 7.19842 33.5189 2.08594 35.6494C1.23266 36.0051 0.750031 36.9132 0.931769 37.8196C1.11331 38.7242 1.90807 39.375 2.83149 39.375H2.83536C13.5011 39.356 19.6277 35.08 23.9719 24.6281C25.3586 21.3452 26.0625 17.8317 26.0625 14.1875C26.0625 8.58309 24.3672 5.53114 21.7826 1.51431C21.4268 0.959994 20.8119 0.625 20.1535 0.625Z"
                                                fill="#E7A391" />
                                        </svg>
                                    </div>
                                    <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                        consectetur ligula,
                                        eget egestas
                                        magna mi ut arcu.
                                        Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.</p>
                                    <div className="info">
                                        <h4 className="title">Guy Hawkins</h4>
                                        <span>Happy Client</span>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon">
                                        <svg width="56" height="40" viewBox="0 0 56 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M55.125 14.1875C55.125 17.8317 54.4211 21.3452 53.0342 24.6281C48.69 35.08 42.5634 39.356 31.8977 39.375C31.8957 39.375 31.8957 39.375 31.8938 39.375C30.9704 39.375 30.1758 38.7242 29.9941 37.8198C29.8123 36.9134 30.295 36.0053 31.1482 35.6496C36.2607 33.5191 37.797 31.0234 39.5965 25.8127H35.75C32.5448 25.8127 29.9375 23.2054 29.9375 20.0002V6.4375C29.9375 3.23229 32.5448 0.625 35.75 0.625H49.216C49.8744 0.625 50.4893 0.959994 50.8451 1.51431C53.4297 5.53114 55.125 8.58309 55.125 14.1875ZM20.1535 0.625H6.6875C3.48229 0.625 0.875 3.23229 0.875 6.4375V20C0.875 23.2052 3.48229 25.8125 6.6875 25.8125H10.5342C8.73486 31.0234 7.19842 33.5189 2.08594 35.6494C1.23266 36.0051 0.750031 36.9132 0.931769 37.8196C1.11331 38.7242 1.90807 39.375 2.83149 39.375H2.83536C13.5011 39.356 19.6277 35.08 23.9719 24.6281C25.3586 21.3452 26.0625 17.8317 26.0625 14.1875C26.0625 8.58309 24.3672 5.53114 21.7826 1.51431C21.4268 0.959994 20.8119 0.625 20.1535 0.625Z"
                                                fill="#E7A391" />
                                        </svg>
                                    </div>
                                    <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                        consectetur ligula,
                                        eget egestas
                                        magna mi ut arcu.
                                        Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.</p>
                                    <div className="info">
                                        <h4 className="title">Wade Warren</h4>
                                        <span>Happy Client</span>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;