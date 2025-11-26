import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderDark.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import Banner from './Banner.jsx';
import Marquee from '../HomeTwo/Marquee.jsx';
import Service from './Service.jsx';
import About from './About.jsx';
import Pricing from './PricingDark.jsx';
import Product from './Product.jsx';
import Video from './Video.jsx';
import Testimonial from './TestimonialDark.jsx';
import Contact from './Contact.jsx';
import News from './News.jsx';
import Instagram from '../HomeTwo/Instagram.jsx';

function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);

    useEffect(() => {
        document.body.classList.add('dark-mode');
        return () => {
            document.body.classList.remove('dark-mode');
        };
    });
    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Marquee />
            <Service />
            <About />
            <Pricing />
            <Product />
            <Video />
            <Testimonial />
            <Contact />
            <News />
            <Instagram />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeThree;