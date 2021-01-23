import React from "react";

import Buttom from "../../components/button/Button";
import "./RoomSection.scss";

const RoomSection = () => {
  return (
    <div className="app-room-container">
      <div className="app-room-container__text-block">
        <p className="app-room-container__text-block__title">Book a room</p>
        <p className="app-room-container__text-block__info">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque
          eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a
          bibendum lacus suscipit sit.
        </p>
      </div>
      <div className="app-room-container__rooms-block">
        <div className="app-room-container__item">
          <div className="app-room-container__item__block-prace">
            <p>$120/Night</p>
          </div>
          <Buttom>Singl Room</Buttom>
        </div>
        <div className="app-room-container__item img2">
          <div className="app-room-container__item__block-prace">
            <p>$120/Night</p>
          </div>
          <Buttom>Singl Room</Buttom>
        </div>
        <div className="app-room-container__item img3">
          <div className="app-room-container__item__block-prace">
            <p>$120/Night</p>
          </div>
          <Buttom>Singl Room</Buttom>
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
