import React, { Component, Fragment } from "react";
import "./BlogPostComponent.css";

class BlogPostComponent extends Component {
  state = {
    posts: []
    //https://jsonplaceholder.typicode.com/posts
  };

  render() {
    return (
      <Fragment>
        <h3>Posting</h3>
        <div className="post-box">
          <h3 className="title-post">Title Post</h3>
          <p className="body-post">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            nostrum voluptates ipsum impedit ratione debitis quisquam
            perspiciatis ipsam aliquid placeat beatae, earum reprehenderit enim
            dolores accusantium voluptate harum unde? Ipsam.
          </p>
          <button className="btn-like">Like</button>
          <button className="btn-read">Read more...</button>
        </div>
      </Fragment>
    );
  }
}

export default BlogPostComponent;
