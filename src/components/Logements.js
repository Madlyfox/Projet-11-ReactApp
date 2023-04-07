import React from "react";

import Card from "./Card";
import logements from "../data/logements";

export const data = JSON.parse(JSON.stringify(logements));

const Logements = () => {
  return (
    <ul className="cardContainer">
      {data.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </ul>
  );
};

export default Logements;
