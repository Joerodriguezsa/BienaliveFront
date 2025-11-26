import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImage1 from '../../assets/images/gellery/gallery-two-image1.jpg';
import ServiceImage2 from '../../assets/images/gellery/gallery-two-image2.jpg';
import ServiceImage3 from '../../assets/images/gellery/gallery-two-image3.jpg';
import ServiceImage4 from '../../assets/images/gellery/gallery-two-image4.jpg';

function gallery() {
  
    return (
        <section className="gallery-section-two pt-130">
            <div className="container-fluid px-3 px-md-4">
                <div className="row g-4 align-items-center">
                    <div className="col-sm-6 col-lg-3 gallery-block-two wow bounceInUp" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <img src={ServiceImage1} alt="image"/>
                            <div className="content">
                                <h5 className="sub-title">Escape</h5>
                                <h3 className="title"><Link to="/page-service-details">Relaxation</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 gallery-block-two wow bounceInUp" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <img src={ServiceImage2} alt="image"/>
                            <div className="content">
                                <h5 className="sub-title">Beauty</h5>
                                <h3 className="title"><Link to="/page-service-details">Hot Spring</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 gallery-block-two wow bounceInUp" data-wow-delay="300ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <img src={ServiceImage3} alt="image"/>
                            <div className="content">
                                <h5 className="sub-title">Hot</h5>
                                <h3 className="title"><Link to="/page-service-details">Wellness</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 gallery-block-two wow bounceInUp" data-wow-delay="400ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <img src={ServiceImage4} alt="image"/>
                            <div className="content">
                                <h5 className="sub-title">Hot</h5>
                                <h3 className="title"><Link to="/page-service-details">Redefined</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default gallery;
