import React from "react";
import BackToTop from "../BackToTop.jsx";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import TeamMembers from "./TeamMembers.jsx";

function TeamMembersPages() {
  return (
    <>
      <Header />
      <PageTitle
        title="Team Members"
        breadcrumb={[{ link: "/", title: "Home" }]}
      />
      <TeamMembers />
      <Footer />
      <BackToTop />
    </>
  );
}

export default TeamMembersPages;
