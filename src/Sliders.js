import React from "react";
import Slider from "react-slick";

export default function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slider-items">
          <div className="slider-item animate__animated animate__bounce">
            <h1>
              My mission is to create visually stunning and highly functional
              websites.
            </h1>
            <p>
              Get your website design prototypes and mockups converted into
              pixel perfect, responsive, and hand-coded websites with me.
            </p>
            <div className="slider_btn">
              <a href="#" target="_blank" title="Visit Site" className="btn">
                Tell me about your project
              </a>
            </div>
          </div>
        </div>
        <div className="slider-items">
          <div className="slider-item animate__animated animate__bounce">
            <h1>
              I have a strong passion for creating visually appealing and
              user-friendly web applications.
            </h1>
            <p>
              Get your website design prototypes and mockups converted into
              pixel perfect, responsive, and hand-coded websites with me.
            </p>
            <div className="slider_btn">
              <a href="#" target="_blank" title="Visit Site" className="btn">
                Tell me about your project
              </a>
            </div>
          </div>
        </div>
        <div className="slider-items">
          <div className="slider-item animate__animated animate__bounce">
            <h1>
              Committed to staying up-to-date with the latest industry trends
              and technologies to deliver cutting-edge solutions.
            </h1>
            <p>
              Get your website design prototypes and mockups converted into
              pixel perfect, responsive, and hand-coded websites with me.
            </p>
            <div className="slider_btn">
              <a href="#" target="_blank" title="Visit Site" className="btn">
                Tell me about your project
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
