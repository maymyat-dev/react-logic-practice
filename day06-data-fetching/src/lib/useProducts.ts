import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./productApi"
import type { Product } from "../types/product"


const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["all-products"],
    queryFn: getProducts,
  })
}

export default useProducts