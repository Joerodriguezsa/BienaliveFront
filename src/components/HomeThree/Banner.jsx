import React from 'react';
import { Link } from 'react-router-dom';
import BannerShapeImage1 from '../../assets/images/shape/banner-three-shape.png';
import BannerShapeImage2 from '../../assets/images/shape/banner-three-shape2.png';
import BannerBgImage from '../../assets/images/bg/banner-three-bg.png';
import BannerImage from '../../assets/images/banner/banner-three-image.png';


function BannerSection({ className }) {
    return (
        <section className={`banner-three-area section__decoration-top section__decoration-bottom ${className || ''}`}>
            <div className="banner-three__shape-one">
                <img className="animation__arryUpDown" src={BannerShapeImage1} alt="image"/>
            </div>
            <div className="banner-three__shape-two">
                <img className="animation__rotate" src={BannerShapeImage2} alt="image"/>
            </div>
            <div className="banner-three__bg">
                <img src={BannerBgImage} alt="image"/>
            </div>
            <div className="container">
                <div className="banner-three__content">
                    <h4 className="sub-title wow fadeInDown" data-wow-delay="300ms">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_61_1004)">
                                <path
                                    d="M12.4998 17.1875C12.3456 17.1875 12.1988 17.1187 12.0998 17C8.47585 12.65 8.47585 7.66143 12.0998 3.31143C12.2967 3.07393 12.7019 3.07393 12.8998 3.31143C16.5238 7.66143 16.5238 12.65 12.8998 17C12.8008 17.1187 12.654 17.1875 12.4998 17.1875ZM12.4998 4.48226C9.71335 8.16143 9.71335 12.151 12.4998 15.8302C15.2863 12.151 15.2863 8.16143 12.4998 4.48226Z"
                                    fill="#1C1A1D" />
                                <path
                                    d="M12.5001 21.8749C12.346 21.8749 12.1991 21.8062 12.1001 21.6874C11.248 20.6645 10.5855 19.5843 10.1324 18.478C10.0241 18.2114 10.1512 17.9072 10.4168 17.7989C10.6835 17.6905 10.9876 17.8176 11.096 18.0832C11.4345 18.9124 11.9053 19.728 12.4991 20.5155C13.0918 19.728 13.5626 18.9124 13.9022 18.0832C14.0105 17.8176 14.3147 17.6895 14.5814 17.7989C14.848 17.9072 14.9751 18.2114 14.8657 18.478C14.4126 19.5843 13.7512 20.6645 12.898 21.6874C12.8012 21.8062 12.6543 21.8749 12.5001 21.8749Z"
                                    fill="#1C1A1D" />
                                <path
                                    d="M12.5091 17.1772C12.2435 17.1772 12.0164 16.9741 11.9914 16.7043C11.9654 16.4178 12.1758 16.1637 12.4623 16.1376C17.4123 15.6793 20.1341 13.147 20.7644 8.40324C18.4852 8.71053 16.6987 9.51053 15.4446 10.7824C15.2404 10.9876 14.9102 10.9897 14.7081 10.7876C14.5029 10.5855 14.5008 10.2564 14.7019 10.0512C16.2487 8.48241 18.4706 7.55532 21.3071 7.29386C21.4581 7.2772 21.6133 7.33449 21.7227 7.44386C21.831 7.55324 21.8873 7.70532 21.8737 7.85949C21.3623 13.5168 18.2279 16.6501 12.5591 17.1751C12.5414 17.1772 12.5248 17.1772 12.5091 17.1772Z"
                                    fill="#1C1A1D" />
                                <path
                                    d="M18.2353 19.7978C16.2145 19.7978 14.1926 19.0301 12.1832 17.4926C11.9541 17.3186 11.9113 16.9916 12.0853 16.7624C12.2613 16.5332 12.5874 16.4916 12.8155 16.6655C16.4572 19.4509 20.003 19.4551 23.6436 16.6739C21.9905 15.4155 20.3353 14.7259 18.7155 14.6197C18.4291 14.6009 18.2124 14.353 18.2301 14.0655C18.2499 13.7791 18.4707 13.5603 18.7843 13.5801C20.7916 13.7114 22.8197 14.6176 24.8113 16.2718C24.9311 16.3707 24.9999 16.5176 24.9999 16.6718C24.9999 16.827 24.9322 16.9739 24.8124 17.0728C22.6322 18.8895 20.4332 19.7978 18.2353 19.7978Z"
                                    fill="#1C1A1D" />
                                <path
                                    d="M6.76458 19.7978C4.56667 19.7978 2.36771 18.8895 0.1875 17.0728C0.0677083 16.9739 0 16.827 0 16.6718C0 16.5176 0.06875 16.3707 0.188542 16.2718C2.18021 14.6176 4.20833 13.7114 6.21562 13.5801C6.52396 13.5582 6.75104 13.7791 6.76979 14.0655C6.78854 14.352 6.57187 14.6009 6.28437 14.6197C4.66354 14.7259 3.00833 15.4166 1.35625 16.6739C4.99479 19.4551 8.54271 19.4509 12.1844 16.6655C12.4125 16.4916 12.7396 16.5332 12.9146 16.7624C13.0885 16.9905 13.0458 17.3176 12.8167 17.4926C10.8073 19.0291 8.78646 19.7978 6.76458 19.7978Z"
                                    fill="#1C1A1D" />
                                <path
                                    d="M12.4908 17.1772C12.4741 17.1772 12.4585 17.1772 12.4419 17.1751C6.7731 16.6501 3.63873 13.5157 3.12727 7.85949C3.11269 7.70636 3.16894 7.55324 3.27831 7.44386C3.38769 7.33449 3.53873 7.2772 3.69394 7.29386C6.5304 7.55428 8.75123 8.48241 10.2991 10.0512C10.5002 10.2564 10.4981 10.5855 10.2929 10.7876C10.0898 10.9897 9.75956 10.9876 9.55644 10.7824C8.30227 9.51053 6.51477 8.71157 4.2356 8.40324C4.86477 13.147 7.58769 15.6793 12.5377 16.1376C12.8241 16.1637 13.0356 16.4178 13.0085 16.7043C12.9835 16.9741 12.7564 17.1772 12.4908 17.1772Z"
                                    fill="#1C1A1D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_61_1004">
                                    <rect width="25" height="25" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Rejuvenate You Today
                    </h4>
                    <h1 className="title wow fadeInDown" data-wow-delay="500ms"><span>Experience</span> Beauty Services</h1>
                    <Link to="/page-contact" className="btn-two-light wow fadeInDown mt-50" data-wow-delay="1s">Book Now
                        <span className="icon_box">
                            <i className="fa-regular icon_first fa-arrow-right-long"></i>
                            <i className="fa-regular icon_second fa-arrow-right-long"></i>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="banner-three__image">
                <img className="animation__arryLeftRight" src={BannerImage} alt="image"/>
            </div>
        </section>
    );
}

export default BannerSection;
