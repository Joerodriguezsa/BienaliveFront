import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PackageShapeImage1 from "../../assets/images/shape/package-shape-left.png";
import PackageShapeImage2 from "../../assets/images/shape/package-shape-right.png";
import PackageImage1 from "../../assets/images/package/package-image1.png";
import PackageImage2 from "../../assets/images/package/package-image2.png";
import PackageImage3 from "../../assets/images/package/package-image3.png";
import PackageImage4 from "../../assets/images/package/package-image4.png";
import PackageImage5 from "../../assets/images/package/package-image5.png";
import PackageImage6 from "../../assets/images/package/package-image6.png";
import PackageImage7 from "../../assets/images/package/package-image7.png";
import PackageImage8 from "../../assets/images/package/package-image8.png";
import { getServicesWithImagesCached } from "../../services/servicesApi";

const packages = [
  { image: PackageImage1, title: "Aroma therapy" },
  { image: PackageImage2, title: "Sauna relax" },
  { image: PackageImage3, title: "Geothermal spa" },
  { image: PackageImage4, title: "Aroma therapy" },
  { image: PackageImage5, title: "Aroma therapy" },
  { image: PackageImage6, title: "Sauna relax" },
  { image: PackageImage7, title: "Geothermal spa" },
  { image: PackageImage8, title: "Aroma therapy" },
];

const getServiceDurations = (service) => {
  return [
    { time: service.time1, price: service.price1 },
    { time: service.time2, price: service.price2 },
    { time: service.time3, price: service.price3 },
    { time: service.time4, price: service.price4 },
    { time: service.time5, price: service.price5 },
  ].filter((item) => item.time > 0);
};

function Package() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServicesWithImagesCached();
        setServices(data);
      } catch (error) {
        console.error("Error cargando servicios", error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <section className="package-section section__decoration-top section__decoration-bottom bg-sub-two pt-170 pb-170">
      <div
        className="shape1 wow slideInLeft"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <img
          className="sway_Y__animationY"
          src={PackageShapeImage1}
          alt="shape"
        />
      </div>
      <div className="shape2">
        <img className="sway__animation" src={PackageShapeImage2} alt="shape" />
      </div>

      <div className="container">
        <div className="section-header mb-60 center">
          <h4
            className="sub-title wow fadeInUp"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            Best Price
          </h4>
          <h2
            className="title wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            Our Flexible Pricing Plan
          </h2>
        </div>

        <div className="package-tab mb-60"></div>

        <div className="tab-content">
          <div
            className={
              activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <div className="row g-5">
              {loading && <p>Cargando servicios...</p>}
              {!loading &&
                services.map((service) =>
                  getServiceDurations(service).map((item, index) => (
                    <div
                      key={`${service.id}-${index}`}
                      className="col-lg-6 package-block"
                    >
                      <div className="inner-box mb-50">
                        <div className="image">
                          <img
                            src={
                              service.serviceImages?.find(
                                (img) => img.tipoImagenId === 2
                              )?.imageUrl
                            }
                            alt={service.name}
                          />
                        </div>

                        <div className="content">
                          <h3 className="title">
                            {/* <Link to="#">{service.name}</Link> */}
                            <Link to={`/services/${service.id}`}>
                              {service.name}
                            </Link>
                            <span className="line"></span>
                            <span>from</span> ${item.price}
                          </h3>

                          <p>
                            {item.time} mins {service.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Package;
