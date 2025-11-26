import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import RangeSlider from '../../lib/RangeSlider.jsx';
import PortfolioFilter2 from './PortfolioFilter2.jsx';
import ProductDetailsImg1 from '../../assets/images/resource/products/thumb-1.jpg';
import ProductDetailsImg2 from '../../assets/images/resource/products/thumb-2.jpg';
import ProductDetailsImg3 from '../../assets/images/resource/products/thumb-3.jpg';

function Products() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Replace this with your own logic:
        // For example, navigate to '/shop-products' or send an API request.
        console.log('Searching for:', searchTerm);
    };

    return (
        <>
            <Header />
            <PageTitle
                title="Shop"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <section className="featured-products">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-lg-3">
                            <div className="shop-sidebar">
                                {/* Sidebar Search */}
                                <div className="sidebar-search">
                                    <form onSubmit={handleSubmit} className="search-form">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search..." required defaultValue={searchTerm} />
                                            <button type="submit">
                                                <i className="lnr lnr-icon-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                
                                {/* Category Widget */}
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Categories</h5>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li><Link to="/shop-product-details">Cloud Solution</Link></li>
                                            <li><Link to="/shop-product-details">Cyber Data</Link></li>
                                            <li><Link to="/shop-product-details">SEO Marketing</Link></li>
                                            <li><Link to="/shop-product-details">UI/UX Design</Link></li>
                                            <li><Link to="/shop-product-details">Web Development</Link></li>
                                            <li><Link to="/shop-product-details">Artifical Intelligence</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Price Filters */}
                                <div className="sidebar-widget price-filters">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Filter by Price</h5>
                                    </div>
                                    <RangeSlider/>
                                </div>
                                
                                {/* Popular Products Widget */}
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Popular Products</h5>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/products-details"><img src={ProductDetailsImg1} alt="Product Thumb" /></Link></figure>
                                            <Link to="/products-details">Message Oil</Link>
                                            <span className="price">$45.00</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/products-details"><img src={ProductDetailsImg2} alt="Product Thumb" /></Link></figure>
                                            <Link to="/products-details">Glosary Shop</Link>
                                            <span className="price">$34.00</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/products-details"><img src={ProductDetailsImg3} alt="Product Thumb" /></Link></figure>
                                            <Link to="/products-details">Ponds Cream</Link>
                                            <span className="price">$29.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="col-lg-9 content-side mt-md-60">
                            <div className="mixitup-gallery">
                                <PortfolioFilter2 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
}

export default Products;
