import React, { Component } from "react"
import axios from "axios"

//Style
import "./BlogPost.css";

//Component
import PostArticle from "../../../Components/PostArticle/PostArticle";
import SearchBox from '../../../Components/SearchBox/SearchBox';

export default class BlogPost extends Component {
  state = {
    url: "https://json-server-simple-blog.herokuapp.com",
    // url: "http://localhost:3001",
    posts: [],
    paginate: {
      first: 0,
      last: 4,
      current: 1
    },
    isLikeDislike: false
  };

  //--- HANDLER
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

  handleAddPost = () => {
    this.props.history.push('/article-post')
  }
  //--- END HANDLER

  //--- COMUNICATION TO API
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
  //--- END COMUNICATION TO API

  //Lifecycle
  componentDidMount() {
    this.getPostAPI()
  }

  render() {
    let paginate = this.state.paginate;
    let posts = this.state.posts;
    return (
      <div className="article-page">
        <h3 className="header">ARTICLE</h3>
        <hr />
        <button className="add-new-post" onClick={this.handleAddPost}>ADD POST</button>
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
            disabled={paginate.current === Math.ceil(posts.length / 4) || Math.ceil(posts.length / 4) === 0 ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
