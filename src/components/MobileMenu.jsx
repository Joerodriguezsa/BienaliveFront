import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileMenu = () => {
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const handleSubClick = (key) => {
        // Handle second-level menu toggle
        setSubIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };

    return (
        <>
        <nav className="mean-nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    {/* <ul className={isActive.key === 1 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/">Home one</Link></li>
                        <li><Link to="/index-2">Home two</Link></li>
                        <li><Link to="/index-3">Home three</Link></li>
                        <li><Link to="/index-4">Home four</Link></li>
                        <li><Link to="/index-5">Home five</Link></li>
                        <li><Link to="/index-6">Home six</Link></li>
                        <li>
                            <Link className="arrow" to="#0">Single Styles</Link>
                            <ul className={isSubActive.key === 4 ? "d-block" : "d-none"}>
                                <li><Link to="/index-1-single">Single Style One</Link></li>
                                <li><Link to="/index-2-single">Single Style Two</Link></li>
                                <li><Link to="/index-3-single">Single Style Three</Link></li>
                                <li><Link to="/index-4-single">Single Style Four</Link></li>
                                <li><Link to="/index-5-single">Single Style Five</Link></li>
                                <li><Link to="/index-6-single">Single Style Six</Link></li>
                            </ul>
                            <div className={isSubActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(4)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li>
                            <Link className="arrow" to="#0">Dark Styles</Link>
                            <ul className={isSubActive.key === 5 ? "d-block" : "d-none"}>
                                <li><Link to="/index-1-dark">Dark Style One</Link></li>
                                <li><Link to="/index-2-dark">Dark Style Two</Link></li>
                                <li><Link to="/index-3-dark">Dark Style Three</Link></li>
                                <li><Link to="/index-4-dark">Dark Style Four</Link></li>
                                <li><Link to="/index-5-dark">Dark Style Five</Link></li>
                                <li><Link to="/index-6-dark">Dark Style Six</Link></li>
                            </ul>
                            <div className={isSubActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(5)}><i className="fa fa-angle-down" /></div>
                        </li>
                    </ul> */}
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link to="#0">Pages</Link>
                    <ul className={isActive.key === 2 ? "sub-menu d-block" : "d-none"}>
                        {/* <li><Link to="/page-about">About Us</Link></li> */}
                        <li>
                            <Link to="#0">Project</Link>
                            <ul className={isSubActive.key === 1 ? "d-block" : "d-none"}>
                                <li><Link to="/page-projects">Project Grid</Link></li>
                                <li><Link to="/page-project-details">Project Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(1)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li>
                            <Link to="#0">Team</Link>
                            <ul className={isSubActive.key === 2 ? "d-block" : "d-none"}>
                                <li><Link to="/page-team">Team Grid</Link></li>
                                <li><Link to="/page-team-details">Team Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(2)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li><Link to="/page-testimonial">Testimonials</Link></li>
                        <li><Link to="/page-faq">FAQ’s</Link></li>
                        <li>
                            <Link to="#0">Shop</Link>
                            <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
                                <li><Link to="/shop-products">Shop Product</Link></li>
                                <li><Link to="/shop-products-sidebar">Products Sidebar</Link></li>
                                <li><Link to="/shop-product-details">Product Details</Link></li>
                                <li><Link to="/shop-checkout">Checkout</Link></li>
                                <li><Link to="/shop-cart">Cart</Link></li>
                            </ul>
                            <div className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(3)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li><Link to="/page-404">404 Error</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link to="#0">Services</Link>
                    <ul className={isActive.key === 3 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/page-services">Service Grid</Link></li>
                        <li><Link to="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link to="page-portfolio">Portfolio</Link>
                    <ul className={isActive.key === 4 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/page-portfolio">Portfolio</Link></li>
                        <li><Link to="/page-portfolio-details">Portfolio Details</Link></li>
                    </ul>
                    <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link to="#0">Blog</Link>
                    <ul className={isActive.key === 5 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/news-grid">Blog Grid</Link></li>
                        <li><Link to="/news-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        </>
    );
};

export default MobileMenu;