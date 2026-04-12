import { useQuery } from "@tanstack/react-query"
import getProducts from "../api/getProducts"
import type { Product, searchParams } from "../types/product.ts"

const useProduct = (params: searchParams) => {
  return useQuery<Product[]>({
    queryKey: ["all-products", params],
    queryFn: ()=> getProducts(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    retryDelay: 5000,
  });
};

export default useProduct