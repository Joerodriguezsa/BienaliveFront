import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderDark.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import Feature from './FeatureDark.jsx';
import About from './About.jsx';
import Services from './ServicesDark.jsx';
import Marquee from './Marquee.jsx';
import Contact from './Contact.jsx';
import Video from './VideoDark.jsx';
import Package from './PackageDark.jsx';
import Testimonial from './Testimonial.jsx';
import Gellery from './Gellery.jsx';
import MarqueeSwiper from './MarqueeSwiper.jsx';
import News from './News.jsx';
import Instagram from './Instagram.jsx';

function HomeOne() {
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
            <About />
            <Feature />
            <Services />
            <Marquee />
            <Contact />
            <Video />
            <Package />
            <Testimonial />
            <Gellery />
            <MarqueeSwiper />
            <News />
            <Instagram />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeOne;