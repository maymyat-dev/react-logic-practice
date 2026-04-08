import useProductDetails from '../hooks/useProductDetails';
import { useParams } from 'react-router';

function ProductDetails() {
    const {id} = useParams();
    const productId = Number(id)
    const { data, isLoading, error } = useProductDetails(productId);

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>{error.message}</div>;
  return (
      <div className='flex'>
          <div>
              <img src={data?.image} alt="" />
          </div>
          <div>
              <h1>{data?.title}</h1>
              <p>{data?.description}</p>
              <p>{data?.price}</p>
          </div>
          
    </div>
  )
}

export default ProductDetails