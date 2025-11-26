import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/HeaderDark.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import Banner from './Banner.jsx';
import Marquee from './Marquee.jsx';
import Service from './Service.jsx';
import Video from './Video.jsx';
import About from '../HomeThree/About.jsx';
import Pricing from './PricingDark.jsx';
import Step from './Step.jsx';
import Gallery from './Gallery.jsx';
import Testimonial from '../HomeThree/TestimonialDark.jsx';
import Contact from './Contact.jsx';
import News from '../HomeThree/News.jsx';

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