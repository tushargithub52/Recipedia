import { createContext, useState } from "react";

export const recipes = createContext(null);

const RecipeContext = (prop) => {
  const [recipe, setrecipe] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D",
      title: "Biriyani",
      chef: "Tushar Rai",
      description:
        "Aromatic and flavorful rice dish cooked with spiced marinated meat and herbs, layered to perfection.",
      ingredients:
        "Basmati rice, Chicken, Yogurt, Onions, Tomatoes, Ginger garlic paste, Biryani masala, Green chilies, Mint leaves, Coriander leaves, Ghee, Saffron, Milk, Salt",
      instructions: `1. Marinate chicken with yogurt, spices, and ginger garlic paste for at least 1 hour.
2. Fry sliced onions until golden brown and set aside.
3. Cook basmati rice until 70% done and drain.
4. In a deep pot, layer marinated chicken, fried onions, mint, coriander, and parboiled rice.
5. Drizzle saffron-infused milk and ghee over the top.
6. Cover tightly and cook on low heat (dum) for 20-25 minutes.
7. Let it rest for 10 minutes before serving. Serve hot with raita or salan.`,
    },
  ]);

  return (
    <recipes.Provider value={{ recipe, setrecipe }}>
      {prop.children}
    </recipes.Provider>
  );
};

export default RecipeContext;
