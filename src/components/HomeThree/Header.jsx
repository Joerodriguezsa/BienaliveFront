import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollPosition from "../../lib/useScrollPosition";
import logo2 from '../../assets/images/logo/logo-light.png';
import logo from '../../assets/images/logo/logo.png';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';
import StickyHeader from '../../lib/StickyMenu.js';

function Header({ className = '', scroll = false }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const isSticky = useScrollPosition(100);
    useEffect(() => {
        StickyHeader();
        const checkDarkMode = () => {
            const bodyHasDarkMode = document.body.classList.contains('dark-mode');
            setDarkMode(bodyHasDarkMode);
        };
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => {
            observer.disconnect();
        };
    }, []);
    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);
    const toggleSearchPopup = () => setSearchPopupOpen((prev) => !prev); // Toggle search popup
    const closeSearchPopup = () => setSearchPopupOpen(false); // Close search popup

    return (
        <>
            {/* <!-- Header area start here --> */}
            <header className="header-area header-three-area">
                <div className="container">
                    <div className="header__main">
                        <Link to="/" className="logo">
                            <img src={logo} alt="logo"/>
                        </Link>
                        <div className="main-menu">
                            <nav>
                                <Navigation />
                            </nav>
                            <div className="menu-btns">
                                <button className="search-trigger d-none d-lg-block" onClick={toggleSearchPopup}><i className="fa-light fa-magnifying-glass"></i></button>
                                <Link to="/page-contact" className="book-now d-none d-xl-inline-block">Book An Apoinment
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_441)">
                                            <path
                                                d="M11.5975 12.4898C11.6058 12.4882 11.614 12.4859 11.6222 12.4838C11.6298 12.4819 11.6374 12.4802 11.6449 12.478C11.653 12.4755 11.6608 12.4725 11.6686 12.4697C11.6761 12.467 11.6837 12.4645 11.6911 12.4615C11.6984 12.4584 11.7055 12.4548 11.7127 12.4514C11.7203 12.4478 11.728 12.4445 11.7354 12.4405C11.7423 12.4368 11.7488 12.4326 11.7555 12.4286C11.7628 12.4242 11.7702 12.4201 11.7773 12.4153C11.7847 12.4104 11.7917 12.4049 11.7987 12.3996C11.8047 12.3951 11.8108 12.391 11.8166 12.3862C11.8292 12.3759 11.8413 12.3651 11.8527 12.3536C11.8529 12.3534 11.8531 12.3533 11.8533 12.3531C11.8534 12.3529 11.8536 12.3527 11.8538 12.3526C11.8652 12.3411 11.8761 12.329 11.8864 12.3165C11.8912 12.3107 11.8953 12.3045 11.8998 12.2986C11.9051 12.2915 11.9106 12.2845 11.9155 12.2772C11.9203 12.27 11.9244 12.2626 11.9288 12.2553C11.9328 12.2486 11.937 12.2421 11.9406 12.2352C11.9446 12.2278 11.948 12.2201 11.9516 12.2125C11.955 12.2053 11.9586 12.1983 11.9616 12.1909C11.9647 12.1835 11.9672 12.176 11.9698 12.1685C11.9727 12.1606 11.9757 12.1528 11.9781 12.1447C11.9804 12.1372 11.9821 12.1296 11.984 12.122C11.9861 12.1138 11.9883 12.1057 11.99 12.0973C11.9917 12.0885 11.9928 12.0796 11.9941 12.0708C11.9951 12.0635 11.9965 12.0563 11.9972 12.0489C11.9988 12.0325 11.9997 12.016 11.9997 11.9995V5.49951C11.9997 5.22337 11.7759 4.99952 11.4997 4.99952C11.2236 4.99952 10.9997 5.22337 10.9997 5.49951V10.7924L0.853309 0.645955C0.658051 0.450697 0.341457 0.450697 0.146199 0.645955C-0.0490586 0.841213 -0.0490586 1.15781 0.146199 1.35306L10.2926 11.4995H4.99975C4.72361 11.4995 4.49976 11.7234 4.49976 11.9995C4.49976 12.2756 4.72361 12.4995 4.99975 12.4995H11.4997C11.5162 12.4995 11.5327 12.4987 11.5491 12.497C11.5565 12.4963 11.5636 12.4949 11.571 12.4939C11.5798 12.4926 11.5887 12.4916 11.5975 12.4898Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <button onClick={toggleMobileMenu} className="menubars d-block d-lg-none" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#menubar">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.55566 11H1.55566C1.29045 11 1.03609 11.1054 0.848557 11.2929C0.661021 11.4804 0.555664 11.7348 0.555664 12V19C0.555664 19.2652 0.661021 19.5196 0.848557 19.7071C1.03609 19.8946 1.29045 20 1.55566 20H8.55566C8.82088 20 9.07523 19.8946 9.26277 19.7071C9.45031 19.5196 9.55566 19.2652 9.55566 19V12C9.55566 11.7348 9.45031 11.4804 9.26277 11.2929C9.07523 11.1054 8.82088 11 8.55566 11ZM7.55566 18H2.55566V13H7.55566V18ZM19.5557 0H12.5557C12.2904 0 12.0361 0.105357 11.8486 0.292893C11.661 0.48043 11.5557 0.734784 11.5557 1V8C11.5557 8.26522 11.661 8.51957 11.8486 8.70711C12.0361 8.89464 12.2904 9 12.5557 9H19.5557C19.8209 9 20.0752 8.89464 20.2628 8.70711C20.4503 8.51957 20.5557 8.26522 20.5557 8V1C20.5557 0.734784 20.4503 0.48043 20.2628 0.292893C20.0752 0.105357 19.8209 0 19.5557 0ZM18.5557 7H13.5557V2H18.5557V7ZM19.5557 11H12.5557C12.2904 11 12.0361 11.1054 11.8486 11.2929C11.661 11.4804 11.5557 11.7348 11.5557 12V19C11.5557 19.2652 11.661 19.5196 11.8486 19.7071C12.0361 19.8946 12.2904 20 12.5557 20H19.5557C19.8209 20 20.0752 19.8946 20.2628 19.7071C20.4503 19.5196 20.5557 19.2652 20.5557 19V12C20.5557 11.7348 20.4503 11.4804 20.2628 11.2929C20.0752 11.1054 19.8209 11 19.5557 11ZM18.5557 18H13.5557V13H18.5557V18ZM8.55566 0H1.55566C1.29045 0 1.03609 0.105357 0.848557 0.292893C0.661021 0.48043 0.555664 0.734784 0.555664 1V8C0.555664 8.26522 0.661021 8.51957 0.848557 8.70711C1.03609 8.89464 1.29045 9 1.55566 9H8.55566C8.82088 9 9.07523 8.89464 9.26277 8.70711C9.45031 8.51957 9.55566 8.26522 9.55566 8V1C9.55566 0.734784 9.45031 0.48043 9.26277 0.292893C9.07523 0.105357 8.82088 0 8.55566 0ZM7.55566 7H2.55566V2H7.55566V7Z"
                                            fill="#707070" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Header area end here --> */}

            		{/* <!-- Sidebar area start here --> */}
		<div className={`sidebar-area offcanvas ${isMobileMenuOpen ? 'open' : ''}`}>
			<div className="offcanvas-header">
				<Link to="/index" className="logo"> <img src={logo2} alt="logo"/></Link>
				<button type="button" className="btn-close" onClick={closeMobileMenu}><i
						className="fa-regular fa-xmark"></i></button>
			</div>
			<div className="offcanvas-body sidebar__body">
				<div className="mobile-menu overflow-hidden">
					<MobileMenu />
				</div>
				<div className="d-none d-lg-block">
					<h5 className="text-white mb-20">About Us</h5>
					<p className="sidebar__text">Unleash the full potential of your website and elevate its online presence with
						our comprehensive consultation solutions.</p>
				</div>
				<div className="sidebar__contact-info mt-30">
					<h5 className="text-white mb-20">Contact Info</h5>
					<ul>
						<li><i className="fa-solid fa-location-dot"></i> <Link to="/#0">121 King Street, Melbourne</Link></li>
						<li className="py-2"><i className="fa-solid fa-phone-volume"></i> <Link to="/tel:+912659302003">+91 2659302
								003</Link></li>
						<li><i className="fa-solid fa-paper-plane"></i> <Link to="/#0">info.company@gmail.com</Link></li>
					</ul>
				</div>
				<div className="sidebar__btns my-4">
					<Link to="/#!">Sign Up</Link>
					<Link className="sign-in" to="#!">Sign In</Link>
				</div>
				<div className="sidebar__socials">
					<ul>
						<li>
							<Link to="/#0">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7.76562 0H8.20406C9.50719 0.0371875 10.8041 0.385625 11.9359 1.03531C13.3297 1.82094 14.4756 3.03625 15.1816 4.47188C15.6875 5.49438 15.9603 6.62656 16 7.76562V8.205C15.9647 9.38344 15.6775 10.5553 15.1419 11.6069C14.6209 12.6316 13.8803 13.5447 12.9794 14.2594C12.0306 15.0175 10.9072 15.5569 9.71937 15.8141C9.22219 15.9275 8.71313 15.9788 8.20438 16H7.795C6.40844 15.9609 5.03281 15.5628 3.84875 14.8387C2.44469 13.985 1.3125 12.6919 0.659063 11.1838C0.252187 10.255 0.0365625 9.2475 0 8.23531V7.79406C0.0359375 6.53 0.366875 5.27437 0.976875 4.16594C1.73094 2.78781 2.8975 1.64031 4.28937 0.911563C5.35844 0.34625 6.55844 0.041875 7.76562 0ZM3.40094 3.29594C4.59812 5.03813 5.79531 6.78 6.99188 8.52219C5.79563 9.91344 4.59812 11.3038 3.40219 12.6953C3.6325 12.6966 3.86313 12.695 4.09344 12.6962C4.13844 12.6884 4.20125 12.7166 4.23281 12.6722C5.27312 11.4641 6.3125 10.2553 7.35219 9.04656C8.18937 10.2625 9.02344 11.4809 9.86156 12.6962C10.7741 12.695 11.6866 12.6962 12.5988 12.6956C11.3594 10.8869 10.1119 9.08313 8.87594 7.27219C10.0203 5.94969 11.1578 4.62156 12.2987 3.29625C12.0281 3.29563 11.7578 3.29563 11.4872 3.29625C10.4987 4.44875 9.50437 5.59656 8.51844 6.75094C7.72031 5.60344 6.93437 4.44688 6.14062 3.29625C5.2275 3.29563 4.31437 3.29594 3.40094 3.29594Z"
										fill="white" />
								</svg>
							</Link>
						</li>
						<li>
							<Link to="/#0">
								<svg width="8" height="16" viewBox="0 0 8 16" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5.10223 8.99555V16H1.97333V8.99555H0V6.09778H1.97333V3.89334C1.97333 1.38667 3.46666 0 5.76 0C6.85333 0 8 0.195557 8 0.195557V2.65778H6.73778C5.49334 2.65778 5.10223 3.43111 5.10223 4.22222V6.09778H7.88444L7.44 8.99555H5.10223Z"
										fill="white" />
								</svg>
							</Link>
						</li>

						<li>
							<Link to="/#0">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.58958 15.9911H0.222698V5.89045H3.58958V15.9911ZM3.92717 1.96389C3.92717 0.897859 3.08323 0.0361424 2.01719 0.000607979C0.933392 -0.0260429 0.0272588 0.826778 0.00060798 1.91058C-0.0260429 2.99438 0.826779 3.90051 1.91058 3.92716C3.01215 3.93605 3.9094 3.06546 3.92717 1.96389ZM15.9467 9.88807C15.9467 6.74327 13.9124 5.78383 12.1801 5.78383C10.963 5.7483 9.81701 6.34351 9.15074 7.35624V5.89932H5.89933V16H9.26622V10.7587C9.26622 10.7054 9.26622 10.6521 9.26622 10.5988C9.26622 10.5988 9.26622 10.5988 9.26622 10.5899C9.19515 9.51495 10.0124 8.58218 11.0874 8.51111C11.9668 8.51111 12.6331 9.07966 12.6331 10.6787V16H16L15.9556 9.89695L15.9467 9.88807Z"
										fill="white" />
								</svg>
							</Link>
						</li>

						<li>
							<Link to="/#0">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15.9466 4.69593C15.8843 3.41522 15.5906 2.27682 14.6563 1.34297C13.7219 0.409114 12.5829 0.11562 11.3014 0.053363C9.97553 -0.0177877 6.01557 -0.0177877 4.69855 0.053363C3.41713 0.11562 2.28699 0.409114 1.34372 1.34297C0.400455 2.27682 0.115684 3.41522 0.0533926 4.69593C-0.0177975 6.02111 -0.0177975 9.97887 0.0533926 11.3041C0.115684 12.5848 0.409354 13.7232 1.34372 14.657C2.28699 15.5909 3.41713 15.8844 4.69855 15.9466C6.02447 16.0178 9.98443 16.0178 11.3014 15.9466C12.5829 15.8844 13.7219 15.5909 14.6563 14.657C15.5906 13.7232 15.8843 12.5848 15.9466 11.3041C16.0178 9.97887 16.0178 6.02112 15.9466 4.70483V4.69593ZM7.99111 12.2201C5.65963 12.2201 3.76419 10.3257 3.76419 7.99555C3.76419 5.66536 5.65963 3.77098 7.99111 3.77098C10.3226 3.77098 12.218 5.66536 12.218 7.99555C12.218 10.3257 10.3226 12.2201 7.99111 12.2201ZM12.9032 3.99332C12.4138 3.99332 12.0133 3.5931 12.0133 3.10394C12.0133 2.61478 12.4049 2.21456 12.9032 2.21456C13.3926 2.21456 13.7931 2.61478 13.7931 3.10394C13.7931 3.5931 13.3926 3.99332 12.9032 3.99332ZM10.8832 7.99555C10.8832 9.58754 9.58399 10.886 7.99111 10.886C6.39823 10.886 5.09901 9.58754 5.09901 7.99555C5.09901 6.40355 6.39823 5.10505 7.99111 5.10505C9.58399 5.10505 10.8832 6.40355 10.8832 7.99555Z"
										fill="white" />
								</svg>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		{/* <!-- Sidebar area end here --> */}

		{/* <!-- Fullscreen search area start here --> */}
		<div className={`search-wrap ${isSearchPopupOpen ? 'active' : ''}`}>
			<div className="search-inner">
				<i className="fa-light fa-xmark search-close" id="search-close" onClick={closeSearchPopup}></i>
				<div className="search-cell">
					<form method="get">
						<div className="search-field-holder">
							<input type="search" className="main-search-input" placeholder="Search..."/>
						</div>
					</form>
				</div>
			</div>
		</div>
		{/* <!-- Fullscreen search area end here --> */}
        </>
    );
}

export default Header;
