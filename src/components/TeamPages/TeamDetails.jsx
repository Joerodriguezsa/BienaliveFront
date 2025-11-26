import React from "react";
import { Link } from "react-router-dom";
import BackToTop from "../BackToTop.jsx";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import ProgressBar2 from "../../lib/ProgressBar2";

// Import images
import TeamDetailsImg from "../../assets/images/resource/team-details.jpg";

function TeamDetails() {
    return (
        <>
            <Header />
            {/* <PageTitle title="Team Details" 
            breadcrumb={[{ link: "/", title: "Home" }]} 
            /> */}

            <section className="team-details">
                <div className="container pt-100 pb-100">
                    <div className="team-details__top pb-70">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-left">
                                    <div className="team-details__top-img">
                                        <img src={TeamDetailsImg} alt="Image" />
                                        <div className="team-details__big-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-right">
                                    <div className="team-details__top-content">
                                        <h3 className="team-details__top-name">Aleesha Brown</h3>
                                        <p className="team-details__top-title mb-20">Managing Director & CEO</p>
                                        <p className="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
                                        <div className="team-details-contact mb-30">
                                            <h5 className="mb-0">Email Address</h5>
                                            <div>
                                                <span>needhelp@yourdomain.com</span>
                                            </div>
                                        </div>
                                        <div className="team-details-contact mb-30">
                                            <h5 className="mb-0">Phone Number</h5>
                                            <div>
                                                <span>+012-3456-789</span>
                                            </div>
                                        </div>
                                        <div className="team-details-contact">
                                            <h5 className="mb-0">Web Address</h5>
                                            <div>
                                                <span>www.yourdomain.com</span>
                                            </div>
                                        </div>
                                        <div className="team-details__social">
                                            {" "}
                                            <Link to="#">
                                                <i className="fa fa-x"></i>
                                            </Link>{" "}
                                            <Link to="#">
                                                <i className="fab fa-facebook"></i>
                                            </Link>{" "}
                                            <Link to="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </Link>{" "}
                                            <Link to="#">
                                                <i className="fab fa-instagram"></i>
                                            </Link>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-details__bottom pt-100">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-left">
                                    <h4 className="team-details__bottom-left-title">Personal Experience</h4>
                                    <p className="team-details__bottom-left-text">
                                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <div className="team-details__progress">
                                        <ProgressBar2 title="Marketing" targetPercentage={90} />
                                        <ProgressBar2 title="Farming" targetPercentage={80} />
                                        <ProgressBar2 title="Business" targetPercentage={75} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="team-contact-form">
                <div className="container pb-100 pt-100">
                    <div className="sec-title mb-50 text-center">
                        <span className="sub-title">Contact With Us Now</span>
                        <h2 className="section-title__title">
                            Feel Free to Write Our <br /> Tecnology Experts
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form id="contact_form" name="contact_form" action="#" method="#">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="mb-3 text-center">
                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                    <button type="submit" className="btn-one me-2" data-loading-text="Please wait...">
                                        <span className="btn-title">Send message</span>
                                    </button>
                                    <button type="reset" className="btn-two">
                                        <span className="btn-title">Reset</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
            <BackToTop />
        </>
    );
}

export default TeamDetails;
