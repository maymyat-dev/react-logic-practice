import { useQuery } from "@tanstack/react-query"
import getProductById from "../api/getProductById"
import type { Product } from "../types/product";

const useProductDetails = (id: number) => {
    return useQuery<Product>({
      queryKey: ["product-details", id],
      queryFn: () => getProductById(id),
      staleTime: 1000 * 60 * 5,
        retry: 1,
      retryDelay: 5000,
    });
}

export default useProductDetails;