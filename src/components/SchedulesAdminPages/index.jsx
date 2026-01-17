import React from "react";
import BackToTop from "../BackToTop.jsx";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import SchedulesAdmin from "./SchedulesAdmin.jsx";

function SchedulesAdminPages() {
  return (
    <>
      <Header />
      <PageTitle
        title="Schedules"
        breadcrumb={[{ link: "/", title: "Home" }]}
      />
      <SchedulesAdmin />
      <Footer />
      <BackToTop />
    </>
  );
}

export default SchedulesAdminPages;
