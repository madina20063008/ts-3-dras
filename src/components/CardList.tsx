
import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { fetchProducts } from "./CategoriesMain";

interface Product {
  id: number;
  title: string;
  price: number;
  discount?: boolean;
  discount_price?: number;
  main_image?: string;
}

interface ProductListProps {
  categoryType?: string;
  sortOption?: "cheapest" | "expensive";
}

const ProductList: React.FC<ProductListProps> = ({ categoryType, sortOption }) => {
  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ["products", categoryType || "house-plants"],
    queryFn: () => {
      console.log("🔥 Fetching products for category:", categoryType);
      return fetchProducts(categoryType || "house-plants");
    },
  });

  const sortedProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    return [...products].sort((a, b) => {
      if (sortOption === "cheapest") {
        return (a.price || 0) - (b.price || 0);
      } else if (sortOption === "expensive") {
        return (b.price || 0) - (a.price || 0);
      }
      return 0;
    });
  }, [products, sortOption]);

  return (
    <div className="p-4">
      {isLoading && <p className="text-gray-500 text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">Error: {(error as Error).message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => {
            const discountPercent =
              product.discount && product.discount_price
                ? Math.round(((product.discount_price - product.price) / product.discount_price) * 100)
                : 0;

            return (
              <div key={product.id} className="border rounded-lg p-3 shadow-lg w-[250px] bg-[#FBFBFB]">
                <div className="relative w-[230px] h-[250px] mx-auto group bg-[#FBFBFB]">
                  {discountPercent > 0 && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-sm px-2 py-1 rounded">
                      {discountPercent}% OFF
                    </span>
                  )}
                  <img
                    src={product.main_image || "placeholder.jpg"}
                    alt={product.title || "Unnamed"}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                      <ShoppingCart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                      <Search className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-900">{product.title || "Unnamed"}</h3>
                  <div className="flex space-x-2 mt-1">
                    <span className="text-green-600 font-bold text-lg">${product.price ?? "N/A"}</span>
                    {product.discount && product.discount_price && (
                      <span className="text-gray-400 text-lg line-through">${product.discount_price}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-3 text-center text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;


