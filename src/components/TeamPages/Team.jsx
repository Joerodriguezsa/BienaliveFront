import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import images
import TeamImage1 from "../../assets/images/team/team-image1.jpg";
import TeamShapeImage from "../../assets/images/team/shape.png";
import { getTeamMembersCompleteCached } from "../../services/teamMembersApi";

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTeam = async () => {
      setIsLoading(true);
      setError("");

      try {
        const data = await getTeamMembersCompleteCached();
        setTeamMembers(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err?.message || "Unable to load team members.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTeam();
  }, []);

  return (
    <>
      <section className="team-section pt-30">
        <div className="container">
          {error ? (
            <p className="text-danger">{error}</p>
          ) : null}
          {isLoading ? (
            <p>Loading team members...</p>
          ) : (
            <div className="row">
              {teamMembers.map((member) => (
                <div
                  className="col-lg-3 col-md-6 team-block mb-50"
                  key={member.id}
                >
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src={member.photo || TeamImage1}
                        alt={member.name || "Team member"}
                      />
                    </div>
                    <div className="content">
                      <div className="shape">
                        <img src={TeamShapeImage} alt="shape" />
                      </div>
                      <h4 className="title">
                        <Link to={`/page-team-details/${member.id}`}>
                          {member.name || "Team Member"}
                        </Link>
                      </h4>
                      <span>{member.degree || "Team Member"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Team;
