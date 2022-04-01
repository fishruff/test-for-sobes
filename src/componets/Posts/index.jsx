import React from "react";
import style from "./style.module.scss";
import cn from "classnames";
import Post from "../Post";

function Posts({ posts }) {
  return (
    <div className={cn(style.Posts)}>
      <h2>
        3 актуальных поста <strong>`Moriah.Stanton`</strong>
      </h2>
      {posts.slice(0, 3).map((post) => (
        <Post title={post.title} body={post.title} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
