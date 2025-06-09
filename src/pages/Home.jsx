import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[85%] flex flex-col justify-between text-gradient-to-l from-[#804dee] to-[rgba(60,51,80,0)]">
      <main className="px-4 py-8 flex-grow">
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4 text-white">
              Welcome to <span className="text-[#1eebf6e8]">Recipedia</span>
            </h1>
            <p className="text-lg mb-6 text-gray-200">
              Discover mouth-watering recipes or share your own culinary creations with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/recipes"
                className="bg-teal-700 text-white text-xl font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-110 transition"
              >
                Explore Recipes
              </Link>
              <Link
                to="/create"
                className="border-2 text-xl font-semibold text-white border-white bg-transparent px-6 py-3 rounded-lg hover:scale-110 transition"
              >
                Create Recipe
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1498579809087-ef1e558fd1da"
              alt="Hero Food"
              className="rounded-xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </section>
      </main>

      <footer className="text-center text-md text-[#EEEEEE] py-4">
        Made with <span className="text-red-500">♥</span> by Tushar
      </footer>
    </div>
  );
};

export default Home;
