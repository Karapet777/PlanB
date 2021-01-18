import React from "react";

import "./Item.scss";

const Item = ({ classIconBlock, title, info, icon }) => {
  return (
    <div className={`block-item`}>
      <div className={`block-icon ${classIconBlock}`}>
        <img src={icon} alt="" />
      </div>
      <p className="title">{title}</p>
      <p className="info">{info}</p>
    </div>
  );
};

export default Item;
