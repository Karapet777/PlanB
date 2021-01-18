import React from "react";

import { Data } from "../../data/data";
import Item from "../../components/serviceItem/Item";

import "./Service.scss";

const Service = () => {
  return (
    <div className="app-block-service">
      {Data.serviceItems.map((elem, index) => {
        return (
          <Item
            key={index}
            title={elem.title}
            info={elem.info}
            icon={elem.icon}
          />
        );
      })}
    </div>
  );
};
export default Service;
