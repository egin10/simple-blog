import React from 'react'

//Style
import "./PostArticle.css";

const PostArticle = props => {
  let { data, handleLike, handleDislike, goDetail } = props
  return (
    <div className="post-box">
      <h3 className="title-post">{data.title.length >= 50 ? data.title.slice(0, 50) + "..." : data.title}</h3>
      <hr />
      <p className="body-post">{data.body.length >= 250 ? data.body.slice(0, 250) + "..." : data.body}</p>
      <span>{data.likes} Likes &emsp;|&emsp; {data.dislikes} Dislikes</span>
      <button className="btn-like" onClick={() => handleLike(data)} >Like</button>
      <button className="btn-dislike" onClick={() => handleDislike(data)} >Dislike</button>
      <button className="btn-read" onClick={() => goDetail(data.id)}>Read more...</button>
    </div>
  );
};

export default PostArticle;
