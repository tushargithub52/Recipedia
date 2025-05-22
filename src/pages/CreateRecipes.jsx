import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipes } from "../context/RecipeContext";
import { toast } from "react-toastify";

const CreateRecipes = () => {
    const {recipe, setrecipe} = useContext(recipes);

    const {
        register, 
        handleSubmit,
        reset,
        formState: {errors},
    }=useForm()
    
    const submithandler = (rec) => {
        rec.id = nanoid();

        setrecipe([...recipe, rec]);
        toast.success("Recipe added!");
        reset();
    }

  return (
    <div className="flex w-[100%] items-center justify-around">
        <div className="w-[40%]">
            <img src="https://media.gettyimages.com/id/1220017909/photo/top-view-table-full-of-food.jpg?s=612x612&w=0&k=20&c=UzzJrIttGJbjHoXHRrKNVimV-cBzZmKdvUpJel3g7Ns=" alt="Delicious food" />
        </div>
      <form 
      onSubmit={handleSubmit(submithandler)}
      className="w-[35%] flex flex-col items-center justify-center bg-[#393E46] px-15 py-6 rounded-lg">
        <h3 className="text-4xl mb-8 font-semibold">Create your own recipe</h3>
        <input
          {...register('url', {required: true})}  
          className="w-full px-3 py-2 text-lg outline-none border mb-4 rounded"
          type="url"
          placeholder="Enter image URL"
        />
        <input
          {...register('title', {required: true})}
          className="w-full px-3 py-2 text-lg outline-none border mb-4 rounded"
          type="text"
          placeholder="Enter recipe title"
        />
        <input
          {...register('chef', {required: true})}
          className="w-full px-3 py-2 text-lg outline-none border mb-4 rounded"
          type="text"
          placeholder="Enter chef name"
        />
        <textarea 
        {...register('description', {required: true})}
        className="w-full  outline-none text-lg border px-3 pt-2  mb-4 resize-none rounded-md"
        placeholder="Recipe description here..."></textarea>
        <textarea 
        {...register('ingredients', {required: true})}
        className="w-full  outline-none text-lg border px-3 pt-2 mb-4 resize-none rounded-md"
        placeholder="Ingredients here..."></textarea>
        <textarea 
        {...register('instructions', {required: true})}
        className="w-full  outline-none text-lg border px-3 pt-2 mb-6 resize-none rounded-md"
        placeholder="Instructions here..."></textarea>
        <button className="bg-[#222831] font-medium px-5 py-3 rounded-lg text-lg cursor-pointer active:scale-95 hover:opacity-90">Create recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipes;
