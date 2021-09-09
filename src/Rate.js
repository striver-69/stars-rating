import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, sethoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };
  const starRating = useMemo(() => {
    return [...Array(count).keys()]
      .map((i) => i + 1)
      .map((idx) => (
        <FontAwesomeIcon
          key={idx}
          icon={faStar}
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => sethoverRating(idx)}
          onMouseLeave={() => sethoverRating(0)}
        >
          {idx}
        </FontAwesomeIcon>
      ));
  }, [count, rating, hoverRating]);
  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string
  }
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "blue",
    unfilled: "red"
  }
};

export default Rate;
