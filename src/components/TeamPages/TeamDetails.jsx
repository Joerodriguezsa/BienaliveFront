import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import BackToTop from "../BackToTop.jsx";
import Header from "../HomeOne/Header.jsx";
import Footer from "../HomeOne/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import { getTeamMembersCompleteCached } from "../../services/teamMembersApi";
import { getServices } from "../../services/servicesApi";
import { getTeamServices } from "../../services/teamServicesApi";

// Import images
import TeamDetailsImg from "../../assets/images/resource/team-details.jpg";

function TeamDetails() {
    const { id } = useParams();
    const [teamMembers, setTeamMembers] = useState([]);
    const [services, setServices] = useState([]);
    const [teamServices, setTeamServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadTeam = async () => {
            setIsLoading(true);
            setError("");

            try {
                const [membersData, servicesData, teamServicesData] =
                    await Promise.all([
                        getTeamMembersCompleteCached(),
                        getServices(),
                        getTeamServices(),
                    ]);

                setTeamMembers(Array.isArray(membersData) ? membersData : []);
                setServices(Array.isArray(servicesData) ? servicesData : []);
                setTeamServices(
                    Array.isArray(teamServicesData) ? teamServicesData : []
                );
            } catch (err) {
                setError(err?.message || "Unable to load team member details.");
            } finally {
                setIsLoading(false);
            }
        };

        loadTeam();
    }, []);

    const selectedMember = useMemo(() => {
        if (!id) return null;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) return null;
        return teamMembers.find((member) => member.id === parsedId) || null;
    }, [id, teamMembers]);

    const assignedServices = useMemo(() => {
        if (!selectedMember) return [];
        const assignedServiceIds = new Set(
            teamServices
                .filter(
                    (teamService) =>
                        teamService.teamMemberId === selectedMember.id
                )
                .map((teamService) => teamService.serviceId)
        );

        return services.filter((service) => assignedServiceIds.has(service.id));
    }, [selectedMember, services, teamServices]);

    return (
        <>
            <Header />
            <PageTitle title="Team Details" 
            breadcrumb={[{ link: "/", title: "Home" }]} 
            />

            <section className="team-details">
                <div className="container pt-100 pb-100">
                    <div className="team-details__top pb-70">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-left">
                                    <div className="team-details__top-img">
                                        <img
                                            src={selectedMember?.photo || TeamDetailsImg}
                                            alt={selectedMember?.name || "Team member"}
                                        />
                                        <div className="team-details__big-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-right">
                                    <div className="team-details__top-content">
                                        {error ? (
                                            <p className="text-danger">{error}</p>
                                        ) : null}
                                        {isLoading ? (
                                            <p>Loading team member...</p>
                                        ) : selectedMember ? (
                                            <>
                                                <h3 className="team-details__top-name">{selectedMember.name}</h3>
                                                <p className="team-details__top-title mb-20">
                                                    {selectedMember.degree || "Team Member"}
                                                </p>
                                                <p className="team-details__top-text-1">
                                                    {selectedMember.aboutMe || "Sin información adicional."}
                                                </p>
                                            </>
                                        ) : (
                                            <p>No team member data available.</p>
                                        )}
                                        <div className="team-details-contact mb-30">
                                            <h5 className="mb-0">Email Address</h5>
                                            <div>
                                                <span>{selectedMember?.email || "Not available"}</span>
                                            </div>
                                        </div>
                                        <div className="team-details-contact mb-30">
                                            <div className="team-details__bottom-left">
                                                <h4 className="team-details__bottom-left-title">Personal Experience</h4>
                                                <p className="team-details__bottom-left-text">
                                                    {selectedMember?.personalExperience || "Sin información adicional."}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-details-contact mb-30">
                                            <div className="team-details__bottom-left">
                                                <h4 className="team-details__bottom-left-title">Services</h4>
                                                {assignedServices.length ? (
                                                    <ul className="list-unstyled">
                                                        {assignedServices.map((service) => (
                                                            <li key={service.id}>{service.name}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="team-details__bottom-left-text">
                                                        No services assigned.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
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

export default TeamDetails;
