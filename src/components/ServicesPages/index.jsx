import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx'
import Services from './Services.jsx';

function ServicesPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <Services />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ServicesPages;
