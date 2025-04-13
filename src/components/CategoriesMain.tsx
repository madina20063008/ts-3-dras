
// export const token = "67e1514e2ac3b760a778e38a";

// export const Categories = [
//     { name: "House Plants", key: "house-plants", count: -1 },
//     { name: "Potter Plants", key: "potter-plants", count: -24 },
//     { name: "Seeds", key: "seeds", count: 0 },
//     { name: "Small Plants", key: "small-plants", count: 11 },
//     { name: "Big Plants", key: "big-plants", count: 3 },
//     { name: "Succulents", key: "succulents", count: 10 },
//     { name: "Terrariums", key: "trerrariums", count: 10 },
//     { name: "Gardening", key: "gardening", count: 2 },
//     { name: "Accessories", key: "accessories", count: 13 },
// ];

// export const fetchProducts = async (category) => {
//     const resolvedCategory = category || "house-plants";
//     console.log("🔍 Fetching products for category:", resolvedCategory);

//     const url = `https://green-shop-backend.onrender.com/api/flower/category/${encodeURIComponent(resolvedCategory)}?access_token=${token}`;

//     try {
//         const response = await fetch(url, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         });

//         if (!response.ok) {
//             const errorText = await response.text();
//             console.error(`❌ Fetch error: ${response.status} - ${errorText}`);
//             throw new Error("Failed to fetch data");
//         }

//         const data = await response.json();
//         console.log("✅ API Response:", data);

//         return data.data || [];
//     } catch (error) {
//         console.error("❌ Error fetching products:", error.message);
//         return [];
//     }
// };

// const getProducts = async () => {
//     const products = await fetchProducts(); 
//     console.log("🌿 Products:", products);
// };

// getProducts();


export const token: string = "67e1514e2ac3b760a778e38a";

// Define a type for each category
export interface Category {
  name: string;
  key: string;
  count: number;
}

export const Categories: Category[] = [
  { name: "House Plants", key: "house-plants", count: -1 },
  { name: "Potter Plants", key: "potter-plants", count: -24 },
  { name: "Seeds", key: "seeds", count: 0 },
  { name: "Small Plants", key: "small-plants", count: 11 },
  { name: "Big Plants", key: "big-plants", count: 3 },
  { name: "Succulents", key: "succulents", count: 10 },
  { name: "Terrariums", key: "trerrariums", count: 10 },
  { name: "Gardening", key: "gardening", count: 2 },
  { name: "Accessories", key: "accessories", count: 13 },
];

// Define a type for the product
export interface Product {
  id: string;
  title: string;
  price: number;
  discount?: boolean;
  discount_price?: number;
  main_image?: string;
  [key: string]: any; 
}

// Function to fetch products
export const fetchProducts = async (category?: string): Promise<Product[]> => {
  const resolvedCategory = category || "house-plants";
  console.log("🔍 Fetching products for category:", resolvedCategory);

  const url = `https://green-shop-backend.onrender.com/api/flower/category/${encodeURIComponent(resolvedCategory)}?access_token=${token}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Fetch error: ${response.status} - ${errorText}`);
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log("✅ API Response:", data);

    return data.data || [];
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("❌ Error fetching products:", message);
    return [];
  }
};

// Function to test fetching
const getProducts = async (): Promise<void> => {
  const products = await fetchProducts(); 
  console.log("🌿 Products:", products);
};

getProducts();
