import React from "react";

import img1 from "../../assets/img/trip-1.png";
import img2 from "../../assets/img/trip-2.png";
import img3 from "../../assets/img/trip-3.png";

import "./YearsBlock.scss";

const YearsBlock = () => {
  return (
    <div className="app-years-container">
      <div>
        <p className="app-years-container__title">
          The River / 10 years of excellence
        </p>
        <p className="app-years-container__info">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque
          eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a
          bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia Curae; Suspendisse nec
          faucibus velit.
        </p>
      </div>
      <div className="app-years-container__block-img">
        <img src={img1} alt="tripadvisor" />
        <img src={img2} alt="tripadvisor" />
        <img src={img3} alt="tripadvisor" />
      </div>
    </div>
  );
};

export default YearsBlock;
