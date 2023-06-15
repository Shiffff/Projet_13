import React from "react";

const FeaterItem = ({ item }) => {
  return (
    <div className="feature-item">
      <img src={item.imgSrc} alt={item.imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
};

export default FeaterItem;
