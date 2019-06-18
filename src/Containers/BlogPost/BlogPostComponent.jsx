import React, { Component } from "react";
import "./BlogPostComponent.css";
import PostArticle from "../../Components/PostArticle/PostArticleComponent";
import axios from "axios";

export default class BlogPostComponent extends Component {
  state = {
    posts: []
    //https://jsonplaceholder.typicode.com/posts
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      for (let i = 0; i < 6; i++) {
        this.state.posts.push(res.data[i]);
      }
    });
  }

  render() {
    return (
      <div className="article-page">
        <h3 className="header">Articles</h3>
        <hr />
        <PostArticle />
      </div>
    );
  }
}
