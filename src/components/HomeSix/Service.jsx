import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImage1 from '../../assets/images/service/service-six-image1.jpg';
import ServiceImage2 from '../../assets/images/service/service-six-image2.jpg';
import ServiceImage3 from '../../assets/images/service/service-six-image3.jpg';

function Services() {
  
    return (
        <section id="services" className="service-section-six">
            <div className="outer-box">
                <div className="service-block-six mb-20">
                    <div className="image gsap__parallax-zoom">
                        <img src={ServiceImage1} alt="image"/>
                    </div>
                    <h2 className="title"><Link to="/page-service-details">Foot Reflexology</Link></h2>
                </div>
                <div className="service-block-six mb-20">
                    <div className="image gsap__parallax-zoom">
                        <img src={ServiceImage2} alt="image"/>
                    </div>
                    <h2 className="title"><Link to="/page-service-details">Stone Message</Link></h2>
                </div>
                <div className="service-block-six">
                    <div className="image gsap__parallax-zoom">
                        <img src={ServiceImage3} alt="image"/>
                    </div>
                    <h2 className="title"><Link to="/page-service-details">Swedish Massage</Link></h2>
                </div>
            </div>
        </section>
    );
}

export default Services;
