import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Products from './Products.jsx';

function ShopPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Shop"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <Products />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ShopPages;
