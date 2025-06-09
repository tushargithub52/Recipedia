import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between p-4 px-6 md:px-20 h-[15%] shadow-md">
      {/* Logo */}
      <div className="logo rounded-full overflow-hidden h-16 w-16">
        <img
          src="https://imgs.search.brave.com/Hx8cuxRXTmR87KE8KVxBwW3jw_ITxGWRR8KzyAIEeOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vMHJlNEZD/N0x3ZlJxMWpFbmdx/Y2hQZzVaZGhIeUN4/bDRyM1JaVklTeER1/dy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZNamd3L2VE/STRNRjlTVXk4d01T/ODEvWlM5bE15OHdN/VFZsWlRNNC9aR1Jr/WmpGbE1UQTNPV1k1/L05tUTVaV0kzTmpn/MU9ESTEvTkM1cWNH/Yw"
          alt="Logo"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-12 text-xl font-medium">
        <NavLink
          className={(e) =>
            `${
              e.isActive ? "border-b text-amber-300" : ""
            } hover:border-b hover:scale-110 transition ease-in-out duration-100 active:scale-90`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            `${
              e.isActive ? "border-b text-amber-300" : ""
            } hover:border-b hover:scale-110 transition ease-in-out duration-100 active:scale-90`
          }
          to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          className={(e) =>
            `${
              e.isActive ? "border-b text-amber-300" : ""
            } hover:border-b hover:scale-110 transition ease-in-out duration-100 active:scale-90`
          }
          to="/create"
        >
          Create Recipe
        </NavLink>
        <NavLink
          className={(e) =>
            `${
              e.isActive ? "border-b text-amber-300" : ""
            } hover:border-b hover:scale-110 transition ease-in-out duration-100 active:scale-90`
          }
          to="/fav"
        >
          Favourites
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {menuOpen ? (
          <X
            className="w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <Menu
            className="w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full backdrop-blur-md bg-transparent flex flex-col items-center gap-6 py-6 shadow-md md:hidden text-lg font-medium z-50">
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={(e) =>
              `${e.isActive ? "text-amber-300" : ""} hover:text-amber-500`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={(e) =>
              `${e.isActive ? "text-amber-300" : ""} hover:text-amber-500`
            }
            to="/recipes"
          >
            Recipes
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={(e) =>
              `${e.isActive ? "text-amber-300" : ""} hover:text-amber-500`
            }
            to="/create"
          >
            Create Recipe
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={(e) =>
              `${e.isActive ? "text-amber-300" : ""} hover:text-amber-500`
            }
            to="/fav"
          >
            Favourites
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
