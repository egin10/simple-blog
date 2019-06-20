import React, { Component } from "react";
import "./BlogPostComponent.css";
import PostArticle from "../../Components/PostArticle/PostArticleComponent";
import axios from "axios";
import SearchBox from './../../Components/SearchBox/SearchBoxComponent';

export default class BlogPostComponent extends Component {
  state = {
    url: "https://json-server-simple-blog.herokuapp.com",
    posts: [],
    paginate: {
      first: 0,
      last: 4,
      current: 1
    },
    isLikeDislike: false
  };

  //handler
  changePaginateFirst = () => {
    let newPaginate = this.state.paginate;
    newPaginate.first = newPaginate.first - 4;
    newPaginate.last = newPaginate.last - 4;
    newPaginate.current = newPaginate.current - 1;
    this.setState({ paginate: newPaginate });
  };

  changePaginateLast = () => {
    let newPaginate = this.state.paginate;
    if (newPaginate.first + 4 <= this.state.posts.length) newPaginate.first = newPaginate.first + 4;
    if (newPaginate.last <= this.state.posts.length) newPaginate.last = newPaginate.last + 4;
    if (newPaginate.current < Math.ceil(this.state.posts.length / 4)) newPaginate.current = newPaginate.current + 1;
    this.setState({ paginate: newPaginate });
  };

  changeLikes = data => {
    this.patchLikeAPI(data.id, data.likes + 1);
  };

  changeDislikes = data => {
    this.patchDislikeAPI(data.id, data.dislikes + 1);
  };

  handleSearch = (word) => {
    word === '' ? this.getPostAPI() : this.getSearchAPI(word)
  }

  //communication to API
  getPostAPI = () => {
    let current = this.state.isLikeDislike ? this.state.paginate : { first: 0, last: 4, current: 1 }
    axios.get(`${this.state.url}/posts?_sort=id&_order=desc`).then(res => this.setState({
      posts: res.data,
      paginate: current
    }));
  }

  getSearchAPI = (word) => {
    axios.get(`${this.state.url}/posts?q=${word}`).then(res => this.setState({
      posts: res.data,
      paginate: {
        first: 0,
        last: 4,
        current: 1
      }
    }))
  }

  patchLikeAPI = (id, value) => {
    this.setState({ isLikeDislike: true })
    axios.patch(`${this.state.url}/posts/${id}`, { 'likes': value })
      .then(() => this.getPostAPI())
  }

  patchDislikeAPI = (id, value) => {
    this.setState({ isLikeDislike: true })
    axios.patch(`${this.state.url}/posts/${id}`, { 'dislikes': value })
      .then(() => this.getPostAPI())
  }

  //Lifecycle
  componentDidMount() {
    this.getPostAPI()
  }

  render() {
    let paginate = this.state.paginate;
    let posts = this.state.posts;
    return (
      <div className="article-page">
        <h3 className="header">Articles</h3>
        <hr />
        <button className="add-new-post">Add New Post</button>
        <SearchBox search={this.handleSearch} />
        {posts.slice(paginate.first, paginate.last).map(post => (
          <PostArticle
            key={post.id}
            data={post}
            handleLike={this.changeLikes}
            handleDislike={this.changeDislikes}
          />
        ))}
        <div className="paginate">
          <span>{posts.length === 0 ? 0 : paginate.current} of {Math.ceil(posts.length / 4)} pages.</span>
          <button
            className="btn-prev"
            onClick={this.changePaginateFirst}
            disabled={paginate.first === 0 ? true : false}
          >
            Prev
          </button>
          <button
            className="btn-next"
            onClick={this.changePaginateLast}
            disabled={paginate.current === Math.ceil(posts.length / 4) ? true : false}
          >
            Next
          </button>
        </div>
        <hr />
      </div>
    );
  }
}
