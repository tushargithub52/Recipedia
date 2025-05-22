import { NavLink, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import CreateRecipes from "../pages/CreateRecipes"
import RecipeDetails from "../pages/RecipeDetails"

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/detail/:id" element={<RecipeDetails />} />

      <Route path="/create" element={<CreateRecipes />} />
    </Routes>
  )
}

export default Mainroutes