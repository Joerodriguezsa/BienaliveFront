import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Team from './Team.jsx';

function TeamPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Team Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <Team />
            <Footer />
            <BackToTop />
        </>
    );
}

export default TeamPages;
