import React from "react";
import css from "./mission.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Mission = () => {
  return (
    <div className={css.body}>
      <Header />
      <div className={css.ourMission}>
        <h1>Our Mission</h1>
        <div className={css.border}>
          <h3 className={css.innerText}>
            <div className={css.mission}>
              Covid 19 has brought about a transformation in the way we work.
              The meteoric rise of remote working has been empowering for many,
              but for some whose homes are not so equipped to be used as a
              workplace it has been a less positive experience. Space addresses
              this issue by bringing members of the community together, both
              allowing users to both hire out their residence either partially
              or in its entirety, and providing these local spaces for other
              users, predominantly for remote working but also for gym, music or
              various other uses. Not only is this mutually beneficial for both
              hosts and standard users, but it also enables users to find their
              most local and convenient option, thereby reducing travel costs
              and so their carbon footprint. Space also enables older people who
              may be lonely or isolated to welcome some company into their
              residence.
            </div>
            <br></br>
            <div className={css.mission}>
              Our aim is to bring people together.
            </div>
            {/* <div>
              Thank you for your interest in our Space App. <br />
              This project is created by team of six people following the Agile
              methodology, as a final project of School of Code Bootcamp.
            </div>

            <div>
              Though there is no commercial business behind this app, <br />
              the platform itself is a functional app <br />
              bringing the aim to improve the environment in our community by
              working with area businesses, community leaders and our neighbors
              to create a clean and safe place to work.
              <br />
              <br />
              If you are interested in this project, please contact the{" "}
              <a
                href="https://www.schoolofcode.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                School of Code
              </a>{" "}
              to get in touch with the team.
            </div> */}
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
