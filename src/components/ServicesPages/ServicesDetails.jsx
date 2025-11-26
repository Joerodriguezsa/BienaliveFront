import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx'
import ServiceDetailsImage1 from '../../assets/images/resource/service-d1.jpg';
import ServiceDetailsImage2 from '../../assets/images/resource/service-d2.jpg';
import ServiceDetailsImage3 from '../../assets/images/resource/service-details.jpg';

function ServicesDetails() {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    // Manage the state to track which accordion is open
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function for accordion items
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Accordion data
    const faqs = [
        {
            question: "Is my technology allowed on tech?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."
        },
        {
            question: "How to soft launch your business?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."
        },
        {
            question: "How to turn visitors into contributors",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."
        },
        {
            question: "How can i find my solutions?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."
        },
    ];

    return (
        <>
            <Header />
            <PageTitle
                title="Services Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <section className="services-details pt-120 pb-120">
            <div className="container">
                <div className="row">
                <div className="col-xl-4 col-lg-4">
                    <div className="service-sidebar">
                    <div className="sidebar-widget service-sidebar-single">
                        <div className="sidebar-service-list">
                        <ul>
                            <li><Link to="/page-service-details" className="current"><i className="fas fa-angle-right"></i><span>Deep Massage</span></Link></li>
                            <li className="current"><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Facial Treatments</span></Link></li>
                            <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Body Treatments</span></Link></li>
                            <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Nail Care</span></Link> </li>
                            <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Body Glow & Wraps</span></Link></li>
                            <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Hair Salon</span></Link></li>
                        </ul>
                        </div>
                        <div className="service-details-help">
                        <div className="help-shape-1"></div>
                        <div className="help-shape-2"></div>
                        <h2 className="help-title">Contact with <br /> us for any <br /> advice</h2>
                        <div className="help-icon">
                            <span className="fa-classic fa-solid fa-headset fa-fw"></span>
                        </div>
                        <div className="help-contact">
                            <p>Need help? Talk to an expert</p>
                            <Link to="tel:12463330079">+892 ( 123 ) 112 - 9999</Link>
                        </div>
                        </div>
                        <div className="sidebar-widget service-sidebar-single mt-4">
                        <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                            <Link to="#" className="btn-two text-center d-grid fw-normal"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                    <div className="services-details__content">
                    <img src={ServiceDetailsImage3} alt="Image"/>
                    <h3 className="mt-4 mb-2">Service Overview</h3>
                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit </p>
                    <div className="content mt-40">
                        <div className="text">
                        <h3 className="mb-2">Service Center</h3>
                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <blockquote className="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur</blockquote>
                        </div>
                        <div className="feature-list mt-4">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <img className="mb-3 w-100" src={ServiceDetailsImage1} alt="images" />
                            <p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <img className="mb-3 w-100" src={ServiceDetailsImage2} alt="images" />
                            <p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className=" mt-25">
                        <h3 className="mb-3">Frequently Asked Question</h3>
                        <p className="mb-20">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <ul className="accordion-box wow fadeInRight">
                            {faqs.map((faq, index) => (
                                <li
                                    key={index}
                                    className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
                                >
                                    <div
                                        className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {faq.question}
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">{faq.answer}</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
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

export default ServicesDetails;
