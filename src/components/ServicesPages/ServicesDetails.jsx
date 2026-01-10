import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackToTop from "../BackToTop.jsx";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import ServiceDetailsImage3 from "../../assets/images/resource/service-details.jpg";
import { getServicesWithImagesCached } from "../../services/servicesApi";

const moneyCAD = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const getTimePricePairs = (service) => {
  const list = Array.isArray(service?.servicesTimePrice)
    ? service.servicesTimePrice
    : [];

  return list
    .filter((x) => Number(x?.time) > 0 && x?.price != null)
    .sort((a, b) => Number(a.time) - Number(b.time))
    .map((x) => ({
      id: x.id,
      time: Number(x.time),
      price: Number(x.price),
    }));
};

function ServicesDetails() {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // (Si no usas estos estados, los puedes borrar)
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => setQues(value);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  useEffect(() => {
    const loadService = async () => {
      try {
        const services = await getServicesWithImagesCached();
        const found = services.find((s) => s.id === Number(id));
        setService(found || null);
      } catch (err) {
        console.error(err);
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

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

  const prices = getTimePricePairs(service);

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

                    {prices.length === 0 ? (
                      <p>No pricing available.</p>
                    ) : (
                      <div>
                        {prices.map((p, index) => (
                          <h4
                            key={p.id ?? index}
                            style={{
                              color: "#e7a391",
                              fontWeight: 600,
                              marginBottom: "6px",
                            }}
                          >
                            {moneyCAD.format(p.price)} | {p.time}{" "}
                            {p.time === 1 ? "minute" : "minutes"}
                          </h4>
                        ))}
                      </div>
                    )}
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
