import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo-light.png';
import FooterBgImage from '../../assets/images/bg/footer-bg-image.jpg';

function FooterSix({ className }) {

    return (
        <footer className={`footer-two-area bg-image ${className || ''}`} style={{ backgroundImage: `url(${FooterBgImage})` }}>
            <div className="container">
                <div className="footer-two__head pt-80">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <div className="newsletter">
                        <h3 className="title">Newsletter Sign Up</h3>
                        <div className="input">
                            <input type="text" placeholder="Enter your e-mail address"/>
                            <button>
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.54736 9.27002C2.65361 9.37995 2.81725 9.41365 2.95721 9.35368L9.08279 6.7668L4.45816 9.64836C4.34965 9.71609 4.28376 9.8346 4.28376 9.9627V12.5751C4.28376 13.092 4.35666 13.5337 4.49478 13.852C4.73207 14.3996 5.10237 14.4811 5.30189 14.4811C5.54327 14.4811 5.78172 14.3686 6.01016 14.1464L6.89024 13.2904L8.1831 14.1852C8.50596 14.4089 8.89505 14.5266 9.30824 14.5266C10.1613 14.5266 11.0439 14.0283 11.6126 13.2263L19.5535 2.02114C20.1007 1.24882 20.0463 0.759733 19.9045 0.48575C19.8108 0.304342 19.5598 0 18.9333 0C18.7252 0 18.4894 0.0336949 18.2314 0.099587L1.46102 4.38509C0.712792 4.57616 0.212952 4.99303 0.0526464 5.55835C-0.107319 6.12408 0.100023 6.74087 0.636894 7.2955L2.54736 9.27002ZM0.765343 5.76018C0.850498 5.45917 1.1626 5.22555 1.64427 5.10262L18.415 0.816708C18.8659 0.701941 19.2084 0.750067 19.2472 0.825965C19.2832 0.895193 19.2673 1.14474 18.9496 1.59312L11.0091 12.7984C10.5771 13.4078 9.92543 13.7861 9.30857 13.7861C9.04276 13.7861 8.80615 13.7158 8.60514 13.5766L7.06164 12.5081C6.99759 12.464 6.92428 12.4422 6.85096 12.4422C6.7573 12.4422 6.66398 12.4777 6.59291 12.5469L5.49439 13.6154C5.36703 13.7391 5.30264 13.7405 5.30223 13.7409C5.23116 13.7188 5.02457 13.3892 5.02457 12.575V10.1681L13.4542 4.91556C13.6178 4.81373 13.676 4.60237 13.5867 4.4309C13.4979 4.25834 13.2898 4.18544 13.1143 4.26025L2.90316 8.57284L1.16893 6.78048C0.823475 6.42366 0.679846 6.06119 0.765343 5.76018Z"
                                        fill="#1C1A1D" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-xl-4">
                        <div className="footer__item">
                            <div className="footer-about">
                                <div>
                                    <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                        ligula, eget
                                        egestas
                                        magna mi ut arcu.</p>
                                    <div className="socials">
                                        <Link to="#0">
                                            <svg width="22" height="23" viewBox="0 0 25 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.827 10.8382L23.9337 0.252441H21.7757L13.8684 9.44394L7.55282 0.252441H0.268555L9.81894 14.1516L0.268555 25.2524H2.42667L10.777 15.5459L17.4467 25.2524H24.731L14.8265 10.8382H14.827ZM11.8712 14.2741L10.9035 12.89L3.20427 1.87703H6.51901L12.7324 10.7649L13.7001 12.1489L21.7767 23.7017H18.462L11.8712 14.2746V14.2741Z"
                                                    fill="white" />
                                            </svg>
                                        </Link>
                                        <Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link>
                                        <Link to="#0"><i className="fa-brands fa-pinterest-p"></i></Link>
                                        <Link to="#0"><i className="fa-brands fa-vimeo-v"></i></Link>
                                    </div>
                                </div>
                                    <p className="copyright-text">&copy; 2025 <Link to="/">Bienalive</Link>, All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-2">
                        <div className="footer__item">
                            <h3 className="title">Links</h3>
                            <ul className="links">
                                <li><Link to="#0">About</Link></li>
                                <li><Link to="#0">Pricing</Link></li>
                                <li><Link to="#0">Shop</Link></li>
                                <li><Link to="#0">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="footer__item">
                            <h3 className="title">Contact</h3>
                            <ul className="links">
                                <li><Link to="#0">2972 Westheimer Rd. Santa Ana, <br /> Illinois 85486</Link></li>
                                <li><Link to="#0">(907) 555-0101</Link></li>
                                <li><Link to="#0">curtis.weaver@example.com</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="footer__item">
                            <h3 className="title">Open Hours</h3>
                            <ul className="time-table">
                                <li>Monday to Friday : <span>09:00-20:00</span> </li>
                                <li>Saturday: <span>09:00-18:00</span></li>
                                <li>Sunday: <span>09:00-18:00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSix;
