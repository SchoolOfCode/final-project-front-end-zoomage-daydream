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
          <h3>
            <div>
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
            </div>
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
