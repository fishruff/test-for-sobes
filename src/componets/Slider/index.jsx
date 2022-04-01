import React from "react";
import style from "./style.module.scss";
import cn from "classnames";
import UserCard from "../UserCard";
import Slider from "react-slick";

function SliderBlock({ users }) {
  let settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className={cn(style.Slider)}>
      <div className={cn(style.navigationBlock)}>
        <button className={cn(style.controlBtn)}>&#10094;-</button>
        <button className={cn(style.controlBtn)}>- &#10095;</button>
      </div>
      <div className={cn(style.sliderElements)}>
        <Slider {...settings}>
          {users.map((user) => (
            <UserCard
              id={user.id}
              key={user.id}
              name={user.name}
              companyName={user.company.name}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderBlock;
