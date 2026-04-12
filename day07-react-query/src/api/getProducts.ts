import api from "../services/axios";
import type { searchParams } from "../types/product";


const getProducts = async (params: searchParams) => {
    const { data } = await api.get("/products", {
      params: {
        title: params.search,
        price: params.price,
        categoryId: params.category,
        price_min: params.minPrice,
        price_max: params.maxPrice,
      },
    });
    return data;
}

export default getProducts;