import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Gallery from './Gallery.jsx';

function ProjectsPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Gallery"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <Gallery />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ProjectsPages;
