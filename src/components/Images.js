import "antd/dist/antd.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

import React, { useState } from "react";
import axios from "axios";

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon";
const QUERYSTRING = "wobbuffet";
const URL = `${ROOT_URL}/${QUERYSTRING}`;

const Images = () => {
  const [back_default, setBack_default] = useState();
  const [back_shiny, setBack_shiny] = useState();
  const [front_default, setFront_default] = useState();
  const [front_shiny, setFront_shiny] = useState();

  axios.get(URL).then((res) => {
    setBack_default(res.data.sprites.back_default);
    setBack_shiny(res.data.sprites.back_shiny);
    setFront_default(res.data.sprites.front_default);
    setFront_shiny(res.data.sprites.front_shiny);
  });

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slide">
      <Slider {...settings}>
        <div>
          <img className="images" alt="front_default" src={front_default} />
        </div>
        <div>
          <img className="images" alt="back_default" src={back_default} />
        </div>
        <div>
          <img className="images" alt="front_shiny" src={front_shiny} />
        </div>
        <div>
          <img className="images" alt="back_shiny" src={back_shiny} />
        </div>
      </Slider>
    </div>
  );
};

export default Images;
