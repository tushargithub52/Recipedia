import { useContext } from "react";
import { recipes } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigator = useNavigate();
  const { recipe, setrecipe } = useContext(recipes);

  const handlenavigate = (id) => {
    navigator(`/recipes/detail/${id}`);
  };

  const renderrecipes = recipe.map((r) => {
    return (
      <div
        key={r.id}
        className="p-4 w-full sm:w-[48%] lg:w-[30%] bg-amber-100 overflow-hidden flex flex-col items-start gap-4 rounded-xl"
      >
        <div className="h-50 w-full flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={r.url}
            alt=""
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <h4 className="text-[#222831] font-bold text-2xl">
          Dish: <span className="font-semibold">{r.title}</span>
        </h4>
        <h4 className="text-[#222831] font-bold text-2xl">
          Chef: <span className="font-semibold">{r.chef}</span>
        </h4>
        <p className="text-[#222831] font-bold text-2xl">
          Details: <br />{" "}
          <span className="font-semibold text-lg">{r.description}</span>
        </p>
        <div className="w-full flex gap-3">
          <button
            onClick={() => handlenavigate(r.id)}
            className="bg-amber-700 flex-1 py-3 text-lg font-semibold rounded-lg cursor-pointer hover:opacity-85 active:scale-95"
          >
            Full recipe
          </button>
          {/* <button className="bg-red-600 text-white px-4 py-3 text-lg font-semibold rounded-lg cursor-pointer hover:opacity-90 active:scale-95">
            ❤️ Favourite
          </button> */}
        </div>
      </div>
    );
  });

  return (
    <div className="p-5">
      <h2 className="text-4xl sm:text-6xl font-thin ml-6 sm:ml-20 mb-4">
        Your Personal Cookbook Starts Here...
      </h2>
      <p className="text-base sm:text-lg font-thin ml-6 sm:ml-20 mb-6">
        From everyday meals to gourmet dishes, your next favorite recipe is just
        a scroll away.
      </p>
      <div className="px-6 sm:px-20 w-full flex flex-wrap gap-10 justify-center">
        {renderrecipes}
      </div>
    </div>
  );
};

export default Recipes;
