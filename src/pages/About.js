import React from "react";
import Navbar from "../components/Navbar";
import "../scss/about.scss";
import Collapse from "../components/Collapse";
import { aboutData } from "../data/data";
import bgImg from "../img/kalen-emsley-Bkci_8qcdvQ-unsplash2.png";

const About = () => {
  return (
    <div className="aboutContainer">
      <Navbar />
      <header>
        <div className="holder">
          <img src={bgImg} alt="" />
        </div>
      </header>
      <main>
        <div className="collapseContainer">
          {aboutData.map((collapse) => (
            <Collapse
              key={collapse.id}
              title={collapse.title}
              desc={collapse.desc}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
export default About;
