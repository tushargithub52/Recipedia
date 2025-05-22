import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipes } from "../context/RecipeContext";

const RecipeDetails = () => {
  const navigator = useNavigate();
  const params = useParams();

  const { recipe, setrecipe } = useContext(recipes);

  const filtered = recipe.filter((rec) => {
    return rec.id == params.id;
  });

  const renderDetails = filtered.map((rec) => {
    const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

    return (
      <div key={rec.id} className="max-w-4xl mx-auto p-6 text-[#222831]">
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-6">
          <img
            src={rec.url}
            alt={rec.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2 text-amber-50">{rec.title}</h1>
          <p className="text-lg text-gray-100">
            By <span className="font-medium">{rec.chef}</span>
          </p>
        </div>

        <div className="mb-6 bg-[#eeeeee] p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-800">{rec.description}</p>
        </div>

        <div className="mb-6 bg-[#eeeeee] p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-800">
            {rec.ingredients.split(",").map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6 bg-[#eeeeee] p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="whitespace-pre-line text-gray-800">
            {rec.instructions}
          </p>
        </div>

        <div className="flex justify-between gap-4">
        <button
          onClick={() => navigator(-1)}
          className="bg-[#222831] text-white px-5 py-3 rounded-lg hover:opacity-90 active:scale-95 transition cursor-pointer"
        >
          ← Go Back
        </button>
        <button
          onClick={handleBackToTop}
          className="bg-[#222831] text-white px-5 py-3 rounded-lg hover:opacity-90 active:scale-95 transition cursor-pointer"
        >
          ↑ Back to Top
        </button>
      </div>
      </div>
    );
  });

  return <>{renderDetails}</>;
};

export default RecipeDetails;
