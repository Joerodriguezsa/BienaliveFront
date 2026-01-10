import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import SlideImage1 from "../../assets/images/banner/banner-one.mp4";
import SlideImage1 from "../../assets/images/banner/imgBanner.webp";
function BannerSection({ className }) {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      // Attempt to autoplay the video
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);
  return (
    <section className={`banner-area ${className || ""}`}>
      <div className="banner__wrp">
        {/* <video
          className="banner__video parallaxScaleScroll"
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
        >
          <source src={SlideImage1} type="video/mp4" />
        </video> */}
        <img
          className="banner__video parallaxScaleScroll"
          src={SlideImage1}
          alt="Image"
        />

        <div className=" banner__content">
          <h4 className="sub-title" data-animation="fadeInUp" data-delay=".3s">
            Rejuvenate You Today
          </h4>
          <h1 className="title" data-animation="fadeInUp" data-delay=".5s">
            <span>Experience</span>
            Beauty Services
          </h1>
          <Link
            to="/page-contact"
            className="btn-two-light mt-30"
            data-animation="fadeInUp"
            data-delay="1s"
          >
            Book Now
            <span className="icon_box">
              <i className="fa-regular icon_first fa-arrow-right-long"></i>
              <i className="fa-regular icon_second fa-arrow-right-long"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
