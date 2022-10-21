import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css'

function SliderComponent ({musicLocal}) {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Slider className={styles.home__navbar} {...settings}>
      {
        musicLocal?.map(item => (
          <Link key={item.category} className={styles.n__item} to={item.route}>
            <img src={item.img} alt={item.category} />
            <p>{item.category}</p>
          </Link>
        ))
      }
    </Slider>
  )
}

export default SliderComponent