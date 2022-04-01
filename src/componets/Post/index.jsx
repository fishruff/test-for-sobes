import React from "react";
import style from "./style.module.scss";
import cn from "classnames";

function Post(props) {
  return (
    <div className={cn(style.Post)}>
      <p className={cn(style.title)}>{props.title}</p>
      <p className={cn(style.body)}>{props.body}</p>
    </div>
  );
}

export default Post;
