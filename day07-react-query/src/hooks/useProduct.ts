import { useQuery } from "@tanstack/react-query"
import getProducts from "../api/getProducts"
import type { Product } from "../types/product.ts"

const useProduct = () => {
    return useQuery<Product[]>({
      queryKey: ["all-products"],
      queryFn: getProducts,
      staleTime: 1000 * 60 * 5,
      retry: 1,
      retryDelay: 5000,
    });
}

export default useProduct