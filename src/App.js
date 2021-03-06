//Packages
import React from "react"
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

//Style
import "./App.css"

//Component
import BlogPost from "./Containers/Pages/BlogPost/BlogPost"
import Home from "./Containers/Home/Home"
import FormPost from "./Containers/Pages/FormPost/FormPost"
import DetailPost from './Components/DetailPost/DetailPost';
import Game from "./Containers/Pages/Game/Game";
import RockScissorPaper from './Containers/Pages/Game/RockScissorPaper/RockScissorPaper';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to='/' exact>HOME <span role="img" aria-label="Pinguin">🐧</span></NavLink>
          <NavLink to='/article'>ARTICLE <span role="img" aria-label="Books">📚</span></NavLink>
          <NavLink to='/games'>GAMES <span role="img" aria-label="Alien-Robot">👾🤖</span></NavLink>
        </nav>
        <div className="container">
          <Route path='/' exact component={Home} />
          <Route path='/article' component={BlogPost} />
          <Route path='/article-post' component={FormPost} />
          <Route path='/detail-article/:id' component={DetailPost} />
          <Route path='/games' exact component={Game} />
          <Route path='/games/rsp' component={RockScissorPaper} />
        </div>
        <footer>
          <p>Copyright&copy;2019.<a href="https://github.com/egin10" target="_blank" rel="noopener noreferrer">egin10</a></p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
