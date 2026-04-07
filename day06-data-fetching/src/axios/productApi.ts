import axios from "./axios";

export const getProducts = async () => {
  const { data } = await axios.get("/products");
  return data;
};

export const getProductById = async(id: number) => {
    const { data } = await axios.get(`/products/${id}`);
    return data;
}