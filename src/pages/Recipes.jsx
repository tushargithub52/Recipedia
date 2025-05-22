import { useContext } from "react";
import { recipes } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigator = useNavigate();
  const { recipe, setrecipe } = useContext(recipes);

  const handlenavigate = (id) => {
    navigator(`/recipes/detail/${id}`);
  }

  const renderrecipes = recipe.map((r) => {
    return (
      <div
        key={r.id}
        className="p-4 w-[25%] bg-amber-100 overflow-hidden flex flex-col items-start gap-4 rounded-xl"
      >
        <div className="h-50 w-[100%] flex items-center justify-center overflow-hidden rounded-xl">
          <img src={r.url} alt="" />
        </div>
        <h4 className="text-[#222831] font-bold text-2xl">
          Dish name: <span className="font-semibold">{r.title}</span>
        </h4>
        <h4 className="text-[#222831] font-bold text-2xl">
          Created by: <span className="font-semibold">{r.chef}</span>
        </h4>
        <p className="text-[#222831] font-bold text-2xl">
          Details: <br />{" "}
          <span className="font-semibold text-lg">{r.description}</span>
        </p>
        <button 
        onClick={()=>handlenavigate(r.id)}
        className="bg-amber-700 w-full py-3 text-2xl font-semibold rounded-lg cursor-pointer hover:opacity-85 active:scale-95">
          Full recipe
        </button>
      </div>
    );
  });

  return (
    <>
      <h2 className="text-6xl font-thin ml-20">Here are your recipes...</h2>
      <div className="p-20 w-[100%] flex flex-wrap gap-10 justify-center">
        {renderrecipes}
      </div>
    </>
  );
};

export default Recipes;
