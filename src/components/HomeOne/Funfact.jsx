import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx';
import FunfactBgImage from '../../assets/images/background/7.jpg';

function Funfact({ className }) {
    const percentage1 = 4524;
    const percentage2 = 1500;
    const percentage3 = 2500;
    const percentage4 = 1000;
    return (
        <section className={`fun-fact-section-three ${className || ''}`} style={{ backgroundImage: `url(${FunfactBgImage})` }}>
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
                            <div className="inner">
                                <i className="icon flaticon-business-060-graph"></i>
                                <div className="count-box">
                                    <CounterUp count={percentage1} time={3} />
                                </div>
                                <span className="counter-title">Project Complete</span>
                            </div>
                        </div>
                        <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <i className="icon flaticon-business-035-helpline"></i>
                                <div className="count-box">
                                    <CounterUp count={percentage2} time={3} />
                                </div>
                                <span className="counter-title">HAPPY CLIENTS</span>
                            </div>
                        </div>
                        <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <i className="icon flaticon-business-020-hierarchy"></i>
                                <div className="count-box">
                                    <CounterUp count={percentage3} time={3} />
                                </div>
                                <span className="counter-title">AWWORD WINGING</span>
                            </div>
                        </div>
                        <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <i className="icon flaticon-business-048-coin"></i>
                                <div className="count-box">
                                    <CounterUp count={percentage4} time={3} />
                                </div>
                                <span className="counter-title">COMPANY TEAM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Funfact;
