import api from "../services/axios";


const getProducts = async () => {
    const { data } = await api.get("/products");
    return data;
}

export default getProducts;