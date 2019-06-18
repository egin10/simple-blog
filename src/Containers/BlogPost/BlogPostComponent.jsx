import React, { Component } from "react";
import "./BlogPostComponent.css";
import PostArticle from "../../Components/PostArticle/PostArticleComponent";
import axios from "axios";

export default class BlogPostComponent extends Component {
  state = {
    posts: [],
    paginate: {
      first: 0,
      last: 4
    }
  };

  changePaginateFirst = () => {
    let newPaginate = this.state.paginate
    newPaginate.first = newPaginate.first - 4
    newPaginate.last = newPaginate.last - 4
    this.setState({ paginate: newPaginate })
  }

  changePaginateLast = () => {
    let newPaginate = this.state.paginate
    newPaginate.first = newPaginate.first + 4
    newPaginate.last = newPaginate.last + 4
    this.setState({ paginate: newPaginate })
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data })
    });
  }

  render() {
    let first = this.state.paginate.first
    let last = this.state.paginate.last
    let posts = this.state.posts
    return (
      <div className="article-page">
        <h3 className="header">Articles</h3>
        <hr />
        {
          posts.slice(first, last).map(post => <PostArticle key={post.id} data={post} />)
        }
        <div className="paginate">
          <button className="btn-prev"
            onClick={this.changePaginateFirst}
            disabled={first === 0 ? true : false}>Prev</button>
          <button className="btn-next"
            onClick={this.changePaginateLast}
            disabled={first === (posts.length - 4) ? true : false}>Next</button>
        </div>
        <hr />
      </div>
    );
  }
}
