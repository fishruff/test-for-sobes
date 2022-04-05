import { React, useState } from "react";
import cn from "classnames";
import style from "./style.module.scss";

function UserCard(props) {
  // console.log(props.isActive);
  //isActive
  // const [isActive, SetActive] = useState(false);

  // const toggleClass = () => {
  //   console.log(123);
  //   SetActive(!isActive);
  // };
  console.log("User id props = " + props.isActive);
  let url = "https://i.pravatar.cc/260/?img=" + props.id;
  return (
    <div
      className={props.isActive ? cn(style.active) : null}
      // onClick={() => {
      //   toggleClass();
      // }}
    >
      <img src={url} alt="" />
      <div className={cn(style.Desk)}>
        <h3>{props.name}</h3>
        <p>{props.companyName}</p>
      </div>
    </div>
  );
}

export default UserCard;
