import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage1 from '../../assets/images/shape/about-two-left.png';
import AboutImage2 from '../../assets/images/shape/about-two-right.png';
import AboutImage3 from '../../assets/images/about/about-two-image.png';
import AboutImage4 from '../../assets/images/about/about-two-image2.png';

function About({ className }) {

    return (

        <section id="about" className={`about-section-two pt-130 pb-100 paralax__animation ${className || ''}`}>
            <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <img className="animation__arryUpDown" src={AboutImage1} alt="image"/>
            </div>
            <div className="shape2">
                <img className="animation__floatBob" src={AboutImage2} alt="image"/>
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-7 wow fadeInRight image-column" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <div className="inner-column">
                            <div className="image-box">
                                <div className="image" data-depth="0.03">
                                    <img src={AboutImage3} alt="image"/>
                                </div>
                                <img data-depth="0.05" className="circle-image" src={AboutImage4}
                                    alt="image"/>
                            </div>
                            <Link to="/page-about" className="circle-btn"><svg width="31" height="31" viewBox="0 0 31 31"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_1364)">
                                        <path
                                            d="M29.9602 30.9748C29.9819 30.9705 30.0029 30.9645 30.0241 30.9591C30.0437 30.9542 30.0634 30.9499 30.0828 30.9441C30.1036 30.9378 30.1238 30.93 30.1441 30.9226C30.1635 30.9157 30.183 30.9093 30.2021 30.9014C30.2211 30.8936 30.2393 30.8843 30.2578 30.8755C30.2775 30.8663 30.2974 30.8575 30.3166 30.8472C30.3344 30.8377 30.3513 30.8268 30.3685 30.8166C30.3874 30.8053 30.4065 30.7946 30.4249 30.7823C30.444 30.7695 30.4619 30.7553 30.4802 30.7417C30.4957 30.7301 30.5115 30.7194 30.5265 30.7071C30.5589 30.6805 30.59 30.6524 30.6197 30.6228C30.6202 30.6224 30.6207 30.622 30.6211 30.6215C30.6215 30.6211 30.622 30.6206 30.6224 30.6201C30.6519 30.5905 30.68 30.5594 30.7067 30.5269C30.719 30.5119 30.7297 30.4961 30.7412 30.4806C30.7549 30.4624 30.7691 30.4444 30.7819 30.4254C30.7942 30.407 30.8049 30.3878 30.8161 30.3689C30.8264 30.3517 30.8373 30.3348 30.8468 30.317C30.8571 30.2978 30.8658 30.2779 30.8751 30.2583C30.8839 30.2397 30.8931 30.2215 30.901 30.2025C30.9089 30.1834 30.9153 30.1639 30.9222 30.1445C30.9295 30.1241 30.9373 30.104 30.9436 30.0832C30.9495 30.0638 30.9538 30.0441 30.9587 30.0245C30.9641 30.0033 30.97 29.9823 30.9743 29.9607C30.9788 29.938 30.9815 29.9151 30.9848 29.8922C30.9875 29.8734 30.9911 29.8549 30.993 29.8358C30.9972 29.7933 30.9994 29.7507 30.9994 29.7082V12.9164C30.9994 12.2031 30.4211 11.6248 29.7078 11.6248C28.9944 11.6248 28.4161 12.2031 28.4161 12.9164V26.5897L2.20452 0.378068C1.70011 -0.126348 0.88224 -0.126348 0.377824 0.378068C-0.126592 0.882484 -0.126592 1.70035 0.377824 2.20477L26.5895 28.4164H12.9162C12.2028 28.4164 11.6245 28.9947 11.6245 29.7081C11.6245 30.4214 12.2028 30.9998 12.9162 30.9998H29.7078C29.7504 30.9998 29.7929 30.9975 29.8353 30.9934C29.8543 30.9915 29.8729 30.9879 29.8918 30.9852C29.9146 30.9819 29.9375 30.9792 29.9602 30.9748Z"
                                            fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-5 content-column">
                        <div className="inner-column">
                            <div className="section-header mb-50">
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
                                    About
                                </h4>
                                <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Welcome
                                    to <br/>
                                    beauty & Spa Center</h2>
                                <p className="text wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">Proin
                                    efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                    ligula, eget egestas magna mi ut arcu.
                                    Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod,
                                    convallis quam eget,</p>
                            </div>
                            <div className="inner-box mb-30 wow fadeInDown" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <div className="icon-box">
                                    <svg className="icon-bg" width="137" height="118" viewBox="0 0 137 118" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M43.6444 2.60063C22.7813 9.6651 -0.117307 42.8526 0.939551 64.5894C2.15298 89.7033 38.047 118.116 67.2476 117.03C111.362 115.36 147.451 75.9625 132.812 45.4144C125.101 29.3447 86.7407 3.10523 70.927 3.10523C69.8701 3.10523 66.9344 2.56181 64.4684 1.94076C57.8141 0.232864 49.9464 0.465759 43.6444 2.60063Z"
                                            fill="#E7A391" />
                                    </svg>
                                    <svg className="icon" width="54" height="65" viewBox="0 0 54 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_1310)">
                                            <path d="M32.6821 57.9941C41.2076 57.9941 52.5643 46.7112 52.5802 32.7932"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.3175 57.9941C12.792 57.9941 1.43529 46.7112 1.41943 32.7932"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M13.5376 55.3591V59.1436C13.5376 60.2461 14.18 61.2625 15.211 61.7004C17.1223 62.5214 20.8259 63.6004 26.996 63.6004"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M40.4623 55.3591V59.1436C40.4623 60.2461 39.8199 61.2625 38.7889 61.7004C36.8776 62.5214 33.174 63.6004 27.0039 63.6004"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M26.0045 27.1948C16.2735 27.3512 8.5332 29.7908 8.5332 32.7855C8.5332 35.8818 16.8049 38.3839 26.9958 38.3839C31.3022 38.3839 35.2437 37.9304 38.3843 37.1876"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M38.3921 37.1876C42.6984 36.1633 45.4663 34.576 45.4663 32.7854C45.4663 31.3076 43.5629 29.9706 40.4858 28.9697"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M26.0044 27.1949C26.9006 25.3339 27.8285 23.4183 28.6929 21.6121"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M40.4858 28.9619C39.3834 33.2937 38.4159 37.0938 38.3921 37.1876"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M26.0045 27.1948C23.3398 32.7307 20.9209 37.7897 20.9209 37.7897"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M40.4858 28.962C40.93 27.2105 41.3979 25.373 41.8341 23.6685"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M41.8343 23.6684C42.6511 20.4626 43.3569 17.7025 43.5869 16.772C44.261 14.1213 42.7701 11.0953 39.7881 10.1414C36.7983 9.18749 34.2684 10.5167 32.7774 13.3238C32.2461 14.3168 30.6044 17.6868 28.709 21.612"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M38.3843 37.1963L38.3931 37.1875" stroke="white"
                                                strokeWidth="3.5823" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M16.4797 22.5815C15.4329 22.7927 14.4177 23.0272 13.4502 23.2931"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M16.4795 22.5817C19.6914 21.9483 23.2444 21.5808 27.0035 21.5808C27.5745 21.5808 28.1376 21.6043 28.7007 21.6199"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M13.4502 23.293C6.24117 25.279 1.42725 28.782 1.42725 32.7853C1.42725 38.9702 12.8712 43.9901 26.9958 43.9901C41.1203 43.9901 52.5643 38.9702 52.5643 32.7853C52.5643 29.0244 48.3214 25.7012 41.8261 23.6683"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M13.45 23.2931C11.0391 22.949 7.67648 22.0264 5.59071 19.5712C2.06949 15.4192 3.57632 8.45244 3.57632 8.45244C3.57632 8.45244 8.19991 8.3117 11.848 10.3916"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M16.1147 15.8728C15.7658 14.6374 15.1948 13.4254 14.3145 12.3855C13.6166 11.5566 12.7601 10.9077 11.856 10.3916"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M22.3086 15.8728C23.0382 14.1448 23.5141 12.1274 23.1572 10.0945C22.2134 4.76186 15.853 1.39966 15.853 1.39966C15.853 1.39966 11.967 5.66106 11.856 10.3916"
                                                stroke="white" strokeWidth="3.5823" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1310">
                                                <rect width="54" height="65" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="content">
                                    <h4>Stone spa</h4>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula,
                                        eget egestas.</p>
                                </div>
                            </div>
                            <div className="inner-box wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="icon-box">
                                    <svg className="icon-bg" width="137" height="118" viewBox="0 0 137 118" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M43.6444 2.60063C22.7813 9.6651 -0.117307 42.8526 0.939551 64.5894C2.15298 89.7033 38.047 118.116 67.2476 117.03C111.362 115.36 147.451 75.9625 132.812 45.4144C125.101 29.3447 86.7407 3.10523 70.927 3.10523C69.8701 3.10523 66.9344 2.56181 64.4684 1.94076C57.8141 0.232864 49.9464 0.465759 43.6444 2.60063Z"
                                            fill="" />
                                    </svg>
                                    <svg className="icon" width="54" height="56" viewBox="0 0 54 56" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_1340)">
                                            <path
                                                d="M7.90221 13.1709C6.44685 13.1709 5.26807 11.9921 5.26807 10.5367C5.26807 9.08137 6.44685 7.90259 7.90221 7.90259H21.0729C22.5283 7.90259 23.7071 9.08137 23.7071 10.5367C23.7071 11.9921 22.5283 13.1709 21.0729 13.1709H13.1705"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M19.7558 7.9025L20.4406 4.46494C20.7699 2.83836 19.5187 1.31714 17.8592 1.31714H11.1158C9.45625 1.31714 8.20503 2.83836 8.5343 4.46494L9.21918 7.9025"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M6.58496 34.2441C6.58496 34.2441 9.21911 32.927 13.1703 32.927C17.1215 32.927 18.4386 35.5611 22.3898 35.5611C23.3579 35.5611 24.1876 35.4426 24.9054 35.2911"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M7.90226 13.1709V17.1221C5.26811 17.1221 1.31689 20.6585 1.31689 25.0246V49.5221C1.31689 51.9916 3.32543 54.0002 5.79494 54.0002H23.1803C25.6564 54.0002 27.6584 51.9916 27.6584 49.5221V44.7675"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M27.6582 36.3381V38.1096" stroke="#E7A391" strokeWidth="4"
                                                strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M21.0728 13.1709V17.1221C23.6015 17.1221 27.342 20.3885 27.6318 24.5175"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M31.7148 25.6238C31.4974 24.715 31.3789 23.8194 31.3789 22.9896C31.3789 19.0977 33.9604 17.1221 37.1411 17.1221C40.3218 17.1221 42.9033 19.1043 42.9033 22.9896C42.9033 23.5889 42.8374 24.2343 42.7189 24.8862"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M31.7148 25.6239C31.1418 25.3078 30.5623 25.0444 30.0026 24.86C29.1531 24.5768 28.3628 24.478 27.6318 24.511"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M27.6319 24.5176C25.2282 24.6229 23.4963 26.2693 22.7389 28.6334C21.9158 31.2215 22.5414 33.8095 24.9055 35.2912"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M29.0016 36.5159C28.5406 36.4764 28.0928 36.4237 27.6582 36.3381"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M24.9058 35.2913C25.3602 35.5744 25.8541 35.8378 26.4402 36.0288C26.8221 36.1539 27.2304 36.2593 27.6584 36.3383"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M38.3333 42.5022C37.9843 43.3649 37.5628 44.1683 37.0887 44.8334C34.8431 47.9812 31.6163 48.0405 29.0414 46.1307C28.5014 45.729 28.047 45.2615 27.665 44.761"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M27.6583 38.1096C26.0185 40.533 26.2556 42.9367 27.6583 44.7674"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M29.0019 36.5161C28.5343 36.9771 28.1062 37.4512 27.7572 37.9386C27.7177 37.9978 27.6914 38.0571 27.6519 38.1098"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M46.8084 35.3174C47.5064 35.9232 48.1254 36.5752 48.5996 37.2469C50.8452 40.3947 49.8969 43.5425 47.322 45.4457C44.7472 47.3488 41.5203 47.2962 39.2747 44.1484C38.9257 43.661 38.6096 43.1013 38.333 42.502"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M46.8085 35.3175C47.4539 35.2253 48.0729 35.0936 48.6326 34.9092C52.2678 33.7041 53.3148 30.5958 52.3336 27.5139C51.3524 24.4319 48.7051 22.5419 45.07 23.747C44.2995 24.0039 43.4961 24.399 42.7124 24.8863"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M38.1949 36.878C40.3771 36.878 42.1461 35.109 42.1461 32.9268C42.1461 30.7446 40.3771 28.9756 38.1949 28.9756C36.0127 28.9756 34.2437 30.7446 34.2437 32.9268C34.2437 35.109 36.0127 36.878 38.1949 36.878Z"
                                                stroke="#E7A391" strokeWidth="4" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h4>Face Treatments</h4>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula,
                                        eget egestas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
