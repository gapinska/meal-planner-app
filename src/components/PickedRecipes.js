import React from "react"
import Recipe from "./Recipe"
const PickedRecipes = ({ recipes }) => {
  console.log(recipes)
  return (
    <div>
      <div>Your recipes:</div>
      {recipes &&
        recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
    </div>
  )
}

export default PickedRecipes
