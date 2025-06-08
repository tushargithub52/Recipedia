import { NavLink, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import CreateRecipes from "../pages/CreateRecipes"
import RecipeDetails from "../pages/RecipeDetails"
import UpdateRecipe from "../pages/UpdateRecipe"
import PageNotFound from "../pages/PageNotFound"
import Fav from "../pages/Fav"

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav" element={<Fav />} />

      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/detail/:id" element={<RecipeDetails />} />
      <Route path="/recipes/detail/update/:id" element={<UpdateRecipe />} />

      <Route path="/create" element={<CreateRecipes />} />
      <Route path="*" element={<PageNotFound />} />


    </Routes>
  )
}

export default Mainroutes