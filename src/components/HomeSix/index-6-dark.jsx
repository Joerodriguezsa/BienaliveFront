import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderDark.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import Feature from './Feature.jsx';
import Marquee from './Marquee.jsx';
import Service from './Service.jsx';
import Product from './Product.jsx';
import About from './About.jsx';
import Faq from './Faq.jsx';
import Portfolio from './Portfolio.jsx';
import Testimonial from '../HomeOne/Testimonial.jsx';
import Contact from './Contact.jsx';
import News from './News.jsx';

function HomeSix() {
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
            <Feature />
            <About />
            <Marquee />
            <Service />
            <Product />
            <Faq />
            <Testimonial />
            <Portfolio />
            <Contact />
            <News />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeSix;