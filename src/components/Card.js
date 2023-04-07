import React from "react";
import "../scss/card.scss";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <li className="card">
      <Link to={`/Detail/${logement.id}`}>
        <img src={logement.cover} alt="couverture {logement.title}" />
        <div className="shadow"></div>
        <div className="info">
          <h2>{logement.title}</h2>
        </div>
      </Link>
    </li>
  );
};

export default Card;
