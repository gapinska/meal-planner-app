import React from "react"
const Recipe = ({ recipe }) => {
  console.log(recipe)
  return (
    <div>
      <div>{recipe.title}</div>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  )
}

export default Recipe
