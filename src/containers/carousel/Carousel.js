import React from "react";

import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img/about-1.jpg";
import img2 from "../../assets/img/about-2.jpg";
import img3 from "../../assets/img/about-3.jpg";
import { Star } from "../../assets/icons/star";

import "./Carousel.scss";

const CarouselBlock = () => {
  return (
    <div className="app-carousel-box">
      <div className="app-carousel-box__layer">
        <Carousel>
          <Carousel.Item>
            <div className="app-carousel-box__item">
              <div className="app-carousel-box__item__stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="app-carousel-box__item__title">We loved id</p>
              <p className="app-carousel-box__item__info">
                Etiam nec odio vestibulum est mattis effic iturut magna.
                Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
                est mattis effic.
              </p>
              <div className="app-carousel-box__item__img">
                <img src={img1} alt="img" className="d-block w-100" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="app-carousel-box__item">
              <div className="app-carousel-box__item__stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="app-carousel-box__item__title">Perfect stay</p>
              <p className="app-carousel-box__item__info">
                Etiam nec odio vestibulum est mattis effic iturut magna.
                Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
                est mattis effic.
              </p>
              <div className="app-carousel-box__item__img">
                <img src={img2} alt="img" className="d-block w-100" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="app-carousel-box__item">
              <div className="app-carousel-box__item__stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="app-carousel-box__item__title">Nica place</p>
              <p className="app-carousel-box__item__info">
                Etiam nec odio vestibulum est mattis effic iturut magna.
                Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
                est mattis effic.
              </p>
              <div className="app-carousel-box__item__img">
                <img src={img3} alt="img" className="d-block w-100" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselBlock;
