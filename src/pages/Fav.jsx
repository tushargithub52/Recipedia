import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  const navigator = useNavigate()

  const handlenavigate = (id) => {
    navigator(`/recipes/detail/${id}`);
  };
  
  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const addtoFav = (r) => {
    let favcopy = [...favourite, r]
    setfavourite(favcopy);
    localStorage.setItem('fav', JSON.stringify(favcopy));

  };
  const removefromFav = (r) => {
    let filterfav = favourite.filter((f)=> f.id != r.id);
    setfavourite(filterfav);
    localStorage.setItem('fav', JSON.stringify(filterfav));

  };

  const renderfavourites = favourite.map((r) => {
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
          <span className="font-semibold text-lg">
            {r.description.slice(0, 70)}{" "}
            <small
              className="text-blue-600 cursor-pointer hover:text-blue-500"
              onClick={(e) => navigator(`/recipes/detail/${r.id}`)}
            >
              . . . more
            </small>
          </span>
        </p>
        <div className="w-full flex gap-3">
          <button
            onClick={() => handlenavigate(r.id)}
            className="bg-amber-700 flex-1 py-3 text-lg font-semibold rounded-lg cursor-pointer hover:opacity-85 active:scale-95"
          >
            Full recipe
          </button>

          <span className="bg-transparent border-2 border-amber-700 text-black px-4 py-3 font-thin rounded-lg cursor-pointer hover:opacity-90 active:scale-95">
            {favourite.find((f) => f.id == r.id) ? (
              <i
                onClick={()=>removefromFav(r)}
                className="ri-poker-hearts-fill text-red-600 text-3xl"
              ></i>
            ) : (
              <i
              onClick={()=>addtoFav(r)}
                className="ri-poker-hearts-line text-red-600 text-3xl"
              ></i>
            )}
          </span>
        </div>
      </div>
    );
  });

  return <div className="h-[100%]">
      <h2 className="text-4xl sm:text-6xl font-thin ml-6 sm:ml-20 mb-8">
        Your Personal Favourites...
      </h2>
      <div className="px-6 sm:px-20 w-full flex flex-wrap gap-10 justify-center">
        {renderfavourites}
      </div>
    </div>;
};

export default Fav;
