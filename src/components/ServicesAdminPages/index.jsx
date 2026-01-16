import React from "react";
import BackToTop from "../BackToTop.jsx";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import ServicesAdmin from "./ServicesAdmin.jsx";

function ServicesAdminPages() {
  return (
    <>
      <Header />
      <PageTitle title="Services" breadcrumb={[{ link: "/", title: "Home" }]} />
      <ServicesAdmin />
      <Footer />
      <BackToTop />
    </>
  );
}

export default ServicesAdminPages;
