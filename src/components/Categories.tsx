
import React from "react";
import AllDiscounts from "./AllDiscounts";
import { Categories } from "./CategoriesMain";

export const token = "67e1514e2ac3b760a778e38a";

interface Category {
  name: string;
  key: string;
  count: number;
}

interface CategoriesComponentProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoriesComponent: React.FC<CategoriesComponentProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="p-4 bg-[#FBFBFB] shadow-md rounded-md w-64">
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <div className="flex flex-col space-y-2 font-semibold text-[18px]">
        {(Categories as Category[]).map(({ name, key, count }) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`flex justify-between items-center px-3 py-2 rounded-lg transition-all w-full text-left ${
              selectedCategory === key ? "text-green-600" : "text-gray-900"
            }`}
          >
            <span>{name}</span>
            <span className="text-[18px]">({count})</span>
          </button>
        ))}
      </div>

      <div className="mt-[20px]">
        <h3 className="text-lg font-semibold">Price Range</h3>
        <div className="relative mt-5">
          <input
            type="range"
            min="0"
            max="1000"
            className="absolute w-full h-1 bg-green-300 rounded-lg appearance-none pointer-events-none"
          />
          <input
            type="range"
            min="0"
            max="1000"
            className="absolute w-full h-1 bg-green-600 rounded-lg appearance-none pointer-events-none"
          />
        </div>
        <p className="mt-[40px] text-[16px] text-gray-700">
          Price: <span className="text-green-600 font-bold">$0 - $1000</span>
        </p>
        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">Filter</button>

        <AllDiscounts token={token} />
      </div>
    </div>
  );
};

export default CategoriesComponent;

