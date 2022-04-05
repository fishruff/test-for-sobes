import { React, useState, useEffect } from "react";
import style from "./style.module.scss";
import cn from "classnames";
import UserCard from "../UserCard";
import Slider from "react-whirligig";

function SliderBlock(props) {
  //slider
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  //User is active
  const [userActives, changeUserActive] = useState(1);
  const HandleIsActive = (i) => {
    changeUserActive(i);
  };
  //media query
  const [windowWidth, setwindowWidth] = useState(4);

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      let count = 4;
      if (width <= 1180) {
        count = 3;
      }
      if (width <= 930) {
        count = 2;
      }
      if (width <= 660) {
        count = 1;
      }

      setwindowWidth(count);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={cn(style.Slider)}>
      <div className={cn(style.navigationBlock)}>
        <button onClick={prev}>&#9668;</button>
        <button onClick={next}>&#9658;</button>
      </div>

      <Slider
        className={cn(style.sliderEls)}
        visibleSlides={windowWidth}
        slideBy={1}
        preventScroll={true}
        ref={(_whirligigInstance) => {
          whirligig = _whirligigInstance;
        }}
      >
        {props.users.map((user) => (
          <button
            onClick={() => {
              HandleIsActive(user.id);
              props.HandleUserSelect({ id: user.id, Cname: user.company.name });
            }}
          >
            <UserCard
              isActive={userActives === user.id ? true : false}
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
