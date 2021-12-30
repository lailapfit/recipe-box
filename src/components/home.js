import React from "react";
import "./home.css";
import Search from "./search";
import RandomizedRecipes from "./randomizedRecipes";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="title-search-container">
          <header>
            <h1>Recipe Box</h1>
          </header>
          <Search />
        </div>
        <div className="randomized-recipes-container">
          <RandomizedRecipes />
        </div>
      </div>
    );
  }
}

export default Home;
