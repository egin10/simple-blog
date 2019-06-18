import React from "react";
import "./App.css";
import BlogPostComponent from "./Containers/BlogPost/BlogPostComponent";
import HomeComponent from "./Containers/Home/HomeComponent";

function App() {
  return (
    <div className="App">
      <HomeComponent />
      <BlogPostComponent />
    </div>
  );
}

export default App;
