import { useParams } from "react-router";
import useProductDetails from "../hooks/useProductDetails";

function ProductDetails() {
    const { id } = useParams();
    const productId = Number(id);
  const { data, isLoading, error } = useProductDetails(productId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
      <div className="md:w-1/3 sm:w-2/3 w-full">
      <img src={data?.image} alt={data?.title} />
          <p>{data?.title}</p>
      <p>{data?.description}</p>
      <p>${data?.price}</p>
    </div>
  );
}

export default ProductDetails;
