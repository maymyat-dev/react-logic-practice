import api from "../services/axios"

const getProductById = async(id: number) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
}
export default getProductById