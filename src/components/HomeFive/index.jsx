import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import Banner from './Banner.jsx';
import Marquee from './Marquee.jsx';
import Service from './Service.jsx';
import Video from './Video.jsx';
import About from '../HomeThree/About.jsx';
import Pricing from './Pricing.jsx';
import Step from './Step.jsx';
import Gallery from './Gallery.jsx';
import Testimonial from '../HomeThree/Testimonial.jsx';
import Contact from './Contact.jsx';
import News from '../HomeThree/News.jsx';

function HomeSix() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <About className="pt-130"/>
            <Video />
            <Service />
            <Marquee />
            <Pricing />
            <Step />
            <Gallery />
            <Testimonial />
            <Contact />
            <News />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeSix;