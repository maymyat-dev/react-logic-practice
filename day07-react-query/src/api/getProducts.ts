import api from "../services/axios";
import type { Filters } from "../types/product";


const getProducts = async (params: Filters) => {
    const { data } = await api.get("/products", {
        params: {
            title: params.title,
            price_min: params.minPrice,
            price_max: params.maxPrice,
            category: params.category
        }
    });
    return data;
}

export default getProducts;