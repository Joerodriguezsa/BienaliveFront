import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';
import BannerShapeImage1 from '../../assets/images/shape/banner-five-shape1.png';
import BannerShapeImage2 from '../../assets/images/shape/banner-five-shape2.png';
import BannerImage1 from '../../assets/images/banner/banner-five-arry.png';
import BannerImage2 from '../../assets/images/banner/banner-five-image1.jpg';
import BannerImage3 from '../../assets/images/banner/banner-five-image2.jpg';
import BannerImage4 from '../../assets/images/banner/banner-five-image1-shape.png';
import BannerImage5 from '../../assets/images/banner/banner-five-image2-shape.png';


function BannerSection() {
     const [isOpen, setOpen] = useState(false);
    return (
        <section className="banner-five-area section__decoration-bottom paralax__animation">
            <div className="banner-five__shape-one parallaxLeftScroll">
                <img src={BannerShapeImage1} alt="image"/>
            </div>
            <div className="banner-five__shape-two parallaxLeftScroll">
                <img className="animation__arryLeftRight" src={BannerShapeImage2} alt="image"/>
            </div>
            <div className="container">
                <div className="banner-five__wrp">
                    <div className="banner-five__content">
                        <h1 className="title">Experience <span>Bliss, Embrace</span></h1>
                        <div className="info">
                            <a onClick={() => setOpen(true)} className="video-btn wow zoomIn"
                                data-fancybox="gallery" data-caption="">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.786133 0L10.2147 5.5L0.786133 11V0Z" fill="black" />
                                </svg>
                            </a>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                            <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                ligula, eget egestas magna mi ut arcu.</p>
                            <div className="arry">
                                <img className="animation__arryUpDown" src={BannerImage1} alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="banner-five__image-left">
                        <div className="gsap__parallax">
                            <img src={BannerImage2} alt="image"/>
                        </div>
                        <img className="shape" data-depth="0.03" src={BannerImage3}
                            alt="image"/>
                    </div>
                    <div className="banner-five__image-right">
                        <div className="gsap__parallax">
                            <img src={BannerImage4} alt="image"/>
                        </div>
                        <img className="shape parallaxRightRotateScroll" src={BannerImage5}
                            alt="image"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
