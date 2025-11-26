import React from "react";
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import { SUPPORT_EMAIL, SUPPORT_PHONE, COMPANY_ADDRESS } from '../../config/constants.js';
import { composePrefix } from "yet-another-react-lightbox";

function Contact() {

    return (
        <>
            <Header />
            <PageTitle
                title="Contact Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <section className="contact-details pt-100 pb-100">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="sec-title mb-50">
                                <span className="sub-title">Send us email</span>
                                <h2>Feel free to write</h2>
                            </div>
                            <form id="contact_form" name="contact_form" action="#" method="#">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="mb-5">
                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                    <button type="submit" className="btn-one me-2 mb-3 mb-sm-0" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
                                    <button type="reset" className="btn-two bg-theme-color5"><span className="btn-title">Reset</span></button>
                                </div>
                            </form>
                        </div>

                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-details__right">
                                <div className="sec-title">
                                    <span className="sub-title">Need any help?</span>
                                    <h2>Get in touch</h2>
                                    <div className="text">Connect with us anytime — your well-being matters to us. Whether you're curious about our treatments, need assistance scheduling an appointment, or simply want personalized recommendations, our team is always ready to support your journey toward natural wellness.</div>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-phone-plus fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Have any question?</h6>
                                        <a href="tel:980089850"><span>Free</span>{SUPPORT_PHONE}</a>
                                    </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-envelope fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Write email</h6>
                                        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                                    </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-location-dot fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Visit anytime</h6>
                                        <span>{COMPANY_ADDRESS}</span>
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <iframe className="map w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.0480566369425!2d-114.07349102335452!3d50.9998511717043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371708cc65f87df%3A0x23c1f8cbbeae2a1!2s5920%20Macleod%20Trail%20SW%2C%20Calgary%2C%20AB%20T2H%200K2%2C%20Canada!5e0!3m2!1sen!2sca!4v1730062000000!5m2!1sen!2sca"></iframe>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
}

export default Contact;
