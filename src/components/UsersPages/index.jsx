import React from "react";
import BackToTop from "../BackToTop.jsx";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import Users from "./Users.jsx";

function UsersPages() {
  return (
    <>
      <Header />
      <PageTitle
        title="Users"
        breadcrumb={[{ link: "/", title: "Home" }]}
      />
      <Users />
      <Footer />
      <BackToTop />
    </>
  );
}

export default UsersPages;
