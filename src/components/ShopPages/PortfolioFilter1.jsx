import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProductImage1 from "../../assets/images/product/product-image1.png";
import ProductImage2 from "../../assets/images/product/product-image2.png";
import ProductImage3 from "../../assets/images/product/product-image3.png";
import ProductImage4 from "../../assets/images/product/product-image4.png";

export default function PortfolioFilter1() {
  	const isotopeContainer = useRef(null);
  	const [filterKey, setFilterKey] = useState("*");
  	const isotopeInstance = useRef(null);

  	useEffect(() => {
	    if (isotopeContainer.current) {
	      isotopeInstance.current = new Isotope(isotopeContainer.current, {
	        itemSelector: ".masonry-item",
	        layoutMode: "masonry",
	        percentPosition: true,
	        masonry: {
	          columnWidth: ".masonry-item",
	        },
	        animationOptions: {
	            duration: 750,
	            easing: "linear",
	            queue: false,
	        },
	      });
	    }

    	return () => {
      		isotopeInstance.current?.destroy();
    	};
  	}, []);

  	useEffect(() => {
	    if (isotopeInstance.current) {
	      	isotopeInstance.current.arrange({
	        	filter: filterKey === "*" ? "*" : `.${filterKey}`,
	      	});
	    }
  	}, [filterKey]);

    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
    };
    
    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter");

  return (
    <div>
	    {/* Filter Buttons */}
            <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}> All </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Lotion</li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Oil</li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Message</li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Facial</li>
                    <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>Cream</li>
                </ul>
            </div>

      {/* Products Grid */}
      <div className="items-container row" ref={isotopeContainer}>
        {[
          { id: 1, img: ProductImage1, name: "Glow Facial Cream", price: 32, category: "cat-2" },
          { id: 2, img: ProductImage2, name: "Hair Treatment", price: 52, category: "cat-1 cat-2" },
          { id: 3, img: ProductImage3, name: "Massage Cream", price: 42, category: "cat-1 cat-2 cat-4" },
          { id: 4, img: ProductImage4, name: "Body Message Oil", price: 22, category: "cat-1 cat-3" },
          { id: 2, img: ProductImage2, name: "Hair Treatment", price: 52, category: "cat-1 cat-2" },
          { id: 3, img: ProductImage3, name: "Massage Cream", price: 42, category: "cat-1 cat-2 cat-4" },
          { id: 1, img: ProductImage1, name: "Glow Facial Cream", price: 32, category: "cat-2" },
          { id: 4, img: ProductImage4, name: "Body Message Oil", price: 22, category: "cat-1 cat-3" },
        ].map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className={`product-block masonry-item small-column all ${product.category} product lenses mb-50 col-lg-3 col-md-6 col-sm-12`}
          >
            <div className="inner-box">
              <div className="image-box">
                <div className="image">
                  <Link to="/shop-product-details">
                    <img src={product.img} alt={product.name} />
                  </Link>
                </div>
                <div className="icon-box">
                  <Link to="/shop-product-details" className="ui-btn">
                    <i className="fa fa-heart"></i>
                  </Link>
                  <Link to="/cart" className="ui-btn">
                    <i className="fa fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h4>
                  <Link to="/shop-product-details">{product.name}</Link>
                </h4>
                <span className="price">${product.price}.00</span>
                <span className="rating">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa fa-star"></i>
                  ))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}