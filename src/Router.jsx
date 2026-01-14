import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Helper/Layout.jsx";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeOneSingle from "./components/HomeOne/index-single.jsx";
import HomeOneDark from "./components/HomeOne/index-1-dark.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Gallery from "./components/GalleryPages/index.jsx";
import Team from "./components/TeamPages/index.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import TeamMembersPages from "./components/TeamMembersPages/index.jsx";
import Services from "./components/ServicesPages/index.jsx";
import ServicesDetails from "./components/ServicesPages/ServicesDetails.jsx";
import Testimonial from "./components/TestimonialPages/index.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx";
import Checkout from "./components/ShopPages/Checkout.jsx";
import UsersPages from "./components/UsersPages/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <HomeOne />,
      },
      {
        path: "/index-1-single",
        element: <HomeOneSingle />,
      },
      {
        path: "/index-1-dark",
        element: <HomeOneDark />,
      },
      // {
      //   path: "/page-about",
      //   element: <AboutUs />
      // },
      {
        path: "/page-gallery",
        element: <Gallery />,
      },
      {
        path: "/page-team",
        element: <Team />,
      },
      {
        path: "/page-team-details",
        element: <TeamDetails />,
      },
      {
        path: "/page-team-details/:id",
        element: <TeamDetails />,
      },
      {
        path: "/page-services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServicesDetails />,
      },
      {
        path: "/page-service-details",
        element: <ServicesDetails />,
      },
      {
        path: "/page-testimonial",
        element: <Testimonial />,
      },
      {
        path: "/shop-products",
        element: <Products />,
      },
      {
        path: "/shop-cart",
        element: <Cart />,
      },
      {
        path: "/shop-checkout",
        element: <Checkout />,
      },
      {
        path: "/shop-products-sidebar",
        element: <ProductsSidebar />,
      },
      {
        path: "/shop-product-details",
        element: <ProductsDetails />,
      },
      {
        path: "/news-grid",
        element: <News />,
      },
      {
        path: "/news-details",
        element: <NewsDetails />,
      },
      {
        path: "/page-contact",
        element: <Contact />,
      },
      {
        path: "/page-faq",
        element: <Faq />,
      },
      {
        path: "/page-users",
        element: <UsersPages />,
      },
      {
        path: "/page-team-members",
        element: <TeamMembersPages />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
