import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../axios/productApi";
import type { Product } from "../types/product";

const useProductDetails = (id: number) => {
    return useQuery<Product>({
      queryKey: ["product", id],
      queryFn: ()=> getProductById(id),
    });
}


export default useProductDetails