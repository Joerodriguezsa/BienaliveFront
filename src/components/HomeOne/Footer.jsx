import React from 'react';
import { Link } from 'react-router-dom';
import FooterImage1 from '../../assets/images/shape/footer-shape-left.png';
import FooterImage2 from '../../assets/images/logo/logo-light.png';
import { COMPANY_NAME } from '../../config/constants';

function FooterOne({ className }) {

    return (
		<footer className={`footer-area ${className || ''}`}>
			<div className="footer__shape">
				<img src={FooterImage1} alt="shape"/>
			</div>
			<div className="container">
				<div className="footer__head">
					<Link to="/" className="logo"><img src={FooterImage2} alt="logo"/></Link>
				</div>
				<div className="row g-5">
					<div className="col-md-6 col-xl-4">
						<div className="footer__item">
							<div className="footer-about">
								<div>
									<p className="text">{COMPANY_NAME} Social Media.</p>
									<div className="socials">
										{/* <Link to="#0">
											<svg width="22" height="23" viewBox="0 0 25 26" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M14.827 10.8382L23.9337 0.252441H21.7757L13.8684 9.44394L7.55282 0.252441H0.268555L9.81894 14.1516L0.268555 25.2524H2.42667L10.777 15.5459L17.4467 25.2524H24.731L14.8265 10.8382H14.827ZM11.8712 14.2741L10.9035 12.89L3.20427 1.87703H6.51901L12.7324 10.7649L13.7001 12.1489L21.7767 23.7017H18.462L11.8712 14.2746V14.2741Z"
													fill="white" />
											</svg>
										</Link> */}
										<Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link>
										<Link to="#0"><i className="fa-brands fa-instagram"></i></Link>
										{/* <Link to="#0"><i className="fa-brands fa-vimeo-v"></i></Link> */}
									</div>
								</div>
								<p className="copyright-text">&copy; 2025 <Link to="#">{COMPANY_NAME}</Link>, All Rights Reserved
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-2">
						<div className="footer__item">
							<h3 className="title">Links</h3>
							<ul className="links">
								{/* <li><Link to="#0">About</Link></li> */}
								{/* <li><Link to="#0">Pricing</Link></li> */}
								<li><Link to="#0">Shop</Link></li>
								<li><Link to="#0">Contact</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="footer__item">
							<h3 className="title">Contact</h3>
							<ul className="links">
								<li><Link to="#0">5920 Macleod Trail Southwest, <br /> Calgary, Alberta T2H 0K2</Link></li>
								<li><Link to="#0">Esbeidia Banderas</Link></li>
								<li><Link to="#0">esbebanderas@hotmail.com</Link></li>
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

export default FooterOne;
