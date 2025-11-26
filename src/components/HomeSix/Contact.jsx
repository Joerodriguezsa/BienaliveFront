import React,{useState} from 'react';
import CounterUp from '../../lib/CounterUp.jsx';
import CounterUp5 from '../../lib/CounterUp5.jsx';
import ContactImage1 from '../../assets/images/contact/contact-three-image.jpg';
import ContactImage2 from '../../assets/images/contact/shape.png';
import ContactBgImage from '../../assets/images/contact/bg-shape.png';

function Contact() {
    const [isOpen, setOpen] = useState(false);
    const percentage1 = 13;
    const percentage2 = 10;
    const percentage3 = 23;
    const percentage4 = 10;
    return (
        <section id="contact" className="contact-section">
            <div className="outer-box bg-sub">
                <div className="funfact-section-four">
                    <div className="items-column">
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-sm-6 col-lg-3 funfact-block-four">
                                    <div className="inner-box">
                                        <h2 className="title">
                                            <CounterUp5 count={percentage1} time={3} />
                                        </h2>
                                        <h4 className="sub-title">Satisfied Customers</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3 funfact-block-four">
                                    <div className="inner-box">
                                        <h2 className="title">
                                            <CounterUp count={percentage2} time={3} />
                                        </h2>
                                        <h4 className="sub-title">Spa Accessories</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3 funfact-block-four">
                                    <div className="inner-box">
                                        <h2 className="title">
                                            <CounterUp count={percentage3} time={3} />
                                        </h2>
                                        <h4 className="sub-title">Year of Experience</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3 funfact-block-four">
                                    <div className="inner-box">
                                        <h2 className="title">
                                            <CounterUp count={percentage4} time={3} />
                                        </h2>
                                        <h4 className="sub-title">Number of Center</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="radius30">
                    <div className="row g-0">
                        <div className="col-lg-6 image-column">
                            <div className="inner-column gsap__parallax-zoom">
                                <div className="image-box">
                                    <img src={ContactImage1} alt="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 form-column">
                            <div className="inner-column" style={{ backgroundImage: `url(${ContactBgImage})` }}>
                                <div className="section-header mb-20">
                                    <h4 className="sub-title color-light wow fadeInUp" data-wow-delay="00ms"
                                        data-wow-duration="1500ms">
                                        <svg className="icon" width="25" height="26" viewBox="0 0 25 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_655)">
                                                <path
                                                    d="M12.5 17.6875C12.3459 17.6875 12.199 17.6188 12.1 17.5C8.47609 13.15 8.47609 8.16149 12.1 3.81149C12.2969 3.57399 12.7021 3.57399 12.9 3.81149C16.524 8.16149 16.524 13.15 12.9 17.5C12.8011 17.6188 12.6542 17.6875 12.5 17.6875ZM12.5 4.98232C9.71359 8.66149 9.71359 12.6511 12.5 16.3302C15.2865 12.6511 15.2865 8.66149 12.5 4.98232Z"
                                                    fill="white" />
                                                <path
                                                    d="M12.5001 22.375C12.346 22.375 12.1991 22.3063 12.1001 22.1875C11.248 21.1646 10.5855 20.0844 10.1324 18.9782C10.0241 18.7115 10.1512 18.4073 10.4168 18.299C10.6835 18.1907 10.9876 18.3177 11.096 18.5834C11.4345 19.4125 11.9053 20.2282 12.4991 21.0157C13.0918 20.2282 13.5626 19.4125 13.9022 18.5834C14.0105 18.3177 14.3147 18.1896 14.5814 18.299C14.848 18.4073 14.9751 18.7115 14.8657 18.9782C14.4126 20.0844 13.7512 21.1646 12.898 22.1875C12.8012 22.3063 12.6543 22.375 12.5001 22.375Z"
                                                    fill="white" />
                                                <path
                                                    d="M12.5094 17.6771C12.2438 17.6771 12.0167 17.474 11.9917 17.2042C11.9656 16.9177 12.1761 16.6635 12.4625 16.6375C17.4125 16.1792 20.1344 13.6469 20.7646 8.90312C18.4854 9.21041 16.699 10.0104 15.4448 11.2823C15.2406 11.4875 14.9104 11.4896 14.7083 11.2875C14.5031 11.0854 14.5011 10.7562 14.7021 10.551C16.249 8.98228 18.4708 8.0552 21.3073 7.79374C21.4583 7.77708 21.6136 7.83437 21.7229 7.94374C21.8313 8.05312 21.8875 8.2052 21.874 8.35937C21.3625 14.0167 18.2281 17.15 12.5594 17.675C12.5417 17.6771 12.525 17.6771 12.5094 17.6771Z"
                                                    fill="white" />
                                                <path
                                                    d="M18.2353 20.2979C16.2145 20.2979 14.1926 19.5302 12.1832 17.9927C11.9541 17.8188 11.9113 17.4917 12.0853 17.2625C12.2613 17.0333 12.5874 16.9917 12.8155 17.1656C16.4572 19.9511 20.003 19.9552 23.6436 17.174C21.9905 15.9156 20.3353 15.2261 18.7155 15.1198C18.4291 15.1011 18.2124 14.8531 18.2301 14.5656C18.2499 14.2792 18.4707 14.0604 18.7843 14.0802C20.7916 14.2115 22.8197 15.1177 24.8113 16.7719C24.9311 16.8708 24.9999 17.0177 24.9999 17.1719C24.9999 17.3271 24.9322 17.474 24.8124 17.5729C22.6322 19.3896 20.4332 20.2979 18.2353 20.2979Z"
                                                    fill="white" />
                                                <path
                                                    d="M6.76458 20.2979C4.56667 20.2979 2.36771 19.3896 0.1875 17.5729C0.0677083 17.474 0 17.3271 0 17.1719C0 17.0177 0.06875 16.8709 0.188542 16.7719C2.18021 15.1177 4.20833 14.2115 6.21562 14.0802C6.52396 14.0584 6.75104 14.2792 6.76979 14.5656C6.78854 14.8521 6.57187 15.1011 6.28437 15.1198C4.66354 15.2261 3.00833 15.9167 1.35625 17.174C4.99479 19.9552 8.54271 19.9511 12.1844 17.1656C12.4125 16.9917 12.7396 17.0334 12.9146 17.2625C13.0885 17.4906 13.0458 17.8177 12.8167 17.9927C10.8073 19.5292 8.78646 20.2979 6.76458 20.2979Z"
                                                    fill="white" />
                                                <path
                                                    d="M12.4906 17.6771C12.4739 17.6771 12.4583 17.6771 12.4416 17.675C6.77286 17.15 3.63849 14.0156 3.12703 8.35937C3.11244 8.20624 3.16869 8.05312 3.27807 7.94374C3.38744 7.83437 3.53849 7.77708 3.69369 7.79374C6.53015 8.05416 8.75099 8.98228 10.2989 10.551C10.4999 10.7562 10.4979 11.0854 10.2927 11.2875C10.0895 11.4896 9.75932 11.4875 9.55619 11.2823C8.30203 10.0104 6.51453 9.21145 4.23536 8.90312C4.86453 13.6469 7.58744 16.1792 12.5374 16.6375C12.8239 16.6635 13.0354 16.9177 13.0083 17.2042C12.9833 17.474 12.7562 17.6771 12.4906 17.6771Z"
                                                    fill="white" />
                                            </g>
                                        </svg>
                                        Contact
                                    </h4>
                                    <h2 className="title color-light wow fadeInUp" data-wow-delay="200ms"
                                        data-wow-duration="1500ms"> Book Appointment</h2>
                                    <p className="text mt-3 color-light wow fadeInUp" data-wow-delay="400ms"
                                        data-wow-duration="1500ms"> Proin efficitur, mauris vel condimentum pulvinar,
                                        velit orci consectetur ligula.</p>
                                </div>
                                <form action="#0">
                                    <div className="row g-4">
                                        <div className="col-sm-6">
                                            <input type="text" placeholder="Name *"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="email" placeholder="Email Address *"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <select className="nice-select" name="#" id="subject">
                                                <option value="0">Select Service *</option>
                                                <option value="2">Stone spa</option>
                                                <option value="2">Candle Message</option>
                                                <option value="3">Stone Message</option>
                                                <option value="4">Head Message</option>
                                                <option value="5">Mesotherapy</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="dateTimePicker">
                                                <input type="date" name="filter-date" id="filter-date"
                                                    placeholder="Select Date & Time *"/>
                                                <i className="fa-solid fa-calendar-days"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <textarea className="mt-4 rounded-0" name="masage" id="masage"
                                        placeholder="Write a Message"></textarea>
                                    <button>Book Now</button>
                                </form>
                                <div className="shape">
                                    <img className="pxl-image-zoom" src={ContactImage2} alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
