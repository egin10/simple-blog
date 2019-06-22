//Packages
import React from "react"
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

//Style
import "./App.css"

//Component
import BlogPost from "./Containers/Pages/BlogPost/BlogPost"
import Home from "./Containers/Home/Home"
import FormPost from "./Containers/Pages/FormPost/FormPost"

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to='/' exact>HOME</NavLink>
          <NavLink to='/article'>ARTICLE</NavLink>
        </nav>
        <div className="container">
          <Route path='/' exact component={Home} />
          <Route path='/article' component={BlogPost} />
          <Route path='/article-post' component={FormPost} />
        </div>
        <footer>
          <p>Copyright&copy;2019.<a href="https://github.com/egin10" target="_blank" rel="noopener noreferrer">egin10</a></p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
