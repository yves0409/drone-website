import React from "react";
import { Link } from "react-router-dom";

const OurTeamPage = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h1 className="mb-4">Our Team</h1>
        <p className="lead mb-5">
          The minds and pilots behind every aerial shot.
        </p>

        <div className="text-start mx-auto" style={{ maxWidth: "800px" }}>
          <p>
            At SkyPix, we believe that great visuals begin with great people.
            Our team is made up of certified drone pilots, creative visual
            storytellers, and project managers who bring passion and precision
            to every flight.
          </p>

          <p>
            We come from backgrounds in film, engineering, architecture, and
            aviation — united by a shared mission to deliver high-quality aerial
            content with safety, innovation, and integrity.
          </p>

          <p>
            Whether we're capturing a luxury estate, inspecting a wind turbine,
            or filming for a commercial campaign, we approach every project with
            professionalism and a commitment to exceeding expectations.
          </p>
        </div>

        <div className="mt-5">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurTeamPage;
