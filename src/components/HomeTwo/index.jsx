import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Marquee from './Marquee.jsx';
import Pricing from './Pricing.jsx';
import Product from './Product.jsx';
import Testimonial from './Testimonial.jsx';
import Team from './Team.jsx';
import Contact from './Contact.jsx';
import Funfact from './Funfact.jsx';
import News from './News.jsx';
import Instagram from './Instagram.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <About />
            <Service />
            <Marquee />
            <Pricing />
            <Product />
            <Testimonial />
            <Team />
            <Contact />
            <Funfact />
            <News />
            <Instagram />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeTwo;
