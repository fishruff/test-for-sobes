import React from "react";
import style from "./style.module.scss";
import cn from "classnames";

function Header() {
  return (
    <div className={cn(style.Header)}>
      <h2>Наши топ-блогеры</h2>
      <p>
        Лучше специалисты в своем деле, средний опыт работы в профессии - 27 лет
      </p>
    </div>
  );
}

export default Header;
