import React from "react";
import "./PostArticleComponent.css";

const PostArticle = props => {
  let data = props.data
  return (
    <div className="post-box">
      <h3 className="title-post">{data.title.length >= 50 ? data.title.slice(0, 50) + "..." : data.title}</h3>
      <hr />
      <p className="body-post">{data.body.length >= 250 ? data.body.slice(0, 250) + "..." : data.body}</p>
      <span>0 Likes</span>
      <button className="btn-like">Like</button>
      <button className="btn-read">Read more...</button>
    </div>
  );
};

export default PostArticle;
