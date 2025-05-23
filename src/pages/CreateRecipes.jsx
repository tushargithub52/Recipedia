import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipes } from "../context/RecipeContext";
import { toast } from "react-toastify";

const CreateRecipes = () => {
  const { recipe, setrecipe } = useContext(recipes);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submithandler = (rec) => {
    rec.id = nanoid();

    setrecipe([...recipe, rec]);
    toast.success("Recipe added!");
    reset();
  };

  return (
    <div className="flex flex-col sm:flex-row w-full h-full items-center justify-around gap-10 px-4 py-8">
      <div className="w-full sm:w-1/2 md:w-[40%]">
        <img
          src="https://media.gettyimages.com/id/1220017909/photo/top-view-table-full-of-food.jpg?s=612x612&w=0&k=20&c=UzzJrIttGJbjHoXHRrKNVimV-cBzZmKdvUpJel3g7Ns="
          alt="Delicious food"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      <form
        onSubmit={handleSubmit(submithandler)}
        className="w-full sm:w-1/2 md:w-[40%] flex flex-col items-start justify-center bg-[#393E46] px-6 py-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl md:text-4xl mb-6 font-semibold text-white">
          Create your own recipe
        </h3>

        <input
          {...register("url", { required: "URL cannot be empty" })}
          className="w-full px-3 py-2 text-base md:text-lg outline-none border rounded"
          type="url"
          placeholder="Enter image URL"
        />
        <small className="text-sm text-red-500 mb-3">
          {errors?.url?.message}
        </small>

        <input
          {...register("title", { required: "Title cannot be empty" })}
          className="w-full px-3 py-2 text-base md:text-lg outline-none border rounded"
          type="text"
          placeholder="Enter recipe title"
        />
        <small className="text-sm text-red-500 mb-3">
          {errors?.title?.message}
        </small>

        <input
          {...register("chef", { required: "Chef name cannot be empty" })}
          className="w-full px-3 py-2 text-base md:text-lg outline-none border rounded"
          type="text"
          placeholder="Enter chef name"
        />
        <small className="text-sm text-red-500 mb-3">
          {errors?.chef?.message}
        </small>

        <textarea
          {...register("description", {
            required: "Description cannot be empty",
          })}
          className="w-full outline-none text-base md:text-lg border px-3 pt-2 resize-none rounded-md"
          placeholder="Recipe description here..."
        ></textarea>
        <small className="text-sm text-red-500 mb-3">
          {errors?.description?.message}
        </small>

        <textarea
          {...register("ingredients", {
            required: "Ingredients cannot be empty",
          })}
          className="w-full outline-none text-base md:text-lg border px-3 pt-2 resize-none rounded-md"
          placeholder="Ingredients here...(separated by commas)"
        ></textarea>
        <small className="text-sm text-red-500 mb-3">
          {errors?.ingredients?.message}
        </small>

        <textarea
          {...register("instructions", {
            required: "Instructions cannot be empty",
          })}
          className="w-full outline-none text-base md:text-lg border px-3 pt-2 resize-none rounded-md"
          placeholder="Instructions here...(step-wise)"
        ></textarea>
        <small className="text-sm text-red-500 mb-4">
          {errors?.instructions?.message}
        </small>

        <button className="bg-[#222831] text-white self-center font-medium px-6 py-3 rounded-lg text-lg cursor-pointer active:scale-95 hover:opacity-90 transition">
          Create recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;
