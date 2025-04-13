
// import React, { useState } from "react";
// import CategoriesComponent from "./Categories";  
// import CardNav from "./CardNav";                
// import ProductList from "./CardList";           

// const PlantPage = ({ isUserDetailPage }) => {

//   const [categoryType, setCategoryType] = useState("house-plants");
//   const [sortOption, setSortOption] = useState("default");

//   return (
//     <div className="flex w-[1100px] mx-auto mt-[50px] gap-[50px]">
//       {!isUserDetailPage && (
//         <CategoriesComponent
//           selectedCategory={categoryType}
//           setSelectedCategory={setCategoryType}
//         />
//       )}
//       <div className="flex flex-col gap-4 flex-1">
//         <CardNav
//           setCategoryType={setCategoryType}
//           setSortOption={setSortOption}
//           selectedCategory={categoryType}
//         />
//         <ProductList
//           categoryType={categoryType}
//           sortOption={sortOption}
//         />
//       </div>
//     </div>
//   );
// };

// export default PlantPage;


import React, { useState } from "react";
import CategoriesComponent from "./Categories";
import CardNav from "./CardNav";
import ProductList from "./CardList";

import type { SortOption } from "./types";


interface PlantPageProps {
  isUserDetailPage?: boolean;
}

const PlantPage: React.FC<PlantPageProps> = ({ isUserDetailPage = false }) => {
  const [categoryType, setCategoryType] = useState<string>("house-plants");
  const [sortOption, setSortOption] = useState<SortOption>("default");


  return (
    <div className="flex w-[1100px] mx-auto mt-[50px] gap-[50px]">
      {!isUserDetailPage && (
        <CategoriesComponent
          selectedCategory={categoryType}
          setSelectedCategory={setCategoryType}
        />
      )}
      <div className="flex flex-col gap-4 flex-1">
        <CardNav
          setCategoryType={setCategoryType}
          setSortOption={setSortOption}
          selectedCategory={categoryType}
        />
        <ProductList
          categoryType={categoryType}
          sortOption={sortOption}
        />
      </div>
    </div>
  );
};

export default PlantPage;
