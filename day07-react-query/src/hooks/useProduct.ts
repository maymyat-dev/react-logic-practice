import { useQuery } from "@tanstack/react-query"
import getProducts from "../api/getProducts"
import type { Product } from "../types/product.ts"

const useProduct = () => {
    return useQuery<Product[]>({
        queryKey: ["all-products"],
        queryFn: getProducts,
    })
}

export default useProduct