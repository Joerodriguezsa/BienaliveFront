import React from 'react';
import { Link } from 'react-router-dom';
import PricingShapeImage from '../../assets/images/shape/package-four-shape-left.png';
import PricingImage1 from '../../assets/images/package/package-image1.png';
import PricingImage2 from '../../assets/images/package/package-image2.png';
import PricingImage3 from '../../assets/images/package/package-image3.png';
import PricingImage4 from '../../assets/images/package/package-image4.png';
import PricingImage5 from '../../assets/images/package/package-image5.png';
import PricingImage6 from '../../assets/images/package/package-image6.png';
import PricingImage7 from '../../assets/images/package/package-image7.png';
import PricingImage8 from '../../assets/images/package/package-image8.png';

function Pricing() {
    return ( 
        <section id="projects" className="package-section  pb-130">
            <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <img className="sway_Y__animationY" src={PricingShapeImage} alt="image"/>
            </div>
            <div className="container">
                <div className="section-header mb-60 center">
                    <h4 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <svg className="icon" width="25" height="26" viewBox="0 0 25 26" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_475)">
                                <path
                                    d="M12.5 17.6875C12.3459 17.6875 12.199 17.6187 12.1 17.5C8.47609 13.15 8.47609 8.16143 12.1 3.81143C12.2969 3.57393 12.7021 3.57393 12.9 3.81143C16.524 8.16143 16.524 13.15 12.9 17.5C12.8011 17.6187 12.6542 17.6875 12.5 17.6875ZM12.5 4.98226C9.71359 8.66143 9.71359 12.651 12.5 16.3302C15.2865 12.651 15.2865 8.66143 12.5 4.98226Z"
                                    fill="#E7A391" />
                                <path
                                    d="M12.5 22.3749C12.3458 22.3749 12.199 22.3062 12.1 22.1874C11.2479 21.1645 10.5854 20.0843 10.1323 18.978C10.024 18.7114 10.151 18.4072 10.4167 18.2989C10.6833 18.1905 10.9875 18.3176 11.0958 18.5832C11.4344 19.4124 11.9052 20.228 12.499 21.0155C13.0917 20.228 13.5625 19.4124 13.9021 18.5832C14.0104 18.3176 14.3146 18.1895 14.5812 18.2989C14.8479 18.4072 14.975 18.7114 14.8656 18.978C14.4125 20.0843 13.751 21.1645 12.8979 22.1874C12.801 22.3062 12.6542 22.3749 12.5 22.3749Z"
                                    fill="#E7A391" />
                                <path
                                    d="M12.5094 17.6772C12.2438 17.6772 12.0167 17.4741 11.9917 17.2043C11.9656 16.9178 12.1761 16.6637 12.4625 16.6376C17.4125 16.1793 20.1344 13.647 20.7646 8.90324C18.4854 9.21053 16.699 10.0105 15.4448 11.2824C15.2406 11.4876 14.9104 11.4897 14.7083 11.2876C14.5031 11.0855 14.5011 10.7564 14.7021 10.5512C16.249 8.98241 18.4708 8.05532 21.3073 7.79386C21.4583 7.7772 21.6136 7.83449 21.7229 7.94386C21.8313 8.05324 21.8875 8.20532 21.874 8.35949C21.3625 14.0168 18.2281 17.1501 12.5594 17.6751C12.5417 17.6772 12.525 17.6772 12.5094 17.6772Z"
                                    fill="#E7A391" />
                                <path
                                    d="M18.2354 20.2978C16.2146 20.2978 14.1927 19.5301 12.1833 17.9926C11.9542 17.8186 11.9115 17.4916 12.0854 17.2624C12.2615 17.0332 12.5875 16.9916 12.8156 17.1655C16.4573 19.9509 20.0031 19.9551 23.6438 17.1739C21.9906 15.9155 20.3354 15.2259 18.7156 15.1197C18.4292 15.1009 18.2125 14.853 18.2302 14.5655C18.25 14.2791 18.4708 14.0603 18.7844 14.0801C20.7917 14.2114 22.8198 15.1176 24.8115 16.7718C24.9313 16.8707 25 17.0176 25 17.1718C25 17.327 24.9323 17.4739 24.8125 17.5728C22.6323 19.3895 20.4333 20.2978 18.2354 20.2978Z"
                                    fill="#E7A391" />
                                <path
                                    d="M6.76458 20.2978C4.56667 20.2978 2.36771 19.3895 0.1875 17.5728C0.0677083 17.4739 0 17.327 0 17.1718C0 17.0176 0.06875 16.8707 0.188542 16.7718C2.18021 15.1176 4.20833 14.2114 6.21562 14.0801C6.52396 14.0582 6.75104 14.2791 6.76979 14.5655C6.78854 14.852 6.57187 15.1009 6.28437 15.1197C4.66354 15.2259 3.00833 15.9166 1.35625 17.1739C4.99479 19.9551 8.54271 19.9509 12.1844 17.1655C12.4125 16.9916 12.7396 17.0332 12.9146 17.2624C13.0885 17.4905 13.0458 17.8176 12.8167 17.9926C10.8073 19.5291 8.78646 20.2978 6.76458 20.2978Z"
                                    fill="#E7A391" />
                                <path
                                    d="M12.4906 17.6772C12.4739 17.6772 12.4583 17.6772 12.4416 17.6751C6.77286 17.1501 3.63849 14.0157 3.12703 8.35949C3.11244 8.20636 3.16869 8.05324 3.27807 7.94386C3.38744 7.83449 3.53849 7.7772 3.69369 7.79386C6.53015 8.05428 8.75099 8.98241 10.2989 10.5512C10.4999 10.7564 10.4979 11.0855 10.2927 11.2876C10.0895 11.4897 9.75932 11.4876 9.55619 11.2824C8.30203 10.0105 6.51453 9.21157 4.23536 8.90324C4.86453 13.647 7.58744 16.1793 12.5374 16.6376C12.8239 16.6637 13.0354 16.9178 13.0083 17.2043C12.9833 17.4741 12.7562 17.6772 12.4906 17.6772Z"
                                    fill="#E7A391" />
                            </g>
                        </svg>
                        Best Price
                    </h4>
                    <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Our Flexible
                        Pricing Plan</h2>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 package-block">
                        <div className="inner-box mb-50">
                            <div className="image">
                                <img src={PricingImage1} alt="image"/>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/page-pricing">Aroma therapy</Link>
                                    <span className="line"></span>
                                    <span>from</span> $50
                                </h3>
                                <p>20 mins Revitalize Facial</p>
                            </div>
                        </div>
                        <div className="inner-box mb-50">
                            <div className="image">
                                <img src={PricingImage2} alt="image"/>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/page-pricing">Sauna relax</Link>
                                    <span className="line"></span>
                                    <span>from</span> $50
                                </h3>
                                <p>20 mins Revitalize Facial</p>
                            </div>
                        </div>
                        <div className="inner-box mb-50">
                            <div className="image">
                                <img src={PricingImage3} alt="image"/>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/page-pricing">Geothermal spa</Link>
                                    <span className="line"></span>
                                    <span>from</span> $50
                                </h3>
                                <p>20 mins Revitalize Facial</p>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="image">
                                <img src={PricingImage4} alt="image"/>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/page-pricing">Aroma therapy</Link>
                                    <span className="line"></span>
                                    <span>from</span> $50
                                </h3>
                                <p>20 mins Revitalize Facial</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 package-block">
                        <div className="inner-box mb-50">
                            <div className="image">
                                <img src={PricingImage5} alt="image"/>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/page-pricing">Aroma therapy</Link>
                                    <span className="line"></span>
                                    <span>from</span> $50
                                </h3>
                                <p>20 mins Revitalize Facial</p>
                            </div>
                        </div>
                        <div className="inner-box mb-50">
                            <div className="image">
                                <img src={PricingImage6} alt="image"/>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/page-pricing">Sauna relax</Link>
                                    <span className="line"></span>
                                    <span>from</span> $50
                                </h3>
                                <p>20 mins Revitalize Facial</p>
                            </div>
                        </div>
                        <div className="inner-box mb-50">
                            <div className="image">
                                <img src={PricingImage7} alt="image"/>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/page-pricing">Geothermal spa</Link>
                                    <span className="line"></span>
                                    <span>from</span> $50
                                </h3>
                                <p>20 mins Revitalize Facial</p>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="image">
                                <img src={PricingImage8} alt="image"/>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/page-pricing">Aroma therapy</Link>
                                    <span className="line"></span>
                                    <span>from</span> $50
                                </h3>
                                <p>20 mins Revitalize Facial</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
