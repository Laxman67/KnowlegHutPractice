import { rest } from "msw";
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get("/dishes", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "Scrambled Eggs",
          category: "Breakfast",
          price: 8.99,
          image:
            "https://www.bing.com/th?id=OIP._5Sb9-rPzRHwj6mJqZRWTAAAAA&w=146&h=120&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
          description:
            "Delicious scrambled eggs made with fresh eggs, butter, and a pinch of salt.",
        },
        {
          id: 2,
          title: "Caesar Salad",
          category: "Lunch",
          price: 10.49,
          image:
            "https://th.bing.com/th/id/OIP.5qJ0PIpb46gtzb8leuKQUAHaLH?rs=1&pid=ImgDetMain",
          description:
            "Classic Caesar salad with crisp romaine lettuce, homemade croutons, Parmesan cheese, and Caesar dressing.",
        },
        {
          id: 3,
          title: "Grilled Salmon",
          category: "Dinner",
          price: 16.99,
          image:
            "https://th.bing.com/th/id/OIP.PhaxHRvzkL8f-AiBNWASQQHaLH?pid=ImgDet&w=192&h=288&c=7",
          description:
            "Fresh Atlantic salmon fillet grilled to perfection, served with steamed vegetables and lemon butter sauce.",
        },
        {
          id: 4,
          title: "Pancakes",
          category: "Breakfast",
          price: 7.49,
          image: "https://eskipaper.com/images/pancakes-1.jpg",
          description: "Fluffy pancakes served with maple syrup and butter.",
        },
        {
          id: 5,
          title: "Chicken Caesar Wrap",
          category: "Lunch",
          price: 9.99,
          image:
            "https://th.bing.com/th/id/OIP.56uDvRUKJpjp4qynhmLznQHaHa?w=185&h=184&c=7&r=0&o=5&pid=1.7",
          description:
            "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a soft tortilla.",
        },
        {
          id: 6,
          title: "Steak Dinner",
          category: "Dinner",
          price: 22.99,
          image:
            "https://www.bing.com/th?id=OIP.OLOGZ9ZypNVFsQ1Hzmg-iQHaFp&w=146&h=120&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
          description:
            "Juicy sirloin steak cooked to your preference, served with mashed potatoes and sautéed spinach.",
        },
        {
          id: 7,
          title: "Omelette",
          category: "Breakfast",
          price: 9.49,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/FoodOmelete.jpg/1200px-FoodOmelete.jpg",
          description:
            "Custom-made omelette with your choice of fillings, served with toast.",
        },
        {
          id: 8,
          title: "Caprese Salad",
          category: "Lunch",
          price: 8.99,
          image:
            "https://th.bing.com/th/id/OIP.x5x4j74u7R1v989fMYxFCgHaJn?rs=1&pid=ImgDetMain",
          description:
            "Fresh tomatoes, mozzarella cheese, basil leaves, and balsamic glaze drizzle.",
        },
        {
          id: 9,
          title: "Shrimp Scampi",
          category: "Dinner",
          price: 18.99,
          image:
            "https://th.bing.com/th/id/OIP.MR6-iMArFS_gDybTn7dJIAHaJK?rs=1&pid=ImgDetMain",
          description:
            "Succulent shrimp sautéed with garlic, white wine, lemon juice, and parsley, served over linguine.",
        },
        {
          id: 10,
          title: "French Toast",
          category: "Breakfast",
          price: 6.99,
          image:
            "https://www.salads4lunch.com/wp-content/uploads/2020/05/Classic_French_Toast-4.jpg",
          description:
            "Thick slices of bread soaked in a mixture of eggs, milk, and cinnamon, then fried to golden perfection.",
        },
      ]),
    );
  }),
];
