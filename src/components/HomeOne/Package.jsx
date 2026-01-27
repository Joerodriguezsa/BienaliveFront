import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PackageShapeImage1 from "../../assets/images/shape/package-shape-left.png";
import PackageShapeImage2 from "../../assets/images/shape/package-shape-right.png";
import { getServicesWithImagesCached } from "../../services/servicesApi";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const getServiceDurations = (service) => {
  const list = Array.isArray(service?.servicesTimePrice)
    ? service.servicesTimePrice
    : [];

  return list
    .filter((x) => Number(x?.time) > 0 && x?.price != null)
    .sort((a, b) => Number(a.time) - Number(b.time))
    .map((x) => ({
      time: Number(x.time),
      price: Number(x.price),
    }));
};

function Package() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServicesWithImagesCached();
        setServices(data);
      } catch (error) {
        console.error("Error loading services", error);
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
              {loading && <p>Loading services...</p>}

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
                            <Link to={`/services/${service.id}`}>
                              {service.name}
                            </Link>
                            <span className="line"></span>
                            <span>from</span> {money.format(item.price)}
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
