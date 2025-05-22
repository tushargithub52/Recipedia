import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-[15%] w-[100%] flex items-center justify-between pl-10 pr-20">
      <div className="logo rounded-[50%] object-cover overflow-hidden h-20 w-20">
        <img  
          src="https://imgs.search.brave.com/Hx8cuxRXTmR87KE8KVxBwW3jw_ITxGWRR8KzyAIEeOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vMHJlNEZD/N0x3ZlJxMWpFbmdx/Y2hQZzVaZGhIeUN4/bDRyM1JaVklTeER1/dy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZNamd3L2VE/STRNRjlTVXk4d01T/ODEvWlM5bE15OHdN/VFZsWlRNNC9aR1Jr/WmpGbE1UQTNPV1k1/L05tUTVaV0kzTmpn/MU9ESTEvTkM1cWNH/Yw"
          alt=""
        />
      </div>
      <div className="links flex gap-20 text-2xl font-medium">
        <NavLink className={(e) => `${e.isActive ? "border-b text-amber-300" : ""} hover:border-b transition-all ease-in-out duration-100 active:scale-90`} to="/">Home</NavLink>
        <NavLink className={(e) => `${e.isActive ? "border-b text-amber-300" : ""} hover:border-b transition-all ease-in-out duration-100 active:scale-90`} to="/recipes">Recipes</NavLink>
        <NavLink className={(e) => `${e.isActive ? "border-b text-amber-300" : ""} hover:border-b transition-all ease-in-out duration-100 active:scale-90`} to="/create">Create Recipe</NavLink>
      </div>
    </div>
  );
};

export default Nav;
