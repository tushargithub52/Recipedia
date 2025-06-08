import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { recipes } from "../context/RecipeContext";
import { toast } from "react-toastify";

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { recipe, setrecipe } = useContext(recipes);

  const data = recipe.find((r) => r.id == params.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      url: data.url,
      title: data.title,
      chef: data.chef,
      description: data.description,
      ingredients: data.ingredients,
      instructions: data.instructions,
    },
  });

  const updatehandler = (data) => {
    const index = recipe.findIndex((r) => r.id == params.id);
    const copy = [...recipe];
    copy[index] = { ...copy[index], ...data };
    setrecipe(copy);
    localStorage.setItem("rec", JSON.stringify(copy))
    toast.success("Recipe Updated Successfully");
    navigate(-1);
  };

  const deleteHandler = () => {
    const filtered = recipe.filter((r) => r.id != params.id);
    setrecipe(filtered);
    localStorage.setItem('rec', JSON.stringify(filtered))
    toast.success("Recipe Deleted Successfully");
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row gap-8 p-6 md:p-10">
      {/* Left: Form Section */}
      <form
        onSubmit={handleSubmit(updatehandler)}
        className="md:w-1/2 bg-[#1E293B] rounded-xl shadow-lg p-6 md:p-10 flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold text-[#facc15] mb-4">Update Recipe</h2>

        <div>
          <input
            {...register("url", { required: "URL cannot be empty" })}
            type="url"
            placeholder="Image URL"
            className="w-full p-3 rounded-md bg-slate-700 border border-gray-600 text-white "
          />
          <small className="text-red-400">{errors?.url?.message}</small>
        </div>

        <div>
          <input
            {...register("title", { required: "Title cannot be empty" })}
            type="text"
            placeholder="Recipe Title"
            className="w-full p-3 rounded-md bg-slate-700 border placeholder-gray-400 border-gray-600 text-white"
          />
          <small className="text-red-400">{errors?.title?.message}</small>
        </div>

        <div>
          <input
            {...register("chef", { required: "Chef name cannot be empty" })}
            type="text"
            placeholder="Chef Name"
            className="w-full p-3 rounded-md bg-slate-700 border border-gray-600 text-white"
          />
          <small className="text-red-400">{errors?.chef?.message}</small>
        </div>

        <div>
          <textarea
            {...register("description", {
              required: "Description cannot be empty",
            })}
            placeholder="Recipe Description"
            className="w-full p-3 h-24 rounded-md bg-slate-700 border border-gray-600 text-white resize-none"
          ></textarea>
          <small className="text-red-400">{errors?.description?.message}</small>
        </div>

        <div>
          <textarea
            {...register("ingredients", {
              required: "Ingredients cannot be empty",
            })}
            placeholder="Ingredients (comma separated)"
            className="w-full p-3 h-24 rounded-md bg-slate-700 border border-gray-600 text-white resize-none"
          ></textarea>
          <small className="text-red-400">{errors?.ingredients?.message}</small>
        </div>

        <div>
          <textarea
            {...register("instructions", {
              required: "Instructions cannot be empty",
            })}
            placeholder="Instructions (step-wise)"
            className="w-full p-3 h-24 rounded-md bg-slate-700 border border-gray-600 text-white resize-none"
          ></textarea>
          <small className="text-red-400">{errors?.instructions?.message}</small>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={deleteHandler}
            className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-lg text-white font-medium"
          >
            Delete
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded-lg text-white font-medium"
          >
            Update
          </button>
        </div>
      </form>

      {/* Right: Preview Section */}
      <div className="md:w-1/2 bg-[#1E293B] rounded-xl shadow-lg p-6 md:p-10">
        <h3 className="text-3xl font-bold mb-2 text-yellow-400">{watch("title")}</h3>
        <img
          src={watch("url")}
          alt="Recipe"
          className="w-full h-60 object-cover rounded-lg mb-4 border border-gray-700"
        />
        <p className="text-gray-100 mb-2">
          <span className="text-yellow-400">Chef:</span> {watch("chef")}
        </p>
        <p className="mb-4 text-gray-100">{watch("description")}</p>

        <h4 className="text-xl font-semibold text-yellow-400 mb-2">Ingredients</h4>
        <ul className="list-disc pl-5 mb-4 text-gray-100">
          {watch("ingredients").split(",").map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>

        <h4 className="text-xl font-semibold text-yellow-400 mb-2">Instructions</h4>
        <ol className="list-decimal text-gray-100">
          {watch("instructions")}
        </ol>
      </div>
    </div>
  );
};

export default UpdateRecipe;
