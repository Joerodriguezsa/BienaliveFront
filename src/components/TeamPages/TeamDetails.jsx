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
            <PageTitle title="Team Details" 
            breadcrumb={[{ link: "/", title: "Home" }]} 
            />

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
                                        <div className="team-details-contact mb-30">
                                            <div className="team-details__bottom-left">
                                                <h4 className="team-details__bottom-left-title">Personal Experience</h4>
                                                <p className="team-details__bottom-left-text">
                                                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
}

export default TeamDetails;
