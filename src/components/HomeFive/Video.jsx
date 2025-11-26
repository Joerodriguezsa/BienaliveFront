import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';
import CounterUp from '../../lib/CounterUp.jsx';
import CounterUp5 from '../../lib/CounterUp5.jsx';
import VideoImage1 from '../../assets/images/video/video-five-image.jpg';

function Video() {
    const [isOpen, setOpen] = useState(false);
    const percentage1 = 13;
    const percentage2 = 10;
    const percentage3 = 23;
    const percentage4 = 10;
    return (
        <>
    <section className="video-section-three video-five-area pl-50 pr-50">
        <div className="radius30 bg-sub">
            <div className="image-box gsap__parallax radius30">
                <img src={VideoImage1} alt="image"/>
                <div className="btn-video video-pulse">
                    <a className="video-popup" onClick={() => setOpen(true)}
                        data-fancybox="gallery" data-caption=""><i className="fa-sharp fa-solid fa-play"></i></a>
                </div>
            </div>
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
        </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
    );
}

export default Video;
