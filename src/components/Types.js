import React from "react";
import PropTypes from "prop-types";
import "./types.css";

const Types = ({ image, title, description, isImageRight }) => {
  return (
    <div className={`types-container ${isImageRight ? "right" : "left"}`}>
      <div className="types-image-container">
        <img src={image} alt={title} className="types-image" />
      </div>
      <div className="types-text-container">
        <h2 className="types-title">{title}</h2>
        <p className="types-description">{description}</p>
      </div>
    </div>
  );
};

Types.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isImageRight: PropTypes.bool,
};

Types.defaultProps = {
  isImageRight: false,
};

export default Types;
