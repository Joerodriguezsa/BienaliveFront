import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import About from '../HomeOne/About.jsx';
import MarqueeSwiper from '../HomeOne/MarqueeSwiper.jsx';
import Video from '../HomeOne/Video.jsx';
import Package from '../HomeOne/Package.jsx';
import Contact from '../HomeOne/Contact.jsx';
import Testimonial from '../HomeThree/Testimonial.jsx';

function AboutUs() {

    return (
        <>
            <Header />
            <PageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <About />
            <MarqueeSwiper />
            <Video />
            <Package />
            <Contact />
            <Testimonial />
            <Footer />
            <BackToTop />
        </>
    );
}

export default AboutUs;
