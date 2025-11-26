import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import Banner from './Banner.jsx';
import Marquee from './Marquee.jsx';
import Service from './Service.jsx';
import About from './About.jsx';
import Pricing from './Pricing.jsx';
import Funfact from './Funfact.jsx';
import Newsletter from './Newsletter.jsx';
import Testimonial from '../HomeOne/Testimonial.jsx';
import Contact from './Contact.jsx';
import News from '../HomeThree/News.jsx';
import Instagram from '../HomeTwo/Instagram.jsx';
import Map from './Map.jsx';

function HomeFour() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Service />
            <Marquee />
            <About />
            <Pricing />
            <Contact />
            <Testimonial />
            <Funfact />
            <Newsletter />
            <Map />
            <News />
            <Instagram />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeFour;