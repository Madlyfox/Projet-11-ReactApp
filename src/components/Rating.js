import React, { useState } from "react";
import logements from "../data/logements";
import { useParams } from "react-router-dom";

import "../scss/rating.scss";

export const data = JSON.parse(JSON.stringify(logements));

const Rating = () => {
  let { id } = useParams();
  console.log(id);

  const found = data.find((obj) => {
    return obj.id === `${id}`;
  });

  const [rating, setRating] = useState(found.rating);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
export default Rating;
