import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import images
import TeamImage1 from "../../assets/images/team/team-image1.jpg";
import TeamShapeImage from "../../assets/images/team/shape.png";
import { getTeamMembersCompleteCached } from "../../services/teamMembersApi";
// import { TeamMember } from "../../types/TeamMember";

function Team() {
  return (
    <>
      <section className="team-section pt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 team-block mb-50">
              <div className="inner-box">
                <div className="image">
                  <img src={TeamImage1} alt="image" />
                </div>
                <div className="content">
                  <div className="shape">
                    <img src={TeamShapeImage} alt="image" />
                  </div>
                  <h4 className="title">
                    <Link to="/page-team-details">Jane William</Link>
                  </h4>
                  <span>Spa Message</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
