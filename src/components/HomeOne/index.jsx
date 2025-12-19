import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import Feature from './Feature.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Marquee from './Marquee.jsx';
import Contact from './Contact.jsx';
import Video from './Video.jsx';
import Package from './Package.jsx';
import Testimonial from './Testimonial.jsx';
import Gellery from './Gellery.jsx';
import MarqueeSwiper from './MarqueeSwiper.jsx';
import News from './News.jsx';
import Instagram from './Instagram.jsx';


function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            {/* <About /> */}
            <Services />
            <Feature />            
            {/* <Marquee /> */}
            <Contact />
            <Video />
            <Package />
            <Testimonial />
            {/* <Gellery /> */}
            <MarqueeSwiper />
            {/* <News /> */}
            {/* <Instagram /> */}
            <Footer />
            <BackToTop />
        </>
    );
} 

export default HomeOne;