import { createContext, useState } from "react";

export const recipes = createContext(null);

const RecipeContext = (prop) => {
  const [recipe, setrecipe] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D",
      title: "Biriyani",
      chef: "Master Dhanesh",
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
    {
      id: "2",
      title: "Creamy Garlic Pasta",
      chef: "Sarthak Sharma",
      url: "https://www.allrecipes.com/thmb/ewwxtD_O9SxwFrbBVa7COYZsVME=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg",
      description:
        "A rich and creamy garlic pasta perfect for cozy dinners. Made with fresh cream, and a hint of spice.",
      ingredients:
        "Pasta, Olive oil, Garlic, Heavy cream, Parmesan cheese, Black pepper, Salt, Red chili flakes, Fresh parsley",
      instructions: `1. Boil pasta in salted water until al dente. Drain and set aside.
2. In a pan, heat olive oil and sauté minced garlic until fragrant.
3. Add heavy cream and stir until warm.
4. Add grated parmesan cheese, salt, pepper, and red chili flakes. Let it simmer.
5. Mix in the boiled pasta and toss to coat evenly.
6. Garnish with chopped parsley and serve hot.`,
    },
    {
      id: "3",
      title: "Margherita  Pizza",
      chef: "Harsh Sharma",
      url: "https://imgs.search.brave.com/J14I2zxFF2fqqx9N4HCfItGZjEzTLBzJrNg3X3T-IO8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vT2VwcmR0/Y0JvU1RVWXF1eUNq/MGpUVlBHa0NUMzVJ/RmVZWExRdjlDYkJB/dy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WVhKci9aWFJ3YkdG/alpTNWpZVzUyL1lT/NWpiMjB2VFVGRVpY/RXovYmtKYVVVRXZN/UzkwYUhWdC9ZbTVo/YVd4ZmJHRnlaMlV2/L1kyRnVkbUV0YUc5/MExYQnAvZW5waExY/TnNhV05sTFhkcC9k/R2d0YldWc2RHbHVa/eTFqL2FHVmxjMlV0/YjI0dFlTMTAvWVdK/c1pTMXBiaTF5WlhO/MC9ZWFZ5WVc1MExY/QnBlbnBoL0xXbDBZ/V3hwWVc0dFptOXYv/WkM0dFRVRkVaWEV6/YmtKYS9VVUV1YW5C/bg.jpeg",
      description:
        "A timeless Italian classic with a crispy crust, tangy tomato sauce, creamy mozzarella, and fresh basil leaves.",
      ingredients:
        "Pizza dough, Tomato sauce, Fresh mozzarella, Basil leaves, Olive oil, Salt",
      instructions:
        "1. Preheat oven to 475°F (245°C). 2. Spread tomato sauce evenly on rolled-out pizza dough. 3. Add slices of fresh mozzarella. 4. Bake for 10-12 minutes until crust is golden. 5. Garnish with fresh basil and drizzle olive oil before serving.",
    },
  ]);

  return (
    <recipes.Provider value={{ recipe, setrecipe }}>
      {prop.children}
    </recipes.Provider>
  );
};

export default RecipeContext;
