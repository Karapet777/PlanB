import React from "react";

import img1 from "../../assets/img/gallery_1.jpg";
import img2 from "../../assets/img/gallery_2.jpg";
import img3 from "../../assets/img/gallery_3.jpg";
import img4 from "../../assets/img/gallery_4.jpg";

import "./Imgblock.scss";

const Imgblock = () => {
  return (
    <div className="app-block-imges">
      <img src={img1} alt="img" />
      <img src={img2} alt="img" />
      <img src={img3} alt="img" />
      <img src={img4} alt="img" />
    </div>
  );
};
export default Imgblock;
