import React from "react";
import "./randomizedRecipes.css";
import Recipe from "./recipe";
import Recipes from "../recipes.json";

function randomizedRecipes() {
  const randomizedRecipesArr = Recipes.map((r, index) => (
    <div className="recipe-card" key={r.name}>
      <Recipe value={r} i={index} />
    </div>
  ));
  return <div className="randomized-recipes-grid">{randomizedRecipesArr}</div>;
}

export default randomizedRecipes;
