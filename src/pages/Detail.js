import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../scss/detail.scss";
import { useParams, redirect } from "react-router-dom";
import logements from "../data/logements";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";

export const data = JSON.parse(JSON.stringify(logements));

const Detail = () => {
  let { id } = useParams();
  const dataID = data.find((obj) => {
    return obj;
  });

  console.log(dataID.id);
  if (!dataID.id === id) {
    window.location.replace("http://localhost:3000/error");
  } else {
    const found = data.find((obj) => {
      return obj.id === `${id}`;
    });

    return (
      <div className="detailContainer">
        <Navbar />
        <header>
          <Carousel pictures={found.pictures} />
        </header>
        <main>
          <div className="desc">
            <div className="info">
              {" "}
              <h1>{found.title}</h1>
              <p>{found.location}</p>
              <div className="tags">
                {found.tags.map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="moreInfo">
              <div className="rating">
                <Rating></Rating>
              </div>
              <div className="persona">
                <p>{found.host.name}</p>
                <img src={found.host.picture} alt="" className="pp" />
              </div>
            </div>
          </div>

          <div className="collapseContainer">
            <Collapse title="Description" desc={found.description} />
            <Collapse title="Equipements" desc={found.equipments} />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
};

export default Detail;
