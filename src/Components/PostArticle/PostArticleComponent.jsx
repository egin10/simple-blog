import React from "react";
import "./PostArticleComponent.css";

const PostArticle = props => {
  return (
    <div className="post-box">
      <h3 className="title-post">Title Post</h3>
      <p className="body-post">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        nostrum voluptates ipsum impedit ratione debitis quisquam perspiciatis
        ipsam aliquid placeat beatae, earum reprehenderit enim dolores
        accusantium voluptate harum unde? Ipsam.
      </p>
      <button className="btn-like">Like</button>
      <button className="btn-read">Read more...</button>
    </div>
  );
};

export default PostArticle;
