import React from "react";
import { Link } from "react-router-dom";
import NewsImage1 from "../../assets/images/blog/blog-image1.jpg";
import NewsImage2 from "../../assets/images/blog/blog-image2.jpg";
import NewsImage3 from "../../assets/images/blog/blog-image3.jpg";

function News({ className }) {
    return (
        <section className={`blog-section-two pt-120 pb-90 ${className || ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src={NewsImage1} alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link to="/news-details">Spring is in the Air and So Our These Amazing Spa Offers</Link>
                                </h4>
                                <Link className="readMore-btn" to="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src={NewsImage2} alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link to="/news-details">We giving Amazing special spa and message service for vip.</Link>
                                </h4>
                                <Link className="readMore-btn" to="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src={NewsImage3} alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link to="/news-details">Looks reasonable. The generate is therefore always.</Link>
                                </h4>
                                <Link className="readMore-btn" to="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src={NewsImage2} alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link to="/news-details">We giving Amazing special spa and message service for vip.</Link>
                                </h4>
                                <Link className="readMore-btn" to="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src={NewsImage3} alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link to="/news-details">Looks reasonable. The generate is therefore always.</Link>
                                </h4>
                                <Link className="readMore-btn" to="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src={NewsImage1} alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link to="/news-details">Spring is in the Air and So Our These Amazing Spa Offers</Link>
                                </h4>
                                <Link className="readMore-btn" to="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;
