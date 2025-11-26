import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import ProductImage1 from "../../assets/images/product/product-image1.png";
import ProductImage2 from "../../assets/images/product/product-image2.png";
import ProductImage3 from "../../assets/images/product/product-image3.png";
import ProductImage4 from "../../assets/images/product/product-image4.png";

const PortfolioFilter2 = () => {
    const isotopeContainer = useRef(null);
    const [filterKey, setFilterKey] = useState("*");
    const [isotopeInstance, setIsotopeInstance] = useState(null);

    useEffect(() => {
        if (isotopeContainer.current) {
            const instance = new Isotope(isotopeContainer.current, {
                itemSelector: ".masonry-item",
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
            setIsotopeInstance(instance);
        }
    }, []);

    useEffect(() => {
        if (isotopeInstance) {
            isotopeInstance.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
        }
    }, [filterKey, isotopeInstance]);

    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
    };

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter");

    const productData = [
        { id: 1, image: ProductImage1, name: "Glow Facial Cream", price: "$32.00", categories: ["cat-2"] },
        { id: 2, image: ProductImage2, name: "Hair Treatment", price: "$32.00", categories: ["cat-1", "cat-2"] },
        { id: 3, image: ProductImage3, name: "Massage Cream", price: "$32.00", categories: ["cat-1", "cat-2", "cat-4"] },
        { id: 4, image: ProductImage4, name: "Body Message Oil", price: "$32.00", categories: ["cat-1", "cat-3"] },
        { id: 5, image: ProductImage2, name: "Hair Treatment", price: "$32.00", categories: ["cat-1", "cat-3", "cat-5"] },
        { id: 6, image: ProductImage3, name: "Massage Cream", price: "$32.00", categories: ["cat-1", "cat-2", "cat-4"] },
        { id: 7, image: ProductImage1, name: "Glow Facial Cream", price: "$32.00", categories: ["cat-1", "cat-2", "cat-5"] },
        { id: 8, image: ProductImage4, name: "Body Message Oil", price: "$32.00", categories: ["cat-1", "cat-4", "cat-5"] },
    ];

    return (
        <>
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

            <div className="items-container row" ref={isotopeContainer}>
                {productData.map((product) => (
                    <div
                        key={product.id}
                        className={`product-block masonry-item small-column all ${product.categories.join(" ")} product lenses mb-50 col-lg-4 col-md-6 col-sm-12`}
                    >
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image"><Link to="/shop-product-details"><img src={product.image} alt={product.name} /></Link></div>
                                <div className="icon-box">
                                    <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
                                    <Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link to="/shop-product-details">{product.name}</Link></h4>
                                <span className="price">{product.price}</span>
                                <span className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PortfolioFilter2;