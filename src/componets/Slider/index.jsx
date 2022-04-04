import React from "react";
import style from "./style.module.scss";
import cn from "classnames";
import UserCard from "../UserCard";
import Slider from "react-whirligig";

function SliderBlock(props) {
  //slider
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();

  return (
    <div className={cn(style.Slider)}>
      <div className={cn(style.navigationBlock)}>
        <button onClick={prev}>&#9668;</button>
        <button onClick={next}>&#9658;</button>
      </div>

      <Slider
        className={cn(style.sliderEls)}
        visibleSlides={4}
        slideBy={1}
        preventScroll={true}
        ref={(_whirligigInstance) => {
          whirligig = _whirligigInstance;
        }}
      >
        {props.users.map((user) => (
          <button
            onClick={() => {
              props.HandleUserSelect({ id: user.id, Cname: user.company.name });
            }}
          >
            <UserCard
              id={user.id}
              key={user.id}
              name={user.name}
              companyName={user.company.name}
            />
          </button>
        ))}
      </Slider>
    </div>
  );
}

export default SliderBlock;
