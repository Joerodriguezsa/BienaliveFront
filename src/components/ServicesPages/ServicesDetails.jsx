import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackToTop from "../BackToTop.jsx";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import ServiceDetailsImage1 from "../../assets/images/resource/service-d1.jpg";
import ServiceDetailsImage2 from "../../assets/images/resource/service-d2.jpg";
import ServiceDetailsImage3 from "../../assets/images/resource/service-details.jpg";

import { useParams } from "react-router-dom";
import { getServicesWithImagesCached } from "../../services/servicesApi";

function ServicesDetails() {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };
  // Manage the state to track which accordion is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for accordion items
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        const services = await getServicesWithImagesCached();
        const found = services.find((s) => s.id === Number(id));
        console.log("Found service:", found);
        setService(found);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

  //   const getTimePriceLabels = (service) => {
  //     const pairs = [
  //       { time: service.time1, price: service.price1 },
  //       { time: service.time2, price: service.price2 },
  //       { time: service.time3, price: service.price3 },
  //       { time: service.time4, price: service.price4 },
  //       { time: service.time5, price: service.price5 },
  //     ];

  //     return pairs
  //       .filter((p) => p.time > 0)
  //       .map((p) => `$${p.price.toFixed(2)} | ${p.time} mins`)
  //       .join(" • ");
  //   };

  const getTimePricePairs = (service) => {
    return [
      { time: service.time1, price: service.price1 },
      { time: service.time2, price: service.price2 },
      { time: service.time3, price: service.price3 },
      { time: service.time4, price: service.price4 },
      { time: service.time5, price: service.price5 },
    ].filter((p) => p.time > 0);
  };

  if (loading) {
    return (
      <>
        <Header />
        <PageTitle
          title="Loading service..."
          breadcrumb={[{ link: "/", title: "Home" }]}
        />
        <p style={{ textAlign: "center" }}>Cargando servicio...</p>
        <Footer />
      </>
    );
  }

  if (!service) {
    return (
      <>
        <Header />
        <PageTitle
          title="Service not found"
          breadcrumb={[{ link: "/", title: "Home" }]}
        />
        <p style={{ textAlign: "center" }}>Servicio no encontrado</p>
        <Footer />
      </>
    );
  }

  const detailImage =
    service?.serviceImages?.find((img) => img.tipoImagenId === 2)?.imageUrl ||
    ServiceDetailsImage3;

  return (
    <>
      <Header />
      <PageTitle
        title="Services Details"
        breadcrumb={[{ link: "/", title: "Home" }]}
      />
      <section className="services-details pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-details-help">
                    <div className="help-shape-1"></div>
                    <div className="help-shape-2"></div>
                    <h2 className="help-title">
                      Contact with <br /> us for any <br /> advice
                    </h2>
                    <div className="help-icon">
                      <span className="fa-classic fa-solid fa-headset fa-fw"></span>
                    </div>
                    <div className="help-contact"></div>
                  </div>
                  <div className="sidebar-widget service-sidebar-single mt-4"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                {/* <img src={ServiceDetailsImage3} alt="Image" /> */}
                <img src={detailImage} alt={service?.name || "Service image"} />

                <h3 className="mt-4 mb-2">Service {service.name}</h3>
                <p>{service.shortDescription}</p>
                <div className="content mt-40">
                  <div className="text">
                    <h3 className="mb-2">Description</h3>
                    <p>{service.longDescription}</p>
                  </div>
                  <br />
                  <div className="text">
                    <h3 className="mb-2">Prices</h3>
                    <p>
                      {getTimePricePairs(service).map((p, index) => (
                        <h4
                          key={index}
                          style={{
                            color: "#e7a391",
                            fontWeight: 600,
                            marginBottom: "6px",
                          }}
                        >
                          ${p.price.toFixed(2)} | {p.time} minutes
                        </h4>
                      ))}
                    </p>
                  </div>
                </div>
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

export default ServicesDetails;
