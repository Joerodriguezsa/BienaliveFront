import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import PortfolioFilter1 from './PortfolioFilter1.jsx';

function Products() {
    
    return (
        <>
        <Header /><PageTitle
        title="Shop"
        breadcrumb={[
            { link: '/', title: 'Home' },
        ]}
     />
        <section className="featured-products">
            <div className="container">
                <div className="mixitup-gallery">
                        <PortfolioFilter1 />   
                </div>
            </div>
        </section>
        <Footer />
        <BackToTop />
        </>
    );
}

export default Products;
