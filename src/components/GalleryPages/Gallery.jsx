import React from 'react';
import { Link } from 'react-router-dom';
import GalleryImage1 from '../../assets/images/gellery/gellery-image1.jpg';
import GalleryImage2 from '../../assets/images/gellery/gellery-image2.jpg';
import GalleryImage3 from '../../assets/images/gellery/gellery-image3.jpg';
import GalleryImage4 from '../../assets/images/gellery/gellery-image4.jpg';
import GalleryImage5 from '../../assets/images/gellery/gellery-image5.jpg';
import GalleryImage6 from '../../assets/images/gellery/gellery-image6.jpg';
import GalleryImage7 from '../../assets/images/gellery/gellery-image7.jpg';
import GalleryImage8 from '../../assets/images/gellery/gellery-image8.jpg';


function Gellery({ className }) {
    return (
        <section className={`gellery-section pt-120 pb-120 ${className || ''}`}>
            <div className="container-fluid">
                <div className="row g-3">
                    <div className="col-sm-6 col-xl-3 gellery-block">
                        <div className="inner-box mb-3">
                            <img src={GalleryImage1} alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href={GalleryImage1}><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link to="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                        <div className="inner-box">
                            <img src={GalleryImage5} alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href={GalleryImage5}><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link to="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 gellery-block">
                        <div className="inner-box mb-3">
                            <img src={GalleryImage2} alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href={GalleryImage2}><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link to="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                        <div className="inner-box">
                            <img src={GalleryImage6} alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href={GalleryImage6}><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link to="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 gellery-block">
                        <div className="inner-box mb-3">
                            <img src={GalleryImage3} alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href={GalleryImage3}><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link to="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                        <div className="inner-box">
                            <img src={GalleryImage7} alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href={GalleryImage7}><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link to="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 gellery-block">
                        <div className="inner-box mb-3">
                            <img src={GalleryImage4} alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href={GalleryImage4}><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link to="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                        <div className="inner-box">
                            <img src={GalleryImage8} alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href={GalleryImage8}><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link to="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gellery;
