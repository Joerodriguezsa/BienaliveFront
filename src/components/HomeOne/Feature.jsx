import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getServicesWithImagesCached } from "../../services/servicesApi";

function Features({ className }) {
  const [servicesFeature, setServicesFeature] = useState([]);
  const [loadingFeature, setLoadingFeature] = useState(true);

  useEffect(() => {
    const loadServicesFeature = async () => {
      try {
        const data = await getServicesWithImagesCached();
        setServicesFeature(data);
      } catch (error) {
        console.error("Error cargando servicios", error);
      } finally {
        setLoadingFeature(false);
      }
    };

    loadServicesFeature();
  }, []);

  const getTimePriceLabels = (service) => {
    const list = Array.isArray(service?.servicesTimePrice)
      ? service.servicesTimePrice
      : [];

    return list
      .filter((x) => Number(x?.time) > 0 && x?.price != null)
      .sort((a, b) => Number(a.time) - Number(b.time)) // opcional: ordena por tiempo asc
      .map((x) => {
        const time = Number(x.time);
        const price = Number(x.price);

        // Si quieres USD con 2 decimales:
        const priceLabel = price.toFixed(2);

        return `$${priceLabel} | ${time} mins`;
      })
      .join(" • ");
  };

  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".feature-arry-next",
      prevEl: ".feature-arry-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 2,
      },
      1350: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section
      id="projects"
      className={`feature-section pb-100 ${className || ""}`}
    >
      <div className="container">
        <Swiper {...swiperOptions} className="swiper feature-slider">
          <div className="swiper-wrapper">
            {loadingFeature && <p>Cargando servicios...</p>}
            {!loadingFeature &&
              servicesFeature.map((service) => (
                <SwiperSlide
                  key={service.id}
                  className="feature-block swiper-slide"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        src={
                          service.serviceImages?.find(
                            (img) => img.tipoImagenId === 2
                          )?.imageUrl
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "24px",
                        }}
                      />
                    </div>
                    <div className="content-box">
                      <div className="icon">
                        <img
                          src={
                            service.serviceImages?.find(
                              (img) => img.tipoImagenId === 1
                            )?.imageUrl
                          }
                          alt={service.name}
                          style={{
                            width: "100%",
                            maxWidth: "140px",
                            height: "auto",
                            objectFit: "contain",
                            borderRadius: "16px",
                          }}
                        />
                      </div>
                      <div className="info">
                        <h6 className="sub-title">
                          {getTimePriceLabels(service)}
                        </h6>
                        <h3>
                          <Link to={`/services/${service.id}`}>
                            {service.name}
                          </Link>
                        </h3>
                        <p className="text">{service.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
        <div className="feature-arrys mt-60">
          <div className="wrp">
            <button className="feature-arry-prev">
              <i className="fa-regular fa-angle-left"></i>
            </button>
            <button className="feature-arry-next">
              <i className="fa-regular fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
