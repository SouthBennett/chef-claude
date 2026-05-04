import React from 'react'
import IngredientsList from '../components/IngredientsList.jsx'
import ClaudeRecipe from '../components/ClaudeRecipe.jsx'
import { getRecipeFromMistral } from "../src/ai.js"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([])

  const [recipe, setRecipe] = React.useState("")

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

  function addIngredient(formData) {
    
    const newIngredient = formData.get("ingredient")

    console.log(newIngredient);
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])

  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input 
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>

      {ingredients.length > 0 && 
        <IngredientsList 
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      }

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}