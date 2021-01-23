import React from "react";

import Button from "../../components/button/Button";
import icon1 from "../../assets/img/trip-1.png";
import icon2 from "../../assets/img/trip-2.png";

import "./Footer.scss";

function Footer() {
  return (
    <div className="app-Footer-container">
      <div className="app-Footer-container__block-logo">
        <a className="app-Footer-container__block-logo__logo" href="/">
          The River
        </a>
      </div>

      <div className="app-Footer-container__contact">
        <di>
          <p className="app-Footer-container__contact__title">Our Address</p>
          <p>Beach Str. 345</p>
          <p>67559 Miami</p>
          <p>USA</p>
        </di>
        <di>
          <p className="app-Footer-container__contact__title">Reservations</p>
          <p>Tel: 345 5667 889</p>
          <p>Fax; 6783 4567 889</p>
          <p>reservations@hotelriver.com</p>
        </di>
        <di className="block-footer-input">
          <p className="app-Footer-container__contact__title">Newsletter</p>
          <input
            className="app-Footer-container__contact__input"
            type="text"
            placeholder="Your email address"
          />
          <button className="app-Footer-container__contact__button">
            Subscribe
          </button>
        </di>
        <di>
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
        </di>
      </div>
    </div>
  );
}

export default Footer;
