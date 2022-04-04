import React from "react";
import style from "./style.module.scss";
import cn from "classnames";
import Post from "../Post";
import Pht from "../../img/Vector.svg";

function Posts(props) {
  return (
    <div className={cn(style.Posts)}>
      <img src={Pht} alt="" />
      <div>
        <h2>
          3 актуальных поста <strong>{props.userSelect.Cname}</strong>
        </h2>

        {props.posts
          .filter((item) => item.userId === props.userSelect.id)
          .slice(0, 3)
          .map((post) => (
            <Post title={post.title} body={post.body} key={post.id} />
          ))}
      </div>
    </div>
  );
}

export default Posts;
