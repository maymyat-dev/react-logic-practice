import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../axios/productApi";
import type { Product } from "../types/product";

const useProduct = () => {
  return useQuery<Product[]>({
    queryKey: ["all-products"],
    queryFn: getProducts,
  });
};

export default useProduct;
