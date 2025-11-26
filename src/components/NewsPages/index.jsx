import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import News from './News.jsx';

function NewsPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="News Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <News />
            <Footer />
            <BackToTop />
        </>
    );
}

export default NewsPages;
