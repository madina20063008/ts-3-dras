import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllDiscounts = async (token) => {
  const { data } = await axios.get("https://green-shop-backend.onrender.com/api/features/discount", {
    params: { access_token: token },
  });
  return data; // Assumes data is an array of discounts
};

export const useAllDiscounts = (token) => {
  return useQuery({
    queryKey: ["allDiscounts", token],
    queryFn: () => fetchAllDiscounts(token),
    enabled: !!token, // Fetch only if token exists
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
