import React, { useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  return (
    <div>
      {[...Array(5)].map((data, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              key={ratingValue}
              style={{ display: "none" }}
              name="rating"
              type="radio"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <StarBorderOutlinedIcon
              style={{ color: ratingValue <= rating ? "orange" : "black" }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
