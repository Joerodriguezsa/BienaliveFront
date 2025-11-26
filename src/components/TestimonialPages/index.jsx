import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Testimonial from '../HomeTwo/Testimonial.jsx';

function TestimonialPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Testimonial"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <Testimonial />
            <Footer />
            <BackToTop />
        </>
    );
}

export default TestimonialPages;
