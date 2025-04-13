
import React from 'react';
import { useAllDiscounts } from "../hooks/useAllDiscounts";

interface AllDiscountsProps {
  token: string;
}

interface DiscountData {
  title: string;
  discoount_up_to: number; 
  poster_image_url: string;
}

const AllDiscounts: React.FC<AllDiscountsProps> = ({ token }) => {
  const { data, isLoading, error } = useAllDiscounts(token);

  if (isLoading) return <p>Loading discount...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const discount: DiscountData | undefined = data?.data;

  if (!discount) {
    return <p>No discount available.</p>;
  }

  return (
    <div className="bg-green-200 mt-[20px] pt-[10px] p-[10px]">
      <h2 className="text-green-700 font-semibold text-[30px] text-center">
        {discount.title}
      </h2>
      <p className="text-center font-bold mt-[10px] text-[20px]">
        Up To: {discount.discoount_up_to}%
      </p>
      <img
        src={discount.poster_image_url}
        alt={discount.title}
        style={{ width: "300px" }}
      />
    </div>
  );
};

export default AllDiscounts;
