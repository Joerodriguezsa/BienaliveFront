import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">
          Home
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </Link>
        {/* <ul className="sub-menu">
                    <li><Link to="/">Home one</Link></li>
                    <li><Link to="/index-2">Home two</Link></li>
                    <li><Link to="/index-3">Home three</Link></li>
                    <li><Link to="/index-4">Home four</Link></li>
                    <li><Link to="/index-6">Home six</Link></li>
                    <li>
                        <Link className="arrow" to="#0">Single Styles</Link>
                        <ul className="sub-sub-menu">
                            <li><Link to="/index-1-single">Single Style One</Link></li>
                            <li><Link to="/index-2-single">Single Style Two</Link></li>
                            <li><Link to="/index-3-single">Single Style Three</Link></li>
                            <li><Link to="/index-4-single">Single Style Four</Link></li>
                            <li><Link to="/index-5-single">Single Style Five</Link></li>
                            <li><Link to="/index-6-single">Single Style Six</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link className="arrow" to="#0">Dark Styles</Link>
                        <ul className="sub-sub-menu">
                            <li><Link to="/index-1-dark">Dark Style One</Link></li>
                            <li><Link to="/index-2-dark">Dark Style Two</Link></li>
                            <li><Link to="/index-3-dark">Dark Style Three</Link></li>
                            <li><Link to="/index-4-dark">Dark Style Four</Link></li>
                            <li><Link to="/index-5-dark">Dark Style Five</Link></li>
                            <li><Link to="/index-6-dark">Dark Style Six</Link></li>
                        </ul>
                    </li>
                </ul> */}
      </li>
      {/* <li><Link to="/page-about">About</Link></li> */}
      <li>
        <Link to="/page-team">Team </Link>
        {/* <ul className="sub-menu"> */}
        {/* <li><Link to="/page-gallery">Gallery</Link></li>
                    <li>
                        <Link className="arrow" to="#0">Team</Link>
                        <ul className="sub-sub-menu">
                            <li><Link to="/page-team">Team</Link></li> */}
        {/* <li><Link to="/page-team-details">Team Details</Link></li> */}
        {/* </ul>
                    </li> */}

        {/* <li><Link to="/page-testimonial">Testimonials</Link></li>
                    <li><Link to="/page-faq">FAQ’s</Link></li>
                    <li><Link to="/page-404">404 Error</Link></li> */}
        {/* </ul> */}
      </li>
      {/* <li> */}
      {/* <Link to="/page-services">Services </Link> */}
      {/* <ul className="sub-menu">
                    <li><Link to="/page-services">Service Grid</Link></li>
                    <li><Link to="/page-service-details">Service Details</Link></li>
                </ul> */}
      {/* </li> */}
      {/* <li>
        <Link to="/shop-products">
          Products <i className="fa-solid fa-angle-down"></i>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/shop-products">Shop Product</Link>
          </li>
          <li>
            <Link to="/shop-products-sidebar">Products Sidebar</Link>
          </li>
          <li>
            <Link to="/shop-product-details">Product Details</Link>
          </li>
          <li>
            <Link to="/shop-checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/shop-cart">Cart</Link>
          </li>
        </ul>
      </li> */}
      {/* <li>
                <Link to="/#0">News <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link to="/news-grid">News</Link></li>
                    <li><Link to="/news-details">News Details</Link></li>
                </ul>
            </li> */}

      <li>
        <Link to="/page-contact">Contact</Link>
      </li>
      <li>
        <Link to="/">
          Admin <i className="fa-solid fa-angle-down"></i>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/page-users">Users</Link>
          </li>
          <li>
            <Link to="/page-services-admin">Services Admin</Link>
          </li>
          <li>
            <Link to="/page-team-members">Team Members</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Navigation;
